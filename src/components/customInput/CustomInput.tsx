import {Text, TextInput, View} from 'react-native';
import React from 'react';
import {Control, Controller, FieldValues} from 'react-hook-form';
import {styles} from './styles';

interface CustomInputProps {
  control: Control<FieldValues>;
  name: string;
  placeholder: string;
  secureTextEntry?: boolean;
}

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
}: CustomInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
            <TextInput
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

export default CustomInput;
