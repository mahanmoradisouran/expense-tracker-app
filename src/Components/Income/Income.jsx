import { useContext, useState } from "react";
import { Trades } from "../ExpenseTrackerApp/ExpenseTrackerApp";
import NavBar from "../Navbar/Navbar";
import Input from "../Inputs/Input";
import moment from "moment";

const Income = ({ setTransactionPage }) => {
  const transaction = useContext(Trades);
  const { trades, setTrades } = transaction.trade;
  const { notification, setNotification } = transaction.notifications;

  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (value > 0) {
      const Data = {
        transaction: parseInt(value),
        category: "",
        time: moment(),
        description: description,
      };

      setTrades([...trades, Data]);
      setTransactionPage("");
      setNotification([
        ...notification,
        {
          title: (
            <>
              New <span className={`${value > 0 ? "text-Violet-100" : "text-Red-100"}`}>transaction {value}</span> aded! check it in Home page transactionlist
            </>
          ),
          time: Data.time,
        },
      ]);
    }
  };

  return (
    <>
      <>
        <div className="bg-Violet-100 w-full h-full text-Light-100">
          <NavBar label="Income" event={() => setTransactionPage("")} />
          <div className="w-full h-full py-16 mx-auto flex flex-col justify-end">
            <h3 className="text-Violet-20 ml-4">How much</h3>
            <h1 className="text-5xl ml-4">$ {value ? value : 0}</h1>
            <form
              onSubmit={submitHandler}
              className="relative -bottom-5 bg-Light-100 p-5 rounded-t-3xl"
            >
              <Input
                placeholder="Income value"
                type="number"
                value={value}
                changeEvent={setValue}
              />
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="Enter discription.This field is not required"
                rows={3}
                className="resize-none md:w-[720px] w-full outline-none rounded-2xl mt-2 px-5 py-3 border border-Light-20 focus:border-Violet-100 text-Dark-100"
              />
              <button
                type="submit"
                onClick={submitHandler}
                className={` ${
                  value
                    ? "bg-Violet-100 text-Light-80"
                    : "bg-Light-40 text-Dark-25 cursor-not-allowed"
                }
              w-full md:w-[720px] py-3 text-lg rounded-2xl mt-3`}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    </>
  );
};

export default Income;
