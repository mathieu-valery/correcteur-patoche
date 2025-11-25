import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#667eea', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">🍺 Correcteur Patoche</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.descriptionContainer}>
        <ThemedText>
          Bienvenue dans l&apos;application Correcteur Patoche. Choisissez l&apos;outil dont vous avez besoin :
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push('/correcteur')}
        >
          <ThemedView style={styles.buttonContent}>
            <ThemedText style={styles.buttonIcon}>💧</ThemedText>
            <ThemedText type="subtitle" style={styles.buttonTitle}>
              Correction Densité
            </ThemedText>
            <ThemedText style={styles.buttonDescription}>
              Calcul des ajustements de densité (OG) avec dilution et ajout de sucres
            </ThemedText>
          </ThemedView>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push('/water-correction')}
        >
          <ThemedView style={styles.buttonContent}>
            <ThemedText style={styles.buttonIcon}>🔬</ThemedText>
            <ThemedText type="subtitle" style={styles.buttonTitle}>
              Correction d&apos;Eau
            </ThemedText>
            <ThemedText style={styles.buttonDescription}>
              Ajustement des profils minéraux de votre eau de brassage
            </ThemedText>
          </ThemedView>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  descriptionContainer: {
    marginBottom: 24,
  },
  buttonContainer: {
    gap: 16,
    marginBottom: 32,
  },
  button: {
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  buttonContent: {
    padding: 24,
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'rgba(102, 126, 234, 0.2)',
  },
  buttonIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  buttonTitle: {
    marginBottom: 8,
    fontSize: 20,
  },
  buttonDescription: {
    fontSize: 14,
    opacity: 0.7,
    lineHeight: 20,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
