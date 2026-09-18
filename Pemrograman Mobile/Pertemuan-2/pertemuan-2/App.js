import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>CURRICULUM VITAE</Text>

      <Text style={styles.label}>Nama Lengkap</Text>
      <Text style={styles.text}>Istafty Keva Yuftika</Text>

      <Text style={styles.label}>NIM</Text>
      <Text style={styles.text}>2488010007</Text>

      <Text style={styles.label}>Asal Sekolah</Text>
      <Text style={styles.text}>SMA Negeri 1 Palimanan</Text>

      <Text style={styles.label}>Cita-cita</Text>
      <Text style={styles.text}>pengusaha </Text>

      <Text style={styles.label}>Rencana Menggapai Cita-cita</Text>
      <Text style={styles.text}>
      Saya ingin belajar dengan giat agar mendapatkan nilai bagus sehingga mendapatkan pekerjaan dengan posisi yang sesuai  saya pelajari hingga uang saya terkumpul banyak dan bisa membangun bisnis salon seperti nail art dan MUA.
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
    justifyContent: 'center',
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  }, 

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
  },

  text: {
    fontSize: 16,
    marginTop: 5,
  },
});