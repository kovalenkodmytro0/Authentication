import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '100%',

    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingRight: 10,
    paddingLeft: 0,
  },
  password_icon: {
    padding: 10,
    margin: 5,
    height: 25, 
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center'
  }
});
