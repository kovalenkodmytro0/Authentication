import {Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface CustomButtonProps {
  text: string;
  type?: string;
  bgColor?: string;
  fgColor?: string;
  onPress: () => void;
}

const CustomButton = ({
  onPress,
  text,
  type = 'PRIMARY',
  bgColor,
  fgColor,
}: CustomButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
