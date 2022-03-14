import { useState } from "react";
import Input from "../Inputs/Input";
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

const EditeInformationForm = ({ setShowEditeForm }) => {
  const Name = localStorage.getItem("name");
  const Account = JSON.parse(localStorage.getItem("bankInformation")).cardName;
  const Bank = JSON.parse(localStorage.getItem("bankInformation")).bankName;

  const [name, setName] = useState(Name);
  const [account, setAccount] = useState(Account);

  const [cardName, setCardName] = useState("");
  const [bankName, setBankName] = useState("-Select bank-");
  const [showCompletePage, setShowCompletePage] = useState(false);
  const [selected, setSelected] = useState(
    banks.find((bank) => bank.name === Bank)
  );

  const submitHandler = (event) => {
    event.preventDefault();
    localStorage.setItem("name", name);
    localStorage.setItem(
      "bankInformation",
      JSON.stringify({ cardName: account, bankName: selected.name })
    );
    setShowEditeForm(false);
  };

  const addStyles = () => {
    if (name || account) {
      if ((name !== "") & (account !== "")) {
        if (name !== Name || account !== Account || selected.name !== Bank) {
          return "bg-Violet-100 text-Light-100";
        } else return "bg-Light-20 text-Dark-75 pointer-events-none";
      } else return "bg-Light-20 text-Dark-75 pointer-events-none";
    } else return "bg-Light-20 text-Dark-75 pointer-events-none";
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col items-center">
      <div className="rounded-full bg-Light-20 p-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-11 w-11 text-Dark-25"
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
      <label className="text-left w-11/12 mb-1 mt-2 ">Name :</label>
      <Input placeholder="Enter your name" value={name} changeEvent={setName} />
      <label className="text-left w-11/12 mb-1 mt-2">Account Name :</label>
      <Input
        placeholder="Enter your accountName"
        value={account}
        changeEvent={setAccount}
      />
      <label className="text-left w-11/12 mb-1 mt-2">bank name :</label>
      <Select
        banks={banks}
        setBankName={setBankName}
        selected={selected}
        setSelected={setSelected}
      />
      <button className={`rounded-lg px-3 py-1 mt-3 ${addStyles()}`}>
        Chnage
      </button>
    </form>
  );
};

export default EditeInformationForm;
