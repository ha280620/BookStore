import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "react-bootstrap";

import * as yup from "yup";
import Input from "./form/Input";
import DropDown from "./form/DropDown";
const Checkout = ({ card, total }) => {
  //console.log(card);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const schema = yup
    .object({
      username: yup.string().required("Vui lòng điền vào ô này"),
      email: yup.string().email().required("Vui lòng điền vào ô này"),
      phone: yup.string().required("Vui lòng điền vào ô này"),
      adress: yup.string().required("Vui lòng điền vào ô này"),
      car: yup.string().required("Vui lòng chọn một đơn vị vận chuyển"),
    })
    .required();

  const {
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (values) => {
    //console.log(values);
    if (values) setShow(true);
  };
  return (
    <div className="p-20 row">
      <div className="mb-4 col-md-4 order-md-2">
        <h4 className="mb-3 d-flex justify-content-between align-items-center">
          <span className="text-muted">Sản Phẩm</span>
        </h4>
        <ul className="mb-3 list-group">
          {card.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between lh-condensed"
            >
              <div>
                <h6 className="my-0">{item.title}</h6>
                <small className="text-muted">Số Lượng: {item.amount}</small>
              </div>
              <span className="text-muted">{item.price} VND</span>
            </li>
          ))}

          <li className="list-group-item d-flex justify-content-between">
            <span>Tổng : </span>
            <strong>{total} VND</strong>
          </li>
        </ul>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="col-md-8 order-md-1">
        <h4 className="mb-3">Thông Tin</h4>
        <div>
          <div className="row">
            <div className=" col-md-6">
              <label htmlFor="">Họ Tên</label>
              <Input
                control={control}
                name="username"
                placeholder="Nhập tên của bạn"
              ></Input>
              {errors.username && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="mb-3 col-md-6">
              <label htmlFor="">Số Điện Thoại</label>
              <Input
                control={control}
                name="phone"
                placeholder="Nhập số điện thoại của bạn"
              ></Input>
              {errors.phone && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
          <div className="mb-3 ">
            <label htmlFor="">Địa Chỉ</label>
            <div className="input-group">
              <Input
                control={control}
                name="adress"
                placeholder="Nhập địa chỉ của bạn"
              ></Input>
            </div>
            {errors.adress && (
              <p className="mt-2 text-sm text-red-500">
                {errors.adress.message}
              </p>
            )}
          </div>
          <div className="row">
            <div className="mb-3 col-md-6">
              <label htmlFor="">Email</label>
              <Input
                control={control}
                name="email"
                placeholder="Nhập email của bạn"
              ></Input>
              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-3 col-md-6">
              <label htmlFor="">Đơn vị vận chuyển</label>

              <DropDown
                control={control}
                setValue={setValue}
                name="car"
              ></DropDown>

              {errors.adress && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.adress.message}
                </p>
              )}
            </div>
          </div>
          <button className="px-10 py-6 bg-blue-500 rounded-lg" type="submit">
            Xác Nhận
          </button>
        </div>
      </form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Xác Nhận Đơn Hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="text-center">Cảm Ơn Vì Đã Lựa Chọn Chúng Tôi</h5>
          {card.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between lh-condensed"
            >
              <div>
                <h6 className="my-0">{item.title}</h6>
                <small className="text-muted">Số Lượng: {item.amount}</small>
              </div>
              <span className="text-muted">{item.price} VND</span>
            </li>
          ))}
          <li className="list-group-item d-flex justify-content-between">
            <span>Tổng : </span>
            <strong>{total} VND</strong>
          </li>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-add form-control" onClick={handleClose}>
            Đồng Ý
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Checkout;
