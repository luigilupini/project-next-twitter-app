// @ts-nocheck
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { groq } from "next-sanity";
import { client } from "../../sanity";

const feedQuery = groq`
* [_type == 'tweet'&& !blockTweet] {
  _id,
  ...
} | order(_createdAt desc)
`;

export default async function handler(req, res) {
  const tweets = await client.fetch(feedQuery);
  res.status(200).json({ tweets }); // return tweets object in response
}
