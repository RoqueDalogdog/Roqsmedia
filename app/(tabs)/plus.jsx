import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const Plus = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Create Post</Text>
        <TouchableOpacity>
          <Text style={styles.postButton}>Post</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Picture and Text Input */}
      <View style={styles.userSection}>
        <Image 
          source={{ uri: 'https://example.com/profile-picture.jpg' }} 
          style={styles.profilePicture} 
        />
        <TextInput
          style={styles.textInput}
          placeholder="What's on your mind?"
          placeholderTextColor="#888"
          multiline
        />
      </View>

      {/* Bottom Menu for Adding Media, Tags, etc. */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Photo/Video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Tag Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Feeling/Activity</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Facebook's white background
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  postButton: {
    fontSize: 16,
    color: '#1877F2', // Facebook's blue color for buttons
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#333', // Darker text for input
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
    paddingBottom: 10,
  },
  bottomMenu: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#EAEAEA',
    paddingTop: 15,
  },
  menuButton: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButtonText: {
    fontSize: 16,
    color: '#1877F2', // Facebook blue for menu items
  },
})

export default Plus
