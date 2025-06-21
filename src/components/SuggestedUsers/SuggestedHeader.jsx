import { Avatar, Text, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
const SuggestedHeader = ({ username, img }) => {
  // prettier-ignore
  return (
    // Spacing between username an Log Out button
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name={username} size={"lg"} src={img} />
        <Text fontSize={12} fontWeight={"bold"}>
          {username}
        </Text>
      </Flex>
      <Link as={RouterLink} to={"/auth"} fontSize={14} fontWeight={"medium"} color={"blue.400"} 
            style={{textDecoration: "none" }} cursor={"pointer"}>
        Log Out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
