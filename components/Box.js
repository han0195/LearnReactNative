import React from 'react';
import {View, StyleSheet} from 'react-native';
/* 구조 분해 할당 객체를 분해해서 해당 속성들을 나열했다고 보면 됨*/
function Box({rounded, size, color}) {
  /* 쉽게말하면 props는 객체임 App 에서 속성값을 정하면 . 연산자를 통해 그값을 불러올수있음*/
  return (
    <View
      style={[
        styles.box,
        rounded && styles.rounded,
        sizes[size],
        {
          backgroundColor: color,
        },
      ]}
      // rounded 가 true이면 스타일을 rounded 아니면 적용x 그리고 사이즈는 속성값대로
    />
  ); /* 해당스타일 App.js 리턴*/
}

Box.defaultProps = {
  size: 'medium',
  color: 'black',
};

Box.defaultProps = {
  /* Box의 기본 스타이을 medium 지정*/ size: 'medium',
};

/*스타일시트 지정*/
const styles = StyleSheet.create({
  box: {
    backgroundColor: 'black',
  },
  rounded: {
    borderRadius: 16,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 64,
    height: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
});

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};
export default Box;
