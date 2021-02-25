import React from 'react';
import {View, Text} from 'react-native';
import ProfilePicture from '../../ProfilePicture';
import styles from './styles';
const Header = ({imageUrl, name}) => (
  <View style={styles.container}>
    <ProfilePicture uri={imageUrl} size={40} />
    <Text style={styles.name}>{name}</Text>
  </View>
);

export default Header;
