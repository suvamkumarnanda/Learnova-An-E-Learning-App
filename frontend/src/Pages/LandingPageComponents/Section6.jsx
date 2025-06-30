import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import sectionImage from "../../asset/sectionimage1.jpg";
import { useNavigate } from "react-router-dom";
const Section6 = () => {
  const navigate = useNavigate();
  return (
    <Flex
      bgColor={"blackAlpha.700"}
      gap={{
        sm: "20px",
        md: "35px",
        lg: "45px",
      }}
      p={{
        base: "10px",
        sm: "0px 20px",
        md: "0px 40px",
        lg: "0px 60px",
      }}
      direction={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
      }}
    >
      <Flex minW={"40%"}>
        <Image src={sectionImage} objectFit="contain" />
      </Flex>
      <Flex
        direction={"column"}
        padding={{
          base: "40px 0px",
          sm: "20px 10px",
          md: "30px 15px",
          lg: "40px 20px",
        }}
        gap={{
          sm: "15px",
          md: "25px",
        }}
        justifyContent={{
          lg: "space-evenly",
        }}
       
      >
        <Text
          fontSize={{
            sm: "25px",
            md: "35px",
            lg: "45 px",
          }}
          color={"skyblue"}
          fontWeight={"bold"}
          
        >
          Learner outcomes on <b style={{ color: "blue", fontWeight:"extrabold" }}>Learnova</b>
        </Text>
        <Text
          fontFamily={"poppins"}
          fontSize={{
            sm: "12px",
            md: "14px",
            lg: "16px",
          }}
          color={"white"}
        >
          According to Learnova's 2025 report,{" "}
          <span>
            <b style={{ color: "blue" }}>90% of learners have experienced significant career advancements as a result of their education.</b>
          </span> These benefits range from job promotions and improved work performance to smooth career transitions, higher employability, and enhanced skill sets. Learnova’s comprehensive curriculum, along with its industry-recognized certifications, has been instrumental in fostering professional development, preparing individuals to excel in today's highly competitive job market.
        </Text>
        <Flex mt='15px' >
          <Button
            bgColor={"yellowgreen"}
            _hover={{ backgroundColor: "#03357b" }}
            color={"black"}
            p={{
              sm: "10px 20px",
              md: "15px 30px",
              lg: "25px 45px",
            }}
            onClick={() => navigate("/signup")}
          >
            Join for Free
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Section6;
