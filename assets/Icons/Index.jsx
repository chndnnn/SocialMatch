import ArrowLeft01Icon from "./BackIcon";
import Email from "./EmailIcons";
import HomeIcon from "./HomeIcon";
import Password from "./Password";

let allIcons = {
  HomeIcon: HomeIcon,
  Back: ArrowLeft01Icon,
  Email: Email,
  Password: Password,
};

const Icons = ({ name }) => {
  const IconComp = allIcons[name];
  return <IconComp />;
};

export default Icons;
