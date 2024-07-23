import { RxDashboard } from "react-icons/rx";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { HiOutlineStar } from "react-icons/hi2";
import { BiMessageDetail } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import {
  Dashboard,
  Property,
  Agent,
  Review,
  Message,
  Profile,
} from "../pages";
const sibeBarData = [
  {
    id: 1,
    title: "Dashboard",
    path: "/",
    icon: <RxDashboard />,
    main: [<Dashboard />],
  },
  {
    id: 2,
    title: "Property",
    path: "/property",
    icon: <TbBuildingSkyscraper />,
    main: [<Property />],
  },
  {
    id: 3,
    title: "Agent",
    path: "/agent",
    icon: <GoPeople />,
    main: [<Agent />],
  },
  {
    id: 4,
    title: "Review",
    path: "/review",
    icon: <HiOutlineStar />,
    main: [<Review />],
  },
  {
    id: 5,
    title: "Message",
    path: "/message",
    icon: <BiMessageDetail />,
    main: [<Message />],
  },
  {
    id: 6,
    title: "My Profile",
    path: "/profile",
    icon: <FaRegUserCircle />,
    main: [<Profile />],
  },
];
export default sibeBarData;
