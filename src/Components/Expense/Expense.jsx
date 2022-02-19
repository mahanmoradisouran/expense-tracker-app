import { useContext, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../Navbar/Navbar";
import { Content } from "../ContentProvider/ConetntProvider";
import Input from "../Inputs/Input";

const Expense = () => {
  const content = useContext(Content);
  const [expenseValue, setExpenseValue] = useState("");

  const height = window.innerHeight;

  const submitHandler = (event) => {
    event.preventDefault();
    
  };

  return (
    <>
      <NavBar
        label="Expense"
        event={() => content.dispatch("Home")}
        styles={`text-Light-100 z-50 flex flex-col items-center text-center py-5 text-Light-100 w-full justify-center`}
      />
      <motion.div
        transition={{ duration: 0.5 }}
        animate={{ y: [height , 0] }}

        className="bg-Red-100 w-full h-full fixed px-3 py-5 flex justify-center"
      >
        <div className="w-full h-1/2 absolute bottom-0">
          <div className="h-full w-full pl-3 flex flex-col items-start leading-[50px]">
            <h3 className="text-s text-Red-20 ml-2">Balance</h3>
            <h1 className="text-8xl text-Light-100 h-160">${expenseValue}</h1>
          </div>
          <div
            className={`w-full rounded-[40px] bg-Light-100 absolute -bottom-20 pt-5 px-4 h-[300px]`}
          >
            <form
              onSubmit={submitHandler}
              autoComplete="off"
              className="w-full h-full flex flex-col items-center"
            >
              <Input
                value={expenseValue}
                changeEvent={setExpenseValue}
                NumType={true}
              />
              <button
                type="submit"
                onClick={submitHandler}
                className={`bg-Violet-100 text-Light-80 w-full md:w-[720px] py-3 text-lg rounded-2xl mt-3`}
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Expense;
