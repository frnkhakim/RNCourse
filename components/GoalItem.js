import { View, Text, StyleSheet,Pressable } from 'react-native';

function GoalItem(props){
    return (
        <Pressable onPress={props.onDelete.bind(null, props.id)}>
             <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
       
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