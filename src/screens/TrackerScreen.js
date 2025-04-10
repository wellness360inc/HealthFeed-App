import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const TrackerScreen = () => {
  const [selectedTracker, setSelectedTracker] = useState('daily');

  const renderTrackerHeader = () => (
    <View style={styles.trackerHeader}>
      <Text style={styles.trackerTitle}>Trackers</Text>
      <TouchableOpacity style={styles.reorderButton}>
        <Icon name="drag" size={24} color="#007AFF" />
      </TouchableOpacity>
    </View>
  );

  const renderDailyTasksTracker = () => (
    <View style={styles.trackerCard}>
      <View style={styles.trackerCardHeader}>
        <Text style={styles.trackerCardTitle}>Daily Tasks</Text>
        <TouchableOpacity>
          <Icon name="chevron-right" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.trackerContent}>
        {/* TODO: Add daily tasks progress visualization */}
      </View>
    </View>
  );

  const renderMedicationTracker = () => (
    <View style={styles.trackerCard}>
      <View style={styles.trackerCardHeader}>
        <Text style={styles.trackerCardTitle}>Medication</Text>
        <TouchableOpacity>
          <Icon name="chevron-right" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.trackerContent}>
        {/* TODO: Add medication adherence visualization */}
      </View>
    </View>
  );

  const renderBloodGlucoseTracker = () => (
    <View style={styles.trackerCard}>
      <View style={styles.trackerCardHeader}>
        <Text style={styles.trackerCardTitle}>Blood Glucose</Text>
        <TouchableOpacity>
          <Icon name="plus" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.trackerContent}>
        <LineChart
          data={{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
              data: [120, 135, 125, 130, 140, 128, 132]
            }]
          }}
          width={Dimensions.get('window').width - 32}
          height={220}
          chartConfig={{
            backgroundColor: '#FFFFFF',
            backgroundGradientFrom: '#FFFFFF',
            backgroundGradientTo: '#FFFFFF',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          style={styles.chart}
        />
      </View>
    </View>
  );

  const renderActivityTracker = () => (
    <View style={styles.trackerCard}>
      <View style={styles.trackerCardHeader}>
        <Text style={styles.trackerCardTitle}>Activity</Text>
        <TouchableOpacity>
          <Icon name="chevron-right" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.trackerContent}>
        {/* TODO: Add activity tracking visualization */}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        {renderTrackerHeader()}
        {renderDailyTasksTracker()}
        {renderMedicationTracker()}
        {renderBloodGlucoseTracker()}
        {renderActivityTracker()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
  },
  trackerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  trackerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  reorderButton: {
    padding: 8,
  },
  trackerCard: {
    margin: 16,
    padding: 16,
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
  trackerCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  trackerCardTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  trackerContent: {
    minHeight: 100,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default TrackerScreen; 