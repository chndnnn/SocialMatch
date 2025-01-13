import { Pressable, TextInput, View } from "react-native";
import Icons from "../assets/Icons/Index";
import { useEffect, useState } from "react";

const CustomInput = ({
  icon = "HomeIcon",
  secureTextEntry = false,
  viewPass,
  placeholder,
}) => {
  const [secure, setSecure] = useState();
  useEffect(() => {
    setSecure(secureTextEntry);
  }, [secureTextEntry]);
  return (
    <View className="w-[90%]  border border-neutral-400 bg-neutral-200 rounded-xl gap-2 p-2 flex flex-row items-center">
      <View className="flex-shrink ">
        <Icons name={icon} />
      </View>
      <TextInput
        className="flex-1"
        placeholder={placeholder || "Type here..."}
        placeholderTextColor="gray"
        secureTextEntry={secure}
      />
      {viewPass && (
        <View className="flex-shrink ">
          <Pressable onPress={() => setSecure((prev) => !prev)}>
            {secure ? <Icons name={"ViewOff"} /> : <Icons name={"ViewOn"} />}
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default CustomInput;
