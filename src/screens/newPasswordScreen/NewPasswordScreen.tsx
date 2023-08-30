import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamListProp} from '../../types/navigationTypes';
import {useForm} from 'react-hook-form';
import {styles} from './styles';

const NewPasswordScreen = () => {
  const navigation = useNavigation<RootStackParamListProp>();

  const {control, handleSubmit} = useForm();

  const onSubmitPressed = () => {
    navigation.navigate('Home');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          placeholder="Code"
          name="code"
          control={control}
          rules={{required: 'Code is required'}}
        />

        <CustomInput
          placeholder="Enter your new password"
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password should be minimum 6 character long',
            },
          }}
          secureTextEntry
        />

        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default NewPasswordScreen;


