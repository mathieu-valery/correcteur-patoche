# 🍺 Correcteur Patoche - Build Guide

This guide will help you build and distribute your Correcteur Patoche app.

## Prerequisites

1. **Expo Account**: Create a free account at [expo.dev](https://expo.dev)
2. **EAS CLI**: Already installed in this project

## Login to Expo

First, login to your Expo account:

```bash
npx eas login
```

## Build Profiles

This project has three build profiles configured in `eas.json`:

### 1. **Development Build** (for testing)
```bash
# For Android
npx eas build --profile development --platform android

# For iOS (requires Mac)
npx eas build --profile development --platform ios
```

### 2. **Preview Build** (APK for Android - easy to share)
```bash
# Creates an APK file that can be installed directly
npx eas build --profile preview --platform android
```

### 3. **Production Build** (for App Store/Play Store)
```bash
# For Android
npx eas build --profile production --platform android

# For iOS
npx eas build --profile production --platform ios

# For both platforms
npx eas build --profile production --platform all
```

## Quick Start - Build an APK for Testing

The easiest way to get a testable app is to build a preview APK:

```bash
npx eas build --profile preview --platform android
```

After the build completes (~15-20 minutes):
- You'll get a download link
- Download the APK
- Install it on your Android device
- Or scan the QR code to download directly on your device

## Build for Production

### Android (Google Play Store)

1. **Build the AAB file:**
   ```bash
   npx eas build --profile production --platform android
   ```

2. **Submit to Play Store:**
   ```bash
   npx eas submit --platform android
   ```
   
   Or download the `.aab` file and upload manually to the Play Console.

### iOS (App Store)

1. **Build the IPA file:**
   ```bash
   npx eas build --profile production --platform ios
   ```
   
   Note: For iOS builds, you'll need:
   - An Apple Developer account ($99/year)
   - To answer some prompts about certificates

2. **Submit to App Store:**
   ```bash
   npx eas submit --platform ios
   ```

## Local Development

To run the app locally during development:

```bash
# Start Expo dev server
npm start

# Or for specific platforms
npm run android
npm run ios
npm run web
```

## Build Status

Check your build status at: [expo.dev/accounts/[your-username]/projects/correcteur_patoche/builds](https://expo.dev)

## Configuration Files

- **eas.json**: Build profiles and configurations
- **app.json**: App metadata, bundle identifiers, and Expo configuration
- **metro.config.js**: Metro bundler configuration (needed for HTML files)

## Troubleshooting

### Build Failed
- Check the build logs in your Expo dashboard
- Make sure all dependencies are installed: `npm install`

### HTML Files Not Loading
- Ensure `metro.config.js` includes HTML in `assetExts`
- Clear Metro cache: `npx expo start --clear`

### Can't Install APK
- Enable "Install from Unknown Sources" on Android
- Or use `adb install app.apk`

## Useful Commands

```bash
# Check EAS CLI version
npx eas --version

# View build history
npx eas build:list

# Cancel a build
npx eas build:cancel

# View project info
npx eas project:info

# Update app over-the-air (OTA)
npx eas update
```

## Alternative: Export for Self-Hosting (Web)

To export a static website:

```bash
npx expo export --platform web
```

The output will be in the `dist/` folder and can be hosted on any static hosting service.

## Notes

- First build may take longer as EAS sets up credentials
- iOS builds require a Mac for local builds, but EAS can build in the cloud
- APK files are ~50MB, AAB/IPA files vary based on assets
- Development builds are larger than production builds

## Support

- [Expo Documentation](https://docs.expo.dev)
- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)
- [EAS Submit Documentation](https://docs.expo.dev/submit/introduction/)

