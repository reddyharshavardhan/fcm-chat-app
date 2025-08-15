const admin = require('firebase-admin');
const path = require('path');

// Initialize Firebase Admin with your service account
const serviceAccount = require('./credentials/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: 'fcm-chat-app-571bb'
});

async function sendTestNotification(fcmToken) {
  const message = {
    notification: {
      title: '🎉 New Chat Message!',
      body: 'You have received a new message from John Doe'
    },
    data: {
      sender: 'John Doe',
      message: 'Hey! This is a test notification from FCM V1 API',
      timestamp: new Date().toISOString(),
      chatId: '12345'
    },
    token: fcmToken
  };

  try {
    const response = await admin.messaging().send(message);
    console.log('✅ Successfully sent notification!');
    console.log('Response:', response);
  } catch (error) {
    console.error('❌ Error sending notification:', error);
  }
}

// Command line usage
const fcmToken = process.argv[2];

if (!fcmToken) {
  console.log('Usage: node test-notification.js <FCM_TOKEN>');
  console.log('Example: node test-notification.js your-fcm-token-here');
  process.exit(1);
}

console.log('Sending notification to token:', fcmToken);
sendTestNotification(fcmToken);