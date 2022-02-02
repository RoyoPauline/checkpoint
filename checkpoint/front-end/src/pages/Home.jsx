import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
const Home = () => {
  return (
    <div className="text-white bg-neutral-800 font-mono ">
      <Header />
      <h1 className=" text-center font-bold text-teal-700 text-xl sm:text-2xl md:text-5xl leading-tight mb-6 mt-8">Pauline and Gégé's films</h1>
      <h4 className=" text-center font-bold text-teal-700 leading-tight mb-6 ">Whatever if you want something else, that's not my problem</h4>
      <Form />
    </div>
  );
};

export default Home;
