import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";

const Login = () => {
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };
    return (
        <div className="grid h-screen place-items-center bg-gray-900">
            <div className="p-24 text-center rounded-md bg-white flex flex-col items-center">
                <img
                    className="object-contain h-40"
                    src="https://cormullion.github.io/assets/images/slackmojif/slackanimation.gif"
                    alt=""
                />
                <h2 className="text-2xl font-bold p-2 m-2">
                    Sign in with Google
                </h2>
                <Button
                    style={{
                        margin: "10px",
                        backgroundColor: "#444",
                        borderRadius: "50%",
                        boxShadow:
                            "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
                    }}
                    type="submit"
                    onClick={signIn}
                >
                    <img
                        className="h-12 p-1 object-cover"
                        src="http://pngimg.com/uploads/google/google_PNG19630.png"
                        alt=""
                    />
                </Button>
            </div>
        </div>
    );
};

export default Login;
