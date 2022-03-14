import { useEffect, useState } from "react";
import Input from "../Inputs/Input";
import NavBar from "../Navbar/Navbar";
import Select from "../Inputs/Select";

const banks = [
  { name: "-Select bank-", icon: "" },
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

const AddAcountModal = ({ setShowModal, animation, styles }) => {
  
  const [cardName, setCardName] = useState("");
  const [bankName, setBankName] = useState("-Select bank-");
  const [showCompletePage, setShowCompletePage] = useState(false);
  const [selected, setSelected] = useState(banks[0]);

  useEffect(() => {
    setBankName(selected.name);
  }, [selected]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (cardName.trim() !== "" && bankName !== "-Select bank-") {
      localStorage.setItem(
        "bankInformation",
        JSON.stringify({ cardName: cardName, bankName: bankName })
      );
      setShowCompletePage(true);
      setTimeout(() => document.location.reload(), 2000);
    }
  };

  return (
    <>
      <NavBar
        label="Add acount"
        styles={`${() =>
          setTimeout(
            () => "bg-Violet-100",
            700
          )} text-Light-100 z-50 ${styles}`}
        event={() => setShowModal(false)}
      />

      <div
        className={`transition-all duration-500 bg-Violet-100 w-full h-full fixed px-3 py-5 flex justify-center ${animation}`}
      >
        <div className="w-full h-1/2 absolute bottom-0">
          <div className="h-full w-full pl-3 flex flex-col items-start leading-[50px]">
            <h3 className="text-s text-Violet-20 ml-2">Balance</h3>
            <h1 className="text-5xl text-Light-100 h-160">$00.0</h1>
          </div>
          <div
            className={`transition-all duration-700 w-full rounded-[40px] bg-Light-100 absolute -bottom-20 pt-5 px-4 h-[300px]`}
          >
            <form
              onSubmit={submitHandler}
              autoComplete="off"
              className="w-full h-full flex flex-col items-center"
            >
              <Input value={cardName} changeEvent={setCardName} placeholder="Your account name"/>
              <Select banks={banks} setBankName={setBankName} selected={selected} setSelected={setSelected}/>
              <button
                type="submit"
                onClick={submitHandler}
                className={`bg-Violet-100 text-Light-80 w-full md:w-[720px] py-3 text-lg rounded-2xl mt-3`}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-full bg-Light-100 flex flex-col justify-center items-center z-50 fixed transition-all duration-500 top-0 ${
          showCompletePage ? "scale-100" : "scale-0"
        }`}
      >
        <div className="bg-Green-100 rounded-full text-Light-100 p-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-h-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-2xl text-Dark-75 font-bold mt-4">You are set!</h1>
        <h3 className="text-s text-Dark-50 mt-4">Page reload in 2 seconde</h3>
      </div>
    </>
  );
};

export default AddAcountModal;
