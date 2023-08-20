import { StyleSheet, Text, View ,Modal,Image,TextInput,Button} from 'react-native'
import React,{useState} from 'react'

export default function Courselnput({visible,onAddCourse,onCancel}) {
    const [enteredCourseText, setEnteredCourseText] = useState('');

const addCourseHandler = () =>{
onAddCourse(enteredCourseText);
setEnteredCourseText('');
}

const courseInputHandler = (enteredText) =>{
setEnteredCourseText(enteredText);

}

  return (
    <Modal
        animationType="slide"
        visible={visible}>
        <View style={styles.inputContainer}>
            <Image  style={styles.image} source={require('../assets/images/logo.png')} />
            <TextInput
            value={enteredCourseText}
            onChangeText={courseInputHandler}
            placeholder="Yeni Kurs Ekle!" style={styles.textInput} />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button title="İptal Et" color="red" onPress={onCancel}  />
            </View>
            <View style={styles.button}>
                <Button title=" Ekle" color="blue" onPress={addCourseHandler}  />
            </View>
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
  flex:1,
  justifyContent:"center",
  alignItems:"center",
  backgroundColor:"gray",
  padding:15,
    },
    image:{
        width:150,
        height:150,
        borderRadius:20,
        margin:20,
    },
    textInput:{
        borderWidth:1,
        width:"100%",
        padding:10,
        borderRadius:10,
        backgroundColor:'pink',
        borderColor:'pink'
    },
    buttonContainer:{
        flexDirection:"row",
        marginTop:15
    },
    button:{
width:100,
marginHorizontal:8
    },
})