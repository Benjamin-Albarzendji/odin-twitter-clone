import { ref, child, get } from 'firebase/database';
import { database } from '../main.jsx';

const tweetGetter = async () => {
  // Initializing the tweets array
  const tweets = [];

  // Getting the tweets from the database
  const dbRef = ref(database);
  await get(child(dbRef, '/tweets/userID/'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // If tweets exist, then iterate through them and add them to the tweets array
        const tweetUsers = snapshot.val();
        // Iterating through the users to get the tweets
        Object.entries(tweetUsers).forEach((user) => {
          // Iterating through the tweets section to get every individual tweet
          Object.entries(user[1].tweets).forEach((tweet) => {
            // Pushes the tweets to the empty array
            tweets.push(tweet[1]);
          });
        });
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });

  // Sorts the Tweets by timestamp in descending order
  tweets.sort((a, b) => b.timestamp - a.timestamp);

  // Returns the Tweets
  return tweets;
};

export default tweetGetter;
