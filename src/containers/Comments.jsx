import React from "react";
import { useQuery } from "react-query";
import CommentsList from "../components/CommentsList";
import { getCommentsByPost } from "../services/hive.service";

export default function Comments() {
  const {
    isLoading,
    error,
    data: commentsResponse,
  } = useQuery(
    "postComments",
    async () => {
      const response = await getCommentsByPost({
        author: "quochuy",
        permlink: "3xi44p-my-new-contributions-to-the-hive-condenser",
      });
      return response;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return <CommentsList comments={commentsResponse.comments || []} />;
}
