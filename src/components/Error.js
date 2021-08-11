import React from "react";
import moonlight from "../assets/moonlight.svg";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-900">
            <img className="w-2/4 m-5" src={moonlight} alt="" />
            <h1 className="text-xl text-center font-bold p-2 m-5 text-white">
                Oops!
                <span className="block">That's a dead end.</span>
            </h1>
            <Link to="/">
                <button className="rounded-md bg-purple-900 text-white p-3 m-2 text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-110">
                    Back Home
                </button>
            </Link>
        </div>
    );
};

export default Error;
