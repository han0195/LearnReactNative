import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function Empty() {
  return (
    <View style={styles.block}>
      <Text style={styles.description}>야호! 할일이 없습니다.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    /* 안 내용물 중앙 정렬 */
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
});
export default Empty;
