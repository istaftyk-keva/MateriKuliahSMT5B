import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halaman Sign Up</Text>
      <Text style={styles.title}>Nama: Istafty Keva Yuftika</Text>
      <Text style={styles.title}>NIM: 2488010007</Text>
      <Button
        title="Kembali ke Login"
        onPress={() => navigation.goBack()}
      />
      <View style={{ height: 12 }} />
      <Button
        title="Daftar & Masuk ke Aplikasi"
        onPress={() => navigation.replace('MainApp')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0f2fe' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});