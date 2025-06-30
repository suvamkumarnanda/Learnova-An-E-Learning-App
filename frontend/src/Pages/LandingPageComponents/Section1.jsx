import { Flex, Text, Button, Image, Box } from "@chakra-ui/react";
import teacher from "../../asset/A.jpg";
import { useNavigate } from "react-router-dom";
const Section1 = () => {
  const navigate = useNavigate();
  return (
    <Flex mt={100} mb={70} gap={50} p="15px" justify="center">
      <Flex
        direction="column"
        w={{
          base: "100%",
          sm: "60%",
          md: "55%",
          lg: "50%",
        }}
        gap={30}
      >
        <Text
          fontSize={{
            base: "70px",
            sm: "30px",
            md: "60px",
            lg: "47px",
          }}
          fontWeight="bold"
          fontFamily="poppins"
          color={"greenyellow"}
        >
          Learnova welcomes you
        </Text>
        <Text
          fontSize={{
            lg: "18px",
            md: "16px",
            sm: "14px",
            base: "20px",
          }}
          fontWeight="semibold"
          >
          <Text fontSize='2rem' color="#0056d2" display='inline'>Learnova:</Text> <Text color={"white"} display={"inline"}>Bridging Educators and Students for Seamless Online Learning. Teachers design customized courses across subjects and grade levels, while students discover and enroll in courses that suit their needs. Empowering both educators and learners, Learnova transforms online education. </Text> </Text>
        <Flex
          gap={30}
          direction={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
          }}
        >
          <Button
            bg="#55c2da"
            color="black"
            size="lg"
            p={{
              lg: "30px 60px",
              md: "25px 50px",
              sm: "20px 40px",
            }}
            border="3px solidrgb(244, 246, 249)"
            borderRadius={"full"}
            _hover={{ background: "#42A5F5", color: "#0D47A1" }}
            onClick={() => navigate("/signup")}
          >
            Join for Free
          </Button>
          <Button
            colorScheme="#0056d2"
            color="white"
            variant="ghost"
            size="lg"
            p={{
              lg: "30px 60px",
              md: "25px 50px",
              sm: "20px 40px",
            }}
            borderRadius={"full"}
            border="3px solid #0056d2"
            onClick={() => navigate("/login")}
          >
            Try Learnova for Business
          </Button>
        </Flex>
      </Flex>
      <Box
        display={{base:'none', sm: "none", md: "flex" }}
        justifyContent="center"
        alignItems="center"
      >
        <Image className="h-80"
          src={teacher}
          alt="Your Image"
          height={"400px"}
          width={{
            md: "60%",
            lg: "80%",
          }}
          objectFit="contain"
        />
      </Box>
    </Flex>
  );
};

export default Section1;
