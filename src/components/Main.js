import Logo from "../assets/logo.png";
import Nasa from "./Nasa/Nasa";
import classes from "./Main.module.css";
import Footer from "./UI/Footer";

const Main = () => {
  return (
    <div className={classes.main}>
      <img src={Logo} />
      <Nasa />
      <Footer />
    </div>
  );
};

export default Main;
