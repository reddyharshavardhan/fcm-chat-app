# FCM Push Notification Chat Application

A cross-platform chat application demonstrating Firebase Cloud Messaging (FCM) integration for real-time push notifications.

## 🚀 Features

### Web Application (Next.js + TypeScript)
- ✅ Real-time FCM push notifications
- ✅ Works in foreground, background, and closed states
- ✅ Permission request handling
- ✅ Rate limiting (3 messages per minute)
- ✅ Clean, responsive chat interface
- ✅ Debug logging for FCM tokens
- ✅ Service Worker for background notifications

### Mobile Application (React Native + Expo)
- ✅ Push notification support structure
- ✅ Chat interface with message input
- ✅ Permission handling
- ✅ Rate limiting implementation
- ⚠️ Note: Requires development build for full FCM support (Expo Go has limitations)

## 📋 Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- Firebase project with FCM enabled
- Modern web browser with notification support
- For mobile: Expo CLI and Android Studio/Xcode (for development builds)

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/fcm-chat-app.git
cd fcm-chat-app
```

### 2. Web Application Setup

```bash
cd web
npm install
```

Create .env.local file in the web directory:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_VAPID_KEY=your_vapid_key
```

Run the development server:

```bash
npm run dev
```

Open **http://localhost:3000**

### 3. Testing Push Notifications
1. Allow notification permissions when prompted
2. Copy the FCM token from browser console
3. Test using the provided script:

```bash
# From root directory
node test-notification.js YOUR_FCM_TOKEN
```

Or use the interactive menu:

```bash
node test-menu.js
```

### 4. Mobile Application Setup

```bash
cd mobile
npm install
```

For testing with Expo Go (limited functionality):

```bash
npx expo start
```

For full FCM support (recommended):

```bash
npx expo prebuild
npx expo run:android
# or
npx expo run:ios
```

## 📱 Firebase Configuration

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable Cloud Messaging
3. Add a web app and get configuration
4. Generate VAPID key for web push
5. Download service account key for server-side testing

## 🔧 Technical Implementation

### Web Technologies:
- **Frontend**: Next.js 15.4.6, React 19.1.0, TypeScript
- **Styling**: Tailwind CSS v4
- **Notifications**: Firebase SDK 12.1.0
- **Service Worker**: firebase-messaging-sw.js

### Mobile Technologies:
- **Framework**: React Native 0.72.6 with Expo SDK 49
- **Notifications**: expo-notifications
- **Storage**: AsyncStorage

## 📂 Project Structure

```
fcm-chat-app/
├── web/                    # Next.js web application
│   ├── src/
│   │   ├── app/           # App router pages
│   │   ├── components/    # React components
│   │   └── lib/          # Firebase configuration
│   └── public/           # Static files & service worker
├── mobile/               # React Native application
│   ├── src/
│   │   ├── components/   # React Native components
│   │   ├── screens/      # Screen components
│   │   └── services/     # Notification services
│   └── assets/          # Images and resources
├── credentials/         # Firebase service account (git-ignored)
├── test-notification.js # Testing script
└── test-menu.js        # Interactive testing menu
```

## 🚨 Important Security Notes

- Never commit Firebase service account keys
- Keep `.env` files in `.gitignore`
- Use environment variables for sensitive data
- Rotate VAPID keys periodically

## 🔄 Testing & Development

### Web Testing:
1. Start development server: `npm run dev`
2. Allow notifications in browser
3. Check console for FCM token
4. Use test scripts to send notifications

### Mobile Testing:
1. For development builds: Use `expo run:android` or `expo run:ios`
2. For Expo Go: Limited functionality, notifications won't work fully
3. Test on physical devices for best results

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For issues and questions:
- Create an issue in the GitHub repository
- Check Firebase documentation
- Review Expo documentation for mobile-specific issues
