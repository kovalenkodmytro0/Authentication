import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/constants';

export const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.darkBlue,
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
});
