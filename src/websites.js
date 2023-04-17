import img1 from "./img/project/web/1.JPG";
import img2 from "./img/project/Neoma.png";
import img3 from "./img/project/Elite group.png";
import img4 from "./img/project/web/4.jpg";
import img5 from "./img/project/2.jpg";
import img6 from "./img/project/web/6.jpg";
import img7 from "./img/project/web/7.jpg";
import img8 from "./img/project/kitab.png";
import img9 from "./img/project/3.jpg";
import img10 from "./img/project/web/10.jpg";
export const websites = [
  {
    id: 1,
    title: "Bondi template",
    img: `${img1}`,
    desc: "A bondi template is a website I did it for Eduicational purpuses",
    online: "https://bondi-one.vercel.app/",
    githublink: "https://github.com/mohammed706/bondi",
    type:"Landing Page",
    tools:[ 
      {id:1,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"HTML"},
      {id:2,color:"rgb(40, 112, 251);",back:"rgba(40, 112, 251, 0.063)",name:"CSS"},
      {id:3,color:"rgb(120, 54, 250)",back:"rgba(120, 54, 250, 0.063)",name:"Bootstrap"},
    ]
    
  },
  {
    id: 2,
    title: "Neoma Publishing Center",
    img: `${img2}`,
    desc: "Neoma Journal Of Mathematics And Computer Science (NJMCS). make your research accessible to scholars, students, and professionals all around the world.",
    online: "https://neoma.pub",
    githublink: null,
    type:"Website",
    tools:[ 
      {id:1,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"HTML"},
      {id:2,color:"rgb(40, 112, 251);",back:"rgba(40, 112, 251, 0.063)",name:"CSS"},
      {id:3,color:"rgb(120, 54, 250)",back:"rgba(120, 54, 250, 0.063)",name:"Bootstrap"},
      {id:4,color:"rgb(239, 216, 29)",back:"rgba(239, 216, 29, 0.063)",name:"JavaScript"},
      {id:5,color:"rgb(8, 101, 166)",back:"rgba(8, 101, 166, 0.063)",name:"JQuery"},
    ]
  },
  {
    id: 3,
    title: "Elite Group",
    img: `${img3}`,
    desc: "Landing Page for interior design Company In Istanbul",
    online: "http://elitedesigngroup.randombyte.co/",
    githublink: null,
    type:"Landing Page",
    tools:[ 
      {id:1,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"HTML"},
      {id:2,color:"rgb(40, 112, 251);",back:"rgba(40, 112, 251, 0.063)",name:"CSS"},
      {id:3,color:"rgb(120, 54, 250)",back:"rgba(120, 54, 250, 0.063)",name:"Bootstrap"},
    ]
  },
  {
    id: 4,
    title: "Pizarro Rest",
    img: `${img4}`,
    desc: " Pizzaro Rest  is a website for Pizza Restaurant  I used React js + React Router + Styled Component ",
    online: "https://pizza-nine-tan.vercel.app/",
    githublink: "https://github.com/mohammed706/pizza",
    type:"Website",
    tools:[
      {id:1,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"React Js"},
      {id:2,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"Reactstrap"},
      {id:3,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"React Router"},
      {id:4,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"React Hooks"},
      {id:5,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"React Intl"},
      {id:6,color:"rgb(0, 167, 110)",back:"rgba(0, 167, 110, 0.063)",name:"Axios"}    ],
  },
  {
    id: 5,
    title: "Capriani Gelato",
    img: `${img5}`,
    desc: "Landing Page for Capriani Gelato App",
    online: "https://caprianigelato.com/",
    githublink: null,
    type:"Landing Page",
    tools:[ 
      {id:1,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"HTML"},
      {id:2,color:"rgb(40, 112, 251);",back:"rgba(40, 112, 251, 0.063)",name:"CSS"},
      {id:3,color:"rgb(120, 54, 250)",back:"rgba(120, 54, 250, 0.063)",name:"Bootstrap"},
    ]
  },
  {
    id: 6,
    title: "Money list",
    img: `${img6}`,
    desc: "Money list  is a React Js Project to add and delete Money transfer, I do it for Eduicational purpuses  I used React JS  + React Hooks + context&Reducer + React Router + firebase",
    online: "https://my-money-67299.web.app/login",
    githublink: "https://github.com/mohammed706/money",
    type:"Firebase website",
    tools:[
      {id:1,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"React Js"},
      {id:2,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"Reactstrap"},
      {id:3,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"React Router"},
      {id:4,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"React Hooks"},
      {id:5,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"React Intl"},
      {id:6,color:"rgb(0, 167, 110)",back:"rgba(0, 167, 110, 0.063)",name:"Axios"},
      {id:7,color:"rgb(239, 216, 29)",back:"rgba(239, 216, 29, 0.063)",name:"FireBase 9"},

    ],

  },
  {
    id: 7,
    title: "Firebase project",
    img: `${img7}`,
    desc: "it's  is a React Js Project,it's like a dashboard with user Authintication and add projects list in every user account and share comments between all users  , I do it for Eduicational purpuses  I used React JS  + React Hooks + context&Reducer + React Router + firebase",
    online: "https://mkchat.vercel.app/",
    githublink: "https://github.com/mohammed706/FirebaseProject",
    type:"Firebase website",
    tools:[
      {id:1,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"React Js"},
      {id:2,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"Reactstrap"},
      {id:3,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"React Router"},
      {id:4,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"React Hooks"},
      {id:5,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"React Intl"},
      {id:6,color:"rgb(0, 167, 110)",back:"rgba(0, 167, 110, 0.063)",name:"Axios"},
      {id:7,color:"rgb(239, 216, 29)",back:"rgba(239, 216, 29, 0.063)",name:"FireBase 9"},

    ],
  },
  {
    id: 8,
    title: "Kitab Moben",
    img: `${img8}`,
    desc: "landing page for Kitab moben App ",
    online: "https://kitabmuben.com/",
    githublink: null,
    type:"Landing Page",
    tools:[ 
      {id:1,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"HTML"},
      {id:2,color:"rgb(40, 112, 251);",back:"rgba(40, 112, 251, 0.063)",name:"CSS"},
      {id:3,color:"rgb(120, 54, 250)",back:"rgba(120, 54, 250, 0.063)",name:"Bootstrap"},
    ]
  },
  {
    id: 9,
    title: "Casakai menu",
    img: `${img9}`,
    desc: " It's a menu for CasaKai rest in Saudi Arabia , it's changing from the dashboard , and display the menu when the customer Scan the QR on the table ",
    online: "https://menu.casakai.net/",
    githublink: null,
    type:"Website",
    tools:[
      {id:1,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"React Js"},
      {id:2,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"Reactstrap"},
      {id:3,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"React Router"},
      {id:4,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"React Hooks"},
      {id:5,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"React Intl"},
      {id:6,color:"rgb(0, 167, 110)",back:"rgba(0, 167, 110, 0.063)",name:"Axios"},
      

    ],
  },
  {
    id: 10,
    title: "PIO-CARE",
    img: `${img10}`,
    desc: "landing Page for medical center in Istanbul",
    online: "https://pio-care.vercel.app/",
    githublink: "https://github.com/mohammed706/Pio-Care",
    type:"Landing Page",
    tools:[ 
      {id:1,color:"rgb(242, 153, 0)",back:"rgba(242, 153, 0, 0.063)",name:"HTML"},
      {id:2,color:"rgb(40, 112, 251);",back:"rgba(40, 112, 251, 0.063)",name:"CSS"},
      {id:3,color:"rgb(120, 54, 250)",back:"rgba(120, 54, 250, 0.063)",name:"Bootstrap"},
    ]
  }
];
