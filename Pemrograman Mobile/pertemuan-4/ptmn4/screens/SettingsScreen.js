import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengaturan ⚙️</Text>
      <Text style={styles.subtitle}>Ini halaman khusus Drawer (tidak muncul di Tab Bar).</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 13, color: '#6b7280', textAlign: 'center' },
});