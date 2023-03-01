import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    color: 'black',
    backgroundColor: 'black',
    height: '100%',
    alignItems: 'center'
  },
  logo: {
    marginTop: 50,
  },
  entry: {
    flexDirection: 'row',
    marginTop: 16
  },
  input: {
    width: '60%',
    height: 52,
    backgroundColor: 'gray',
    borderRadius: 5,
    color: 'white',
    padding: 16,
    fontSize: 16,
    marginRight: 10
  },
  itemradio: {
    color: 'white',
    flexDirection: 'row',
    borderRadius: 5,
    marginTop: 16,
    marginLeft: 32
  },
  itemtext: {
    width: '70%',
    color: 'white',
    marginLeft: 16
  },
  trash: {
    marginLeft: 16,
    marginRight: 16
  },
  listEmptyText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center'
  }
    
});