const admin = require('firebase-admin');
const readline = require('readline');
const serviceAccount = require('./credentials/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: 'fcm-chat-app-571bb'
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function testMenu() {
  console.log('\n🚀 FCM Notification Test Menu\n');
  console.log('Make sure your web app is running and you have the FCM token.\n');
  
  const token = await prompt('Enter FCM Token: ');
  
  console.log('\nSelect notification type:');
  console.log('1. Simple text notification');
  console.log('2. Chat message notification');
  console.log('3. Custom notification');
  
  const choice = await prompt('\nEnter choice (1-3): ');
  
  let message;
  
  switch(choice) {
    case '1':
      message = {
        notification: {
          title: 'Test Notification',
          body: 'This is a simple test notification'
        },
        token
      };
      break;
      
    case '2':
      const sender = await prompt('Enter sender name: ');
      const text = await prompt('Enter message: ');
      message = {
        notification: {
          title: `New message from ${sender}`,
          body: text
        },
        data: {
          sender,
          message: text,
          timestamp: new Date().toISOString()
        },
        token
      };
      break;
      
    case '3':
      const title = await prompt('Enter notification title: ');
      const body = await prompt('Enter notification body: ');
      message = {
        notification: { title, body },
        token
      };
      break;
      
    default:
      console.log('Invalid choice');
      rl.close();
      return;
  }
  
  try {
    const response = await admin.messaging().send(message);
    console.log('\n✅ Notification sent successfully!');
    console.log('Response:', response);
  } catch (error) {
    console.error('\n❌ Error sending notification:', error.message);
  }
  
  rl.close();
}

testMenu();