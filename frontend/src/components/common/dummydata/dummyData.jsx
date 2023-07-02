import React from "react"
import {GiBookmarklet, GiAchievement} from 'react-icons/gi'
import {TbCertificate, TbBrandJavascript} from 'react-icons/tb'
import {GrUserExpert} from 'react-icons/gr'
import {FaUserGraduate, FaLaptopCode, FaJava, FaPython, FaReact, FaWordpress, FaCss3Alt} from 'react-icons/fa'
import {AiOutlineSchedule} from 'react-icons/ai'
import {SiAdobephotoshop} from 'react-icons/si'
import {MdEngineering} from 'react-icons/md'
import {CgWebsite} from 'react-icons/cg'
import maleAvatar from '../../assets/maleAvatar.png'
import femaleAvatar from '../../assets/femaleAvatar.jpg'
import img1 from '../../assets/OnlineCoursesIcons/archeology.png'
import img2 from '../../assets/OnlineCoursesIcons/art.png'
import img3 from '../../assets/OnlineCoursesIcons/bullhorn.png'
import img4 from '../../assets/OnlineCoursesIcons/design.png'
import img5 from '../../assets/OnlineCoursesIcons/dumbbell.png'
import img6 from '../../assets/OnlineCoursesIcons/laptop.png'
import img7 from '../../assets/OnlineCoursesIcons/medical-research.png'
import img8 from '../../assets/OnlineCoursesIcons/musical-notes.png'
import img9 from '../../assets/OnlineCoursesIcons/portfolio.png'
import img10 from '../../assets/OnlineCoursesIcons/programming.png'
import img11 from '../../assets/OnlineCoursesIcons/software-application.png'
import img12 from '../../assets/OnlineCoursesIcons/ux-design.png'



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
export const coursesCard =[
    {
        id:1,
        cover:<MdEngineering size={50}/>,
        coursesName:"Introducing to Software Engineering",
        courTeacher:[
            {
                dcover:maleAvatar,
                name:"by Kaushik Dey",
                totalTime:"50 lectures (190 hrs)",
            },
        ],
        priceAll:"$100 All Courses",
        pricePer:"$15 per month",
    },
    {
        id:2,
        cover:<SiAdobephotoshop size={50}/>,
        coursesName:"Enhancing Adobe Photoshop CC 2020 Skills",
        courTeacher:[
            {
                dcover:maleAvatar,
                name:"by Sivam Dubbay",
                totalTime:"30 lectures (120 hrs)",
            },
        ],
        priceAll:"$100 All Courses",
        pricePer:"$15 per month",
    },
    {
        id:3,
        cover:<TbBrandJavascript size={50}/>,
        coursesName:"Introducing to Javascript for Web Developers",
        courTeacher:[
            {
                dcover:maleAvatar,
                name:"by Akshay Sugandhi",
                totalTime:"50 lectures (50 hrs)",
            },
        ],
        priceAll:"$100 All Courses",
        pricePer:"$15 per month",
    },
    {
        id:4,
        cover:<FaWordpress size={50}/>,
        coursesName:"Introducing to Programming with Wordpress",
        courTeacher:[
            {
                dcover:femaleAvatar,
                name:"by Salini Sethi",
                totalTime:"20 lectures (20 hrs)",
            },
        ],
        priceAll:"$100 All Courses",
        pricePer:"$15 per month",
    },
    {
        id:5,
        cover:<FaReact size={50}/>,
        coursesName:"Introducing to Programming with React JS",
        courTeacher:[
            {
                dcover:femaleAvatar,
                name:"by Nilam Pandey",
                totalTime:"100 lectures (150 hrs)",
            },
        ],
        priceAll:"$100 All Courses",
        pricePer:"$15 per month",
    },
    {
        id:6,
        cover:<CgWebsite size={50}/>,
        coursesName:"Learn Frontend Programming Language",
        courTeacher:[
            {
                dcover:maleAvatar,
                name:"by Tarun Chauhan",
                totalTime:"200 lectures (300 hrs)",
            },
        ],
        priceAll:"$100 All Courses",
        pricePer:"$15 per month",
    },
    {
        id:7,
        cover:<FaCss3Alt size={50}/>,
        coursesName:"Introducing to Programming with HTML/CSS",
        courTeacher:[
            {
                dcover:femaleAvatar,
                name:"by Ruchika Reddy",
                totalTime:"20 lectures (50 hrs)",
            },
        ],
        priceAll:"$100 All Courses",
        pricePer:"$15 per month",
    },
    {
        id:8,
        cover:<FaJava size={50}/>,
        coursesName:"Introducing to programming with JAVA",
        courTeacher:[
            {
                dcover:maleAvatar,
                name:"by Mahendra Sharma",
                totalTime:"80 lectures (200 hrs)",
            },
        ],
        priceAll:"$100 All Courses",
        pricePer:"$15 per month",
    },
    {
        id:9,
        cover:<FaPython size={50}/>,
        coursesName:"Introducing to Programming with Python",
        courTeacher:[
            {
                dcover:femaleAvatar,
                name:"by Suman Banarji",
                totalTime:"100 lectures (200 hrs)",
            },
        ],
        priceAll:"$100 All Courses",
        pricePer:"$15 per month",
    },
    
]
export const onlineCourse = [
    {
        id:1,
        cover:img4,
        sub:"UI/UX Design Course",
        val:"20 Courses"
    },
    {
        id:2,
        cover:img2,
        sub:"Art & Design",
        val:"25 Courses"
    },
    {
        id:3,
        cover:img7,
        sub:"Computer Science",
        val:"10 Courses"
    },
    {
        id:4,
        cover:img1,
        sub:"History & Archeologic",
        val:"21 Courses"
    },
    {
        id:5,
        cover:img11,
        sub:"Software Engineering",
        val:"20 Courses"
    },
    {
        id:6,
        cover:img6,
        sub:"Information Software",
        val:"6 Courses"
    },
    {
        id:7,
        cover:img5,
        sub:"Health & Fitness",
        val:"10 Courses"
    },
    {
        id:8,
        cover:img3,
        sub:"Marketing",
        val:"10 Courses"
    },
    {
        id:9,
        cover:img12,
        sub:"Graphic Design",
        val:"08 Courses"
    },
    {
        id:10,
        cover:img8,
        sub:"Music",
        val:"30 Courses"
    },
    {
        id:11,
        cover:img9,
        sub:"Business Administration",
        val:"17 Courses"
    },
    {
        id:12,
        cover:img10,
        sub:"Web Management",
        val:"19 Courses"
    },
]