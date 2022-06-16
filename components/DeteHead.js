import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function DateHead({date}) {
  /* 날자 뽑기 하드 코딩*/
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  /* 날짜 포맷 */
  const {top} = useSafeAreaInsets();
  /* 각 모서리에 필요한 공백의 크기를 알아올 수 있음*/
  return (
    <>
      <View style={[styles.statusBarPlaceholder, {height: top}]} />
      <StatusBar backgroundColor="#26a69a" barStyle="light-content" />
      <View style={styles.block}>
        <Text style={styles.dateText}>
          {year}년 {month}월 {day}일
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '#26a69a',
  },
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

export default DateHead;
