import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./form/Input";
const Contact = () => {
  const schema = yup
    .object({
      username: yup.string().required("Vui lòng điền vào ô này"),
      email: yup.string().email().required("Vui lòng điền vào ô này"),
    })
    .required();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div classNameName="py-4 my-4 text-center col-12">
            <h1 className="mt-5 text-center">Bạn có câu hỏi nào không ?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img
              src="https://cdn.sforum.vn/sforum/wp-content/uploads/2021/09/thumb1-scaled.jpg"
              alt="Contact Us"
              height="300px"
              width="600px"
            />
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Tên Bạn
                </label>
                <Input name="username" control={control}></Input>
                {errors.username && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.username.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email
                </label>
                <Input name="email" control={control}></Input>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Nội dung
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
