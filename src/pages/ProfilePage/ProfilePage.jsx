import { Container, Flex } from "@chakra-ui/react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import ProfilePosts from "../../components/Profile/ProfilePosts";

const ProfilePage = ({ name, img, followers, following }) => {
  return (
    <Container maxW="container.lg" py={5}>
      {/* prettier-ignore */}
      <Flex py={10} px={4} pl={{ base: 4, md: 10 }} w={"full"} mx={"auto"} flexDirection={"column"}>
        <ProfileHeader name={name} img={img} followers={followers} following={following}/>
      </Flex>

      {/* prettier-ignore */}
      <Flex px={{ base: 2, sm: 4 }} maxW={"full"} mx={"auto"} borderTop={"1px solid"} 
            borderColor={"whiteAlpha.300"} direction={"column"}>
        <ProfileTabs />
        <ProfilePosts />
      </Flex>
    </Container>
  );
};

export default ProfilePage;
