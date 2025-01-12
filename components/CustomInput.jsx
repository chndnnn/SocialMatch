import { TextInput, View } from "react-native";
import Icons from "../assets/Icons/Index";

const CustomInput = ({ icon = "HomeIcon", secureTextEntry = false }) => {
  return (
    <View className="w-full border border-gray-400 rounded-xl gap-2 p-2 flex flex-row items-center">
      <View className="flex-shrink bg-neutral-700 ">
        <Icons name={icon} />
      </View>
      <TextInput
        className="flex-1 text-white bg-neutral-700"
        placeholder="Type here"
        placeholderTextColor="gray"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;
