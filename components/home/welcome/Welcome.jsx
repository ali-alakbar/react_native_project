import { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { SIZES, icons } from "../../../helpers";
import styles from "./welcome.style";
const jobTypes = ["full-time", "part-time", "contract"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("full-time");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Ali</Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect Jobs</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            onChange={() => {}}
            placeholder="Search for your job"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="cover"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.tab(activeJobType, item)}
                onPress={() => {
                  setActiveJobType(item);
                  router.push(`/search/${item}`);
                }}
              >
                <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
