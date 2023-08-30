import { StyleSheet } from "react-native";
import {COLORS} from '../../constants/constants'


export const styles = StyleSheet.create({
    container: {
      width: '100%',
  
      padding: 15,
      marginVertical: 5,
  
      alignItems: 'center',
      borderRadius: 5,
    },
  
    container_PRIMARY: {
      backgroundColor: COLORS.blue,
    },
  
    container_SECONDARY: {
      borderColor: COLORS.blue,
      borderWidth: 2,
    },
  
    container_TERTIARY: {},
    text: {
      fontWeight: 'bold',
      color: COLORS.white,
    },
  
    text_TERTIARY: {
      color: 'gray',
    },
  
    text_SECONDARY: {
      color: COLORS.blue,
    },
  });