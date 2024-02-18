import { RiHome2Line, RiGroupLine } from "react-icons/ri";
import { IoFolderOpenOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineQuiz } from "react-icons/md";
import { FaTasks } from "react-icons/fa";

export const menu = [
    {
        name: 'home',
        icon: <RiHome2Line />,
        link: '/'
    },
    {
        name: 'lessons',
        icon: <IoFolderOpenOutline/>,
        link: '/lessons'
    },
    {
        name: 'tasks',
        icon: <FaTasks/>,
        link: '/tasks'
    },
    {
        name: 'tests',
        icon: <MdOutlineQuiz/>,
        link: '/tests'
    },
];

export const settings = [
    {
        name: 'settings',
        icon: <FiSettings/>,
        link: '/settings'
    },
    {
        name: 'logout',
        icon: <LuLogOut/>,
        link: '/logout'
    },
]