import { TextInput, View } from "react-native";
import Icons from "../assets/Icons/Index";

const CustomInput = ({ icon = "HomeIcon", secureTextEntry = false }) => {
  return (
    <View className="w-[90%]  border border-neutral-400 bg-neutral-200 rounded-xl gap-2 p-2 flex flex-row items-center">
      <View className="flex-shrink ">
        <Icons name={icon} />
      </View>
      <TextInput
        className="flex-1 text-white"
        placeholder="Type here"
        placeholderTextColor="gray"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;
