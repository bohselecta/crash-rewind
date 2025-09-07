// Simple test script to verify the API is working
const testApi = async () => {
  try {
    console.log('Testing CrashRewind API...');
    
    // Test crash ingestion
    const crashData = {
      appId: 'test-app',
      version: '1.0.0',
      device: 'Test Device',
      os: 'Test OS',
      locale: 'en-US',
      context: JSON.stringify({ stackTop: 'Test.kt:42', screenHash: 'test' }),
      uiSteps: JSON.stringify([{ t: 0, type: 'tap', target: 'TestButton' }])
    };
    
    const response = await fetch('http://localhost:4000/ingest/crash', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(crashData)
    });
    
    if (response.ok) {
      const result = await response.json();
      console.log('✅ Crash ingestion successful:', result);
      
      // Test clusters endpoint
      const clustersResponse = await fetch('http://localhost:4000/clusters');
      if (clustersResponse.ok) {
        const clusters = await clustersResponse.json();
        console.log('✅ Clusters endpoint working:', clusters.length, 'clusters found');
      } else {
        console.log('❌ Clusters endpoint failed');
      }
    } else {
      console.log('❌ Crash ingestion failed:', response.status);
    }
  } catch (error) {
    console.log('❌ API test failed:', error.message);
  }
};

// Wait a bit for the server to start, then test
setTimeout(testApi, 5000);
