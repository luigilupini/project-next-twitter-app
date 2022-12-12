// @ts-nocheck
// Fetch form the `pages/api` folder called getTweets file.
export const fetchComments = async (tweetId: string) => {
  const res = await fetch(
    // Using a query param `tweetId`:
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getComments?tweetId=${tweetId}`
    // `/api/getComments?tweetId=${tweetId}`
  );
  const comments = await res.json();
  return comments;
};
