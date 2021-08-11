import React, { useRef, useEffect } from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { useSelector } from "react-redux";
import { selectRoomID } from "../features/appSlice";
import ChatInput from "./ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import ChatText from "./ChatText";
import lost from "../assets/lost.svg";

const Chat = () => {
    const roomID = useSelector(selectRoomID);

    // Get room details
    const [roomDetails] = useDocument(
        roomID && db.collection("rooms").doc(roomID)
    );

    // Get messages sorted by timestamp
    const [roomMessages, loading] = useCollection(
        roomID &&
            db
                .collection("rooms")
                .doc(roomID)
                .collection("messages")
                .orderBy("timestamp", "asc")
    );

    // Ref for chat bottom
    const chatRef = useRef();

    // Scrolls to the last text
    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [roomID, loading]);

    return (
        <>
            {roomID && roomDetails ? (
                <div className="flex flex-col h-full w-full">
                    {/* Header */}
                    <div className="flex justify-between mt-1 mb-1 p-5 border-b-2 border-gray-500 border-opacity-50">
                        {/* Header Left */}
                        <div className="flex items-center">
                            <h4
                                style={{
                                    textTransform: "lowercase",
                                }}
                            >
                                <strong>#{roomDetails?.data().name}</strong>
                            </h4>
                            <StarBorderIcon className="ml-1" />
                        </div>
                        {/* Header Right */}
                        <div>
                            <p className="flex items-center">
                                <InfoOutlinedIcon className="mr-1" /> Details
                            </p>
                        </div>
                    </div>
                    {/* Message Container */}
                    <div className="h-full chat-container">
                        {roomMessages?.docs.map((doc) => {
                            return (
                                <ChatText
                                    key={doc.id}
                                    message={doc.data().message}
                                    timestamp={doc.data().timestamp}
                                    user={doc.data().user}
                                    userimg={doc.data().userimg}
                                />
                            );
                        })}
                        <div ref={chatRef} className="pb-52"></div>
                    </div>
                    {/* Chat Input */}
                    <div>
                        <ChatInput
                            chatRef={chatRef}
                            channelName={roomDetails?.data().name}
                            channelID={roomID}
                        />
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-full w-full bg-gray-900">
                    <img className="h-2/5 p-2 m-2" src={lost} alt="" />
                    <h1 className="font-bold text-white text-2xl m-2 p-2">
                        Select/Create a channel
                    </h1>
                </div>
            )}
        </>
    );
};

export default Chat;
