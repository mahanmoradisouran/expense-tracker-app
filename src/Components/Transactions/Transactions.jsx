import { useContext } from "react";
import { Content } from "../ContentProvider/ConetntProvider";
import NavBar from "../Navbar/Navbar";
import Trade from "../Trade/Trade";

const Transactions = ({
  showNavbar,
  trades,
  isOpenTransactionsList,
  style,
}) => {
  const content = useContext(Content);

  const { openTransactionsList, setOpenTransactionsList } =
    isOpenTransactionsList;

  return (
    <>
      {showNavbar && (
        <NavBar label="Transactions" event={content.dispatch("Home")} />
      )}
      <div
        className={`bg-[#f5f5f5] rounded-3xl h-full w-full absolute overflow-y-scroll pb-20 ${style}`}
      >
        <span
          onClick={() => setOpenTransactionsList(!openTransactionsList)}
          className="h-1.5 w-8 rounded-sm bg-Violet-100 block mx-auto mt-3"
        ></span>
        <div className="w-11/12 mx-auto pt-3">
          <h2 className="text-Dark-50 text-base mb-1">Transaction history</h2>
          <div className="flex flex-col items-center pt-2">
            {trades.trades.length === 0 ? (
              <p className="text-Dark-25 text-sm mt-10">
                Your transaction history is empty{" "}
                <span
                  className="text-Violet-60"
                  onClick={() => content.dispatch("Add")}
                >
                  Add now.
                </span>
              </p>
            ) : (
              trades.trades.map((trade) => (
                <Trade key={trade.time} trade={trade} setOpenTransactionsList={setOpenTransactionsList} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
