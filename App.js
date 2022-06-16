import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';
import Counter from './components/Counter';

const App = () => {
  const [count, setCount] = useState(0);
  /* +1 했을때 호출된 함수*/
  const onIncrease = () => setCount(count + 1);
  /* +1 했을때 호출된 함수*/
  const onDecrease = () => setCount(count - 1);
  return (
    <SafeAreaView style={styles.full}>
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  full: {
    flex: 1,
    /*flex 1 은 자신의 위치한 곳을 모두 차지한다.*/
  },
});
export default App;
