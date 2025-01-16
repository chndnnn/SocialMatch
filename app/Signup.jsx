import { useRouter } from "expo-router";
import Icons from "../assets/Icons/Index";
import ScreenWrapper from "../components/ScreenWraper";
import { Alert, Pressable, Text, View } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import { supabase } from "../lib/supabase";

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [lodaing, setLoading] = useState(false);

  async function onSignupClick() {
    console.log(email, password, username);
    if (!email && !password && !username) {
      Alert.alert("Signup", "Please fill all the fields");
      return;
    }
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    setLoading(false);
    if (!error) Alert.alert("Sign Up", "Successfully signedup");
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
              onChange={(e) => setUsername(e)}
            />
            <CustomInput
              icon={"Email"}
              placeholder={"Email"}
              value={email}
              onChange={(e) => setEmail(e)}
            />
            <CustomInput
              icon={"Password"}
              value={password}
              placeholder={"Password"}
              secureTextEntry={true}
              viewPass={true}
              onChange={(e) => setPassword(e)}
            />
            <Text className="text-blue-500">Forgot Password?</Text>
            <CustomButton
              onClick={onSignupClick}
              name={"Signup"}
              loading={lodaing}
            />
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
