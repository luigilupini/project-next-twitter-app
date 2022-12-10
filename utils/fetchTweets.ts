// Fetch form the `pages/api` folder called getTweets file.
export const fetchTweets = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTweets`);
  const data = await res.json();
  const tweets = data.tweets;
  return tweets;
};
