import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Search = () => {
  const [searchText, setSearchText] = useState('')
  const trends = [
    { id: '1', trend: '#ReactNative' },
    { id: '2', trend: '#JavaScript' },
    { id: '3', trend: '#MobileDevelopment' },
    { id: '4', trend: 'Bossing' },
    { id: '5', trend: 'AI Revolution' }
  ]

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder=""
        placeholderTextColor="#888"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      {/* Trending Searches */}
      <Text style={styles.trendingText}>Trends for you</Text>
      <FlatList
        data={trends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.trendItem}>
            <Text style={styles.trendText}>{item.trend}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Twitter-like white background
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#E1E8ED', // Light gray border for the search bar
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#F5F8FA', // Slight gray background inside the search bar
  },
  trendingText: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#14171A', // Darker text for trend section
  },
  trendItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E8ED', // Border between trend items
  },
  trendText: {
    fontSize: 16,
    color: '#1DA1F2', // Twitter blue for trending text
  },
})

export default Search
