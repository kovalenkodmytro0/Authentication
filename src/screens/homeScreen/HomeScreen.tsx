import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {password, username} from '../../redux/userSlice';

const HomeScreen = () => {
  const name = useSelector(username);
  const pass = useSelector(password);

  return (
    <View>
      <Text>{name}</Text>
      <Text>{pass}</Text>
    </View>
  );
};

export default HomeScreen;
