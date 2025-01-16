import { Text, TouchableOpacity } from "react-native";
import Laoding from "./Loading";

const CustomButton = ({ loading = false, name, onClick }) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
      }}
      className="flex border border-green-500 w-[80%] bg-green-500  mb-1 items-center py-3 rounded-xl"
    >
      {!loading ? (
        <Text className="text-white tracking-wide">{name}</Text>
      ) : (
        <Laoding size="small" color="green" />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
