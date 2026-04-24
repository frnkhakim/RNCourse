import { StyleSheet, View, Button, TextInput } from 'react-native';

function GoalInput({
  goalInputHandler,
  enteredGoalText,
  addGoalHandler,
  onCancel
}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />

      <View style={styles.buttonContainer}>
        <Button title="Add Goal" onPress={addGoalHandler} />
        <Button title="Cancel" color="red" onPress={onCancel} />
      </View>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginBottom: 16,
    padding: 8,
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});