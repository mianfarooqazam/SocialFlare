import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { List, Avatar, Title, IconButton, Text } from 'react-native-paper';
import { SwipeListView } from 'react-native-swipe-list-view';

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState([
    { id: '1', type: 'like', user: 'Emma', action: 'liked your post', time: '2m', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: '2', type: 'comment', user: 'Liam', action: 'commented on your photo', time: '15m', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: '3', type: 'follow', user: 'Olivia', action: 'started following you', time: '1h', avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: '4', type: 'mention', user: 'Noah', action: 'mentioned you in a comment', time: '3h', avatar: 'https://i.pravatar.cc/150?img=4' },
    { id: '5', type: 'friendRequest', user: 'Ava', action: 'sent you a friend request', time: '5h', avatar: 'https://i.pravatar.cc/150?img=5' },
  ]);

  const getIcon = (type) => {
    switch (type) {
      case 'like': return 'heart';
      case 'comment': return 'comment';
      case 'follow': return 'account-plus';
      case 'mention': return 'at';
      case 'friendRequest': return 'account';
      default: return 'bell';
    }
  };

  const deleteNotification = (id) => {
    setNotifications(prevNotifications => 
      prevNotifications.filter(notification => notification.id !== id)
    );
  };

  const renderItem = (data) => (
    <View style={styles.rowFront}>
      <List.Item
        title={data.item.user}
        description={data.item.action}
        left={props => <Avatar.Image {...props} size={48} source={{ uri: data.item.avatar }} />}
        right={props => (
          <View style={styles.rightContent}>
            <List.Icon icon={getIcon(data.item.type)} />
            <Text style={styles.timeText}>{data.item.time}</Text>
          </View>
        )}
      />
    </View>
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
    <View style={styles.container}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    padding: 16,
    fontSize: 24,
    fontWeight: 'bold',
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
});

export default NotificationsScreen;