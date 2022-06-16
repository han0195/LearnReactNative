import React from 'react';
import {StyleSheet} from 'react-native';
import DateHead from './components/DeteHead';
/* 라이브러리 */
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';

function App() {
  const today = new Date();

  return (
    <SafeAreaProvider>
      {/* edges = {[bottom]} <- 해당 컴포넌트를 바텀에만 사용한다는의미*/}
      <SafeAreaView edges={['bottom']} style={styles.block}>
        {/* DateHead 컴포넌트 호출*/}
        <DateHead date={today} />
        {/*Empty.js 호출*/}
        <Empty />
        {/* AddTodo 컴포넌트 호출*/}
        <AddTodo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
export default App;
