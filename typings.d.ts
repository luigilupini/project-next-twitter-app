export interface Tweet extends TweetBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "tweet";
  blockTweet: boolean;
}

// Tightly related with the `tweet.js` schema in our sanity backend.
export type TweetBody = {
  text: string;
  username: string;
  profileImg: string;
  image?: string;
};
