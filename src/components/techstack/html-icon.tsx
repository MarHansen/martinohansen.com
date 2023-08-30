const HTMLIcon = () => {
  return (
    <>
      <div className="flex items-center justify-center w-fit px-3 py-[5px] gap-2 border-[1px] rounded-full border-black text-[0.8rem]">
        <svg
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "15px",
            height: "15px",
            fill: "rgb(229, 77, 38)",
          }}
        >
          <path d="m9.032 2 10.005 112.093 44.896 12.401 45.02-12.387L118.968 2H9.032zm89.126 26.539-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471-3.233 36.119-.238 2.27L64 102.609v.002l-.034.018-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z"></path>
        </svg>
        <p>HTML</p>
      </div>
    </>
  );
};

export default HTMLIcon;
