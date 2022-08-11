import {
  Box,
  Flex,
  Text,
  UnorderedList,
  ListItem,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";

interface bookInfo {
  image: string;
  title: string;
  infos: Array<string>;
  button_title: string;
}

const BookItem = ({ bookInfo }: { bookInfo: bookInfo }) => {
  return (
    <>
      <Box
        borderRadius={"3xl"}
        borderColor={"gray"}
        borderWidth={"2px"}
        minH={"130px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid templateColumns="repeat(10, 1fr)" gap={6}>
          <GridItem
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            // width={"300px"}
            colSpan={3}
          >
            <img src={bookInfo.image} alt="offer image" width={"180px"} />
          </GridItem>
          <GridItem width={"300px"} colSpan={4}>
            <Text fontWeight={"bold"} fontSize={"24px"}>
              {bookInfo.title}
            </Text>
            <UnorderedList>
              {bookInfo.infos.map((info, index) => (
                <ListItem fontSize={"18px"} key={index}>
                  {info}
                </ListItem>
              ))}
            </UnorderedList>
          </GridItem>
          <GridItem
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"300px"}
            colSpan={3}
          >
            <Box
              bg={"blue.400"}
              color={"white"}
              width={"200px"}
              height={"70px"}
              borderRadius={"2xl"}
              borderWidth={"2px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              as={"button"}
            >
              <Text fontSize={"25px"}>{bookInfo.button_title}</Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
      <Box minH={"15px"}></Box>
    </>
  );
};

export default BookItem;
