function ChooseBox({ heading, type, isWinner }) {
  return (
    <div className="flex flex-col gap-24 items-center lg:gap-12">
      <h2 className=" text-white font-bold tracking-[0.3rem] drop-shadow-text-sh leading-[3.2rem] uppercase lg:text-[1.3rem] text-[2.4rem] lg:order-1 lg:tracking-[0.1875rem]">
        {heading}
      </h2>
      <div className="relative min-h-[23rem] min-w-[23rem] lg:min-w-[13rem] lg:min-h-[13rem] lg:w-[13rem] lg:h-[13rem]">
        <img
          src={type}
          alt={type}
          className="z-10 relative min-h-[23rem] min-w-[23rem] rounded-full border-0 border-transparent bg-transparent lg:min-w-[13rem] lg:min-h-[13rem]"
        />
        <div className="min-h-[20rem] min-w-[20rem] rounded-full bg-game-bg absolute top-0 lg:min-w-[11rem] lg:min-h-[11rem]"></div>
        {isWinner && (
          <div className="min-h-[28.4rem] min-w-[28.4rem] rounded-full bg-white  bg-opacity-5 absolute top-[-13%] left-[-13%] lg:min-w-[16.4rem] lg:min-h-[16.4rem] lg:top-[-14%] lg:left-[-12%]"></div>
        )}

        {isWinner && (
          <div className="min-h-[36.4rem] min-w-[36.4rem] rounded-full bg-white  bg-opacity-5 absolute top-[-30%] left-[-30%] lg:top-[-28%] lg:left-[-28%] lg:min-h-[20.4rem] lg:min-w-[20.4rem]"></div>
        )}

        {isWinner && (
          <div className="min-h-[44.4rem] min-w-[44.4rem] rounded-full bg-white  bg-opacity-5 absolute top-[-48%] left-[-48%] lg:min-h-[24.4rem] lg:min-w-[24.4rem] lg:top-[-43%] lg:left-[-45%]"></div>
        )}
      </div>
    </div>
  );
}

export default ChooseBox;
