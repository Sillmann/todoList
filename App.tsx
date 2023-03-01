import { StatusBar } from 'react-native';
import Todo from './src/pages/Todo';

export default function App() {
  return(
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Todo />
    </>
  )
}