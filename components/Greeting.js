import React from 'react';
import {View, Text} from 'react-native';

function Greeting(props) {
  /*props 는 properties의 줄인말로 컴포넌트의 속성을 의미함*/
  return (
    <View>
      <Text>안녕하세요 {props.name}!</Text>
      <Text>안녕하세요 {props.name}!</Text>
    </View>
  );
}
Greeting.defaultProps = {
  name: '리액트 네이티브',
};
export default Greeting;
