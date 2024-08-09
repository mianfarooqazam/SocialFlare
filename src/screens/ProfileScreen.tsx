import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Button, Card, Text, Switch, Divider, Avatar, Icon } from 'react-native-paper';
import ReusableModal from '../components/ReusableModal';

const ProfileScreen = () => {
  const [isIncognito, setIsIncognito] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const openModal = (title) => {
    setModalTitle(title);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderButton = (title, iconName) => (
    <Button
      mode="contained"
      style={styles.button}
      icon={() => <Icon source={iconName} size={20} color="white" />}
      onPress={() => openModal(title)}
    >
      {title}
    </Button>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Avatar.Image size={120} source={require('../../assets/profile.png')} />
          <Text style={styles.name}>Haleema Sultan</Text>

          <View style={styles.cardsContainer}>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Text variant="titleMedium" style={styles.cardTitle}>Today's Stalkers</Text>
                <Text variant="displayMedium" style={styles.cardValue}>42</Text>
              </Card.Content>
            </Card>
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                <Text variant="titleMedium" style={styles.cardTitle}>Stalker Score</Text>
                <Text variant="displayMedium" style={styles.cardValue}>87</Text>
              </Card.Content>
            </Card>
          </View>

          <Divider style={styles.divider} />

          <View style={styles.buttonGroup}>
            {renderButton('Personal Information', 'account')}
            {renderButton('Privacy Settings', 'shield-account')}
            {renderButton('Settings', 'cog')}
            {renderButton('Payments', 'credit-card')}
            {renderButton('Customer Support', 'headphones')}
            {renderButton('Terms & Conditions', 'file-document')}
            {renderButton('Member ID: #12345', 'card-account-details')}
          </View>

          <View style={styles.incognitoContainer}>
            <Text>Incognito Mode</Text>
            <Switch value={isIncognito} onValueChange={() => setIsIncognito(!isIncognito)} />
          </View>

          <Button 
            mode="contained" 
            style={styles.logoutButton}
            icon={() => <Icon source="logout" size={20} color="white" />}
          >
            Logout
          </Button>
        </View>

        <ReusableModal
          visible={modalVisible}
          onDismiss={closeModal}
          title={modalTitle}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    padding: 16,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  },
  card: {
    width: '48%',
  },
  cardContent: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  cardTitle: {
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  cardValue: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#57a4ff', 
  },
  divider: {
    width: '100%',
    marginVertical: 16,
  },
  buttonGroup: {
    width: '100%',
    gap: 15,
  },
  button: {
    width: '100%',
    borderColor: '#57a4ff',
    backgroundColor: "#57a4ff",
    borderRadius: 5,
  },
  incognitoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 16,
  },
  logoutButton: {
    width: '100%',
    borderColor: '#ff0000',
    backgroundColor: "#ff0000",
    borderRadius: 5,
  },
});

export default ProfileScreen;