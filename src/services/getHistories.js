const { Firestore } = require('@google-cloud/firestore');

async function fetchPastPredictions() { 
  const firestore = new Firestore(); 
  const predictionCollection = firestore.collection('predictions'); // Explicitly define collection
  const querySnapshot = await predictionCollection.get();

  const pastPredictions = [];
  querySnapshot.forEach(doc => {
    pastPredictions.push({ id: doc.id, data: doc.data() }); // Use "data" instead of "history" for clarity
  });
  return pastPredictions;
}

module.exports = fetchPastPredictions;