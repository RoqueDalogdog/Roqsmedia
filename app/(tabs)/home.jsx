import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const stories = [
  { name: 'Robert', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqw24Hd984HpcJ3TYd3yL5yWwPdPGwEdtvmg&s' },
  { name: 'Clark', image: 'https://preview.redd.it/i-wonder-why-most-clark-kent-portrayals-dont-have-him-v0-53ddsl388adb1.jpg?width=640&crop=smart&auto=webp&s=aacc5cab14af5c5fb4f5707513e36bc68a67d90b' },
  { name: 'Hazen', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKO06lDPx_JoBfUiCuq0U1wTWpUE7Z9wOcZQ&s' },
  { name: 'Divina', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-384wSRgJJ_JXUtsdmQ7Qt4IURuSSh_GfkQ&s' },
  { name: 'Clint', image: 'https://cdn.britannica.com/74/172374-050-C4B36361/Clint-Eastwood-A-Fistful-of-Dollars-Sergio.jpg' }
]; // Replace with actual URLs

const posts = [{ name: 'Joshua Papellero', likes: 1245, comments: 173, shares: 229 }]; // Dummy data
const posts1 = [{ name: 'Genesis Dazo', likes: 1245, comments: 173, shares: 229 }];

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Story Section */}
      <FlatList
        horizontal
        data={stories}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.storyContainer}>
            <View style={styles.storyCircle}>
              <Image
                source={{ uri: item.image }} // Use specific image for each story
                style={styles.storyImage}
              />
              <Text style={styles.storyName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        style={styles.storiesList}
      />

      {/* Posts Section */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            <View style={styles.postHeader}>
              <Image
                source={{ uri: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png' }} // Profile image placeholder
                style={styles.profileImage}
              />
              <Text style={styles.profileName}>{item.name}</Text>
            </View>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCETOqCXchcRVZaMmna6VHvE-M5fjdkiZIrA&' }} // Post image placeholder
              style={styles.postImage}
            />
            <View style={styles.postActions}>
              <Text>❤️ {item.likes} 💬 {item.comments} 🔁 {item.shares}</Text>
            </View>
            <Text style={styles.postTags}>#beautiful #popular #foryoupage</Text>
          </View>
        )}
        style={styles.postsList}
      />
      <FlatList
        data={posts1}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            <View style={styles.postHeader}>
              <Image
                source={{ uri: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png' }} // Profile image placeholder
                style={styles.profileImage}
              />
              <Text style={styles.profileName}>{item.name}</Text>
            </View>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCETOqCXchcRVZaMmna6VHvE-M5fjdkiZIrA&' }} // Post image placeholder
              style={styles.postImage}
            />
            <View style={styles.postActions}>
              <Text>❤️ {item.likes} 💬 {item.comments} 🔁 {item.shares}</Text>
            </View>
            <Text style={styles.postTags}>#beautiful #popular #foryoupage</Text>
          </View>
        )}
        style={styles.postsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa', // Instagram-like light gray background
    padding: 10,
  },
  storiesList: {
    marginBottom: 20,
    paddingTop: 10,
    borderBottomColor: '#e5e5e5', // Story section divider line
    borderBottomWidth: 1,
  },
  storyContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  storyCircle: {
    alignItems: 'center',
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ddd',
    borderWidth: 3,
    borderColor: '#ff8501', // Instagram-like gradient border color
  },
  storyName: {
    marginTop: 5,
    fontSize: 12,
    color: '#333', // Darker text for names
  },
  postCard: {
    backgroundColor: '#fff', // White post card background
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000', // Shadow for card to pop up
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Shadow for Android
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  postActions: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postTags: {
    color: '#888',
    marginTop: 5,
    fontSize: 14,
  },
});

export default Home;