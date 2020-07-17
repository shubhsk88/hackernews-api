function newLinkSubscribe(parent, args, context, info) {
  return context.pubsub.asyncIterator('NEW_LINK');
}

function newVoteSubscribe(parent, args, context, info) {
  return context.pubsub.asyncIterator('NEW_VOTE');
}

const newLink = {
  subscribe: newLinkSubscribe,
  resolve: (payload) => {
    return payload;
  },
};
const newVote = {
  subscribe: newVoteSubscribe,
  resolve: (payload) => payload,
};

module.exports = { newLink, newVote };
