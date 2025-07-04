import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";

const SuggestedUser = ({ name, followers, avatar }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"ceneter"} gap={2}>
        <Avatar src={avatar} name={name} size={"md"} />
        <VStack spacing={2} alignItems={"flex-start"}>
          <Box fontSize={12} fontWeight={"bold"}>
            {name}
          </Box>
          <Box fontSize={11} color={"gray.500"}>
            {followers > 999999 && followers < 999999999
              ? `${followers.toString().slice(0, 3)}m followers`
              : followers > 9999 && followers < 999999
              ? `${followers.toString().slice(0, 3)}k followers`
              : `${followers} followers`}
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={13}
        bg={"transparent"}
        p={0}
        h={"max-content"}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        _hover={{ color: "white" }}
        onClick={() => setIsFollowed(!isFollowed)}>
        {isFollowed ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
  );
};

export default SuggestedUser;
