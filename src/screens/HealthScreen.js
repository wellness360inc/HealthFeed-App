import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HealthScreen = () => {
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Health</Text>
    </View>
  );

  const renderBenefitsSection = () => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Benefits</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.benefitCard}>
          <Icon name="file-document" size={24} color="#007AFF" />
          <Text style={styles.benefitTitle}>Claims</Text>
          <Text style={styles.benefitDescription}>View and manage your claims</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.benefitCard}>
          <Icon name="wallet" size={24} color="#007AFF" />
          <Text style={styles.benefitTitle}>HSA Account</Text>
          <Text style={styles.benefitDescription}>Check your HSA balance</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );

  const renderHealthProgramsSection = () => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recommended Health Programs</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.programCard}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            style={styles.programImage}
          />
          <Text style={styles.programTitle}>Diabetes Management</Text>
          <Text style={styles.programDescription}>Learn to manage your diabetes effectively</Text>
          <TouchableOpacity style={styles.enrollButton}>
            <Text style={styles.enrollButtonText}>Enroll Now</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.programCard}>
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            style={styles.programImage}
          />
          <Text style={styles.programTitle}>Heart Health</Text>
          <Text style={styles.programDescription}>Improve your heart health</Text>
          <TouchableOpacity style={styles.enrollButton}>
            <Text style={styles.enrollButtonText}>Enroll Now</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );

  const renderWellnessActivitiesSection = () => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Wellness Activities</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.activityCard}>
          <Icon name="run" size={24} color="#007AFF" />
          <Text style={styles.activityTitle}>Exercise</Text>
          <Text style={styles.activityDescription}>Daily exercise routines</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activityCard}>
          <Icon name="meditation" size={24} color="#007AFF" />
          <Text style={styles.activityTitle}>Meditation</Text>
          <Text style={styles.activityDescription}>Guided meditation sessions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activityCard}>
          <Icon name="food-apple" size={24} color="#007AFF" />
          <Text style={styles.activityTitle}>Nutrition</Text>
          <Text style={styles.activityDescription}>Healthy eating guides</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <ScrollView style={styles.content}>
        {renderBenefitsSection()}
        {renderHealthProgramsSection()}
        {renderWellnessActivitiesSection()}
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
  section: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  viewAllText: {
    color: '#007AFF',
    fontSize: 16,
  },
  benefitCard: {
    width: 150,
    padding: 16,
    marginRight: 16,
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    alignItems: 'center',
  },
  benefitTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },
  benefitDescription: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginTop: 4,
  },
  programCard: {
    width: 200,
    marginRight: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  programImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  programTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    paddingHorizontal: 12,
  },
  programDescription: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
    paddingHorizontal: 12,
  },
  enrollButton: {
    margin: 12,
    padding: 8,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  enrollButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  activityCard: {
    width: 150,
    padding: 16,
    marginRight: 16,
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    alignItems: 'center',
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },
  activityDescription: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginTop: 4,
  },
});

export default HealthScreen; 