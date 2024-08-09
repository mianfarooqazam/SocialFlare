import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { List, Avatar, Title, IconButton, Text } from 'react-native-paper';
import { SwipeListView } from 'react-native-swipe-list-view';
import Toast from 'react-native-toast-message';

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState([
    { id: '1', type: 'like', user: 'Emma', action: 'liked your post', time: '2m', avatar: 'https://i.pravatar.cc/150?img=1', unread: true },
    { id: '2', type: 'comment', user: 'Liam', action: 'commented on your photo', time: '15m', avatar: 'https://i.pravatar.cc/150?img=2', unread: true },
    { id: '3', type: 'follow', user: 'Olivia', action: 'started following you', time: '1h', avatar: 'https://i.pravatar.cc/150?img=3', unread: true },
    { id: '4', type: 'mention', user: 'Noah', action: 'mentioned you in a comment', time: '3h', avatar: 'https://i.pravatar.cc/150?img=4', unread: false },
    { id: '5', type: 'friendRequest', user: 'Ava', action: 'sent you a friend request', time: '5h', avatar: 'https://i.pravatar.cc/150?img=5', unread: false },
    { id: '6', type: 'profile', user: 'Sophia', action: 'viewed your profile', time: '1d', avatar: 'https://i.pravatar.cc/150?img=6', unread: false },
    { id: '7', type: 'tag', user: 'Jackson', action: 'tagged you in a post', time: '2d', avatar: 'https://i.pravatar.cc/150?img=7', unread: false },
    { id: '8', type: 'story', user: 'Isabella', action: 'reacted to your story', time: '3d', avatar: 'https://i.pravatar.cc/150?img=8', unread: false },
    { id: '9', type: 'message', user: 'Lucas', action: 'sent you a message', time: '4d', avatar: 'https://i.pravatar.cc/150?img=9', unread: false },
    { id: '10', type: 'event', user: 'Mia', action: 'invited you to an event', time: '5d', avatar: 'https://i.pravatar.cc/150?img=10', unread: false },
    { id: '11', type: 'stalkedScore', user: 'SocialApp', action: 'Your stalked score has reached 100! Congratulations!', time: 'Just now', avatar: 'https://i.pravatar.cc/150?img=11', unread: true },
  ]);


 useEffect(() => {
  const unreadCount = notifications.filter(n => n.unread && n.type !== 'stalkedScore').length;
  if (unreadCount > 0) {
    Toast.show({
      type: 'info',
      text1: `${unreadCount} New Notification${unreadCount > 1 ? 's' : ''}`,
      position: 'top',
      visibilityTime: 4000,
      autoHide: true,
    });
  }
}, []);

  const getIcon = (type) => {
    switch (type) {
      case 'like': return { name: 'heart', color: '#FF69B4' };  // Hot Pink
      case 'comment': return { name: 'comment', color: '#1E90FF' };  // Dodger Blue
      case 'follow': return { name: 'account-plus', color: '#32CD32' };  // Lime Green
      case 'mention': return { name: 'at', color: '#FF8C00' };  // Dark Orange
      case 'friendRequest': return { name: 'account', color: '#8A2BE2' };  // Blue Violet
      case 'profile': return { name: 'eye', color: '#20B2AA' };  // Light Sea Green
      case 'tag': return { name: 'tag', color: '#FF6347' };  // Tomato
      case 'story': return { name: 'book-open-variant', color: '#4169E1' };  // Royal Blue
      case 'message': return { name: 'message', color: '#00CED1' };  // Dark Turquoise
      case 'event': return { name: 'calendar', color: '#BA55D3' };  // Medium Orchid
      case 'stalkedScore': return { name: 'trophy', color: '#FFD700' };  // Gold
      default: return { name: 'bell', color: '#A9A9A9' };  // Dark Gray
    }
  };

  const deleteNotification = (id) => {
    setNotifications(prevNotifications => 
      prevNotifications.filter(notification => notification.id !== id)
    );
  };

  const markAsRead = (id) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, unread: false } : notification
      )
    );
  };

  const renderItem = (data) => (
    <TouchableOpacity onPress={() => markAsRead(data.item.id)}>
      <View style={[
        styles.rowFront,
        data.item.unread && styles.unreadNotification,
        data.item.type === 'stalkedScore' && styles.specialNotification
      ]}>
        <List.Item
          title={data.item.user}
          description={data.item.action}
          titleStyle={[
            data.item.unread && styles.unreadText,
            data.item.type === 'stalkedScore' && styles.specialNotificationText
          ]}
          descriptionStyle={[
            data.item.unread && styles.unreadText,
            data.item.type === 'stalkedScore' && styles.specialNotificationText
          ]}
          left={props => <Avatar.Image {...props} size={48} source={{ uri: data.item.avatar }} />}
          right={props => (
            <View style={styles.rightContent}>
              <List.Icon 
                icon={getIcon(data.item.type).name}
                color={getIcon(data.item.type).color}
              />
              <Text style={[
                styles.timeText,
                data.item.unread && styles.unreadText,
                data.item.type === 'stalkedScore' && styles.specialNotificationText
              ]}>
                {data.item.time}
              </Text>
            </View>
          )}
        />
      </View>
    </TouchableOpacity>
  );

  const renderHiddenItem = (data) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteNotification(data.item.id)}
      >
        <IconButton icon="delete" color="white" size={24} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Title style={styles.title}>Notifications</Title>
        <SwipeListView
          data={notifications}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-75}
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          keyExtractor={item => item.id}
        />
      </View>
      <Toast 
        config={{
          info: (props) => (
            <View style={{ 
              height: 40, 
              width: '80%', 
              backgroundColor: '#1E90FF',
              borderRadius: 10,
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>{props.text1}</Text>
            </View>
          ),
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  title: {
    padding: 16,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign:'center',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 12,
    color: 'gray',
  },
  rowFront: {
    backgroundColor: '#FFF',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 80,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  specialNotification: {
    backgroundColor: '#F0F8FF', // Light blue background
  },
  specialNotificationText: {
    color: '#4169E1', 
    fontWeight: 'bold',
  },
  unreadNotification: {
    backgroundColor: 'yellow', // Brighter blue background for unread notifications
  },
  unreadText: {
    fontWeight: 'bold',
    color: '#000', // Black text for unread notifications
  },
});

export default NotificationsScreen;