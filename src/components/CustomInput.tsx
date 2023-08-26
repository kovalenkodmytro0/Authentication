import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

interface CustomInputProps {
  value: string;
  placeholder: string;
  secureTextEntry?: boolean;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
}: CustomInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {},
});
