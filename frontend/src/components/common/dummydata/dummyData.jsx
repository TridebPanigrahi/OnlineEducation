import React from "react";
import { GiBookmarklet, GiAchievement } from "react-icons/gi";
import { TbCertificate, TbBrandJavascript } from "react-icons/tb";
import { GrUserExpert } from "react-icons/gr";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaJava,
  FaPython,
  FaReact,
  FaWordpress,
  FaCss3Alt,
} from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { SiAdobephotoshop } from "react-icons/si";
import { MdEngineering } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import maleAvatar from "../../assets/maleAvatar.png";
import femaleAvatar from "../../assets/femaleAvatar.jpg";
import img1 from "../../assets/OnlineCoursesIcons/archeology.png";
import img2 from "../../assets/OnlineCoursesIcons/art.png";
import img3 from "../../assets/OnlineCoursesIcons/bullhorn.png";
import img4 from "../../assets/OnlineCoursesIcons/design.png";
import img5 from "../../assets/OnlineCoursesIcons/dumbbell.png";
import img6 from "../../assets/OnlineCoursesIcons/laptop.png";
import img7 from "../../assets/OnlineCoursesIcons/medical-research.png";
import img8 from "../../assets/OnlineCoursesIcons/musical-notes.png";
import img9 from "../../assets/OnlineCoursesIcons/portfolio.png";
import img10 from "../../assets/OnlineCoursesIcons/programming.png";
import img11 from "../../assets/OnlineCoursesIcons/software-application.png";
import img12 from "../../assets/OnlineCoursesIcons/ux-design.png";

import avtar1 from "../../assets/Professors/beautiful-mature-businesswoman-writing-clipboard-isolated-white-portrait-senior-business-women-with-clipboard-document-hands-min.jpg";
import avtar2 from "../../assets/Professors/close-up-smiley-woman-library-min.jpg";
import avtar3 from "../../assets/Professors/medium-shot-smiley-woman-library-min.jpg";
import avtar4 from "../../assets/Professors/pleased-young-businessman-wearing-glasses-holding-book-isolated-white-background-min.jpg";
import avtar5 from "../../assets/Professors/portrait-female-teacher-white-min.jpg";
import avtar6 from "../../assets/Professors/portrait-happy-young-man-eyeglasses-min.jpg";
import avtar7 from "../../assets/Professors/young-brunette-woman-sitting-desk-min.jpg";
import avtar8 from "../../assets/Professors/young-handsome-man-holding-notebooks-concept-e-learning-courses-min.jpg";
import stu1 from "../../assets/Matrimonial/student1.avif";
import stu2 from "../../assets/Matrimonial/student2.avif";
import stu3 from "../../assets/Matrimonial/student3.avif";
import stu4 from "../../assets/Matrimonial/student4.avif";
import stu5 from "../../assets/Matrimonial/student5.avif";
import stu6 from "../../assets/Matrimonial/student6.avif";

export const homeAbout = [
  {
    id: 1,
    cover: <GiBookmarklet size={50} />,
    title: "Online Courses",
    desc: "In order to create an engaging learning experience, The role of learner is essential.",
  },
  {
    id: 2,
    cover: <TbCertificate size={50} />,
    title: "Earn A Certificate",
    desc: "In order to create an engaging learning experience, the role of learner is essential.",
  },
  {
    id: 3,
    cover: <GrUserExpert size={50} />,
    title: "Learn with Expert",
    desc: "In order to create an engaging learning experience, the role of learner is essential.",
  },
];

