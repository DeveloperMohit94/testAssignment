import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginTop: 10,
  },
  nodeText: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '600',
  },
  descriptionText: {
    fontSize: 12,
    marginBottom: 5,
    fontWeight: '400',
  },
  checkboxContainer: {
    height: 20,
    width: 20,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxSelected: {
    height: 15,
    width: 15,
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 1,
  },
  childrenContainer: {
    marginLeft: 20,
  },
  selectedItemsContainer: {
    borderTopWidth: 1,
    borderTopColor: 'gray',
    marginTop: 10,
    paddingTop: 10,
  },
  selectedItemsText: {
    fontWeight: 'bold',
  },
});
