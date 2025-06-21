import { Flex, Box, Text } from "@chakra-ui/react";
import { BsCameraReels, BsGrid3X3, BsSuitHeart } from "react-icons/bs";
const ProfileTabs = () => {
  return (
    // prettier-ignore
    <Flex w={"full"} justifyContent={"center"} gap={{ base: 4, sm: 10 }}
          textTransform={"uppercaase"} fontWeight={"bold"}>
      <Flex borderTop={"1px solid white"} alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
        <Box fontSize={20}> <BsGrid3X3 /></Box>
        <Text fontsize={12} display={{ base: "none", sm: "block" }}> Posts </Text>
      </Flex>
      <Flex alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
        <Box fontSize={20}> <BsCameraReels /> </Box>
        <Text fontsize={12} display={{ base: "none", sm: "block" }}> Reels </Text>
      </Flex>
      <Flex alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
        <Box fontSize={20}> <BsSuitHeart fontWeight={"bold"}/> </Box>
        <Text fontsize={12} display={{ base: "none", sm: "block" }}> Likes </Text>
      </Flex>
    </Flex>
  );
};

export default ProfileTabs;
