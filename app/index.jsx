import { useRouter } from "expo-router";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import ScreenWrapper from "../components/ScreenWraper";
import HomeIcon from "../assets/Icons/HomeIcon";
import Icons from "../assets/Icons/Index";

const Index = () => {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <View>
        <Text onPress={() => router.push({ pathname: "/WelomeScreen" })}>
          Welcome
          <Icons name={"HomeIcon"} />
          <Icons name={"Back"} />
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default Index;
