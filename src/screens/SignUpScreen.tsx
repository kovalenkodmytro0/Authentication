import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useRef, useState} from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialSignInButtons from '../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamListProp} from '../types/navigationTypes';
import {useForm} from 'react-hook-form';

const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const SignUpScreen = () => {
  const navigation = useNavigation<RootStackParamListProp>();

  const {control, watch, handleSubmit} = useForm();

  const password = useRef({});
  password.current = watch('password', '');

  const onRegisterPress = () => {
    navigation.navigate('ConfirmEmail');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignIn');
  };

  const onTermsOfUsePressed = () => {
    console.log('onTermsOfUsePressed');
  };

  const onPrivacyPolicyPressed = () => {
    console.log('onPrivacyPolicyPressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder="Username"
          name="username"
          control={control}
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Username should be max 24 characters long',
            },
          }}
        />
        <CustomInput
          placeholder="Email"
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            maxLength: {
              value: 50,
              message: 'The email should have at most 50 characters',
            },
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />
        <CustomInput
          placeholder="Password"
          name="password"
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password should be minimum 6 character long',
            },
          }}
          secureTextEntry
        />
        <CustomInput
          placeholder="Repeat Password"
          name="password_repeat"
          control={control}
          rules={{
            required: 'Repeat Password is required',
            validate: (value: string) =>
              value === password.current || 'The passwords do not match',
          }}
          secureTextEntry
        />
        <CustomButton text="Register" onPress={handleSubmit(onRegisterPress)} />

        <Text style={styles.text}>
          By registering you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Term of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
            Priacy Policy
          </Text>
        </Text>

        <SocialSignInButtons />

        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#fdb075',
  },
});
