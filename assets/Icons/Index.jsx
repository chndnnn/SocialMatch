import ArrowLeft01Icon from "./BackIcon";
import Email from "./EmailIcons";
import HomeIcon from "./HomeIcon";
import Password from "./Password";
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
};

const Icons = ({ name }) => {
  const IconComp = allIcons[name];
  return <IconComp />;
};

export default Icons;
