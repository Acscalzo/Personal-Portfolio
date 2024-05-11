import Home from './pages/Home/Home';
import Expertise from './pages/Expertise/Expertise';
import Experience from './pages/Experience/Experience';
import Portfolio from './pages/Portfolio/Portfolio';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {

    return(
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/expertise" element={<Expertise/>}/>
        <Route exact path="/experience" element={<Experience/>}/>
        <Route exact path="/portfolio" element={<Portfolio/>}/>
        <Route exact path="/blog" element={<Blog/>}/>
        <Route exact path="/expertise" element={<Expertise/>}/>
      </Routes>
    );
  };
0
export default App;
