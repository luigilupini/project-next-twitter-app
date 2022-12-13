// @ts-nocheck
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  const data = JSON.parse(req.body);
  // # https://www.sanity.io/docs/http-mutations:
  // The mutation API lets you create and modify documents directly.
  const mutations = {
    mutations: [
      {
        create: {
          _type: "comment",
          comment: data.comment,
          username: data.username,
          profileImg: data.profileImg,
          tweet: { _type: "reference", _ref: data.tweet._ref },
        },
      },
    ],
  };

  const apiEndpoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;

  await fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
    },
    body: JSON.stringify(mutations),
  })
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
  res.status(200).json("Comment Added");
}
