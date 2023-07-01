import React from "react"
import {GiBookmarklet, GiAchievement} from 'react-icons/gi'
import {TbCertificate} from 'react-icons/tb'
import {GrUserExpert} from 'react-icons/gr'
import {FaUserGraduate, FaLaptopCode} from 'react-icons/fa'
import {AiOutlineSchedule} from 'react-icons/ai'


export const homeAbout = [
    {
        id:1,
        cover:<GiBookmarklet size={50}/>,
        title:"Online Courses",
        desc:"In order to create an engaging learning experience, The role of learner is essential."
    },
    {
        id:2,
        cover:<TbCertificate  size={50}/>,
        title:"Earn A Certificate",
        desc:"In order to create an engaging learning experience, the role of learner is essential."
    },
    {
        id:3,
        cover:<GrUserExpert size={50}/>,
        title:"Learn with Expert",
        desc:"In order to create an engaging learning experience, the role of learner is essential."
    },
]

export const awrapper = [
    {
        id:1,
        cover:<FaUserGraduate size={50}/>,
        title:"Success Stories",
        result:3000
    },
    {
        id:2,
        cover:<GiAchievement size={50}/>,
        title:"Trusted Tutors",
        result:500
    },
    {
        id:3,
        cover:<AiOutlineSchedule size={50}/>,
        title:"Schedules",
        result:2000
    },
    {
        id:4,
        cover:<FaLaptopCode size={50}/>,
        title:"Courses",
        result:900
    }
]