export const awrapper = [
  {
    id: 1,
    cover: <FaUserGraduate size={50} />,
    title: "Success Stories",
    result: 3000,
  },
  {
    id: 2,
    cover: <GiAchievement size={50} />,
    title: "Trusted Tutors",
    result: 500,
  },
  {
    id: 3,
    cover: <AiOutlineSchedule size={50} />,
    title: "Schedules",
    result: 2000,
  },
  {
    id: 4,
    cover: <FaLaptopCode size={50} />,
    title: "Courses",
    result: 900,
  },
];
export const coursesCard = [
  {
    id: 1,
    cover: <MdEngineering size={50} />,
    coursesName: "Introducing to Software Engineering",
    courTeacher: [
      {
        dcover: maleAvatar,
        name: "by Kaushik Dey",
        totalTime: "50 lectures (190 hrs)",
      },
    ],
    priceAll: "$100 All Courses",
    pricePer: "$15 per month",
  },
  {
    id: 2,
    cover: <SiAdobephotoshop size={50} />,
    coursesName: "Enhancing Adobe Photoshop CC 2020 Skills",
    courTeacher: [
      {
        dcover: maleAvatar,
        name: "by Sivam Dubbay",
        totalTime: "30 lectures (120 hrs)",
      },
    ],
    priceAll: "$100 All Courses",
    pricePer: "$15 per month",
  },
  {
    id: 3,
    cover: <TbBrandJavascript size={50} />,
    coursesName: "Introducing to Javascript for Web Developers",
    courTeacher: [
      {
        dcover: maleAvatar,
        name: "by Akshay Sugandhi",
        totalTime: "50 lectures (50 hrs)",
      },
    ],
    priceAll: "$100 All Courses",
    pricePer: "$15 per month",
  },
  {
    id: 4,
    cover: <FaWordpress size={50} />,
    coursesName: "Introducing to Programming with Wordpress",
    courTeacher: [
      {
        dcover: femaleAvatar,
        name: "by Salini Sethi",
        totalTime: "20 lectures (20 hrs)",
      },
    ],
    priceAll: "$100 All Courses",
    pricePer: "$15 per month",
  },
  {
    id: 5,
    cover: <FaReact size={50} />,
    coursesName: "Introducing to Programming with React JS",
    courTeacher: [
      {
        dcover: femaleAvatar,
        name: "by Nilam Pandey",
        totalTime: "100 lectures (150 hrs)",
      },
    ],
    priceAll: "$100 All Courses",
    pricePer: "$15 per month",
  },
  {
    id: 6,
    cover: <CgWebsite size={50} />,
    coursesName: "Learn Frontend Programming Language",
    courTeacher: [
      {
        dcover: maleAvatar,
        name: "by Tarun Chauhan",
        totalTime: "200 lectures (300 hrs)",
      },
    ],
    priceAll: "$100 All Courses",
    pricePer: "$15 per month",
  },
  {
    id: 7,
    cover: <FaCss3Alt size={50} />,
    coursesName: "Introducing to Programming with HTML/CSS",
    courTeacher: [
      {
        dcover: femaleAvatar,
        name: "by Ruchika Reddy",
        totalTime: "20 lectures (50 hrs)",
      },
    ],
    priceAll: "$100 All Courses",
    pricePer: "$15 per month",
  },
  {
    id: 8,
    cover: <FaJava size={50} />,
    coursesName: "Introducing to programming with JAVA",
    courTeacher: [
      {
        dcover: maleAvatar,
        name: "by Mahendra Sharma",
        totalTime: "80 lectures (200 hrs)",
      },
    ],
    priceAll: "$100 All Courses",
    pricePer: "$15 per month",
  },
  {
    id: 9,
    cover: <FaPython size={50} />,
    coursesName: "Introducing to Programming with Python",
    courTeacher: [
      {
        dcover: femaleAvatar,
        name: "by Suman Banarji",
        totalTime: "100 lectures (200 hrs)",
      },
    ],
    priceAll: "$100 All Courses",
    pricePer: "$15 per month",
  },
];
export const onlineCourse = [
  {
    id: 1,
    cover: img4,
    sub: "UI/UX Design Course",
    val: "20 Courses",
  },
  {
    id: 2,
    cover: img2,
    sub: "Art & Design",
    val: "25 Courses",
  },
  {
    id: 3,
    cover: img7,
    sub: "Computer Science",
    val: "10 Courses",
  },
  {
    id: 4,
    cover: img1,
    sub: "History & Archeologic",
    val: "21 Courses",
  },
  {
    id: 5,
    cover: img11,
    sub: "Software Engineering",
    val: "20 Courses",
  },
  {
    id: 6,
    cover: img6,
    sub: "Information Software",
    val: "6 Courses",
  },
  {
    id: 7,
    cover: img5,
    sub: "Health & Fitness",
    val: "10 Courses",
  },
  {
    id: 8,
    cover: img3,
    sub: "Marketing",
    val: "10 Courses",
  },
  {
    id: 9,
    cover: img12,
    sub: "Graphic Design",
    val: "08 Courses",
  },
  {
    id: 10,
    cover: img8,
    sub: "Music",
    val: "30 Courses",
  },
  {
    id: 11,
    cover: img9,
    sub: "Business Administration",
    val: "17 Courses",
  },
  {
    id: 12,
    cover: img10,
    sub: "Web Management",
    val: "19 Courses",
  },
];

