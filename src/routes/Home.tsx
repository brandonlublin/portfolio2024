import AboutMe from "../components/AboutMe/AboutMe";
import Details from "../components/Details/Details";
import '../index.css';
const Home = () => (
  <div className='app'>
    <div className='appContainer'>
      <div className='aboutMe'>
        <AboutMe />
      </div>
      <div className='details'>
        <Details />
      </div>
    </div>
  </div>
);

export default Home;