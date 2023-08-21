import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES, icons, images } from "../helpers";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  Welcome,
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
} from "../components";

import React from "react";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} demension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} demension="100%" />
          ),
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
