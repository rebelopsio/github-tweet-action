const Twitter = require('twitter');
const core = require('@actions/core');

const client = new Twitter({
  consumer_key: core.getInput('consumer-key'),
  consumer_secret: core.getInput('consumer-secret'),
  access_token_key: core.getInput('access-token'),
  access_token_secret: core.getInput('access-token-secret'),
});

async function run() {
  try {
    client.post(
      'statuses/update',
      {
        status: 'This tweet was posted when a pull request was approved!',
      },
      (error, tweet, response) => {
        if (error) {
          console.error(error);
        } else {
          console.log(tweet);
        }
      },
    );
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
