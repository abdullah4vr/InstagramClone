import React from 'react';
import {FlatList} from 'react-native';
import Story from '../Story';

const data = [
  {
    imageUri:
      'https://i.pinimg.com/originals/1d/df/a9/1ddfa98a7e262b691614bc30923a40d5.jpg',
    text: 'Salman',
  },
  {
    imageUri:
      'https://image.freepik.com/free-photo/young-handsome-man-wearing-black-clothes_103153-1397.jpg',
    text: 'Dildar',
  },
  {
    imageUri:
      'https://images.huffingtonpost.com/2016-04-10-1460276866-2126352-unnamed1-thumb.jpg',
    text: 'Zeeshan',
  },
  {
    imageUri:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    text: 'Abhik',
  },
  {
    imageUri:
      'https://i.pinimg.com/originals/d7/be/2a/d7be2a0cc36277ba0d5fcb3b325389a5.jpg',
    text: 'Sarah',
  },
  {
    imageUri:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    text: 'Dildar1',
  },
  {
    imageUri:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    text: 'Zeeshan1',
  },
  {
    imageUri:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    text: 'Abhik1',
  },
];

const Stories = () => {
  return (
    <FlatList
      styles={{marginBottom: 15}}
      data={data}
      horizontal
      keyExtractor={({text}) => text}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <Story imageUrl={item.imageUri} name={item.text} />
      )}
    />
  );
};

export default Stories;
