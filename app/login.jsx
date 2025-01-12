import { useRouter } from "expo-router";
import Icons from "../assets/Icons/Index";
import ScreenWrapper from "../components/ScreenWraper";
import { Pressable, Text, TextInput, View } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const Login = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <View className="flex-1  p-2">
        <View className="mb-10">
          <Pressable
            onPress={() => router.back()}
            className="bg-gray-300 p-2 rounded-2xl self-start"
          >
            <Icons name={"Back"} />
          </Pressable>
        </View>
        <View className=" flex-1 ">
          <View className="flex flex-col gap-2">
            <Text className="font-bold text-4xl">Hey,</Text>
            <Text className="font-bold text-4xl">Welcome back!</Text>
          </View>
          <View className="flex-1 mt-10 items-center gap-5 ">
            <Text className="">Please Login to continue</Text>
            <CustomInput icon={"Email"} />
            <CustomInput icon={"Password"} secureTextEntry={true} />
            <CustomButton name={"Login"} />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;
