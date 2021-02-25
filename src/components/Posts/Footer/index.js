import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const Footer = ({LikesCount, caption, postedAt}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.likes}>{LikesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default Footer;
