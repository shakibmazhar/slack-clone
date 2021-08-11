import React from "react";

const Loading = () => {
    return (
        <div className="grid h-screen place-items-center">
            <div className="p-24 text-center rounded-md bg-white flex flex-col items-center">
                <img
                    className="object-contain h-40"
                    src="https://cormullion.github.io/assets/images/slackmojif/slackanimation.gif"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Loading;
