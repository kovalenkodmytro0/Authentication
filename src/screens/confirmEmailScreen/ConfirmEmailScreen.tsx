import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamListProp} from '../../types/navigationTypes';
import {useForm} from 'react-hook-form';
import {styles} from './styles';

const ConfirmEmailScreen = () => {
  const navigation = useNavigation<RootStackParamListProp>();
  const {control, handleSubmit} = useForm();

  const onConfirmPressed = () => {
    navigation.navigate('Home');
  };

  const onResendCodePressed = () => {
    console.log('onResendCodePressed');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
        <CustomInput
          placeholder="Enter your confirmation code"
          name="confirmEmail_code"
          control={control}
          rules={{required: 'Confirmation code is required'}}
        />

        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

        <CustomButton
          text="Resend code"
          onPress={onResendCodePressed}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;
