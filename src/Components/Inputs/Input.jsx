const Input = ({ value, changeEvent, styles, placeholder, type }) => {
  return (
    <input
      type={type}
      className={`md:w-[720px] w-full outline-none rounded-2xl pl-5 py-3 border border-Light-20 focus:border-Violet-100 text-Dark-100 ${styles}`}
      placeholder={placeholder}
      value={value}
      onChange={(e) => changeEvent(e.target.value)}
    />
  );
};

export default Input;
