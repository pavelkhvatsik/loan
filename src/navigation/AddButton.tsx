import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import AddIcon from '@assets/icons/AddIcon';

const AddButton = () => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback style={styles.addButton}>
        <View style={styles.addButtonInner}>
          <AddIcon />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    height: 0,
  },
  addButton: {
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
  },
  addButtonInner: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: -20,
    backgroundColor: '#42b983',
  },
});

export default AddButton;
