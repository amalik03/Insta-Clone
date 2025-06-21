import { VStack, Flex, Text, Box, Link } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = ({ users, username, img }) => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader username={username} img={img} />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested For You
        </Text>
        {/* prettier-ignore */}
        <Text fontSize={12} fontWeight={"bold"} color={"gray.400"} cursor={"pointer"}>
          See All
        </Text>
      </Flex>
      {users.map((u) =>
        // prettier-ignore
        <SuggestedUser key={u.name} name={u.name} followers={u.followers} avatar={u.avatar} />
      )}

      {/* Overriding the VStack's center alignment by positioning the box at the start of the cross-axis */}
      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2025 Built By {/* _blank opens the link in a new tab */}
        <Link
          href="https://github.com/amalik03"
          target="_blank"
          color={"blue.500"}
          fontSize={14}>
          {"Areeb Malik"}
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
