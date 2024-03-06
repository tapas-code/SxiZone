import React from "react";
import Guy from '../assets/guy.jpg';
import { FaPlus } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="hero outlet--container bg-base-100 py-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={Guy}
            className="shadow-md hero--img"
          />
          <div className="flex-col  ">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-success btn--hover"><FaPlus className="add--icon"/>New Group</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
