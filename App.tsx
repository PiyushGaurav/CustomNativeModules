/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  NativeModules,
  Button,
} from 'react-native';

const {CalendarModule} = NativeModules;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const createCalendarEvent = () => {
    CalendarModule.createCalendarEvent('testName', 'testLocation');
  };

  const createCalendarEventCallback = () => {
    CalendarModule.createCalendarEventCallback(
      'testName',
      'testLocation',
      eventId => {
        console.log(`Created a new event with id ${eventId}`);
      },
    );
  };

  const createCalendarEventErrorCallback = () => {
    CalendarModule.createCalendarEventErrorCallback(
      'testName',
      'testLocation',
      (error, eventId) => {
        if (error) {
          console.error(`Error found! ${error}`);
        }
        console.log(`event id ${eventId} returned`);
      },
    );
  };

  const createCalendarEventPromise = async () => {
    try {
      const eventId = await CalendarModule.createCalendarEventPromise(
        'Party',
        'My House',
      );
      console.log(`Created a new event with id ${eventId}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Button
          title="invoke native module createCalendarEvent!"
          onPress={createCalendarEvent}
        />
        <Button
          title="invoke createCalendarEventCallback"
          onPress={createCalendarEventCallback}
        />
        <Button
          title="invoke createCalendarEventErrorCallback"
          onPress={createCalendarEventErrorCallback}
        />
        <Button
          title="invoke createCalendarEventErrorPromise"
          onPress={createCalendarEventPromise}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
