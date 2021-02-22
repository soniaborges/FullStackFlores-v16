import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Image, 
} from 'react-native';

const Produto = ({
  categoria, 
  descricao, 
  preco_final, 
  imagem}) => {
  return (
     
      <View style={styles.container}>
          <Text>Categoria: {categoria}</Text>
          <Image source={require(`../../assets/img-produtos/${imagem}`)} style= {styles.imagem} />
          <Text>Descrição: {descricao}</Text>
          <Text>Preço: {preco_final}</Text>
      </View>
  )
}
export default Produto;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 10, 
      margin: 10,
      borderRadius: 10, 
      backgroundColor: "#1EFAC7",
      alignItems: "center",
      justifyContent: "center",
  },
  imagem: {
    width: 130,
    height: 130,
    borderRadius: 5,
    boxShadow: '1px 1px 10px rgba(255,255,255)' 
    
  }
})



