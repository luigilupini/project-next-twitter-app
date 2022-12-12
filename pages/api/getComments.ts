// @ts-nocheck
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { groq } from "next-sanity";
import { client } from "../../sanity";

const commentQuery = groq`
* [_type == 'comment'&& references(*[_type == 'tweet' && _id == $tweetId]._id)] {
  _id,
  ...
} | order(_createdAt asc)
`;

export default async function handler(req, res) {
  // Destructure tweetId from query param `/api/getComments?tweetId=${tweetId}`
  const { tweetId } = req.query;
  const comments = await client.fetch(commentQuery, { tweetId: tweetId });
  res.status(200).json(comments);
}
