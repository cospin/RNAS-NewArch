import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet';

function ExampleSheet(props: SheetProps<{enableBackground: boolean}>) {
  const [count, setCount] = useState(0);
  return (
    <ActionSheet
      id={props.sheetId}
      backgroundInteractionEnabled={props.payload?.enableBackground}>
      <View style={[styles.container]}>
        <Text style={styles.titleText}>Count: {count}</Text>
        <Text style={styles.separator}>
          backgroundInteractionEnabled:{' '}
          {String(props.payload?.enableBackground)}
        </Text>
        <Button title="Add count" onPress={() => setCount(count + 1)} />
        <View style={styles.separator} />
        <Button title="Subtract count" onPress={() => setCount(count - 1)} />
        <View style={styles.separator} />
        <Button
          title="Close Sheet"
          onPress={() => SheetManager.hide(props.sheetId)}
        />
      </View>
    </ActionSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    margin: 10,
  },
});

export default ExampleSheet;
