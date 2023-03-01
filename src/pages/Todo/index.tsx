import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import {styles} from './styles';

//import todoLogo from '../../../assets/Logo.png';

export default function Todo() {


  function handleItemAdd() {
    console.log('add');
  }

  const [radioButtons, setRadioButtons] = useState([
    {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Option 1',
        value: 'option1'
    },
    {
        id: '2',
        label: 'Option 2',
        value: 'option2'
    }
]);

  return (
    
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={require('../../../assets/Logo.png')}
      />

      <View style={styles.entry}>

        <TextInput 
          style={styles.input}
          placeholder="Add todo">
        </TextInput>

        <TouchableOpacity
          onPress={handleItemAdd}> 
          <Image 
           
            source={require('../../../assets/Button.png')}
          />
        </TouchableOpacity>

      </View>

      <View>
        <View style={styles.itemradio}>
          <RadioGroup 
            radioButtons={radioButtons}
          />
          <Text style={styles.item}>Item1 Item1 Item1 Item1 Item1 Item1 Item1 Item1 Item1 Item1 </Text>
        </View>

        <Text style={styles.item}>Item2 Item2 Item2 Item2 Item2 Item2 Item2 Item2 Item2 Item2 </Text>
        <Text style={styles.item}>Item3 Item3 Item3 Item3 Item3 Item3 Item3 Item3 Item3 Item3 </Text>
      </View>
      
    </View>  
    
  );
}