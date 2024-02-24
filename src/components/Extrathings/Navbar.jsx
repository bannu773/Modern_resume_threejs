import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "../Extrathings/styles";
import { navVariants } from "../Extrathings/utils/motion";
import { Button } from 'antd';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={` h-[80px] relative flex justify-center align-middle `}
  >
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <div className="glass p-1">
        <img
          src="/autoresume.png"
          alt="search"
          className="w-[70px] h-[70px] object-contain"
        />
      </div>
      <h2
        className="font-extrabold text-[24px] leading-[30.24px] text-white flex justify-center align-baseline flex-wrap"
        style={{ alignItems: "center" }}
      >
        AUTO RESUME
      </h2>
      <div className="flex justify-center align-middle" style={{alignItems : "center"}}>
        <Button ghost> <Link to="/signin" >SignUp/SignIn</Link></Button>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
