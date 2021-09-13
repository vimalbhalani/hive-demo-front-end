const { Client } = require("@hiveio/dhive");
// const hiveOptions = {
//   addressPrefix: "STM",
//   chainId: "beeab0de00000000000000000000000000000000000000000000000000000000",
// };

export const getCommentsByPost = async ({ author, permlink }) => {
  const payload = [author, permlink];
  //connect to server which is connected to the network/production
  const client = new Client("https://api.hive.blog");
  const response = await client.database.call("get_content", payload);
  const comments = await client.database.call("get_content_replies", payload);
  return { ...response, comments };
};
