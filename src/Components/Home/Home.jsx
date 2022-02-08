const Home = () => {
  return (
    <>
      <div>
        <header className="w-full h-[300px] absolute -top-10 bg-gradient-to-b from-Yellow-20 to-light-100 rounded-[40px] pt-10">
          <div className="w-full flex justify-between items-center px-4 py-3">
            <div className="p-3 rounded-full ring-1 bg-[#cccccc70] ring-Violet-80 ring-offset-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-Dark-25"
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
            <div className="p-3 text-Violet-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <h6 className="text-xs text-Dark-25">Account Balance</h6>
            <h1 className="text-5xl text-Dark-75">$00</h1>
            <div className="w-full flex items-start justify-around pt-3">
              <div className="w-[140px] h-16 rounded-[25px] bg-Red-100 flex justify-between text-Light-100 p-2">
                <div className="h-full flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10  p-2 rounded-[25px] bg-Light-100 text-Red-100 -rotate-90"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </div>
                <div className="flex flex-col w-3/4 pl-2">
                  <h3>expense</h3>
                  <h2>$0</h2>
                </div>
              </div>
              <div className="w-[140px] h-16 rounded-[25px] bg-Green-100 flex justify-between text-Light-100 p-2">
                <div className="h-full flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10  p-2 rounded-[25px] bg-Light-100 text-Green-100 rotate-90"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </div>
                <div className="flex flex-col w-3/4 pl-2">
                  <h3>income</h3>
                  <h2>$0</h2>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="pt-[250px] w-full flex flex-col items-start">
        <h3 className="pl-3 text-lg text-Dark-75">Spend Frequency</h3>
        <BalanceChart />
      </div>
    </>
  );
};

export default Home;
