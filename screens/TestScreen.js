import React from 'react';
import { View, Text } from 'react-native';

const TestScreen = () => {
	return (
		<View>
			<Text>TestScreen</Text>
		</View>
	);
};

export default TestScreen;

TestScreen.navigationOptions = {
	title: 'TestScreen',
};
