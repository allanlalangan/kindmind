import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
interface DialogModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

export default function DialogModal({
  children,
  isOpen,
  handleClose,
}: DialogModalProps) {
  const today = new Date();
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 flex items-start justify-center overflow-y-auto p-2"
        onClose={() => handleClose()}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Backdrop
            as="div"
            className="fixed inset-0 z-10 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          {
            <Dialog.Panel
              as="section"
              className="grid w-full transform grid-cols-12 gap-2 rounded bg-light-300 p-2 shadow-xl transition-all dark:bg-base-900 sm:w-full sm:max-w-lg lg:p-4"
            >
              <div className="col-span-11 flex items-center gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M4 2v6H2V2h2M2 22v-6h2v6H2m3-10c0 1.11-.89 2-2 2a2 2 0 1 1 2-2m19-6v12c0 1.11-.89 2-2 2H10a2 2 0 0 1-2-2v-4l-2-2l2-2V6a2 2 0 0 1 2-2h12c1.11 0 2 .89 2 2m-4 5h-3V8h-2v3h-3v2h3v3h2v-3h3v-2Z"
                    />
                  </svg>
                </span>
                <p>
                  {`${today.toDateString()} `}
                  {today.toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </p>
              </div>
              <button
                title="Close"
                className="col-span-1 flex items-center justify-center"
                onClick={handleClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                  />
                </svg>
              </button>
              {children}
            </Dialog.Panel>
          }
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
