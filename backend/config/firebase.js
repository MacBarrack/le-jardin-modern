const admin = require('firebase-admin');
require('dotenv').config();

// Firebase Admin SDK configuration
let db, auth;

try {
  // Check if Firebase credentials are properly configured
  if (!process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_PRIVATE_KEY || !process.env.FIREBASE_CLIENT_EMAIL) {
    console.log('⚠️  Firebase credentials not configured. Using mock Firebase for development.');
    console.log('   To enable Firebase, update the .env file with your Firebase credentials.');
    
    // Create mock Firebase services for development
    const createMockQuery = () => ({
      where: () => createMockQuery(),
      orderBy: () => createMockQuery(),
      limit: () => createMockQuery(),
      offset: () => createMockQuery(),
      get: () => Promise.resolve({ 
        empty: true, 
        size: 0, 
        docs: [],
        forEach: () => {}
      })
    });

    db = {
      collection: () => ({
        add: () => Promise.resolve({ id: 'mock-id' }),
        doc: () => ({
          get: () => Promise.resolve({ exists: false }),
          set: () => Promise.resolve(),
          update: () => Promise.resolve(),
          delete: () => Promise.resolve()
        }),
        ...createMockQuery()
      })
    };
    
    auth = {
      createUser: () => Promise.resolve({ uid: 'mock-uid' }),
      verifyIdToken: () => Promise.resolve({ uid: 'mock-uid' }),
      getUser: () => Promise.resolve({ uid: 'mock-uid' })
    };
  } else {
    const serviceAccount = {
      type: "service_account",
      project_id: process.env.FIREBASE_PROJECT_ID,
      private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      client_id: process.env.FIREBASE_CLIENT_ID,
      auth_uri: process.env.FIREBASE_AUTH_URI || "https://accounts.google.com/o/oauth2/auth",
      token_uri: process.env.FIREBASE_TOKEN_URI || "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL || "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL
    };

    // Initialize Firebase Admin SDK
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        projectId: process.env.FIREBASE_PROJECT_ID
      });
      console.log('✅ Firebase Admin SDK initialized successfully');
    }

    // Get Firestore database instance
    db = admin.firestore();

    // Get Firebase Auth instance
    auth = admin.auth();
  }
} catch (error) {
  console.error('❌ Firebase initialization error:', error.message);
  console.log('🔄 Falling back to mock Firebase for development');
  
  // Fallback to mock services
  const createMockQuery = () => ({
    where: () => createMockQuery(),
    orderBy: () => createMockQuery(),
    limit: () => createMockQuery(),
    offset: () => createMockQuery(),
    get: () => Promise.resolve({ 
      empty: true, 
      size: 0, 
      docs: [],
      forEach: () => {}
    })
  });

  db = {
    collection: () => ({
      add: () => Promise.resolve({ id: 'mock-id' }),
      doc: () => ({
        get: () => Promise.resolve({ exists: false }),
        set: () => Promise.resolve(),
        update: () => Promise.resolve(),
        delete: () => Promise.resolve()
      }),
      ...createMockQuery()
    })
  };
  
  auth = {
    createUser: () => Promise.resolve({ uid: 'mock-uid' }),
    verifyIdToken: () => Promise.resolve({ uid: 'mock-uid' }),
    getUser: () => Promise.resolve({ uid: 'mock-uid' })
  };
}

// Export instances
module.exports = { db, auth, admin };

