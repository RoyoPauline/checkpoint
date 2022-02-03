import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLogin = async (data) => {
    try {
      const user = (await axios.post("http://localhost:3001/login", data)).data ;
      setUser(user)
      navigate("/home")
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="text-white min-h-screen bg-neutral-800 font-mono ">
        <Header />
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
        />
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />

        <section>
          <div className="w-full lg:w-6/12 px-4 mx-auto pt-24">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6 bg-teal-700">
                <div className="text-center mb-3">
                  <div className="text-white text-center mb-3 font-bold font-mono">
                    <h3>Connexion</h3>
                  </div>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-teal-700">
                <form onSubmit={handleSubmit(onLogin)}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Pseudo
                    </label>
                    <input
                      {...register("pseudo")}
                      type="name"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Pseudo"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-white text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Mot de passe
                    </label>
                    <input
                      {...register("password")}
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Mot de passe"
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-teal-900 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      type="submit"
                      
                    >
                      Se connecter
                    </button>
                    <p className="text-center text-md font-light">
                      Pas de compte ?{" "}
                      <button
                        className="font-light text-md text-text-teal-700"
                        onClick={() => navigate("/inscription")}
                      >
                        S'inscrire
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <footer className="relative  pt-8 pb-6 mt-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center"></div>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
};
export default Login;
