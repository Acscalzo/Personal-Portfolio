import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Header/hero/hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import Expertise from "./components/expertise/Expertise";
import css from './styles/app.module.scss';

const App = () => {

    return <div className={`bg-primary ${css.container}`}>
      <Header/>
      <Hero/>
      <Expertise/>
      <Works/>
      <Portfolio/>
      <Footer/>
    </div>
  };

export default App;
