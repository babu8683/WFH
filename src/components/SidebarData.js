import React from 'react';
import * as FcServices from "react-icons/fc";
import * as CiImageOn from "react-icons/ci";
import * as BiUserVoice from "react-icons/bi";
import * as LiaCertificateSolid from "react-icons/lia";
import * as BiCategoryAlt from "react-icons/bi";
import * as FiUserCheck from "react-icons/fi";
import * as CgProfile from "react-icons/cg";

export const SidebarData = [
  {
    title: "Services",
    path: "/",
    icon: <FcServices.FcServices />,
    cName: "nav-text",
  },
  {
    title: "Image & Video",
    path: "/updateimagevideo",
    icon: <CiImageOn.CiImageOn />,
    cName: "nav-text",
  },
  {
    title: "How To Use",
    path: "/howtouse",

    icon: <BiUserVoice.BiUserVoice />,
    cName: "nav-text",
  },
  {
    title: "Certificate",
    path: "/certificate",

    icon: <LiaCertificateSolid.LiaCertificateSolid />,
    cName: "nav-text",
  },
  {
    title: "Waste Category",
    path: "/wastecategory",
    icon: <BiCategoryAlt.BiCategoryAlt />,
    cName: "nav-text",
  },
  {
    title: "Registered User",
    path: "/user",

    icon: <FiUserCheck.FiUserCheck />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <CgProfile.CgProfile />,
    cName: "nav-text",
  },
];
