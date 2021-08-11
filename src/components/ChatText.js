import React from "react";
import firebase from "firebase";

const ChatText = ({ message, timestamp, user, userimg }) => {
    return (
        <div className="flex m-4">
            {/* User Picture */}
            <img
                className="rounded-full h-12 w-12 object-cover"
                src={userimg}
                alt=""
            />
            {/* Text Content */}
            <div className="flex flex-col ml-2">
                <h2 className="font-semibold">
                    {user}
                    <span className="text-xs ml-2 text-gray-500">
                        {new Date(timestamp?.toDate())?.toUTCString()}
                    </span>
                </h2>
                <p className="text-sm">{message}</p>
            </div>
        </div>
    );
};

export default ChatText;
