import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';

const HomeScreen = () => {
  const [isAddModalVisible, setAddModalVisible] = useState(false);

  const toggleAddModal = () => {
    setAddModalVisible(!isAddModalVisible);
  };

  const AddButton = () => (
    <TouchableOpacity
      style={styles.addButton}
      onPress={toggleAddModal}
    >
      <Icon name="plus" size={24} color="#FFFFFF" />
      <Text style={styles.addButtonText}>Add</Text>
    </TouchableOpacity>
  );

  const AddModal = () => (
    <Modal
      isVisible={isAddModalVisible}
      onBackdropPress={toggleAddModal}
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <TouchableOpacity
          style={styles.modalOption}
          onPress={() => {
            // TODO: Navigate to Add Reminders
            toggleAddModal();
          }}
        >
          <Icon name="bell-outline" size={24} color="#007AFF" />
          <Text style={styles.modalOptionText}>Add Reminders</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.modalOption}
          onPress={() => {
            // TODO: Navigate to Add Medication
            toggleAddModal();
          }}
        >
          <Icon name="pill" size={24} color="#007AFF" />
          <Text style={styles.modalOptionText}>Add Medication</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.modalOption}
          onPress={() => {
            // TODO: Navigate to Add Challenges
            toggleAddModal();
          }}
        >
          <Icon name="trophy-outline" size={24} color="#007AFF" />
          <Text style={styles.modalOptionText}>Add Challenges</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
        <AddButton />
      </View>
      <ScrollView style={styles.content}>
        {/* TODO: Add Progress Bar */}
        {/* TODO: Add Rewards Bar */}
        {/* TODO: Add Active Challenges List */}
        {/* TODO: Add Reminders List */}
        {/* TODO: Add Medications List */}
      </ScrollView>
      <AddModal />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addButtonText: {
    color: '#FFFFFF',
    marginLeft: 4,
    fontSize: 16,
  },
  content: {
    flex: 1,
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  modalOptionText: {
    marginLeft: 16,
    fontSize: 16,
    color: '#000000',
  },
});

export default HomeScreen; 