import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) {
      return; // prevent empty goals
    }

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);

    setEnteredGoalText('');
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <GoalInput
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
          enteredGoalText={enteredGoalText}
        />
        <View style={styles.goalContainer}>
        <FlatList
            data={courseGoals}
            renderItem={({ item }) => (
              <GoalItem text={item.text} onDelete={deleteGoalHandler} />
            )}
            keyExtractor={(item) => item.id}
            alwaysBounceVertical={true}
        />
        </View>
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  
  goalContainer: {
    flex: 5,
  },
  
});