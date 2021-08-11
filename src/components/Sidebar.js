import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import SidebarOption from "./SidebarOption";
import AppsIcon from "@material-ui/icons/Apps";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Sidebar = () => {
    // Getiing channels from firestore
    const [channels, loading, error] = useCollection(db.collection("rooms"));
    const [user] = useAuthState(auth);
    return (
        <div className="flex flex-col bg-purple-900 h-full w-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between border-t border-b border-gray-400 border-opacity-20 w-full">
                <div className="flex flex-col p-2">
                    <h2 className="text-lg font-bold text-white">Slacker</h2>
                    <h3 className="flex items-center text-xs font-semibold text-white">
                        <FiberManualRecordIcon className="text-green-400 p-1" />
                        {user?.displayName}
                    </h3>
                </div>
                <div className="p-2">
                    <CreateIcon className="text-white cursor-pointer" />
                </div>
            </div>
            {/* Sidebar Options */}
            <div className="flex flex-col">
                <SidebarOption icon={<InsertCommentIcon />} title="Threads" />
                <SidebarOption
                    icon={<InboxIcon />}
                    title="Mentions & reactions"
                />
                <SidebarOption icon={<DraftsIcon />} title="Saved items" />
                <SidebarOption
                    icon={<BookmarkBorderIcon />}
                    title="Channel browser"
                />
                <SidebarOption
                    icon={<PeopleAltIcon />}
                    title="People & user groups"
                />
                <SidebarOption icon={<AppsIcon />} title="Apps" />
                <SidebarOption
                    icon={<FileCopyIcon />}
                    title="People & user groups"
                />
                <SidebarOption icon={<ExpandLessIcon />} title="Show less" />
                <hr className="border-t border-purple-800 mt-2 mb-2" />
                <SidebarOption icon={<ExpandMoreIcon />} title="Channels" />
                <hr className="border-t border-purple-800 mt-2 mb-2" />

                <SidebarOption
                    icon={<AddIcon />}
                    title="Add Channel"
                    addChannelOpts
                />
                {/* Channels */}
                {channels?.docs.map((channel) => {
                    return (
                        <SidebarOption
                            key={channel.id}
                            id={channel.id}
                            title={channel.data().name}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
