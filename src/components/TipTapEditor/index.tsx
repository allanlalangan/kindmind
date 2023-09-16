import TipTapMenuBar from "../TipTapMenuBar";

import styles from "./styles.module.css";
import { type Editor, EditorContent } from "@tiptap/react";
import { useEffect } from "react";

interface TipTapEditorProps {
  editor: Editor | null;
  refetchEntry?: () => void;
  modalIsOpen: boolean;
  setModalIsOpen: (value: boolean) => void;
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
      {isEditable && (
        <section className="pb-2 md:pt-2">
          <input
            onChange={(e) => setTitleInputValue(e.target.value)}
            value={titleInputValue}
            className="mb-2 w-full rounded-t bg-transparent font-serif text-4xl text-primary-500 outline-none placeholder:text-primary-500/50 dark:text-tertiary-300 dark:placeholder:text-tertiary-200/50"
            placeholder="Entry Title..."
            type="text"
            name="title"
            id="title"
          />

          <TipTapMenuBar editor={editor} />
        </section>
      )}

      <EditorContent className={styles.ProseMirror} editor={editor} />
    </>
  );
}
