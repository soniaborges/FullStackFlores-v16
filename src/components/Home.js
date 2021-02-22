import React from "react";
import { 
  View,
  StyleSheet,
  ImageBackground, 
} from "react-native";

import Capa from "../../assets/capa.jpg";

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={Capa}></ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width:'100%',
    
  },
  background: {
    flex: 1,
    width:'100%',
    resizeMode: 'contain',
      
  },
  
})
