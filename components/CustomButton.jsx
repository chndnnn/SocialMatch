import { Text, TouchableOpacity } from "react-native";
import Laoding from "./Loading";

const CustomButton = ({ loading = false, name }) => {
  return (
    <TouchableOpacity className="flex border bg-green-500 w-[80%] mb-1 items-center py-3 rounded">
      {!loading ? (
        <Text className="text-white tracking-wide">{name}</Text>
      ) : (
        <Laoding size="small" color="green" />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
