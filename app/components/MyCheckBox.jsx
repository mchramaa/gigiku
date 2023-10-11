import React from "react";
import { CheckBox } from "react-native-elements";

const MyCheckbox = ({ checked, onPress }) => {
  return <CheckBox checked={checked} onPress={onPress} />;
};

export default MyCheckbox;
