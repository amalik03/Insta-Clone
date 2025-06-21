import {Box, Container, Flex, SkeletonCircle, VStack, Skeleton} from "@chakra-ui/react"; // prettier-ignore
import FeedPost from "./FeedPost";
import { useState, useEffect } from "react";

const FeedPosts = () => {
  const profImgs = ["/img1.png", "/img2.png", "/img3.png", "/img4.png"];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <ul>
      {/* prettier-ignore */}
      <Container maxW={"container.sm"} py={10} px={2}>
        {isLoading && profImgs.map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap="2">
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height={"10px"} w={"200px"}></Skeleton>
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box height={"500px"}>contents wrapped </Box>
            </Skeleton>
          </VStack>
        ))}
        {!isLoading && profImgs.map((pic, index) => (
          <li key={pic}>
            <FeedPost img={pic} avatar={pic} username={`Profile${index + 1}`} />
          </li>
        ))}
      </Container>
    </ul>
  );
};

export default FeedPosts;
