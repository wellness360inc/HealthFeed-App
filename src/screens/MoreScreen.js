import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MoreScreen = () => {
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>More</Text>
    </View>
  );

  const renderProfileSection = () => (
    <TouchableOpacity style={styles.profileSection}>
      <View style={styles.profileAvatar}>
        <Icon name="account" size={40} color="#FFFFFF" />
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileEmail}>john.doe@example.com</Text>
      </View>
      <Icon name="chevron-right" size={24} color="#666666" />
    </TouchableOpacity>
  );

  const renderSettingsSection = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Settings</Text>
      <View style={styles.settingItem}>
        <View style={styles.settingLeft}>
          <Icon name="bell" size={24} color="#007AFF" />
          <Text style={styles.settingText}>Notifications</Text>
        </View>
        <Switch value={true} onValueChange={() => {}} />
      </View>
      <TouchableOpacity style={styles.settingItem}>
        <View style={styles.settingLeft}>
          <Icon name="lock" size={24} color="#007AFF" />
          <Text style={styles.settingText}>Privacy</Text>
        </View>
        <Icon name="chevron-right" size={24} color="#666666" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <View style={styles.settingLeft}>
          <Icon name="theme-light-dark" size={24} color="#007AFF" />
          <Text style={styles.settingText}>Appearance</Text>
        </View>
        <Icon name="chevron-right" size={24} color="#666666" />
      </TouchableOpacity>
    </View>
  );

  const renderSupportSection = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Support</Text>
      <TouchableOpacity style={styles.settingItem}>
        <View style={styles.settingLeft}>
          <Icon name="help-circle" size={24} color="#007AFF" />
          <Text style={styles.settingText}>Help Center</Text>
        </View>
        <Icon name="chevron-right" size={24} color="#666666" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <View style={styles.settingLeft}>
          <Icon name="message" size={24} color="#007AFF" />
          <Text style={styles.settingText}>Contact Support</Text>
        </View>
        <Icon name="chevron-right" size={24} color="#666666" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <View style={styles.settingLeft}>
          <Icon name="information" size={24} color="#007AFF" />
          <Text style={styles.settingText}>About</Text>
        </View>
        <Icon name="chevron-right" size={24} color="#666666" />
      </TouchableOpacity>
    </View>
  );

  const renderLogoutSection = () => (
    <View style={styles.section}>
      <TouchableOpacity style={[styles.settingItem, styles.logoutButton]}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView style={styles.content}>
        {renderProfileSection()}
        {renderSettingsSection()}
        {renderSupportSection()}
        {renderLogoutSection()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
  },
  profileEmail: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    marginLeft: 12,
  },
  logoutButton: {
    justifyContent: 'center',
  },
  logoutText: {
    fontSize: 16,
    color: '#FF3B30',
    textAlign: 'center',
  },
});

export default MoreScreen; 