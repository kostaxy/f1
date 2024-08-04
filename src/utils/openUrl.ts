import { Alert, Linking } from "react-native";

const openUrl = async (url: string) => {
  try {
    await Linking.openURL(url);
  } catch {
    Alert.alert(`error while open: ${url}`);
  }
};

export { openUrl }