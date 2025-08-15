async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'New Chat Message! 💬',
    body: 'John: Hey! This is a test notification',
    data: { 
      sender: 'John',
      message: 'Hey! This is a test notification',
      timestamp: new Date().toISOString()
    },
  };

  const response = await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });

  const result = await response.json();
  console.log('Push notification sent:', result);
}

// Usage
const token = process.argv[2];
if (!token) {
  console.log('Usage: node test-expo-push.js <EXPO_PUSH_TOKEN>');
  console.log('Example: node test-expo-push.js ExponentPushToken[xxxxxxxxxxxxxx]');
  process.exit(1);
}

console.log('Sending notification to:', token);
sendPushNotification(token).catch(console.error);
