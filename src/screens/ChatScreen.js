import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'Hello! How can I help you today?',
      sender: 'coach',
      timestamp: new Date(),
    },
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: Date.now().toString(),
          text: message,
          sender: 'user',
          timestamp: new Date(),
        },
      ]);
      setMessage('');
    }
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'user' ? styles.userMessage : styles.coachMessage,
      ]}
    >
      <Text style={[
        styles.messageText,
        item.sender === 'user' ? styles.userMessageText : styles.coachMessageText,
      ]}>
        {item.text}
      </Text>
      <Text style={[
        styles.timestamp,
        item.sender === 'user' ? styles.userTimestamp : styles.coachTimestamp,
      ]}>
        {item.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </Text>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Chat with Care Team</Text>
      <TouchableOpacity style={styles.infoButton}>
        <Icon name="information" size={24} color="#007AFF" />
      </TouchableOpacity>
    </View>
  );

  const renderInputBar = () => (
    <View style={styles.inputContainer}>
      <TouchableOpacity style={styles.attachmentButton}>
        <Icon name="plus" size={24} color="#007AFF" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Type a message..."
        multiline
      />
      <TouchableOpacity
        style={[styles.sendButton, !message.trim() && styles.sendButtonDisabled]}
        onPress={sendMessage}
        disabled={!message.trim()}
      >
        <Icon name="send" size={24} color={message.trim() ? '#007AFF' : '#999'} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messagesList}
          inverted
        />
        {renderInputBar()}
      </KeyboardAvoidingView>
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
  infoButton: {
    padding: 8,
  },
  content: {
    flex: 1,
  },
  messagesList: {
    padding: 16,
  },
  messageContainer: {
    maxWidth: '80%',
    marginVertical: 4,
    padding: 12,
    borderRadius: 16,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007AFF',
  },
  coachMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F0F0F0',
  },
  messageText: {
    fontSize: 16,
  },
  userMessageText: {
    color: '#FFFFFF',
  },
  coachMessageText: {
    color: '#000000',
  },
  timestamp: {
    fontSize: 12,
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  userTimestamp: {
    color: '#FFFFFF',
    opacity: 0.7,
  },
  coachTimestamp: {
    color: '#666666',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  attachmentButton: {
    padding: 8,
  },
  input: {
    flex: 1,
    marginHorizontal: 8,
    padding: 8,
    maxHeight: 100,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
  },
  sendButton: {
    padding: 8,
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
});

export default ChatScreen; 