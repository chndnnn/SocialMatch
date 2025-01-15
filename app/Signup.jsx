import { useRouter } from "expo-router";
import Icons from "../assets/Icons/Index";
import ScreenWrapper from "../components/ScreenWraper";
import { Alert, Pressable, Text, View } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useState } from "react";

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  function onSignupClick() {
    if (!email && !password && !username) {
      Alert.alert("Signup", "Please fill all the fields");
    }
  }

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
            <Text className="font-bold text-4xl">Let's</Text>
            <Text className="font-bold text-4xl">Get Started</Text>
          </View>
          <View className="flex-1 mt-10 items-center gap-7">
            <Text className="">Please fill details to create an account</Text>
            <CustomInput
              icon={"User"}
              placeholder={"Username"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <CustomInput
              icon={"Email"}
              placeholder={"Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomInput
              icon={"Password"}
              value={password}
              placeholder={"Password"}
              secureTextEntry={true}
              viewPass={true}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Text className="text-blue-500">Forgot Password?</Text>
            <CustomButton onClick={onSignupClick} name={"Signup"} />
            <View className="flex flex-row gap-1">
              <Text>Already have an account?</Text>
              <Pressable onPress={() => router.push("/login")}>
                <Text className="text-blue-500">Login</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Signup;
