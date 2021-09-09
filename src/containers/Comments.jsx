import React from "react";
import { useQuery } from "react-query";
import CommentsList from "../components/CommentsList";

export default function Comments() {
  const {
    isLoading,
    error,
    data: commentsResponse,
  } = useQuery("postComments", () =>
    fetch("https://cliff-paint-room.glitch.me/api/v1/post/details", {
      body: JSON.stringify({
        author: "quochuy",
        permlink: "3xi44p-my-new-contributions-to-the-hive-condenser",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return <CommentsList comments={commentsResponse.data.comments || []} />;
}
