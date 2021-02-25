import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import {View} from 'react-native';

const Post = ({post}) => (
  <View>
    <Header imageUrl={post.user.image} name={post.user.name} />
    <Body uri={post.image} />
    <Footer
      LikesCount={post.LikesCount}
      caption={post.caption}
      postedAt={post.postedAt}
    />
  </View>
);

export default Post;
