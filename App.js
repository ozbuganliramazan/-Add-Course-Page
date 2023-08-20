import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button,FlatList} from 'react-native';
import { useState } from 'react';
import Courselnput from './components/Courselnput';

export default function App() {
 const [modalIsVisible,setModalIsVisible] = useState(false);
const [courses,setCourses] =useState([]);
const startModal = () =>{
  setModalIsVisible(true);
}

const endModal = () =>{
  setModalIsVisible(false);
}

const addCourse = (courseTitle) =>{
setCourses((currentCourses) =>[
  ...currentCourses,
  {text:courseTitle,id:Math.floor(Math.random().toString())},
])

  endModal();
}




  return (
    <>
      <StatusBar style="auto" />
    <View style={styles.container}>
     <Button style={styles.buttonSubmit} title="Kurs Ekle" color="red" onPress={startModal} />
     <Courselnput visible={modalIsVisible} onAddCourse={addCourse} onCancel={endModal} 
     />
     <View>
      <FlatList data={courses}
      renderItem={({item}) =>(
        <View style={styles.courseItem} >
          <Text style={styles.courseText} >{item.text} </Text>
        </View>
      )} />
     </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
   paddingTop:80,
   paddingHorizontal:30
  },
  courseItem:{
backgroundColor:"gray",
margin:8,
borderRadius:5

  },
  courseText:{
padding:8,
color: "width",

  }
 
});
