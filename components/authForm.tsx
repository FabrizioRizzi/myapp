import { Box, Flex, Input, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextImage from "next/image";
import { FC, useState } from "react";
import { auth } from "../lib/mutations";

const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault(), setIsLoading(true);

    const user = await auth(mode, { email, password });
    setIsLoading(false);
    router.push("/");
  };

  return (
    <Box width="100vw" height="100vh" bg="black">
      <Flex
        justify="center"
        align="center"
        height="100px"
        borderBottom="white 1px solid"
      >
        <NextImage src="/logo.svg" height={60} width={120} />
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh - 100px)">
        <Box padding="30px" bg="gray.900" borderRadius="10px">
          <Text color="white" textAlign="center" fontSize="2xl">SIGN IN</Text>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="email"
              type="email"
              color="white"
              margin="10px"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              color="white"
              margin="10px"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              bg="green.500"
              margin="10px"
              isLoading={isLoading}
              sx={{
                "&:hover": {
                  bg: "green.300",
                },
              }}
            >
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};
export default AuthForm;
