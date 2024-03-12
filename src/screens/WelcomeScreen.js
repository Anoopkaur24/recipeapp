import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({navigation}) => {
    return(
        <View style={{flex: 1, alignItems:'center', backgroundColor:'#f6d1e4'}}>
            
            <Text style={{color: '#e9147f', fontSize: 25, fontWeight: 'bold', paddingTop: 50}}>Welcome to my recipe app!</Text>
            <Text
				style={{
					fontSize: 42,
					fontWeight: "bold",
					color: "#3c444c",
					marginTop: 44,
					marginBottom: 40,
				}}
			>
				Cook Like A Chef
			</Text>
            <Image source={require("../../assets/images/welcome.png")}
            style={{height: 300, width: 300}}/>

            <TouchableOpacity
				onPress={() => navigation.navigate("RecipeList")}
				style={{
					backgroundColor: "#e9147f",
					borderRadius: 18,
					paddingVertical: 18,
					width: "70%",
					alignItems: "center",
				}}
			>
                <Text style={{ fontSize: 18, color: "#f6d1e4", fontWeight: "700" }}>
					Let's Go
				</Text>
            </TouchableOpacity>
        </View>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
