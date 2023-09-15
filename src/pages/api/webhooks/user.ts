import type { IncomingHttpHeaders } from "http";
import type { NextApiRequest, NextApiResponse } from "next";
import { Webhook, type WebhookRequiredHeaders } from "svix";
import type { WebhookEvent } from "@clerk/nextjs/server";
import { prisma } from "~/server/db";
import { headers } from "next/headers";

const webhookSecret: string = process.env.WEBHOOK_SECRET!;

type NextApiRequestWithSvixRequiredHeaders = NextApiRequest & {
  headers: IncomingHttpHeaders & WebhookRequiredHeaders;
};

export default async function handler(
  req: NextApiRequestWithSvixRequiredHeaders,
  res: NextApiResponse
) {
  const payload = JSON.stringify(await req.body);

  const headersList = headers();
  const svix = {
    "svix-id": headersList.get("svix-id"),
    "svix-timestamp": headersList.get("svix-timestamp"),
    "svix-signature": headersList.get("svix-signature"),
  };

  // const headers = req.headers;
  // Create a new Webhook instance with your webhook secret
  const wh = new Webhook(webhookSecret);

  let evt: WebhookEvent;
  try {
    // Verify the webhook payload and headers
    evt = (await wh.verify(
      payload,
      svix as IncomingHttpHeaders & WebhookRequiredHeaders
    )) as WebhookEvent;
  } catch (error) {
    // If the verification fails, return a 400 error
    return res.status(400).json({ error, payload, headers });
  }

  const eventType = evt.type;
  if (eventType === "user.created" || eventType === "user.updated") {
    const { id } = evt.data;
    console.log(`User ${id} was ${eventType}`);
    await prisma.user.upsert({
      where: {
        clerkId: id,
      },
      update: {},
      create: {
        clerkId: id,
      },
    });
    res.status(200).json({});
  }

  if (eventType === "user.deleted") {
    const { id } = evt.data;
    await prisma.user.delete({
      where: {
        clerkId: id,
      },
    });
    res.status(200).json({});
  }
}
