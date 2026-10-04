# Laporan Praktikum 3: Core Components dan Styling #

### Langkah 1 : Import Library & Components ###

1. Buka file App.js yang ada di folder projek ptmn2
2. Import Library dan Component yang diperlukan 
3. Konfirmasi Bukti 

<img src="Screenshot 2026-09-27 230312.png" width="50%" >

1. Buat objek array bernama PROFILE  untuk wadah data profile 
2. Masukkan data yang diperlukan 
3. konfirmasi bukti

<img src="Screenshot 2026-09-27 230440.png>" width="50%" >
<img src="Screenshot 2026-09-27 230534.png" width="50%" >
<img src="Screenshot 2026-09-27 230711.png" width="50%" >


### Langkah 3 :  — Sub-Components (SkillCard & TimelineCard) ###
 1. Buat komponen SkillCard untuk merender satu item skill dengan progress bar
 2. Buat komponen TimelineCard untuk merender satu item riwayat yang bisa ditekan
 3. Konfirmasi Bukti 

<img src="Screenshot 2026-09-27 230932.png" width="50%" >
<img src="Screenshot 2026-09-27 230917.png" width="50%" >

### Langkah 4 : State Management dengan useState ###
1. Import useState dari react
2. Deklarasikan state di dalam fungsi App(): status Switch, input form, loading, visibilitas Modal, item riwayat terpilih
3. Konfirmasi Bukti

<img src= "Screenshot 2026-09-27 231557.png" width="50%" >
<img src="Screenshot 2026-09-27 231758.png"width="50%" >

### Langkah 5 : SafeAreaView, StatusBar & Header ###

1. Bungkus tampilan dengan SafeAreaView agar konten tidak tertutup notch/home indicator
2. Tambahkan StatusBar untuk mengatur tampilan bar atas perangkat
3. Buat header bar dengan View (flexDirection: 'row') + Switch
4. Konfirmasi Bukti

<img src= "Screenshot 2026-09-27 231908.png" width="50%" >

### Langkah 6 : ScrollView & Profil Section (View, Text, Image) ###
1. Bungkus semua konten CV dengan ScrollView agar bisa di-scroll
2. Tampilkan Image dari URL (source={{ uri: '...' }}) untuk foto profil
3. Tampilkan nama, jabatan, bio dengan Text yang diberi style
4. Buat tombol sosmed dengan TouchableOpacity dan tombol download dengan Pressable
5. Konfirmasi Bukti

 <img src="Screenshot 2026-09-27 232007.png" width="50%" >
 <img src="Screenshot 2026-09-27 232106.png" width="50%" >

### Langkah 7 : FlatList (Daftar Skills) ###
1. Tambahkan FlatList di dalam <ScrollView>, setelah section profil
2. Isi prop data, keyExtractor, renderItem, dan ItemSeparatorComponent
3. Konfirmasi Bukti

<img src= "Screenshot 2026-09-27 232339.png" width="50%" >

### Langkah 8 : SectionList (Pengalaman & Pendidikan) ###
1. Tambahkan SectionList di dalam <ScrollView>, setelah section skills
2. Isi prop sections (bukan data), renderItem, dan renderSectionHeader
3. Konfirmasi Bukti

<img src= "Screenshot 2026-09-27 232444.png" width="50%" >

### Langkah 9 : TextInput, Button & ActivityIndicator ###
1. Buat TextInput (controlled component) dengan value + onChangeText untuk nama dan pesan
2. Buat Button "Kirim Pesan"
3. Tampilkan ActivityIndicator sebagai spinner loading saat form dikirim
4. Konfirmasi Bukti
![alt text](<Screenshot 2026-09-27 232557.png>)
<img src= "Screenshot 2026-09-27 232557.png" width="50%" >

### Langkah 10 : Modal (Popup Detail) ###
1. Tambahkan Modal setelah penutup </ScrollView> dan sebelum </SafeAreaView>
2. Atur prop visible, animationType, transparent, onRequestClose
3. Konfirmasi Bukti

<img src= "Screenshot 2026-09-27 232640.png" width="50%" >

### Langkah 11 : StyleSheet (Styling Terpusat) ###
1. Buat konstanta palet warna terpusat
2. Buat StyleSheet.create() di bawah fungsi App(), berisi seluruh style (header bar, section profil, sosial media, pressable download, section box, section list header, skill card, timeline card, text input, loading row, modal)
3. Konfirmasi Bukti

<img src= "Screenshot 2026-09-27 232728.png" width="50%" >
<img src= "Screenshot 2026-09-27 232811.png" width="50%" >
<img src= "Screenshot 2026-09-27 232939.png" width="50%" >
<img src= "Screenshot 2026-09-27 233138" width="50%" >
<img src= "Screenshot 2026-09-27 233205-1" width="50%" >
<img src=  "Screenshot 2026-09-27 233222.png" width="50%" >

# BUKTI HASIL AKHIR #

![alt text](<WhatsApp Video 2026-09-28 at 00.06.12.gif>)