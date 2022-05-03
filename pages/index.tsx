import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import GradientLayout from "../components/gradientLayout";
import prisma from "../lib/prisma";

const Home = ({ artists }) => {
  return (
    <GradientLayout
      color="green"
      subtitle="profile"
      title="Fabrizio Rizzi"
      description="dsklajgd gasdgasdg sadgds"
      image="https://scontent.fmxp9-1.fna.fbcdn.net/v/t31.18172-8/21762528_10212275647258622_7881742562799919342_o.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=HtWdECmAivwAX9oJG2a&_nc_ht=scontent.fmxp9-1.fna&oh=00_AT-j4LKvP76jT7Vi4iQoYNA0plZbFJf-SnrGlj-FpiJMzg&oe=6293F935"
      roundImage
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artists of this month
          </Text>
          <Text fontSize="md">only visible to you</Text>
        </Box>
        <Flex gap="10px">
          {artists.map((artist) => (
            <Box
              bg="gray.800"
              borderRadius="4px"
              padding="15px"
              key={artist.name}
              width="150px"
            >
              <Image
                borderRadius="100%"
                src="https://placekitten.com/300/300"
              />
              <Box marginTop="20px">
              <Text fontSize="large" fontWeight="bold">
                {artist.name}
              </Text>
              <Text fontSize="x-small">Artist</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});
  return { props: { artists } };
};

export default Home;
