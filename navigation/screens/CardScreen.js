import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import styles from '../styles/CardScreenStyle';



const CardScreen = ({navigation})=>{
  const [title, setTitle] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <View style={styles.container}>
    <TextInput
      style={styles.titleInput}
      placeholder="Subject, Title"
      value={title}
      onChangeText={setTitle}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  </View>
  );
};

export default CardScreen;