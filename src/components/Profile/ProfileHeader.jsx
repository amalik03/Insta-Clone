import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";

const ProfileHeader = (/*{ name, img, followers, following }*/) => {
  return (
    // prettier-ignore
    <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: "column", sm: "row" }}>
      {/* AvatarGroup gives us a border around the profile pic, Avatar oes not give us the border */}
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}>
        {/* <Avatar name={name} src={img} alt={`${name}'s logo`} /> */}
        <Avatar
          name="Areeb Malik"
          src="/profilepic.png"
          alt="Areeb Malik's Logo"
        />
      </AvatarGroup>

      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "column", sm: "row" }}
          alignItems={"center"}
          w={"full"}>
          {/* <Text fontSize={{ base: "sm", md: "lg" }}>{name}</Text> */}
          <Text fontSize={{ base: "sm", md: "lg" }}>Areeb Malik</Text>

          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "whiteAlpha.800" }}
              size={{ base: "xs", md: "sm" }}>
              Edit Profile
            </Button>
          </Flex>
        </Flex>
        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          {/**** POSTS COUNT ****/}
          <Text fontSize={{ base: "xs", md: "sm" }}>
            {/* prettier-ignore */}
            <Text as="span" fontWeight={"bold"} mr={1}>4</Text>
            Posts
          </Text>

          {/**** FOLLOWER COUNT ****/}
          <Text fontSize={{ base: "xs", md: "sm" }}>
            {/* prettier-ignore */}
            <Text as="span" fontWeight={"bold"} mr={1}> 69,420</Text>
            {/* <Text as="span" fontWeight={"bold"} mr={1}>{followers}</Text> */}
            Followers
          </Text>

          {/**** FOLLOWING COUNT ****/}
          <Text fontSize={{ base: "xs", md: "sm" }}>
            {/* prettier-ignore */}
            <Text as="span" fontWeight={"bold"} mr={1}>1,111</Text>
            {/* <Text as="span" fontWeight={"bold"} mr={1}>{following}</Text> */}
            Following
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          {/* prettier-ignore */}
          <Text fontSize={"sm"} fontWeight={"bold"}>Areeb Malik</Text>
          {/* <Text fontSize={"sm"} fontWeight={"bold"}>{name}</Text> */}
        </Flex>
        <Text fontSize={"sm"}>Biography</Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
