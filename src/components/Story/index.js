import React from 'react';
import ProfilePicture from '../ProfilePicture';
import {View, Text} from 'react-native';
import styles from './styles';
const Story = ({imageUrl, name}) => {
  return (
    <View>
      <ProfilePicture uri={imageUrl} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default Story;
