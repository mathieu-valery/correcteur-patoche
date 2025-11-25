import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { Stack } from 'expo-router';
import { useState, useEffect } from 'react';
import * as FileSystem from 'expo-file-system/legacy';
import { Asset } from 'expo-asset';

export default function CorrecteurScreen() {
  const [htmlContent, setHtmlContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadHTML() {
      try {
        const asset = Asset.fromModule(require('@/CORRECTEUR.html'));
        await asset.downloadAsync();
        
        if (asset.localUri) {
          const content = await FileSystem.readAsStringAsync(asset.localUri);
          setHtmlContent(content);
        }
      } catch (error) {
        console.error('Error loading HTML:', error);
      } finally {
        setLoading(false);
      }
    }
    loadHTML();
  }, []);
  
  if (loading || !htmlContent) {
    return (
      <View style={styles.loadingContainer}>
        <Stack.Screen options={{ title: 'Correction densité à la Patoche' }} />
        <ActivityIndicator size="large" color="#667eea" />
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Correction densité à la Patoche' }} />
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent, baseUrl: '' }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        allowFileAccess={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  webview: {
    flex: 1,
  },
});

