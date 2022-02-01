import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const Modal = ({ isOpen, setIsOpen }) => {
  const [name, setName] = useState("");

  const validateFormHandler = (event) => {
      event.preventDefault();
    if (name.trim() !== "") {
      localStorage.setItem("name", name);
      setIsOpen(false);
      document.location.reload()
    }else toast.error("Please enter your name.")
  };

  return (
    <>
        <Toaster />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <motion.div
            animate={{ y: [-500, 100, 0] }}
            transition={{ duration: 1 }}
            className="min-h-screen px-4 text-center"
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
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Please enter your name
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    For continuation and better user experience, please enter
                    your name in the field below
                  </p>
                </div>

                <form onSubmit={validateFormHandler} className="mt-2">
                  <input
                    type="text"
                    className="border-2 border-gray-700 py-2 px-5 rounded-lg w-full bg-white outline-none"
                    placeholder="Enter your name. e.g Saheb"
                    onChange={(e) => setName(e.target.value)}
                  />
                </form>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={validateFormHandler}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Transition.Child>
          </motion.div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
