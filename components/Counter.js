import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function Counter({count, onIncrease, onDecrease}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.numberArea}>
        <Text style={styles.number}>{count}</Text>
      </View>
      {/* onPress={호출될 함수} */}
      <Button title="+1" onPress={onIncrease} />
      <Button title="-1" onPress={onDecrease} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    /*flex 1 은 자신의 위치한 곳을 모두 차지한다.*/
    flex: 1,
  },
  numberArea: {
    /*flex 1 은 자신의 위치한 곳을 모두 차지한다.*/
    flex: 1,
    /* 위치 중앙으로 */
    alignItems: 'center' /*가로정렬*/,
    justifyContent: 'center' /*세로정렬*/,
  },
  number: {
    fontSize: 72,
    fontWeight: 'bold',
  },
  button: {
    /* 배경색 어케 바꾸누 ?? */
  },
});

export default Counter;
