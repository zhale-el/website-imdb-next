import MenuItem from "../menuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
const Header = () => {
  return (
    <div>
      <div className="">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className=""></div>
    </div>
  );
};

export default Header;
