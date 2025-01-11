import ArrowLeft01Icon from "./BackIcon";
import HomeIcon from "./HomeIcon";

let allIcons = {
  HomeIcon: HomeIcon,
  Back: ArrowLeft01Icon,
};

const Icons = ({ name }) => {
  const IconComp = allIcons[name];
  return <IconComp />;
};

export default Icons;
