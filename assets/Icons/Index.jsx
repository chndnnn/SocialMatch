import ArrowLeft01Icon from "./BackIcon";
import Email from "./EmailIcons";
import Favourite from "./Favourites";
import HomeIcon from "./HomeIcon";
import Password from "./Password";
import Phone from "./Phone";
import User from "./User";
import ViewOff from "./ViewOff";
import ViewOn from "./ViewOn";

let allIcons = {
  HomeIcon: HomeIcon,
  Back: ArrowLeft01Icon,
  Email: Email,
  Password: Password,
  ViewOff: ViewOff,
  ViewOn: ViewOn,
  User: User,
  Favourite: Favourite,
  Phone: Phone,
};

const Icons = ({ name }) => {
  const IconComp = allIcons[name];
  return <IconComp />;
};

export default Icons;
