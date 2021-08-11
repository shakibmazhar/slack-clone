import React from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

const home = () => {
    return (
        <div className="flex h-full overflow-hidden">
            {/* Sidebar Component */}
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="chat">
                <Chat />
            </div>
        </div>
    );
};

export default home;
