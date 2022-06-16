import React from "react";
import { NavLink } from "react-router-dom";
import { FcEmptyTrash } from "react-icons/fc";
const Card = ({ card, setCard, handleChange, total }) => {
  //console.log(card);
  const handleRemove = (id) => {
    const arr = card.filter((item) => item.id !== id);
    setCard(arr);
  };
  return (
    <div>
      <div className="row justify-content-center">
        <h1 className="mb-5 text-2xl font-bold text-center">
          Thông Tin Giỏ Hàng
        </h1>
        <div className="p-2 m-3 bg-white rounded-lg shadow-lg col-md-7">
          {card.map((item) => (
            <div key={item.id} className="grid grid-cols-4 gap-x-1">
              <div className="m-2">
                <img
                  src={item.url}
                  alt=""
                  className="border border-blue-400 rounded-lg"
                  style={{ height: "140px" }}
                ></img>
              </div>
              <div>
                <br></br>
                <h5>{item.title}</h5>
                <h5 className="mt-5">{item.price * item.amount} VND</h5>
              </div>
              <div className="text-2xl">
                <br></br>
                <div style={{ display: "inline" }}>Số Lượng: </div>
                <button onClick={() => handleChange(item, 1)}>+</button>
                <b>{item.amount}</b>
                <button onClick={() => handleChange(item, -1)}>-</button>
              </div>
              <div className="w-[60px] h-[60px]">
                <br></br>
                <FcEmptyTrash
                  className="w-full h-full"
                  onClick={() => handleRemove(item.id)}
                >
                  XÓA
                </FcEmptyTrash>
              </div>
            </div>
          ))}
          <br></br>
          <hr className="border-solid"></hr>
          <div>
            <button
              onClick={() => {
                setCard([]);
              }}
              className="px-3 py-2 m-3 text-white bg-red-600 border border-red-600 rounded-lg"
            >
              Xóa Tất Cả
            </button>
          </div>
        </div>
        <div className="p-2 m-3 text-center bg-white rounded-lg shadow-lg col-md-4 ">
          <h3 className="mb-5">Thành Tiền : {total} VNĐ</h3>
          {card.length > 0 && (
            <NavLink to="/checkout">
              <button className="px-3 py-2 m-3 mb-auto text-white bg-red-600 border border-red-600 rounded-lg">
                Thanh Toán
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
