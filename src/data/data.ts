import recipeIcon from '../assets/icons/recipe.png';
import reactIcon from '../assets/icons/react.png';
import typescriptIcon from '../assets/icons/typescript.png';
import rubyIcon from '../assets/icons/ruby.png';
import githubIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import resumeIcon from '../assets/icons/resume.png';
import recipeDetails from '../assets/images/recipe-details-recipe-finder.png';
import homepageRecipeFinder from '../assets/images/homepage-recipe-finder.png';
import paginationRecipeFinder from '../assets/images/pagination-recipe-finder.png';
import filterCuisineRecipeFinder from '../assets/images/filter-cuisine-type-recipe-finder.png';
import addJob from '../assets/images/add-job.png';
import jobPostings from '../assets/images/job-postings.png';
import filterJobs from '../assets/images/filter-jobs.png';
import applyVia from '../assets/images/apply-via.png';
import jobHomepage from '../assets/images/homepage.png';
import appliedJob from '../assets/images/applied-job.png';
import expandedJob from '../assets/images/expanded-job.png';

export const projects = [
  {
    id: 1,
    title: "Recipe Finder",
    description: "I built this because I was tired of scrolling through endless recipe sites trying to find something that actually worked with what I had in my fridge. It's a simple tool, but it does exactly what I needed: lets me search by what I've got, filter by what I'm in the mood for, and actually find recipes that make sense for my life.",
    gitHubLink: "https://github.com/brandonlublin/recipe-finder",
    screenshots: [
      {
        id: 1,
        imgUrl: homepageRecipeFinder,
        label: "The main search page where you can filter by ingredients, cuisine, and dietary needs",
      },
      {
        id: 2,
        imgUrl: recipeDetails,
        label: "When you find a recipe you like, you get all the details: ingredients, steps, even the nutritional info",
      },
      {
        id: 3,
        imgUrl: paginationRecipeFinder,
        label: "I spent way too much time getting the pagination right. You can jump to any page, and it shows you how many pages there are total",
      },
      {
        id: 4,
        imgUrl: filterCuisineRecipeFinder,
        label: "The filters are what make this actually useful: cuisine type, dietary restrictions, all that stuff",
      }
    ],
    research: [
      "I spent a good chunk of time digging into the Spoonacular API. It's got everything, but figuring out how to structure the calls and handle the data took some trial and error.",
      "This was one of my first real projects where I had to think about state management. I tried Context API first, then Redux, then back to Context. Learned a lot about when to use what, and honestly, sometimes the simpler solution is the right one.",
    ],
    capabilities: [
      "Search by recipe name or just throw in whatever ingredients you have lying around",
      "Filter by cuisine type (Italian, Indian, whatever you're craving) and dietary stuff (vegetarian, vegan, gluten-free)",
      "See the full recipe with instructions, ingredients list, and nutritional info",
    ],
    img: recipeIcon,
    imgAlt: "recipe icon",
    languages: ["React", "TypeScript"],
  },
  {
    id: 2,
    title: "Job Applicator",
    description: "Job hunting is exhausting. I was bouncing between LinkedIn, Indeed, and like five other sites, and I kept losing track of what I'd applied to where. So I built this to bring everything into one place. It's not fancy, but it lets me filter by what actually matters to me: salary, remote work, that kind of stuff, so I can be way more intentional about where I'm putting my energy.",
    gitHubLink: "https://github.com/brandonlublin/jobapplicator",
    todos: ["I really want to add more analytics around my job applications: like tracking response rates, time to hear back, that kind of thing", "I keep saying I'll get this hosted, but honestly it's been demoted to house projects lately. Maybe one day."],
    screenshots: [
      {
        id: 1,
        imgUrl: jobHomepage,
        label: "The main dashboard where all the jobs live. Clean and simple, which is what I needed",
      },
      {
        id: 2,
        imgUrl: addJob,
        label: "Sometimes you find a job somewhere else, so I made it easy to just add it manually",
      },
      {
        id: 3,
        imgUrl: jobPostings,
        label: "All the jobs in one place. No more switching between tabs",
      },
      {
        id: 4,
        imgUrl: filterJobs,
        label: "The filters are the whole point: salary range, remote only, stuff like that",
      },
      {
        id: 5,
        imgUrl: applyVia,
        label: "Click through to apply right from here. Saves me a few seconds, which adds up",
      },
      {
        id: 6,
        imgUrl: appliedJob,
        label: "This is where I track what I've actually applied to. Helps me not double-apply or lose track",
      },
      {
        id: 7,
        imgUrl: expandedJob,
        label: "When you click on a job, you get all the details. Sometimes I just need to see everything at once",
      }
    ],
    research: [
      "I spent way too much time trying to figure out which job board APIs actually work. Indeed's API is a pain, LinkedIn's is even worse, and most of the remote-specific boards don't have public APIs. Ended up doing a lot of manual aggregation, which wasn't the plan but it works.",
      "The filtering was trickier than I thought. When you're dealing with a bunch of different data sources, making sure the filters work consistently across all of them took some doing.",
      "I learned a lot about handling bigger datasets in React. At first it was slow, but once I figured out how to properly paginate and only render what's visible, it got way better.",
    ],
    capabilities: [
      "Pulls jobs from multiple places and puts them all in one spot",
      "You can add jobs manually if you find them somewhere else",
      "Filter by salary, remote work, job type: the stuff that actually matters",
      "Track what you've applied to so you don't lose track or double-apply",
      "Quick links to apply directly from the dashboard",
    ],
    img: "",
    imgAlt: "Job Applicator icon",
    languages: ["React", "TypeScript", "Node", "Express"],
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
    url: 'https://docs.google.com/document/d/1aN8CQ0Bq2DaJla_W29cGK7GUTvjswCrw_rp0mQ0vMaQ/edit?tab=t.0',
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
    id: 2,
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
    name: "Matt I.",
    feedback: "Brandon and I worked on the Identity and Access Management crew at Highspot. Our collaboration fantastic: his positive attitude, can-do spirit, and willingness to work through problems together made every interaction a joy. \nI particularly appreciated how his features were consistently well executed and built right the first time, minimizing bugs or rework. \nBrandon's humility and eagerness to learn set a positive example for the team. Working with him was not only productive but also enjoyable. His dedication and skill make him a valuable teammate in any project."
  },
  {
    id: 2,
    name: "Kate D.",
    feedback: "I have worked with Brandon for almost 4 years in the Solution Management Crew. He is a dedicated team player first and foremost and an empathetic leader. We worked on complex features with ambiguous requirements that required discussion and technical expertise that needed foresight and thoughtfulness. Because Brandon possesses these qualities, we were able to successfully deliver security features dealing with sign in. He is also responsible for a major feature that is used today which is called HighBot. This bot was part of a project done off work hours that is now used to make sure our pull requests are complete and robust with unit tests. \nIn addition to being technically sound, Brandon is genuinely a pleasant human being to work with and a great friend to all of us on his team. He is always up for conversation and an empathetic ear while willing to drop everything to help a teammate. I consider myself very lucky having the chance to work with Brandon in our career journey as software engineers. Any team and company would be all the better with him there."
  },
  {
    id: 3,
    name: "Justin L.",
    feedback: "Brandon joined our product/engineering team as a temporary assist to help us with a real capacity crunch. As an Accelerator he is still fairly new in his career, but his level of dedication and professionalism didn't let that impact his work. He ended up staying on our team through multiple release cycles and was a huge help in getting some really complicated front end work done. It has been great to watch him grow in confidence technically - but also in his ability to reach out, ask questions of product and make sure that his work is successful. Those skills will serve him well on his software career path, and I wish him the best!"
  },
  {
    id: 4,
    name: "Neha V.",
    feedback: "I had the pleasure of working with Brandon, and I was consistently impressed by his dedication and growth mindset. He brought strong front-end engineering skills, a thoughtful approach, and a genuine passion for building great software. What truly stood out was his commitment to growth: steadily evolving into a capable full-stack engineer by asking the right questions, diving deep into backend systems, and always seeking to understand the bigger picture.\nCollaborating with Brandon on features was not only productive but genuinely enjoyable. He took ownership of his work, cared deeply about doing things systematically, and consistently brought a positive, can-do attitude to every project. Brandon is thoughtful, reliable, communicative, and driven, always committed to doing things the right way.\nHis positive energy, sense of responsibility, and willingness to support teammates made him a real asset to the team. Any team would be fortunate to have him on board as a dependable and highly motivated engineer."
  }
]