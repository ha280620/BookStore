import React from "react";
import { NavLink } from "react-router-dom";
import { Data } from "../Data";

const Product = ({ handleClick }) => {
  const data = Data;
  return (
    <div>
      <section className="pb-10 page-container">
        <h2 className="m-10 text-2xl font-bold text-center text-black">
          Tất Cả Sản Phẩm
        </h2>
        <div className="grid grid-cols-4 gap-10">
          {data.length > 0 &&
            data.map((item) => (
              <div key={item.id} className="p-3 bg-gray-200 rounded-lg">
                <img
                  src={item.url}
                  alt=""
                  className="w-full h-[250px] object-cover rounded-lg mb-2"
                ></img>
                <h1 className="mb-3 text-xl font-bold text-black">
                  {item.title}
                </h1>
                <h1 className="mb-3 text-xl font-bold text-center text-red">
                  Giá: {item.price} VND
                </h1>
                <div className="flex items-center justify-between w-full text-center">
                  <NavLink
                    to={`/product/${item.id}`}
                    className="w-[150px] py-3 text-white bg-blue-500 rounded-lg text-decoration-none"
                  >
                    Chi Tiết
                  </NavLink>
                  <button
                    className="w-[150px] py-3 text-white bg-blue-500 rounded-lg"
                    onClick={() => handleClick(item)}
                  >
                    Thêm
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Product;
