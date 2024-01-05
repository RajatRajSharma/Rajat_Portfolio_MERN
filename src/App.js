import './App.css';
import Layout from './Components/Layout/Layout';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Educations from './pages/Educations/Educations';
import Projects from './pages/Projects/Projects';
import Techstack from './pages/Techstack/Techstack';
import Workexp from './pages/Workexp/Workexp';
import ScrollToTop from './ScrollToTop';
import { useTheme } from "./context/ThemeContext";
import MobileNav from './Components/MobileNav/MobileNav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className='container about-app'>
          <About />
          <Educations />
          <Techstack />
          <Projects />
          <Workexp />
          <Contact />
        </div>
        <div className='fotter pb-2'>
          <h4 className='text-center'>Made/Owned by 👨🏽‍💻 Rajat raj Sharma</h4>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}

export default App;
