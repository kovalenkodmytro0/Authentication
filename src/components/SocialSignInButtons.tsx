import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.log('onSignInFacebook');
  };

  const onSignInGoole = () => {
    console.log('onSignInGoole');
  };

  const onSignInApple = () => {
    console.log('onSignInApple');
  };

  return (
    <>
      <CustomButton
        bgColor="#e7eaf4"
        fgColor="#4765a9"
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
      />
      <CustomButton
        bgColor="#fae9ea"
        fgColor="#dd4d44"
        text="Sign In with Google"
        onPress={onSignInGoole}
      />
      <CustomButton
        bgColor="#e3e3e3"
        fgColor="#363636"
        text="Sign In with Apple"
        onPress={onSignInApple}
      />
    </>
  );
};

export default SocialSignInButtons;

const styles = StyleSheet.create({});
