import { Stack, useRouter } from "expo-router";
import "../global.css";
import AuthContextProvider, { authState } from "../Context/authContext";
import { useEffect } from "react";
import { supabase } from "../lib/supabase";
import { getuserData } from "../services/userServices";

const _layout = () => {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
};

const MainLayout = () => {
  const router = useRouter();
  const { user, setAuth } = authState();
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setAuth(session.user.id);
        userData(session.user.id);
        router.replace("/home");
      } else {
        router.replace("/login");
      }
    });
  }, []);

  const userData = async (userid) => {
    let data = await getuserData(userid);
    setAuth(data.data);
  };
  return <Stack screenOptions={{ headerShown: false }}></Stack>;
};

export default _layout;
