import { useEffect, useState } from "react";
import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";

import BookItem from "../components/BoosItem";

const books = [
  {
    image: "1.png",
    title: "$1,500 IN RISK FREE BETS",
    infos: [
      "Up to $1,500 Risk-Free First Bet",
      "First Bet Insurance Up To $1,500",
    ],
    button_title: "GET BOUNS",
  },
  {
    image: "2.png",
    title: "$1,000 MATCH DEPOSIT",
    infos: ["Up to $1,000 Deposit Bonus", "No code necessary, instant Bonus"],
    button_title: "BET NOW",
  },
  {
    image: "3.png",
    title: "$1,000 IN FREE BETS",
    infos: [],
    button_title: "CLAIM OFFER",
  },
];

const OfferList = () => {
  const [region, setReigion] = useState("HongKong");

  useEffect(() => {
    fetch("https://ipinfo.io/")
      // .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  });

  return (
    <Box minHeight={"700px"}>
      <Container maxW="1100px">
        <Stack>
          <Heading as="h1" fontSize="30px" noOfLines={1}>
            BEST SPORTSBOOK OFFERS IN {region}
          </Heading>
          <Text fontSize={"20px"} color={"black"}>
            <strong>{"Maine"}</strong> is <strong>{"5 miles"}</strong> away from
            you.
          </Text>

          {books.map((book, index) => (
            <BookItem bookInfo={book} key={index} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default OfferList;
