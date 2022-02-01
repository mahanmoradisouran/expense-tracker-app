import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./GetNameScreen.module.css";

const GetNameScreen = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden w-full">
      <div className="mx-auto md:w-10/12 w-11/12 h-full bg-white flex items-center flex-col pt-10">
        <motion.div
          className="relative mt-3 md:w-auto w-full"
          animate={{ x: [-1000, 300, 0] }}
          transition={{ duration: 1.5 }}
        >
          <div
            className={`rounded-3xl md:w-[35rem] md:h-[19rem] w-full h-[10rem] md:py-10 md:px-6 py-5 px-3 flex items-center flex-col ${styles.bankCard}`}
          >
            <h1 className="text-white md:text-lg text-base">Your balance</h1>
            <p
              className={`text-white md:text-6xl text-4xl text-center font-semibold md:mt-5 mt-1 ${styles.totalBalance}`}
            >
               $244.00
            </p>
            <div className="w-10/12 flex justify-between absolute md:bottom-10 bottom-3">
              <div className="flex items-center">
                <button
                  className={`text-green-400 w-10 h-10 flex items-center justify-center rounded-full ${styles.shadow}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 17l-4 4m0 0l-4-4m4 4V3"
                    />
                  </svg>
                </button>
                <div className="ml-2 text-white md:text-lg text-base">
                  <p>Income</p>
                  <span>250.00</span>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  className={`text-rose-400 w-10 h-10 flex items-center justify-center rounded-full ${styles.shadow}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7l4-4m0 0l4 4m-4-4v18"
                    />
                  </svg>
                </button>
                <div className="ml-2 text-white md:text-lg text-base">
                  <p>Expense</p>
                  <span>6.00</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.h1
          animate={{ x: [-1000, 340, 0] }}
          transition={{ duration: 1.7 }}
          className="md:text-3xl text-xl md:px-0 px-2 font-semibold mt-5 text-gray-600 md:w-8/12 w-full"
        >
          Expense tracker app. you can track all your income and expense and see
          your consequent.
        </motion.h1>
        <motion.button
          onClick={() => setIsOpen(true)}
          animate={{ x: [-1000, 340, 0] }}
          transition={{ duration: 2 }}
          className={`${styles.bankCard} text-white text-lg rounded-3xl mt-5 text-left py-5 px-6 md:w-auto w-full text-center outline-none`}
        >
          Try it. click here to continues
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-1 inline"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </motion.button>
        {isOpen && (
          <div className="w-full h-full fixed top-0 right-0 bg-black bg-opacity-50">
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        )}
      </div>
    </div>
  );
};

export default GetNameScreen;
