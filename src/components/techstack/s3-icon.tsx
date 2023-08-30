const S3Icon = () => {
  return (
    <>
      <div className="flex items-center justify-center w-fit px-3 py-[5px] gap-2 border-[1px] rounded-full border-black text-[0.8rem]">
        <img
          loading="lazy"
          draggable={false}
          className="w-[20px] h-[20px]"
          src="/icons/s3-logo.svg"
          alt=""
        />
        <p>AWS S3</p>
      </div>
    </>
  );
};

export default S3Icon;
