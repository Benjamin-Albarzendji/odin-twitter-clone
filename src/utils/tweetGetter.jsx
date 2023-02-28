import { ref, child, get } from 'firebase/database';
import { database } from '../main.jsx';

const tweetGetter = async () => {
  // Getting the tweets from the database
  const dbRef = ref(database);
  await (() => {
    console.log('hello');
  

   get(child(dbRef, '/tweets/userID/'))
    .then((snapshot) => {
      const tweets = [];
      if (snapshot.exists()) {
        // If tweets exist, then iterate through them and add them to the tweets array
        const tweetUsers = snapshot.val();
        // Empty array to store the tweets

        // Iterating through the users to get the tweets
        Object.entries(tweetUsers).forEach((user) => {
          // Iterating through the tweets section to get every individual tweet
          Object.entries(user[1].tweets).forEach((tweet) => {
            //Pushes the tweets to the empty array
            tweets.push(tweet[1]);
          });
        });

        console.log(tweets);

        // Returns the Tweets
      } else {
        console.log('No data available');
      }
      return tweets;
    })
    .catch((error) => {
      console.error(error);
    });})();
};

export default tweetGetter;
