import { Pressable, Text } from "react-native";
import { View } from "react-native";
import { authState } from "../../Context/authContext";
import ScreenWrapper from "../../components/ScreenWraper";
import { supabase } from "../../lib/supabase";
import {  useState } from "react";
import CustomInput from "../../components/CustomInput";

const Home = () => {
  const { user, setAuth } = authState();
  const [phone, setPhone] = useState();
  function onLogutClick() {
    setAuth(null);
    const { error } = supabase.auth.signOut();
    if (error) {
      Alert.alert("Signout", "Error while signing out");
    }
  }

  async function onUpdatePress() {
    if (phone) {
      data = {
        phone,
      };
      let res = await updateData(data);
      if (res.success) {
        Alert.alert("Updated successfully");
      }
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
        <Pressable onPress={onUpdatePress}>
          <Text>update</Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
};

export default Home;
