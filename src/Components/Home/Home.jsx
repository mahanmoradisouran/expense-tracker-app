import { useState } from "react";
import Transactions from "../Transactions/Transactions";
import "iransbankicon";
import { useContext } from "react";
import { Content } from "../ContentProvider/ConetntProvider";
import NotificationList from "../NotificationList/NotificationList";

const banks = [
  { name: "صادرات ایران", icon: "bsi" },
  { name: "ملت", icon: "mellat" },
  { name: "تجارت", icon: "tejarat" },
  { name: "ملی ایران", icon: "bmi" },
  { name: "سپه", icon: "sepah" },
  { name: "کشاورزی", icon: "bki" },
  { name: "پارسیان", icon: "parsian" },
  { name: "مسکن", icon: "maskan" },
  { name: "رفاه کارگران", icon: "rb" },
  { name: "اقتصادنوین", icon: "en" },
  { name: "انصار", icon: "ansar" },
  { name: "پاسارگاد", icon: "bpi" },
  { name: "سامان", icon: "sb" },
  { name: "سینا", icon: "sina" },
  { name: "پست بانک ایران", icon: "post" },
  { name: "قوامین", icon: "ghbi" },
  { name: "توسعه تعاون", icon: "tt" },
  { name: "شهر", icon: "shahr" },
  { name: "آینده", icon: "ba" },
  { name: "سرمایه", icon: "sarmayeh" },
  { name: "دی", icon: "day" },
  { name: "حکمت ایرانیان", icon: "hi" },
  { name: "ایران زمین", icon: "iz" },
  { name: "کار آفرین", icon: "kar" },
  { name: "گردشگری", icon: "tourism" },
  { name: "صنعت و معدن", icon: "bim" },
  { name: "توسعه صادرات ایران", icon: "edbi" },
  { name: "خاورمیانه", icon: "me" },
  { name: "مشترک ایران و ونزولا", icon: "ivbb" },
];

const Home = ({ incoms, expenses, notifications, trades }) => {
  const [openTransactionsList, setOpenTransactionsList] = useState(false);
  const [showNotification, setShowNotification] = useState({
    isSeeNotifications: false,
    show: false,
  });

  // destructuring props obj
  const { income } = incoms;
  const { expense } = expenses;
  const notification = notifications.notification;
  const setNotification = notifications.setNotification;

  // localStorage values
  const name = localStorage.getItem("name");
  const bankCard = JSON.parse(localStorage.getItem("bankInformation"));

  // contex
  const content = useContext(Content);

  const showBalance = () => {
    const balance = income + expense;

    if (income + expense > 0) {
      return `$${balance}`;
    } else {
      return `-$${balance * -1}`;
    }
  };

  const openNotifications = () => {
    setShowNotification({ ...showNotification, show: true });
  };

  return (
    <div className="w-full h-full">
      <div className="relative w-11/12 h-1/2 mx-auto">
        <header className="w-full flex items-center justify-between py-4">
          <div className="flex items-center">
            <div
              onClick={() => content.dispatch("Profile")}
              className="pb-1 rounded-full w-10 h-10 bg-Light-20 text-Dark-25 flex justify-center items-center shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-xs ml-2 truncate text-Dark-50 max-w-[100px]">
              {name}
            </h2>
          </div>
          <div className="relative">
            {notification && showNotification.isSeeNotifications === false ? (
              <span className="p-1 absolute -bottom-4 -left-3 bg-Red-100 rounded-md text-[8px] text-Light-100 flex justify-center items-center">
                new
              </span>
            ) : null}
            <svg
              onClick={openNotifications}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-Violet-100 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </div>
        </header>
        {showNotification.show ? (
          <NotificationList
            showNotification={showNotification}
            setShowNotification={setShowNotification}
            notification={notification}
            setNotification={setNotification}
          />
        ) : (
          <section className="w-full mt-3">
            <div className="relative card w-full h-[184px] shadow-lg rounded-3xl p-1 px-2 pt-0">
              <div className="absolute top-1.5 right-2">
                <i
                  className={`bank64 rounded-full scale-[0.7] ${
                    banks.filter((bank) => bank.name === bankCard.bankName)[0]
                      .icon
                  }`}
                ></i>
              </div>
              <div className="text-justify absolute left-4 top-5 text-Light-100">
                <h3 className="text-Violet-40">Account balance</h3>
                <h1 className="text-xl">{showBalance()}</h1>
              </div>
              <div className="text-base text-Violet-20 absolute bottom-6 left-6">
                {bankCard.cardName}
              </div>
              <div
                className={`${
                  income + expense >= 1000 ? "flex-col" : null
                } text-xs text-Violet-20 absolute bottom-3.5 right-3 flex`}
              >
                <p
                  className={`flex  items-center bg-[#EEE5FF50] rounded-md pl-1 pr-2 py-0.5 justify-center`}
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
                      d="M17 13l-5 5m0 0l-5-5m5 5V6"
                    />
                  </svg>
                  ${income}
                </p>
                <p className="flex items-center bg-[#EEE5FF50] rounded-md pl-1 pr-2 py-0.5 ml-0.5 justify-center">
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
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>
                  ${expense}
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
      <div
        className={`w-full absolute pt-3 transition-all duration-700 ${
          openTransactionsList ? "h-full -top-3" : "h-1/2"
        }`}
      >
        <section>
          <Transactions
            style={openTransactionsList ? "rounded-none" : null}
            trades={trades}
            isOpenTransactionsList={{
              openTransactionsList,
              setOpenTransactionsList,
            }}
          />
        </section>
      </div>
    </div>
  );
};

export default Home;
