import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { auth, db } from "../firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ChatInput = ({ channelName, channelID, chatRef }) => {
    const [input, setInput] = useState("");
    const [user] = useAuthState(auth);

    const sendMessage = (e) => {
        e.preventDefault();
        if (channelID && input) {
            db.collection("rooms").doc(channelID).collection("messages").add({
                user: user?.displayName,
                userimg: user?.photoURL,
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });

            // Scroll to last text
            chatRef.current.scrollIntoView({
                behavior: "smooth",
            });

            setInput("");
        }
    };

    return (
        <div>
            <form
                action=""
                className="relative flex items-center justify-center"
            >
                <input
                    className="rounded-md fixed bottom-7 w-3/5 border border-gray-400 outline-none p-5"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={
                        channelName
                            ? `Message #${channelName}`
                            : "Select a room to message"
                    }
                />
                <Button
                    style={{
                        display: "none",
                    }}
                    type="submit"
                    hidden
                    onClick={sendMessage}
                >
                    Send
                </Button>
            </form>
        </div>
    );
};

export default ChatInput;
