import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Header = ({ headerText, headerIcon }) => {
	return (
		<View style={{ flexDirection: "row" }}>
			<Text style={{ flex: 1, fontSize: 20, fontWeight: "500" }}>
				{headerText}
			</Text>

			<FontAwesome name={headerIcon} size={24} color="#e9147f" />
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({});