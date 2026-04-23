import { StyleSheet, View, Button, TextInput } from 'react-native';

function GoalInput({
  goalInputHandler = () => {},
  enteredGoalText = '',
  addGoalHandler = () => {},
}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!!"
        onChangeText={goalInputHandler}
        value={enteredGoalText ?? ''}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
    borderRadius: 6,
  },
});