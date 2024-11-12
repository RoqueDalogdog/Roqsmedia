import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image 
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlNcKX1A49NNXIUG4aOOAQswFMZpB6JjOHnGpDdDoCKpxt-IQZvG5XgXuC6A8X6_wABLY&usqp=CAU'}} 
          style={styles.bannerImage} 
        />
        <Image 
          source={{uri: 'https://yt3.googleusercontent.com/ytc/AIdro_lU5D54Y0dz4mEx78Qqz_YL8UKoVehxhEl1PSFzJFKsK9E=s900-c-k-c0x00ffffff-no-rj'}} 
          style={styles.profileImage} 
        />
      </View>

      {/* Profile Info Section */}
      <View style={styles.profileInfo}>
        <Text style={styles.profileName}>Joshua Papellero</Text>
        <Text style={styles.profileBio}>
          I’m delighted to introduce myself as a professional model 🌼
        </Text>
        
        {/* Stats Section */}
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>567 K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>1665</Text>
            <Text style={styles.statLabel}>Followings</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>166</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>Follow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>Insight</Text>
        </TouchableOpacity>
      </View>

      {/* Photo Grid Section */}
      <View style={styles.photoGrid}>
        <Image 
          source={{uri: 'https://yt3.googleusercontent.com/ytc/AIdro_lU5D54Y0dz4mEx78Qqz_YL8UKoVehxhEl1PSFzJFKsK9E=s900-c-k-c0x00ffffff-no-rj'}} 
          style={styles.photoItem} 
        />
        <Image 
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0fN2_bKyyuk4yVg9WXUIWks2XFOYDsTD7t782ETIguKTvPSM3NRf5Fw4rvg77h_Fj90&usqp=CAU'}} 
          style={styles.photoItem} 
        />
        <Image 
          source={{uri: 'https://pbs.twimg.com/profile_images/1250351763195957256/mEHrVPeE_400x400.jpg'}} 
          style={styles.photoItem} 
        />
        <Image 
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRonyp8a0eF7gDVjCRwPjS-i8L9vT3iBjglog&s'}} 
          style={styles.photoItem} 
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA', // Instagram-like light background
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#F5F5F5', // Lighter background for the header
  },
  bannerImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#fff',
    marginTop: -40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  profileInfo: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', // Darker text for visibility
  },
  profileBio: {
    fontSize: 14,
    color: '#666', // Slightly faded text for bio
    textAlign: 'center',
    marginVertical: 5,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#EAEAEA', // Border separating the stats
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', // Bold black for stat numbers
  },
  statLabel: {
    fontSize: 12,
    color: '#888', // Faded text for stat labels
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA', // Subtle border for the buttons section
  },
  actionButton: {
    backgroundColor: '#3897F0', // Instagram-like blue button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  photoItem: {
    width: '45%',
    height: 200,
    marginVertical: 5,
    borderRadius: 10,
  },
})

export default Profile
