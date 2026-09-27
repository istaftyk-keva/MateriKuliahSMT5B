// ============================================
// LANGKAH 1 — Import & Struktur Dasar
// ============================================
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  SectionList,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Switch,
  Modal,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Alert,
} from "react-native";

// ============================================
// LANGKAH 2 — DATA PROFIL 
// ============================================
const PROFILE = {
  name: "Istafty Keva Yuftika",
  title: "Full Stack Mobile Developer",
  email: "istaftyk@gmail.com",
  phone: "082323515007",
  location: "Semarang, Jawa Tengah",
  bio: "Mahasiswa Pemrograman Mobile yang sedang belajar membangun aplikasi dengan React Native & Expo.",
  Github: "https://github.com/istaftyk-keva",
  
  // PENTING: avatar cuma berisi SUMBER gambar (require), bukan komponen <Image> lengkap.
  // Ganti nama file sesuai foto yang benar-benar ada di folder assets/
  avatar: require("./assets/keepy2.jpg"),
};

// ============================================
// DATA SKILLS (array of objects)
// → Akan ditampilkan dengan FlatList
// ============================================
const SKILLS = [
  { id: "1", name: "JavaScript", level: 85, color: "#f0db4f" },
  { id: "2", name: "React Native", level: 80, color: "#61dafb" },
  { id: "3", name: "Node.js", level: 70, color: "#68a063" },
  { id: "4", name: "UI/UX Design", level: 65, color: "#e879f9" },
  { id: "5", name: "Git & GitHub", level: 75, color: "#f97316" },
];

// ============================================
// DATA RIWAYAT (sections)
// → Akan ditampilkan dengan SectionList
// ============================================
const HISTORY = [
  {
    title: "Pendidikan",
    data: [
      {
        id: "p1",
        role: "S1 Informatika",
        place: "UINSSC",
        period: "2024 - Sekarang",
        description: "Fokus pada pengembangan aplikasi mobile dan web.",
      },
      {
        id: "p2",
        role: "IPA",
        place: "SMA Negeri 1 Palimanan",
        period: "2021 - 2024",
        description: "Fokus pada pembelajaran sains, matematika, dan kemampuan berpikir analitis.",
      },
    ],
  },
];

// ============================================
// PALET WARNA (konstanta warna terpusat)
// ============================================
const COLORS = {
  dark: "#1f2937",
  darkText: "#ffffff",
  accent: "#2563eb",
  accentLight: "#93c5fd",
  bg: "#f3f4f6",
  card: "#ffffff",
  border: "#e5e7eb",
  textPrimary: "#111827",
  textSecondary: "#6b7280",
  badgeBg: "#dcfce7",
  badgeText: "#166534",
};

// ============================================
// LANGKAH 3 — Sub-Components (SkillCard & TimelineCard)
// ============================================
function SkillCard({ item }) {
  return (
    <View style={styles.skillCard}>
      <View style={styles.skillHeader}>
        <Text style={styles.skillName}>{item.name}</Text>
        <Text style={styles.skillPercent}>{item.level}%</Text>
      </View>
      <View style={styles.skillTrack}>
        <View
          style={[
            styles.skillFill,
            { width: `${item.level}%`, backgroundColor: item.color },
          ]}
        />
      </View>
    </View>
  );
}

function TimelineCard({ item, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.timelineCard,
        pressed && { opacity: 0.7 },
      ]}
      onPress={onPress}
    >
      <Text style={styles.timelinePeriod}>{item.period}</Text>
      <Text style={styles.timelineRole}>{item.role}</Text>
      <Text style={styles.timelinePlace}>{item.place}</Text>
    </Pressable>
  );
}

