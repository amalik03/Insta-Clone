import { useState } from "react";
import { Flex, Box, Text, InputGroup, Input, InputRightElement, Button} from "@chakra-ui/react"; // prettier-ignore
import { NotificationsLogo, UnlikeLogo, CommentLogo } from "../../assets/constants";

const PostFooter = ({ username }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState(0);
  const handleLike = () => {
    if (liked && likes != 0) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };
  // prettier-ignore
  return (
    <Box mb={5}>
      {/* Icons */}
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18}> 
          <CommentLogo></CommentLogo>
        </Box>
      </Flex>

      {/* Like Count */}
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} Likes
      </Text>

      {/* Post Description */}
      <Text fontWeight={700} fontSize={"sm"}>
        {username}{" "}
        {/* span makes it so its not a paragraph stucture */}
        <Text as="span" fontWeight={"400"}>
          Comment {comment}
        </Text>
      </Text>

      {/* Comments */}
      <Text fontSize={"sm"} color={"gray"}>
        View all {comment} comments
      </Text>

      <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
        <InputGroup>
          <Input variant={"flushed"} placeholder={"Add a comment..."} fontSize={14} />
          <InputRightElement>
            <Button 
              fontSize={14} color={"blue.500"} fontWeight={600} cursor={"pointer"} 
              _hover={{ color: "white" }} background={"transparent"} >
                Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PostFooter;
