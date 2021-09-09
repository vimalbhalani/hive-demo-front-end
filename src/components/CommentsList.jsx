import React from "react";
import PropTypes from "prop-types";

function CommentsList({ comments }) {
  return (
    <ul>
      {comments.map((comment) => (
        <li>
          <h5 className="mb-0">{comment.author}</h5>
          <small>{new Date(comment.created).toString()}</small>
          <pre dangerouslySetInnerHTML={{
            __html: comment.body
          }} />
          <b>Net Votes: {comment.net_votes}</b>
        </li>
      ))}
    </ul>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      net_votes: PropTypes.number.isRequired,
    })
  ),
};

export default React.memo(CommentsList);
