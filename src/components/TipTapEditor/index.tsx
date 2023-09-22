import TipTapMenuBar from "../TipTapMenuBar";

import styles from "./styles.module.css";
import { type Editor, EditorContent } from "@tiptap/react";
import { useEffect } from "react";

interface TipTapEditorProps {
  editor: Editor | null;
  refetchEntry?: () => void;
  content?: string;
  tempContent?: string;
  setTempContent?: (value: string) => void;
  isEditable?: boolean;
  setIsEditable?: (value: boolean) => void;
  titleInputValue?: string;
  setTitleInputValue: (value: string) => void;
}

export default function TipTapEditor({
  editor,
  isEditable,
  titleInputValue,
  setTitleInputValue,
}: TipTapEditorProps) {
  useEffect(() => {
    editor?.setEditable(Boolean(isEditable));
  }, [editor, isEditable]);
  return (
    <>
      <section className="">
        {isEditable && (
          <>
            <input
              onChange={(e) => setTitleInputValue(e.target.value)}
              value={titleInputValue}
              className="mb-2 w-full rounded-t bg-transparent font-dm text-4xl outline-none"
              placeholder="Entry Title..."
              type="text"
              name="title"
              id="title"
            />

            <TipTapMenuBar editor={editor} />
          </>
        )}

        <EditorContent className={styles.ProseMirror} editor={editor} />
      </section>
    </>
  );
}
