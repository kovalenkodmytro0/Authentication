import {Text, View, ScrollView} from 'react-native';
import React from 'react';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamListProp} from '../../types/navigationTypes';
import {useForm} from 'react-hook-form';
import {styles} from './styles';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<RootStackParamListProp>();
  const {control, handleSubmit} = useForm();

  const onSendPressed = () => {
    navigation.navigate('NewPassword');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          placeholder="Username"
          name="username"
          control={control}
          rules={{required: 'Username is required'}}
        />

        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
