import React, { useState } from "react";
import { db } from "../firebase";
import { useDispatch } from "react-redux";
import { enterRoom } from "../features/appSlice";

const SidebarOption = ({
    icon,
    addChannelOpts,
    title,
    id,
}) => {
    const dispatch = useDispatch();
    const [channelName, setChannelName] = useState(null);
    const [addChannelToggle, setAddChannelToggle] =
        useState(false);

    // Add new channel function
    const addChannel = () => {
        setAddChannelToggle(!addChannelToggle);
    };

    // Select channel function
    const selectChannel = () => {
        if (id) {
            dispatch(
                enterRoom({
                    roomID: id,
                })
            );
        }
    };

    return (
        <div className="flex flex-col">
            <div
                className="flex items-center p-2 hover:bg-purple-800 cursor-pointer"
                onClick={
                    addChannelOpts
                        ? addChannel
                        : selectChannel
                }
            >
                <div className="text-white mr-2">
                    {icon && icon}
                </div>
                <div className="text-white font-semibold">
                    {icon ? (
                        <h3>{title}</h3>
                    ) : (
                        <h3>
                            <span className="p-3">#</span>
                            {title}
                        </h3>
                    )}
                </div>
            </div>
            {addChannelToggle && (
                <input
                    className="p-2 mt-2 mb-2 w-10/12 self-center rounded-full outline-none"
                    onChange={(e) => {
                        const newChannel =
                            e.target.value.trim();
                        if (newChannel)
                            setChannelName(newChannel);
                    }}
                    onKeyUp={(e) => {
                        if (e.key === "Enter") {
                            setAddChannelToggle(false);
                            // Create new channel
                            if (channelName) {
                                db.collection("rooms").add({
                                    name: channelName,
                                });
                                setChannelName(null);
                            }
                        }
                    }}
                    type="text"
                    placeholder="Enter channel name"
                />
            )}
        </div>
    );
};

export default SidebarOption;
