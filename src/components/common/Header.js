// @flow
import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { headerStyle, viewStyle } = style;
  return (
    <View style={viewStyle}>
      <Text style={headerStyle}>{props.title}</Text>
    </View>
  );
};

const style = {
  headerStyle: {
    fontSize: 20,
    fontWeight: 'bold'

  },
  viewStyle: {
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'

  }
};

export { Header };
