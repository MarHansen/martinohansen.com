const LambdaIcon = () => {
  return (
    <>
      <div className="flex items-center justify-center w-fit px-3 py-[5px] gap-2 border-[1px] rounded-full border-black text-[0.8rem]">
        <img
          loading="lazy"
          draggable={false}
          className="w-[15px] h-[15px]"
          src="/icons/lambda-logo.svg"
          alt=""
        />
        <p>AWS Lambda</p>
      </div>
    </>
  );
};

export default LambdaIcon;
