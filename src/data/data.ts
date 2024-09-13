import recipeIcon from '../assets/icons/recipe.png';
import reactIcon from '../assets/icons/react.png';
import typescriptIcon from '../assets/icons/typescript.png';
import rubyIcon from '../assets/icons/ruby.png';

export const projects = [
  {
    id: 1,
    title: "Recipe Finder",
    description: "Just a simple recipe finder, that allows the user to search for recipes, filter recipes by ingredients, cuisine, dietary restrictions, and more.",
    img: recipeIcon,
    imgAlt: "recipe icon",
    languages: ["React", "TypeScript"],
  },
  {
    id: 2,
    title: "WeatherSpot",
    description: "This is project 1",
    img: "https://via.placeholder.com/151",
    imgAlt: "weatherSpot icon",
    languages: ["React", "TypeScript", "Node", "Express"],
  },
];

export const workHistory = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Highspot",
    location: "Seattle, WA",
    dates: "2020 - Present",
    description: "I work on the Highspot engineering team.",
  },
  {
    id: 1,
    title: "EDI Systems Analyst",
    company: "Expeditors International",
    location: "Seattle, WA",
    dates: "2015 - 2020",
    description: "I work on the Expeditors EDI team.",
  },
];

export const languageIcons = [
  {
    id: 1,
    name: "React Icon",
    img: reactIcon,
  },
  {
    id: 2,
    name: "TypeScript Icon",
    img: typescriptIcon,
  },
  {
    id: 4,
    name: "Ruby Icon",
    img: rubyIcon,
  },
]

export const quirks = ['4 Years of Experience', 'B2B SaaS', 'Interpersonal Communication Expert']

export const links = [
  { 
    id: 1,
    text: 'GitHub',
    url: ''
  },
  { 
    id: 2,
    text: 'LinkedIn',
    url: ''
  }
]