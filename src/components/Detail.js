import React from "react";
import { useParams } from "react-router-dom";
import { Data } from "../Data";
const Detail = ({ handleClick }) => {
  const pram = useParams();
  const detail = Data.filter((x) => x.id == pram.id);
  const item = detail[0];
  console.log(item);

  return (
    <div className="container py-3 my-5">
      <div className="row">
        <div className="h-[400px] flex mx-auto border border-red-800 rounded-lg col-md-6 justify-content-center">
          <img src={item.url} alt=""></img>
        </div>
        <div className="col-md-6 ">
          <h1>{item.title}</h1>
          <hr></hr>
          <h2>Giá : {item.price}</h2>
          <h5>{item.decription}</h5>
          <button
            onClick={() => handleClick(item)}
            className="w-full py-3 btn btn-outline-primary"
          >
            Thêm Vào Giỏ Hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
