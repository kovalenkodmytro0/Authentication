import type { NativeStackNavigationProp } from '@react-navigation/native-stack';


export type RootStackParamList = {
    SignIn: undefined;
    SignUp: undefined;
    ConfirmEmail: undefined;
    ForgotPassword: undefined;
    NewPassword: undefined;
    Home: undefined;
  };

export type RootStackParamListProp = NativeStackNavigationProp<RootStackParamList>