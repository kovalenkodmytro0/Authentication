import {Image, Pressable, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Control, Controller, FieldValues} from 'react-hook-form';
import {styles} from './styles';
import {useTogglePasswordVisibility} from '../../hooks/useTogglePasswordVisibility';

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
}: CustomInputProps) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const icon = passwordVisibility
    ? require('../../assets/icons/show.png')
    : require('../../assets/icons/hide.png');

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
              secureTextEntry={name === 'password' ? passwordVisibility : false}
            />
            {name === 'password' && (
              <Pressable onPress={handlePasswordVisibility}>
                <Image style={styles.password_icon} source={icon} />
              </Pressable>
            )}
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
