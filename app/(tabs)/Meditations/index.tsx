// app/(tabs)/Meditations/index.tsx
import { Link } from "expo-router";
import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const CARD_MARGIN = 10;
const NUM_COLUMNS = 3;
const CARD_WIDTH = Math.floor((width - CARD_MARGIN * (NUM_COLUMNS + 1)) / NUM_COLUMNS);

const DATA = [
  {
    id: "1",
    title: "Calm Forest",
    subtitle: "Forest sounds & grounding",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=60&auto=format&fit=crop",
    duration: 300,
  },
  {
    id: "2",
    title: "Sunset Lake",
    subtitle: "Gentle waves at dusk",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=60&auto=format&fit=crop",
    duration: 420,
  },
  {
    id: "3",
    title: "Mountain Breeze",
    subtitle: "Clear focus & breathing",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=60&auto=format&fit=crop",
    duration: 360,
  },
  {
    id: "4",
    title: "Cloud Drift",
    subtitle: "Soft clouds & calm mind",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=60&auto=format&fit=crop",
    duration: 240,
  },
  {
    id: "5",
    title: "Golden Horizon",
    subtitle: "Warm sunset soundscape",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=60&auto=format&fit=crop",
    duration: 480,
  },
  {
    id: "6",
    title: "Lakeside Calm",
    subtitle: "Night lake ambience",
    image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=60&auto=format&fit=crop",
    duration: 330,
  },
];

export default function MeditationsIndex() {
  const renderCard = ({ item }: { item: typeof DATA[number] }) => {
    return (
      <View style={styles.cardWrapper}>
        {/* whole card clickable */}
        <Link href={`./${item.id}`} asChild>
          <Pressable style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
            <View style={styles.meta}>
              <Text numberOfLines={1} style={styles.title}>
                {item.title}
              </Text>
              <Text numberOfLines={1} style={styles.subtitle}>
                {item.subtitle}
              </Text>
              {/* Play button inside card (also navigates) */}
              <View style={styles.playRow}>
                <Link href={`./${item.id}`} asChild>
                  <Pressable style={styles.playButton}>
                    <Text style={styles.playText}>Play</Text>
                  </Pressable>
                </Link>
                <Text style={styles.durationText}>{formatTime(item.duration)}</Text>
              </View>
            </View>
          </Pressable>
        </Link>
      </View>
    );
  };

  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={DATA}
      keyExtractor={(i) => i.id}
      renderItem={renderCard}
      numColumns={NUM_COLUMNS}
      showsVerticalScrollIndicator={false}
    />
  );
}

function formatTime(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

const styles = StyleSheet.create({
  list: {
    padding: CARD_MARGIN,
    alignItems: "center",
  },
  cardWrapper: {
    margin: CARD_MARGIN / 2,
    width: CARD_WIDTH,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    // shadow (iOS)
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    // elevation (Android)
    elevation: 4,
  },
  cardPressed: {
    transform: [{ translateY: 2 }],
    opacity: 0.95,
  },
  image: {
    width: "100%",
    height: CARD_WIDTH * 0.7,
  },
  meta: {
    padding: 8,
  },
  title: {
    fontSize: 13,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 11,
    color: "#666",
    marginTop: 2,
  },
  playRow: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  playButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  playText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
  },
  durationText: {
    fontSize: 11,
    color: "#444",
  },
});
