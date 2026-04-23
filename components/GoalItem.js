import { View, Text, StyleSheet } from 'react-native';

function GoalItem(props){
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        backgroundColor: '#5e0acc',
        borderRadius: 6,
    },
    goalText: {
        color: 'white',
    }
});