export const team = [
  {
    id: 1,
    cover: avtar1,
    name: "Ph.D Savana Roy",
    work: "Developer and lead instructor",
  },
  {
    id: 2,
    cover: avtar2,
    name: "Ph.D Kargola Wooden",
    work: "Developer and lead instructor",
  },
  {
    id: 3,
    cover: avtar3,
    name: "Ph.D lyka Hanzen",
    work: "Developer and lead instructor",
  },
  {
    id: 4,
    cover: avtar4,
    name: "Ph.D Arrian Molises",
    work: "Developer and lead instructor",
  },
  {
    id: 5,
    cover: avtar5,
    name: "Ph.D Prety Pathakar",
    work: "Developer and lead instructor",
  },
  {
    id: 6,
    cover: avtar6,
    name: "Ph.D Sanvest Ghusee",
    work: "Developer and lead instructor",
  },
  {
    id: 7,
    cover: avtar7,
    name: "Ph.D Malaya Mathod",
    work: "Developer and lead instructor",
  },
  {
    id: 8,
    cover: avtar8,
    name: "Ph.D Dumstain Jun",
    work: "Developer and lead instructor",
  },
];

export const testimonial = [
  {
    id: 1,
    cover: stu1,
    desg: "Marketing Manager",
    name: "Arisal Kalvish",
    quote:
      "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
  },
  {
    id: 2,
    cover: stu2,
    desg: "Marketing Manager",
    name: "Makley Sakml",
    quote:
      "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
  },
  {
    id: 3,
    cover: stu3,
    desg: "Marketing Manager",
    name: "Yarnden Chun",
    quote:
      "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
  },
  {
    id: 4,
    cover: stu4,
    desg: "Marketing Manager",
    name: "Custabhi Laxui",
    quote:
      "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
  },
  {
    id: 5,
    cover: stu5,
    desg: "Marketing Manager",
    name: "Lem Kryjohn",
    quote:
      "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
  },
  {
    id: 6,
    cover: stu6,
    desg: "Marketing Manager",
    name: "Dulopy Cubimk",
    quote:
      "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
  },
];

export const price = [
  {
    id: 1,
    cost: "49K",
    plan: "Basic Plan",
    desc: "Success is not final; failure is not fatal: it is the courage to continue that counts.",
  },
  {
    id: 2,
    cost: "79K",
    plan: "Beginner Plan",
    desc: "Success is not final; failure is not fatal: it is the courage to continue that counts.",
  },
  {
    id: 3,
    cost: "109K",
    plan: "Premium Plan",
    desc: "Success is not final; failure is not fatal: it is the courage to continue that counts.",
  },
  {
    id: 4,
    cost: "149K",
    plan: "Ultimate Plan",
    desc: "Success is not final; failure is not fatal: it is the courage to continue that counts.",
  },
];

export const faq = [
  {
    id: 1,
    head: "What are you selling?",
    desc: "You're only as good as your last sale, so you put your all into something and just hope that from that you can get your next job",
  },
  {
    id: 2,
    head: "What does the guarantee cover? ",
    desc: "You're only as good as your last sale, so you put your all into something and just hope that from that you can get your next job",
  },
  {
    id: 3,
    head: "Where can I find you?",
    desc: "You're only as good as your last sale, so you put your all into something and just hope that from that you can get your next job",
  },
  {
    id: 4,
    head: "How might I get in touch with you?",
    desc: "You're only as good as your last sale, so you put your all into something and just hope that from that you can get your next job",
  },
  {
    id: 5,
    head: "Is your site secure?",
    desc: "You're only as good as your last sale, so you put your all into something and just hope that from that you can get your next job",
  },
  {
    id: 6,
    head: "Do you charge deals? ",
    desc: "You're only as good as your last sale, so you put your all into something and just hope that from that you can get your next job",
  },
  {
    id: 7,
    head: "Who measures my installment?",
    desc: "You're only as good as your last sale, so you put your all into something and just hope that from that you can get your next job",
  },
  {
    id: 8,
    head: "How would I realize my subtleties are secure?",
    desc: "You're only as good as your last sale, so you put your all into something and just hope that from that you can get your next job",
  },
  {
    id: 9,
    head: "What are your installment alternatives?",
    desc: "You're only as good as your last sale, so you put your all into something and just hope that from that you can get your next job",
  },
  {
    id: 10,
    head: "What are your installment alternatives?",
    desc: "You're only as good as your last sale, so you put your all into something and just hope that from that you can get your next job",
  },
];
