import PostHeader from "./PostHeader";
import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";

const FeedPost = ({ img, avatar, username }) => {
  return (
    <>
      <PostHeader username={username} avatar={avatar} />
      {/* Border won't become round without overflow hidden because the image overflows the Box */}
      <Box my={2} borderRadius={4} overflow={"hidden"}>
        <Image src={img} alt={username} />
      </Box>
      <PostFooter username={username} />
    </>
  );
};

export default FeedPost;