// ============================================
// KOMPONEN UTAMA APP()
// ============================================
export default function App() {
  // LANGKAH 4 — State Management dengan useState
  const [openToWork, setOpenToWork] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedHistory, setSelectedHistory] = useState(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSocial = (label, value) => {
    Alert.alert(label, value);
  };

  const handleDownload = () => {
    Alert.alert("Download CV", "CV sedang diunduh...");
  };

  const openHistoryModal = (item) => {
    setSelectedHistory(item);
    setModalVisible(true);
  };

  const handleSend = () => {
    if (!name.trim() || !message.trim()) {
      Alert.alert("Peringatan", "Nama dan pesan tidak boleh kosong.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setName("");
      setMessage("");
      Alert.alert("Sukses", "Pesan berhasil dikirim!");
    }, 2000);
  };

  return (
    // LANGKAH 5 — SafeAreaView, StatusBar & Header
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.dark} />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>My CV</Text>
        <View style={styles.headerRight}>
          <Text style={styles.switchLabel}>
            {openToWork ? "Open to Work" : "Tidak Tersedia"}
          </Text>
          <Switch
            value={openToWork}
            onValueChange={setOpenToWork}
            thumbColor={openToWork ? COLORS.accent : "#f4f3f4"}
            trackColor={{ false: "#767577", true: COLORS.accentLight }}
          />
        </View>
      </View>

      {/* LANGKAH 6 — ScrollView & Profil Section */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileSection}>
          <Image source={PROFILE.avatar} style={styles.avatar} />
          <Text style={styles.name}>{PROFILE.name}</Text>
          <Text style={styles.title}>{PROFILE.title}</Text>

          {openToWork && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>✅ Open to Work</Text>
            </View>
          )}

          <Text style={styles.bio}>{PROFILE.bio}</Text>

          <View style={styles.socialRow}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => handleSocial("Email", PROFILE.email)}
            >
              <Text style={styles.socialText}>✉ Email</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => handleSocial("Telepon", PROFILE.phone)}
            >
              <Text style={styles.socialText}>📞 Telepon</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => handleSocial("Github", PROFILE.Github)}
            >
              <Text style={styles.socialText}>🔗 GitHub</Text>
            </TouchableOpacity>
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.downloadButton,
              pressed && styles.downloadButtonPressed,
            ]}
            onPress={handleDownload}
          >
            {({ pressed }) => (
              <Text style={styles.downloadText}>
                {pressed ? "Mengunduh..." : "⬇ Download CV"}
              </Text>
            )}
          </Pressable>
        </View>

        {/* ════════════════════════════════════
            LANGKAH 7 — SECTION SKILLS (FlatList)
            ════════════════════════════════════ */}
        <View style={styles.sectionBox}>
          <FlatList
            data={SKILLS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <SkillCard item={item} />}
            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
            ListHeaderComponent={
              <Text style={styles.sectionListHeader}>💡 Skills & Keahlian</Text>
            }
            scrollEnabled={false}
          />
        </View>

        {/* ════════════════════════════════════
            LANGKAH 8 — SECTION RIWAYAT (SectionList)
            ════════════════════════════════════ */}
        <View style={styles.sectionBox}>
          <SectionList
            sections={HISTORY}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TimelineCard item={item} onPress={() => openHistoryModal(item)} />
            )}
            renderSectionHeader={({ section }) => (
              <Text style={styles.sectionListHeader}>📌 {section.title}</Text>
            )}
            scrollEnabled={false}
          />
        </View>

        {/* ════════════════════════════════════
            LANGKAH 9 — SECTION FORM KONTAK
            (TextInput, Button, ActivityIndicator)
            ════════════════════════════════════ */}
        <View style={styles.sectionBox}>
          <Text style={styles.sectionListHeader}>✉️ Hubungi Saya</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Nama Anda"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={[styles.textInput, styles.textArea]}
            placeholder="Pesan Anda"
            value={message}
            onChangeText={setMessage}
            multiline
          />

          {sending ? (
            <View style={styles.loadingRow}>
              <ActivityIndicator size="small" color={COLORS.accent} />
              <Text style={styles.loadingText}>Mengirim pesan...</Text>
            </View>
          ) : (
            <Button title="Kirim Pesan" onPress={handleSend} color={COLORS.accent} />
          )}
        </View>
      </ScrollView>

      {/* ════════════════════════════════════
          LANGKAH 10 — MODAL (popup detail riwayat)
          ════════════════════════════════════ */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedHistory && (
              <>
                <Text style={styles.modalPeriod}>{selectedHistory.period}</Text>
                <Text style={styles.modalTitle}>{selectedHistory.role}</Text>
                <Text style={styles.modalSubtitle}>{selectedHistory.place}</Text>
                <Text style={styles.modalDescription}>
                  {selectedHistory.description}
                </Text>
              </>
            )}
            <Button title="Tutup" onPress={() => setModalVisible(false)} color={COLORS.dark} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

