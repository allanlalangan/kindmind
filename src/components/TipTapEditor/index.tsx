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
        <section className="-mx-4 pb-2 md:pt-2">
          <div className="">
            <input
              onChange={(e) => setTitleInputValue(e.target.value)}
              value={titleInputValue}
              className="w-full rounded-t bg-transparent p-4 font-serif text-4xl outline-none dark:text-primary-500 dark:placeholder:text-primary-500/50"
              placeholder="Entry Title..."
              type="text"
              name="title"
              id="title"
            />

            <TipTapMenuBar editor={editor} />
          </div>
        </section>
      )}

      <EditorContent className={styles.ProseMirror} editor={editor} />
    </>
  );
}
