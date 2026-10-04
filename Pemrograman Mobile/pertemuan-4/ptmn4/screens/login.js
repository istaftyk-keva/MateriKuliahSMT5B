import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halaman Login</Text>
      <Text style={styles.title}>Nama: Istafty Keva Yuftika</Text>
      <Text style={styles.title}>NIM: 2488010007</Text>
      <Button 
        title="Belum punya akun? Daftar di sini" 
        onPress={() => navigation.navigate('Signup')} 
      />
      <View style={{ height: 12 }} />
      <Button
        title="Masuk ke Aplikasi"
        onPress={() => navigation.replace('MainApp')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8fafc' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 }
});