// ============================================
// LANGKAH 11 — StyleSheet.create() → semua style
// ============================================
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  scrollContent: {
    paddingBottom: 40,
  },

  // ── HEADER BAR ────────────────────────────
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.dark,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    color: COLORS.darkText,
    fontSize: 18,
    fontWeight: "bold",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  switchLabel: {
    color: COLORS.darkText,
    fontSize: 12,
  },

  // ── SECTION PROFIL ─────────────────────────
  profileSection: {
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.card,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: COLORS.accentLight,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.textPrimary,
  },
  title: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 8,
  },
  bio: {
    fontSize: 13,
    color: COLORS.textSecondary,
    textAlign: "center",
    marginTop: 10,
    lineHeight: 20,
  },
  badge: {
    backgroundColor: COLORS.badgeBg,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    color: COLORS.badgeText,
    fontSize: 12,
    fontWeight: "600",
  },

  // ── SOSIAL MEDIA ───────────────────────────
  socialRow: {
    flexDirection: "row",
    marginTop: 16,
    gap: 10,
  },
  socialButton: {
    backgroundColor: COLORS.bg,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  socialText: {
    fontSize: 12,
    color: COLORS.textPrimary,
  },

  // ── PRESSABLE DOWNLOAD ─────────────────────
  downloadButton: {
    marginTop: 16,
    backgroundColor: COLORS.accent,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  downloadButtonPressed: {
    backgroundColor: COLORS.dark,
  },
  downloadText: {
    color: "#fff",
    fontWeight: "600",
  },

  // ── SECTION BOX (wrapper kartu) ────────────
  sectionBox: {
    backgroundColor: COLORS.card,
    marginTop: 12,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 12,
  },

  // ── SECTION LIST HEADER ────────────────────
  sectionListHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.textPrimary,
    marginBottom: 10,
    marginTop: 6,
  },

  // ── SKILL CARD ─────────────────────────────
  skillCard: {
    marginBottom: 4,
  },
  skillHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  skillName: {
    fontSize: 13,
    color: COLORS.textPrimary,
  },
  skillPercent: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  skillTrack: {
    height: 8,
    backgroundColor: COLORS.bg,
    borderRadius: 4,
    overflow: "hidden",
  },
  skillFill: {
    height: 8,
    borderRadius: 4,
  },

  // ── TIMELINE CARD ──────────────────────────
  timelineCard: {
    borderLeftWidth: 3,
    borderLeftColor: COLORS.accent,
    paddingLeft: 12,
    paddingVertical: 8,
    marginBottom: 10,
  },
  timelinePeriod: {
    fontSize: 11,
    color: COLORS.accent,
    fontWeight: "600",
  },
  timelineRole: {
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.textPrimary,
  },
  timelinePlace: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },

  // ── TEXT INPUT ─────────────────────────────
  textInput: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
    fontSize: 14,
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },

  // ── LOADING ROW ────────────────────────────
  loadingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    justifyContent: "center",
    paddingVertical: 10,
  },
  loadingText: {
    fontSize: 13,
    color: COLORS.textSecondary,
  },

  // ── MODAL ──────────────────────────────────
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    gap: 8,
  },
  modalPeriod: {
    fontSize: 12,
    color: COLORS.accent,
    fontWeight: "600",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.textPrimary,
  },
  modalSubtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 6,
  },
  modalDescription: {
    fontSize: 13,
    color: COLORS.textPrimary,
    lineHeight: 20,
    marginBottom: 12,
  },
});