import React from "react";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="flex items-center text-white justify-between bg-purple-900 w-full">
            {/* Header left */}
            <div className="headerLeft m-2 flex items-center justify-between">
                <Avatar
                    src={user?.photoURL}
                    className="cursor-pointer hover:opacity-80"
                    onClick={() => {
                        auth.signOut();
                    }}
                />
                <AccessTimeIcon className="cursor-pointer" />
            </div>
            {/* Header mid */}
            <div className="flex items-center bg-white m-2 rounded-md headerMid">
                <SearchIcon className="text-purple-700 mr-1" />
                <input
                    className="outline-none bg-transparent text-black"
                    type="text"
                    placeholder="Search"
                />
            </div>
            {/* Header right */}
            <div className="flex m-2 headerRight items-center justify-end">
                <HelpOutlineIcon className="cursor-pointer" />
            </div>
        </div>
    );
};

export default Header;
