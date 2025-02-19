import recipeIcon from '../assets/icons/recipe.png';
import reactIcon from '../assets/icons/react.png';
import typescriptIcon from '../assets/icons/typescript.png';
import rubyIcon from '../assets/icons/ruby.png';
import githubIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import resumeIcon from '../assets/icons/resume.png';

export const projects = [
  {
    id: 1,
    title: "Recipe Finder",
    description: "Just a simple recipe finder, that allows the user to search for recipes, filter recipes by ingredients, cuisine, dietary restrictions, and more.",
    githubLink: "https://github.com/username/recipe-finder",
    screenshots: [
      {
        id: 1,
        imgUrl: "https://via.placeholder.com/151",
        label: "Recipe search interface with filter options",
      },
      {
        id: 2,
        imgUrl: "https://via.placeholder.com/151",
        label: "Detailed recipe view showing nutritional information and preparation steps",
      }
    ],
    research: [
      "Investigated the use of the Spoonacular API for recipe data.",
      "Explored various React state management techniques (such as Context API and Redux) to manage search results and user preferences.",
    ],
    capabilities: [
      "Users can search for recipes by name or ingredients.",
      "Filter recipes by cuisine (e.g., Italian, Indian, etc.) and dietary restrictions (e.g., vegetarian, vegan, gluten-free).",
      "View detailed recipe instructions, ingredients, and nutritional information.",
    ],
    img: recipeIcon,
    imgAlt: "recipe icon",
    languages: ["React", "TypeScript"],
  },
  {
    id: 2,
    title: "WeatherSpot",
    description: "This is project 1",
    longDescription: "WeatherSpot is a weather forecasting app that allows users to view current weather conditions and forecasts based on their location or a specific city.",
    capabilities: [
      "Real-time weather data from a reliable weather API (e.g., OpenWeatherMap).",
      "Users can search for weather in different cities worldwide.",
      "Displays hourly and 7-day weather forecasts.",
    ],
    research: [
      "Researched and implemented OpenWeatherMap API for accurate weather data.",
      "Designed a clean, user-friendly interface using React.",
    ],
    screenshots: [
      {
        id: 1,
        imgUrl: "https://via.placeholder.com/151",
        label: "Main weather display page with current conditions and forecast.",
      },
      {
        id: 2,
        imgUrl: "https://via.placeholder.com/151",
        label: "City search functionality showing location-based weather data.",
      }
    ],
    img: "https://via.placeholder.com/151",
    imgAlt: "weatherSpot icon",
    languages: ["React", "TypeScript", "Node"],
  },
];

export const profiles = [
  {
    url: 'https://www.linkedin.com/in/brandon-lublin-78a550a8/',
    icon: linkedinIcon,
    alt: 'linkedin icon'
  },
  {
    url: 'https://github.com/brandonlublin',
    icon: githubIcon,
    alt: 'github icon'
  },
  {
    url: '#',
    icon: resumeIcon,
    alt: 'resume icon'
  }
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

export const quirks = ['4 Years of Experience', 'Interpersonal Communication Expert', 'B2B SaaS']

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

export const skills = [
  {
    id: 1,
    name: "The Thrill of the Challenge",
    description: "Whether it's carving down a snowy mountain while snowboarding or solving complex coding problems, I thrive on tackling challenges head-on. It's about the adrenaline and the satisfaction of figuring it out. Is there any bigger challenge than JavaScript??"
  },
  {
    id: 2,
    name: "Exploring New Horizons",
    description: "From traveling to new destinations to learning new skills, I’m driven by curiosity and a love for discovery. These experiences fuel my creativity and broaden my perspective."
  },
  {
    id: 3,
    name: "The Pursuit of Mastery",
    description: "My stubborn work ethic pushes me to continuously improve, whether I’m refining my golf swing, building a better UI, or ensuring a project’s success. I believe success is earned through persistence and dedication."
  }
]

export const peerFeedback = [
  {
    id: 1,
    name: "Justin L",
    feedback: "Brandon joined our product/engineering team as a temporary assist to help us with a real capacity crunch. As an Accelerator he is still fairly new in his career, but his level of dedication and professionalism didn't let that impact his work. He ended up staying on our team through multiple release cycles and was a huge help in getting some really complicated front end work done. It has been great to watch him grow in confidence technically - but also in his ability to reach out, ask questions of product and make sure that his work is successful. Those skills will serve him well on his software career path, and I wish him the best!"
  },
  {
    id: 2,
    name: "Matt I",
    feedback: "Brandon and I worked on the Identity and Access Management crew at Highspot. Our collaboration fantastic – his positive attitude, can-do spirit, and willingness to work through problems together made every interaction a joy. \nI particularly appreciated how his features were consistently well executed and built right the first time, minimizing bugs or rework. \nBrandon's humility and eagerness to learn set a positive example for the team. Working with him was not only productive but also enjoyable. His dedication and skill make him a valuable teammate in any project."
  },
  {
    id: 3,
    name: "Kate D",
    feedback: "I have worked with Brandon for almost 4 years in the Accelerate program and Solution Management. He is a dedicated team player first and foremost and an empathetic leader. We worked on complex features with ambiguous requirements that required discussion and technical expertise that needed foresight and thoughtfulness. Because Brandon possesses these qualities, we were able to successfully deliver security features dealing with sign in. He is also responsible for a major feature that is used today which is called HighBot. This bot was part of a project done off work hours that is now used to make sure our pull requests are complete and robust with unit tests. \nIn addition to being technically sound, Brandon is genuinely a pleasant human being to work with and a great friend to all of us on his team. He is always up for conversation and an empathetic ear while willing to drop everything to help a teammate. I consider myself very lucky having the chance to work with Brandon in our career journey as software engineers. Any team and company would be all the better with him there."
  }
]