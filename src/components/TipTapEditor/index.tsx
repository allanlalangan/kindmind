import TipTapMenuBar from "../TipTapMenuBar";

import styles from "./styles.module.css";
import { type Editor, EditorContent } from "@tiptap/react";

interface TipTapEditorProps {
  isNewEntry?: boolean;
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
  isNewEntry,
  editor,
  titleInputValue,
  setTitleInputValue,
}: TipTapEditorProps) {
  return (
    <>
      {editor?.isEditable && (
        <>
          <input
            onChange={(e) => setTitleInputValue(e.target.value)}
            value={titleInputValue}
            className="mb-2 w-full rounded-t bg-transparent py-2 font-dm text-4xl focus:outline-light-900 focus:dark:outline-base-200"
            placeholder="New entry..."
            type="text"
            name="title"
            id="title"
          />
        </>
      )}

      <div
        className={`${
          !editor?.isEditable
            ? "translate-y-0"
            : isNewEntry
            ? "translate-y-0"
            : "translate-y-full"
        } transition`}
      >
        <div
          className={`${
            !editor?.isEditable
              ? "translate-y-0"
              : isNewEntry
              ? "translate-y-0"
              : "-translate-y-full"
          } relative flex flex-wrap items-center justify-between rounded-t border-x border-t border-light-500 bg-light-200 p-2 transition dark:border-base-600 dark:bg-base-800`}
        >
          <TipTapMenuBar editor={editor} />
        </div>
        <EditorContent
          className={`${!isNewEntry && "absolute top-0 w-full"} ${
            styles.ProseMirror
          }`}
          editor={editor}
        />
      </div>
    </>
  );
}
