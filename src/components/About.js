import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div>
        <div className="container py-5 my-5">
          <div className="row">
            <div className="col-md-6">
              <h1 className="mb-4 text-primary fw-bold">Về Chúng Tôi</h1>
              <p className="mb-4 lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                molestiae earum rem doloremque, nihil delectus ullam error
                consectetur? Dicta, non exercitationem in consectetur totam
                dolorum at voluptate laudantium aliquam, officiis perspiciatis
                molestias reiciendis consequuntur ullam perferendis velit
                blanditiis distinctio assumenda a maxime reprehenderit atque.
                Nam eius rerum distinctio, a illo earum, optio molestias nostrum
                maxime quibusdam delectus, adipisci impedit? Nam corporis
                reiciendis minus quod eaque, laborum veritatis voluptatibus id
                maiores tempore accusantium recusandae perspiciatis, officia cum
                ad maxime fuga repellendus a magni consequatur. Unde adipisci
                hic provident est sint corporis, dolorem esse autem soluta
                molestiae optio quisquam eligendi obcaecati minima?
              </p>
              <NavLink to="/contact" className="px-3 btn btn-outline-primary">
                Liên Hệ
              </NavLink>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img
                src="https://haryanaforms.com/wp-content/uploads/2021/10/istockphoto-496280806-612x612-1.jpg"
                alt="About Us"
                height="400px"
                width="700px"
                className="border border-black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
