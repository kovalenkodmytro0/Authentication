import {View, Image, useWindowDimensions} from 'react-native';
import React from 'react';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import SocialSignInButtons from '../../components/socialSignInButtons/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamListProp} from '../../types/navigationTypes';
import {useForm} from 'react-hook-form';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {setPassword, setUserName} from '../../redux/userSlice';

const logo = {
  image: require('../../assets/images/logo.png'),
};

const SignInScreen = () => {
  const {height} = useWindowDimensions();

  const dispatch = useDispatch();

  const navigation = useNavigation<RootStackParamListProp>();

  const {control, handleSubmit} = useForm();

  const onSignInPressed = data => {
    dispatch(setUserName(data.username));
    dispatch(setPassword(data.password));
    navigation.navigate('Home');
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.root}>
      <Image
        source={logo.image}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />

      <CustomInput
        name="username"
        placeholder="Username"
        control={control}
        rules={{required: 'Username is required'}}
      />

      <CustomInput
        name="password"
        control={control}
        placeholder="Password"
        secureTextEntry
        rules={{
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password should be minimum 6 character long',
          },
        }}
      />
      <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />
      <CustomButton
        text="Forgon password?"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      />

      <SocialSignInButtons />

      <CustomButton
        text="Don`t have an account? Create one"
        onPress={onSignUpPressed}
        type="TERTIARY"
      />
    </View>
  );
};

export default SignInScreen;
