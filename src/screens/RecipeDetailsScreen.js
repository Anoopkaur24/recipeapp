import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Pressable,
	Dimensions,
	ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const RecipeDetailsScreen = ({ navigation, route }) => {
	const { item } = route.params;

	console.log(item);
	return (
		<View style={{ backgroundColor: item.color, flex: 1 }}>
			<SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16 }}>
				<Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
					<FontAwesome name={"arrow-circle-left"} size={28} color="white" />
				</Pressable>

				<FontAwesome name={"heart-o"} size={30} color="white" />
			</SafeAreaView>
			<View
				style={{
					backgroundColor: "#f6d1e4",
					flex: 1,
					marginTop: 120,
					borderTopLeftRadius: 50,
					borderTopRightRadius: 50,
					alignItems: "center",
					paddingHorizontal: 15,
				}}
			>
				<View
					style={{
						height: 300,
						width: 300,
						position: "absolute",
						top: -150,
					}}
				>
					<Image
						source={item.image}
						style={{
							width: "100%",
							height: "100%",
							resizeMode: "contain",
						}}
					/>
				</View>

				<Text style={{ marginTop: 150, fontSize: 30, fontWeight: "bold" }}>
					{item.name}
				</Text>

				<View style={{ flex: 1 }}>
					<ScrollView showsVerticalScrollIndicator={false}>
						<Text style={{ fontSize: 20, marginVertical: 15 }}>
							{item.description}
						</Text>


						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
							}}
						>
							<View
								style={{
									backgroundColor: "white",
									paddingVertical: 25,
									borderRadius: 10,
									alignItems: "center",
									width: 100,
								}}
							>
								<Text style={{ fontSize: 40 }}>⏰</Text>
								<Text style={{ fontSize: 20, fontWeight: 400 }}>
									{item.time}
								</Text>
							</View>
							<View
								style={{
									backgroundColor: "white",
									paddingVertical: 25,
									borderRadius: 10,
									alignItems: "center",
									width: 100,
								}}
							>
								<Text style={{ fontSize: 40 }}>🥣</Text>
								<Text style={{ fontSize: 20, fontWeight: 400 }}>
									{item.difficulty}
								</Text>
							</View>
							<View
								style={{
									backgroundColor: "white",
									paddingVertical: 25,
									borderRadius: 10,
									alignItems: "center",
									width: 100,
								}}
							>
								<Text style={{ fontSize: 40 }}>🔥</Text>
								<Text style={{ fontSize: 20, fontWeight: 400 }}>
									{item.calories}
								</Text>
							</View>
						</View>


						<View style={{ alignSelf: "flex-start", marginVertical: 20 }}>
							<Text
								style={{ fontSize: 20, fontWeight: "600", marginBottom: 5 }}
							>
								Ingredients:
							</Text>

							{item.ingredients.map((ingredient, index) => {
								return (
									<View
										style={{
											flexDirection: "row",
											alignItems: "center",
											marginVertical: 5,
										}}
										key={index}
									>
										<View
											style={{
												backgroundColor: "red",
												height: 10,
												width: 10,
												borderRadius: 5,
											}}
										></View>
										<Text style={{ fontSize: 20, marginLeft: 5 }}>
											{ingredient}
										</Text>
									</View>
								);
							})}
						</View>


						<View style={{ alignSelf: "flex-start", marginVertical: 20 }}>
							<Text
								style={{ fontSize: 20, fontWeight: "600", marginBottom: 5 }}
							>
								Steps:
							</Text>

							{item.steps.map((step, index) => {
								return (
									<Text
										key={index}
										style={{ fontSize: 20, marginLeft: 5, marginVertical: 5 }}
									>{`${index + 1} ) ${step}`}</Text>
								);
							})}
						</View>
					</ScrollView>
				</View>
			</View>
		</View>
	);
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({});