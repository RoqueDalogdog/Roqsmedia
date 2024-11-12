import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Notification = () => {
  // Sample notification data
  const notifications = [
    {
      id: '1',
      name: 'Yow',
      message: 'posted a new video. "ExploringKorea(Travel Vlog)"',
      avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_kPvh29jJxNWucJc5NEK45Pz0NmMfbGomImWOVH6vM1Kg=s900-c-k-c0x00ffffff-no-rj',
      time: 'New',
    },
    {
      id: '2',
      name: 'Nba',
      message: 'posted 7 new videos, including "Kobe Bryant 21 triple doubles".',
      avatar: 'https://yt3.googleusercontent.com/9rkIU1GppqML26EOeGgxHgO-ZZSMPNRe_PAiIirXRLR7UrNC0fLkaPLb_C24-9MA0KuQJLlB=s900-c-k-c0x00ffffff-no-rj',
      time: 'Yesterday at 7:00 pm',
    },
    {
      id: '3',
      name: 'CongTv',
      message: 'was live. “Tara mga pogi laro tayo.”',
      avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_lU5D54Y0dz4mEx78Qqz_YL8UKoVehxhEl1PSFzJFKsK9E=s900-c-k-c0x00ffffff-no-rj',
      time: 'Earlier',
    },
    {
      id: '4',
      name: 'Junnie Boy',
      message: 'commented on your photo.',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0LhNkp52T5-NkE6BehMJk5zUC24jYB4Gv4A&s',
      time: 'Earlier',
    },
    {
      id: '5',
      name: 'Boss King',
      message: 'commented on your photo.',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNiqC8EPFix5EGLhLTmjq8QMiUVXFZ9o2Nw&s',
      time: 'Earlier',
    },
  ]

  const renderNotification = ({ item }) => (
    <View style={styles.notificationItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.notificationText}>
        <Text style={styles.notificationMessage}>
          <Text style={styles.name}>{item.name}</Text> {item.message}
        </Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
      <TouchableOpacity style={styles.moreOptions}>
        <Text style={styles.moreText}>•••</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotification}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Light background
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  notificationText: {
    flex: 1,
  },
  notificationMessage: {
    fontSize: 16,
    color: '#333',
  },
  name: {
    fontWeight: 'bold',
  },
  time: {
    marginTop: 5,
    fontSize: 14,
    color: '#aaa',
  },
  moreOptions: {
    paddingHorizontal: 10,
  },
  moreText: {
    fontSize: 20,
    color: '#aaa',
  },
})

export default Notification
