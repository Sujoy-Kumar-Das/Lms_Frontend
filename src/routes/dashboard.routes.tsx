import { IDashboardRoute } from "@/interface/IDashboardItem";
import { USER_ROLE } from "@/interface/user.roles.interface";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { MdDashboard, MdManageAccounts, MdSecurity } from "react-icons/md";

const dashboardRoutes: IDashboardRoute[] = [
  {
    text: "Dashboard",
    link: "/dashboard/user",
    icon: <MdDashboard />,
    access: [USER_ROLE.student],
  },
  {
    text: "Course",
    link: "/dashboard/admin/course",
    icon: <BsBook />,
    access: [USER_ROLE.admin],
  },
  {
    text: "Module",
    link: "/dashboard/admin/module",
    icon: <MdManageAccounts />,
    access: [USER_ROLE.admin],
  },
  {
    text: "Lecture",
    link: "/dashboard/admin/lecture",
    icon: <AiOutlineShoppingCart />,
    access: [USER_ROLE.admin],
  },
  {
    text: "Users",
    link: "/dashboard/admin/users",
    icon: <FaUsers />,
    access: [USER_ROLE.admin],
  },
  {
    text: "My Courses",
    link: "/dashboard/user/courses",
    icon: <AiFillHeart />,
    access: [USER_ROLE.student],
  },
  {
    text: "My Class",
    link: "/dashboard/user/class",
    icon: <FaChalkboardTeacher />,
    access: [USER_ROLE.student],
  },
  {
    text: "Privacy & Security",
    link: "/dashboard/security",
    icon: <MdSecurity />,
    access: [USER_ROLE.student],
  },
];

export default dashboardRoutes;
