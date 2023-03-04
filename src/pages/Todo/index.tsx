import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import {styles} from './styles';

export default function Todo() {

  const [items, setItems ] = useState<string[]>([]);
  const [item, setItem] = useState('');  

  function handleItemAdd() {
    //console.log(items);
    setItems(prevState => [...prevState, item]);

    setItem('');
    
  }


  function handleItemRemove(name: string) {
    Alert.alert('Remove',`Remove o todo ${name}?`,[
      {
        text: 'Yes',
        onPress: () => setItems(prevState => prevState.filter(it => it !== name))
      },
      {
        text: 'No',
        style: 'cancel'
      }
    ]);
  }      

  return (
    
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={require('../../../assets/Logo.png')}
      />

      <View style={styles.entry}>

        <TextInput 
          style={styles.input}
          placeholder="Add todo now"
          onChangeText={e => setItem(e)} 
          value={item} 
        />

        <TouchableOpacity
          onPress={handleItemAdd}> 
          <Image 
            source={require('../../../assets/Button.png')}
          />
        </TouchableOpacity>

      </View>

      <FlatList 
        data={items}
        keyExtractor={item => item}
        renderItem={({item}) => (

          <View style={styles.itemradio}>
          <TouchableOpacity> 
          <Image 
            source={require('../../../assets/VectorOff.png')}
          />
          </TouchableOpacity>
          
          <Text style={styles.itemtext}>{item}</Text>

          <TouchableOpacity
           onPress={()=>handleItemRemove(item)}> 
          <Image style={styles.trash} 
            source={require('../../../assets/Trash.png')}
          />
          </TouchableOpacity>
        </View>    

        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=>(
          <Text style={styles.listEmptyText}>
            Nenhum item adicionado ainda na sua lista!
          </Text>
        )}  
        />


      {/* <View>
        <View style={styles.itemradio}>
          <TouchableOpacity> 
          <Image 
            source={require('../../../assets/VectorOff.png')}
          />
          </TouchableOpacity>
          <Text style={styles.itemtext}>Item1 Item1 Item1 Item1 Item1 Item1 Item1 Item1 Item1 Item1 Item1 Item1 Item1 Item1 Item1 Item1 Item1 Item1 </Text>
          <TouchableOpacity> 
          <Image style={styles.trash} 
            source={require('../../../assets/Trash.png')}
          />
          </TouchableOpacity>
        </View>

        <View style={styles.itemradio}>
          <TouchableOpacity> 
          <Image 
            source={require('../../../assets/VectorOff.png')}
          />
          </TouchableOpacity>
          
          <Text style={styles.itemtext}>Item2 </Text>

          <TouchableOpacity> 
          <Image style={styles.trash} 
            source={require('../../../assets/Trash.png')}
          />
          </TouchableOpacity>
        </View>

        <View style={styles.itemradio}>
          <TouchableOpacity> 
          <Image 
            source={require('../../../assets/VectorOn.png')}
          />
          </TouchableOpacity>
          <Text style={styles.itemtext}>xxxxxx xxxxxxx </Text>
          <TouchableOpacity> 
          <Image style={styles.trash} 
            source={require('../../../assets/Trash.png')}
          />
          </TouchableOpacity>
        </View>

      </View> */}
      
    </View>  
    
  );
}