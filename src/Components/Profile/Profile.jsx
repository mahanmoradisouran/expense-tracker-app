import { useState } from "react";
import EditeInformationForm from "../EditeInformationForm/EditeInformationForm";

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

const Profile = () => {
  const [showEditeForm, setShowEditeForm] = useState(false);
  const Name = localStorage.getItem("name");
  const BankInformtion = JSON.parse(localStorage.getItem("bankInformation"));

  return (
    <div className="w-11/12 mx-auto pt-5">
      {showEditeForm ? (
        <EditeInformationForm setShowEditeForm={setShowEditeForm}/>
      ) : (
        <>
          <section className="flex justify-center items-center flex-col">
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
            <div className="flex items-center w-full rounded-lg mt-5 mb-2 p-4 bg-Light-60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-4 text-Light-100 bg-Violet-100 rounded-full ring-4 ring-Violet-100"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <p>{Name}</p>
            </div>
            <div className="flex items-center w-full rounded-lg mt-5 mb-2 p-4 bg-Light-60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-4 text-Light-100 bg-Violet-100 rounded-full ring-4 ring-Violet-100"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path
                  fillRule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clipRule="evenodd"
                />
              </svg>
              <p>{BankInformtion.cardName}</p>
            </div>
            <div className="flex items-center w-full rounded-lg mt-5 mb-2 p-4 bg-Light-60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-4 text-Light-100 bg-Violet-100 rounded-full ring-4 ring-Violet-100"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <p>{BankInformtion.bankName}</p>
            </div>
            <button
              onClick={() => setShowEditeForm(true)}
              className="text-Violet-100 text-lg mt-5 flex items-center"
            >
              Edite
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </section>
          <h2 className="text-Violet-100 text-center border-t border-Light-20 mt-5 pt-5">
            about
          </h2>
          <section className="text-Dark-50 text-xs text-center mt-5">
            <h3> made by : mahan moradi souran</h3>
            <h3> version : 1</h3>
            <h3> email : mahan241185@gmail.com</h3>
            <h3> instagram : @ka_boom993</h3>
          </section>
        </>
      )}
    </div>
  );
};

export default Profile;
