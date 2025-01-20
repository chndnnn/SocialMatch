import { Pressable, Text } from "react-native";
import { View } from "react-native";
import { authState } from "../../Context/authContext";
import { useRouter } from "expo-router";
import ScreenWrapper from "../../components/ScreenWraper";
import { supabase } from "../../lib/supabase";
import { useEffect, useState } from "react";
import CustomInput from "../../components/CustomInput";

const Home = () => {
  const { user, setAuth } = authState();
  const [phone, setPhone] = useState();
  const router = useRouter();
  function onLogutClick() {
    setAuth(null);
    const { error } = supabase.auth.signOut();
    if (error) {
      Alert.alert("Signout", "Error while signing out");
    }
  }

  return (
    <ScreenWrapper>
      <View>
        <Text>Home</Text>
        <Pressable onPress={() => onLogutClick()}>
          <Text>Logout</Text>
          <Text>{user?.name}</Text>
        </Pressable>
        <CustomInput
          icon={"Phone"}
          placeholder={"Phone"}
          value={phone}
          onChange={(e) => setPhone(e)}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Home;
