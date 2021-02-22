import React from "react";
import { StatusBar } from "expo-status-bar";
import { 
  View, 
  SafeAreaView,
  StyleSheet,
  FlatList  
} from "react-native";

import Menu from "../components/Menu";
import Produto from "../components/Produto";

const dados = [
  {
    id: Math.random(), 
    categoria: "Buquet",
    descricao: "Rosas Vermelhas com 24 Flores",
    preco_final: 201.02,
    imagem: "buquet-amarelas.JPG"
    },
    {
    id: Math.random(), 
    categoria: "Buquet",
    descricao: "Rosas Coloridas com 18 Flores",
    preco_final: 132.01,
    imagem: "buquet-colorido1.JPG"
    },
    {
    id: Math.random(), 
    categoria: "Buquet",
    descricao: "Rosas Amarelas com 18 Flores",
    preco_final: 201.62,
    imagem: "buquet-vermelhas.JPG"
    },
    {
    id: Math.random(), 
    categoria: "Buquet",
    descricao: "Buquet Elegante com 18 Flores",
    preco_final: 135.02,
    imagem: "buquet-elegante.JPG"
    },
    {
    id: Math.random(), 
    categoria: "Buquet",
    descricao: "Buquet Rosas 18 FLores",
    preco_final: 155.35,
    imagem: "buquet-rosas.JPG"
    }, 
    { 
    id: Math.random(), 
    categoria: "Vaso",
    descricao: "Vaso com Flores de diversas",
    preco_final: 187.02,
    imagem: "vaso-colorido.JPG"
    },
    {
    id: Math.random(), 
    categoria: "Vaso",
    descricao: "Vaso com flores de Girassol muito lindo",
    preco_final: 159.63,
    imagem: "vaso-girassol.JPG"
    },
    {
    id: Math.random(), 
    categoria: "Orquídea",
    descricao: "Phalaenophisis Branca",
    preco_final: 154.03,
    imagem: "orquidea-branca.JPG"
    },
    {
    id: Math.random(), 
    categoria: "Orquídea",
    descricao: "Orquidea Cattleya Amarela",
    preco_final: 86.02,
    imagem: "orquidea-cattleya.JPG"
    },
    {
     id: Math.random(), 
    categoria: "Orquídea",
    descricao: "Orquidea Vanda Roxa",
    preco_final: 224.11,
    imagem: "orquidea-vanda1.JPG"
    },
    {
    id: Math.random(), 
    categoria: "Orquídea",
    descricao: "Mini Orquidea Roxa",
    preco_final: 105.05,
    imagem: "orquidea-mini.JPG"
    },
    {
    id: Math.random(), 
    categoria: "Cesta",
    descricao: "Cesta Cafe Azul",
    preco_final: 138.03,
    imagem: "cesta-azul.JPG"
    },
    {
    id: Math.random(), 
    categoria: "Cesta",
    descricao: "Cesta Cafe Delicinha",
    preco_final: 154.02,
    imagem: "cesta-delicia.JPG"
    },
    {
    id: Math.random(), 
    categoria: "Cesta",
    descricao: "Cesta Cafe Docinho",
    preco_final: 187.01,
    imagem: "cesta-docinho.JPG"
    },
]

const Produtos = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Menu navigation={props.navigation} /> 
    <SafeAreaView style={styles.container}>
      
           <FlatList 
            data={dados}
             keyExtractor={(item) => `${item.id}`}
            renderItem={({item}) => (
               <Produto 
               categoria={item.categoria} 
               imagem={item.imagem} 
               descricao={item.descricao} 
               preco_final={item.preco_final} 
               />
             )}
          />
    
     <StatusBar style="auto " />
    </SafeAreaView>
    </View>
  );
};

export default Produtos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#D2F9EE",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 500, 
  },
  h1: {
    fontSize: 20, 
    color: "#fff"
  },
  containerUsers: {
    flex: 7, 
  }
});