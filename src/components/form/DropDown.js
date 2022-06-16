import React, { useState } from "react";
import { useWatch } from "react-hook-form";

const DropDown = ({ control, setValue, name }) => {
  const [show, setShow] = useState(false);
  const car = useWatch({
    control,
    name: "car",
  });
  const handleClick = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
  };
  return (
    <div className="relative">
      <div
        onClick={() => setShow(!show)}
        className="flex items-center justify-between p-2 border border-blue-500 rounded-lg"
      >
        <span>{car || "Đơn Vị Vận Chuyển"}</span>
      </div>
      {show && (
        <div className="absolute w-full bg-white border border-black rounded-lg top-full flet-0">
          <div
            className="p-2"
            onClick={handleClick}
            data-value="Giao Hàng Nhanh"
          >
            Giao Hàng Nhanh
          </div>
          <div
            className="p-2"
            onClick={handleClick}
            data-value="Giao Hàng Tiết Kiệm"
          >
            Giao Hàng Tiết Kiệm
          </div>
          <div className="p-2" onClick={handleClick} data-value="Vietell Post">
            Vietell Post
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
