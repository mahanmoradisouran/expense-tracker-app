import NavBar from "../Navbar/Navbar";
import Table from "../../assets/images/table.svg";
import { useState } from "react";
import AddAcountModal from "../Modals/AddAcountModal";
import Input from "../Inputs/Input";

const GetNameForm = ({ setSlide }) => {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    if (name.trim() !== "") {
      localStorage.setItem("name", name);
      setShowModal(true);
    }
  };

  return (
    <>
      {showModal ? null : (
        <NavBar
          label={"Login"}
          event={() => setSlide(1)}
          styles="text-Dark-50 bg-Light-100"
        />
      )}
      <form
        autoComplete="off"
        className="w-full py-16 px-3 md:pt-20 flex flex-col items-center"
        onSubmit={submitHandler}
      >
        <img src={Table} alt="Table img" className="mx-auto" />
        <p className="my-4 text-Dark-50 text-lg">
          Please enter your name to continue and better user experience. This
          name will be set as your profile id.
        </p>
        <Input value={name} changeEvent={setName} />
        <button
          type="submit"
          onClick={submitHandler}
          className={`${
            name.trim()
              ? "bg-Violet-100 text-Light-80"
              : "bg-Light-40 text-Dark-25 cursor-not-allowed"
          } w-full md:w-[720px] py-3 text-lg rounded-2xl mt-3`}
        >
          Submit
        </button>
      </form>
      <AddAcountModal
        animation={showModal ? `top-0` : `top-[500%]`}
        setShowModal={setShowModal}
        styles={`${showModal ? "block" : "hidden"}`}
      />
    </>
  );
};

export default GetNameForm;
