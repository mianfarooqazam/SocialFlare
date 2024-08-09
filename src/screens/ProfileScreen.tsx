import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Card, Text, Switch, Divider, Avatar } from 'react-native-paper';

const ProfileScreen = () => {
  const [isIncognito, setIsIncognito] = useState(false);

  return (
    <View style={styles.container}>
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
        <Button mode="outlined" style={styles.button}>Personal Information</Button>
        <Button mode="outlined" style={styles.button}>Privacy Settings</Button>
        <Button mode="outlined" style={styles.button}>Settings</Button>
      </View>

      <Divider style={styles.divider} />

      <View style={styles.buttonGroup}>
        <Button mode="outlined" style={styles.button}>Payments</Button>
        <Button mode="outlined" style={styles.button}>Customer Support</Button>
      </View>

      <Divider style={styles.divider} />

      <View style={styles.buttonGroup}>
        <Button mode="outlined" style={styles.button}>Terms & Conditions</Button>
        <Button mode="outlined" style={styles.button}>Member ID: #12345</Button>
      </View>

      <View style={styles.incognitoContainer}>
        <Text>Incognito Mode</Text>
        <Switch value={isIncognito} onValueChange={() => setIsIncognito(!isIncognito)} />
      </View>

      <Button mode="contained" style={styles.logoutButton}>Logout</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    marginBottom: 8,
    width: '48%',
    borderColor: '#6200ee',
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
    marginTop: 16,
    backgroundColor: '#6200ee',
  },
});

export default ProfileScreen;