import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

const ProfilePicture = ({uri, size = 66}) => {
  return (
    <View style={[styles.container, {height: size + 8, width: size + 8}]}>
      <Image
        source={{uri}}
        style={[styles.image, {height: size, width: size}]}
      />
    </View>
  );
};

export default ProfilePicture;
