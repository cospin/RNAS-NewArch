import * as React from 'react';
import {SheetProvider} from 'react-native-actions-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ReactMain from './src/ReactMain';
import './src/sheets.tsx';

export default function App() {
  return (
    <>
      <GestureHandlerRootView style={styles.root}>
        <SheetProvider>
          <ReactMain />
        </SheetProvider>
      </GestureHandlerRootView>
    </>
  );
}

const styles = {root: {flex: 1}};
