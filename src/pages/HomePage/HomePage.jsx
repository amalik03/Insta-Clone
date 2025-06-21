import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

const HomePage = () => {
  const users = [
    {
      name: "JoeIsCool",
      followers: 3404,
      following: 2124,
      avatar: "https://bit.ly/dan-abramov",
    },
    {
      name: "Ryan_shoots",
      followers: 10254,
      following: 894,
      avatar: "https://bit.ly/ryan-florence",
    },
    {
      name: "BeastlyCoder",
      followers: 1000234,
      following: 3,
      avatar: "https://bit.ly/code-beast",
    },
  ];
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>

        {/* right hand side of page */}
        <Box
          flex={3}
          mr={20}
          display={{ base: "none", lg: "block" }}
          maxW={"300px"}>
          <SuggestedUsers users={users} />
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
