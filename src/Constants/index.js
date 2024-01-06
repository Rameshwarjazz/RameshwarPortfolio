import css from '../assets/css.png'
import express from '../assets/express.png'
import firebase from '../assets/firebase.png'
import git from '../assets/git.png'
import html from '../assets/html.png'
import java from '../assets/java.png'
import js from '../assets/js.png'
import mongo from '../assets/mongo.jpg'
import node from '../assets/node.png'
import react from '../assets/react.jpg'
import reactdev from '../assets/reactdev.jpg'
import redux from '../assets/redux.png'
import tailwind from '../assets/tailwind.png'
import uidev from '../assets/uidev.png'
import vite from '../assets/vite.jpg'
import webdev from '../assets/webdev.jpg'
import recipe from '../assets/recipe.jpg'
import ecommerce from '../assets/ecom.jpg'
import chatapp from '../assets/chatapp.jpg'



const serice=[
    {
        title:"WebDevloper",
        icon:webdev,
    },
    {
        title:"ReactDevloper",
        icon:reactdev,
        
    },
    {
        title:"UI/UX Developer",
        icon:uidev,
    }
]
const technologies =[
    {
        name:"react",
        icon:react,
    },
    {
        name:"Css",
        icon:css,
    },
    {
        name:"Express",
        icon:express,
    },
    {
        name:"Firebase",
        icon:firebase,
    },
    {
        name:"Git",
        icon:git,
    },
    {
        name:"Html",
        icon:html,
    },
    {
        name:"Java",
        icon:java,
    },
    {
        name:"Javascript",
        icon:js,
    },
    {
        name:"Mongo",
        icon:mongo,
    },
    {
        name:"Node",
        icon:node,
    },
    {
        name:"Redux",
        icon:redux,
    },
    {
        name:"Tailwind",
        icon:tailwind,
    },
    {
        name:"Vite",
        icon:vite,
    },
    

]

const project=[
    {
        name:"Ecommerce",
        description:'Developed a feature-rich eCommerce app using React for a seamless and engaging user experience',
        image:ecommerce,
        source_code_link:'https://github.com/Rameshwarjazz/ecomerce',
        source_deploy_link:'https://fluffy-twilight-44c5d7.netlify.app/'
    },
    {
        name:"Chat App",
        description:'Developed a feature-rich ChatApp using React and Redux. Implemented Redux for efficient state management ',
        image:chatapp,
        source_code_link:'https://github.com/Rameshwarjazz/todo-app',
        source_deploy_link:'https://exquisite-pavlova-45e400.netlify.app/'
    },
    {
        name:"Recipe Finder",
        description:'Developed a feature-rich RecipeFinder app using React for a seamless and engaging user experience',
        image:recipe,
        source_code_link:'https://github.com/Rameshwarjazz/recipe-finder',
        source_deploy_link:'hhttps://sparkly-pixie-acc3f3.netlify.app/'
    }
]



export {serice,technologies,project}