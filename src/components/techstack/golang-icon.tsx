const GolangIcon = () => {
  return (
    <>
      <div className="flex items-center justify-center w-fit px-3 py-[5px] gap-2 border-[1px] rounded-full border-black text-[0.8rem]">
        <img
          loading="lazy"
          draggable={false}
          className="w-[20px] h-[20px]"
          src="/icons/Go_Logo_Blue.svg"
          alt=""
        />
        <p>Golang</p>
      </div>
    </>
  );
};

export default GolangIcon;
