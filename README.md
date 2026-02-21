# Correcteur Patoche

Expo React Native application for water correction.

## 📱 Local Development & Testing on Phone

### Install dependencies

```bash
npm install

```
### Starting the Expo Dev Server

```bash
# Start the development server
npm start
# or
npx expo start
```

This will:
- Start Metro bundler
- Show a QR code in your terminal
- Open Expo DevTools in your browser

### Testing on Your Phone

**Prerequisites:**
- Install **Expo Go** app on your phone from:
  - iOS: App Store
  - Android: Google Play Store

**Connection Methods:**

1. **QR Code Method (Easiest)**
   - Run `npm start`
   - Open Expo Go app on your phone
   - Scan the QR code from your terminal/browser
   - Make sure your phone and computer are on the **same Wi-Fi network**

2. **Tunnel Method (If on different networks)**
   ```bash
   npx expo start --tunnel
   ```
   This creates a public URL that works even if you're on different networks (uses ngrok)

3. **Platform-Specific Commands**
   ```bash
   # Launch on Android device/emulator
   npm run android
   
   # Launch on iOS device/simulator (macOS only)
   npm run ios
   ```

### Development Tips

- **Clear cache** if you encounter issues:
  ```bash
  npx expo start -c
  # or
  npx expo start --clear
  ```

- **Check your IP** if QR code doesn't work:
  ```bash
  ifconfig | grep "inet "
  ```
  Then manually enter the connection URL in Expo Go

## 🏗️ Building for Production

### EAS Build Setup

**One-Time Setup:**

1. **Install EAS CLI** (if not already installed):
   ```bash
   npm install -g eas-cli
   ```

2. **Login to Expo account**:
   ```bash
   eas login
   ```

3. **Configure your project**:
   ```bash
   eas build:configure
   ```
   This creates `eas.json` configuration file

### Building APK/IPA

**For Android (APK):**
```bash
# Build APK for Android (installable on device)
eas build --platform android --profile preview

# Build for production/Play Store
eas build --platform android --profile production
```

**For iOS (IPA):**
```bash
# Build for iOS simulator
eas build --platform ios --profile preview

# Build for production/App Store (requires Apple Developer account)
eas build --platform ios --profile production
```

**For Both Platforms:**
```bash
eas build --platform all
```

### Build Process Steps

1. **Start Build**: Run the appropriate `eas build` command
2. **Wait for Build**: EAS will build your app on their servers (10-30 minutes)
3. **Download**: Once complete, you'll get a download link
4. **Install**:
   - **Android**: Download the APK and install directly on your device
   - **iOS**: Download IPA and install via TestFlight or direct installation

### Checking Build Status

```bash
# View all builds
eas build:list

# View specific build
eas build:view [BUILD_ID]
```

## 📦 Creating Development Builds (SDK Files)

Development builds include custom native code and allow you to test without Expo Go:

```bash
# Create development build for Android
eas build --profile development --platform android

# Create development build for iOS
eas build --profile development --platform ios

# Install the development build on your device
# Then run:
npx expo start --dev-client
```

## 🔧 Useful Commands Reference

### Development
```bash
npm start                    # Start dev server
npm run android             # Run on Android
npm run ios                 # Run on iOS
npm run web                 # Run in web browser
npx expo start -c           # Start with cache cleared
npx expo start --tunnel     # Start with tunnel (works across networks)
```

### Building
```bash
eas build:configure         # Initial EAS setup
eas build -p android        # Build for Android
eas build -p ios            # Build for iOS
eas build --profile preview # Build preview/development version
eas build:list              # List all builds
```

### Project Management
```bash
npm run lint                # Run linter
npx expo install            # Install compatible packages
npx expo doctor             # Check for common issues
npx expo upgrade            # Upgrade Expo SDK
```

### Troubleshooting
```bash
# Clear all caches and restart
npx expo start -c

# Reset Metro bundler
rm -rf node_modules/.cache

# Reinstall dependencies
rm -rf node_modules
npm install

# Check Expo diagnostics
npx expo doctor
```

## 📝 Important Notes

### Network Requirements
- **Same Wi-Fi**: Your phone and computer must be on the same Wi-Fi network (or use `--tunnel`)
- **Firewall**: Make sure your firewall allows connections on port 8081
- **Corporate Networks**: May block connections - use `--tunnel` flag

### .DS_Store Files
- These are macOS system files (Finder metadata)
- Already added to `.gitignore` - they won't be tracked in git
- Safe to ignore in version control

### EAS Build Requirements
- **Expo account**: Free account required (sign up at expo.dev)
- **iOS builds**: Requires Apple Developer account ($99/year) for production builds
- **Android builds**: Free for development, Google Play account ($25 one-time) for store deployment

## 🚀 Quick Start Workflow

1. **Development**:
   ```bash
   npm start
   # Scan QR code with Expo Go app
   ```

2. **Make changes**: Edit files - changes appear instantly on your phone

3. **Build for testing**:
   ```bash
   eas build --platform android --profile preview
   ```

4. **Install on device**: Download APK from build completion link

---

For more information, visit [Expo Documentation](https://docs.expo.dev/)
