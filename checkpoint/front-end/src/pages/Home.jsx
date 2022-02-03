import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";

const Home = ({user}) => {

  console.log(user)
  return (
    <div className="text-white bg-neutral-800 font-mono ">
      <Header user={user} />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-32 py-12 border-4 border-teal-700 shadow-2xl mb-6 mt-8">
      <div className="text-center pb-12 w-full mb-3 pb-3 border-b border-1 border-teal-700 shadow-2xl">
      <h1 className=" text-center font-bold text-teal-700 text-xl sm:text-2xl md:text-5xl leading-tight mb-6 mt-8">
        Les films de Gérard
      </h1>
      <h4 className=" text-center font-bold text-white leading-tight mb-6 ">
        Ah tu voulais autre chose ? Ce n'est clairement pas mon problème
      </h4>
      </div>
      </section>
      <Form />
    </div>
  );
};

export default Home;
