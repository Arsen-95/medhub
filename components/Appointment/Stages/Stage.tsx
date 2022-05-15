import { Box, Button, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";

const Stage: FC<any> = ({
  step,
  setStep,
  stage,
  choice,
  main,
  another,
  previousStep,
}) => {
  return (
    <Button
      textAlign="left"
      whiteSpace="normal"
      alignItems="flex-start"
      isDisabled={!previousStep ? true : false}
      minH={200}
      minW={280}
      display="flex"
      flexDir="column"
      flex="1"
      p={6}
      background={"#FFFFFF"}
      borderRadius={8}
      boxShadow="0px 4px 6px rgba(103, 106, 117, 0.12)"
      onClick={() => setStep(stage)}
      cursor="pointer"
      _hover={{
        background: "#1372FF",
        color: "#FFF",
      }}
      backgroundColor={step === stage ? "#1372FF" : "#FFF"}
      color={step === stage ? "#FFF" : "inherit"}
    >
      <Text fontWeight={"bold"}>{`Этап ${stage}`}</Text>
      <Text fontWeight={"bold"} mb={6}>
        {`Выбор ${choice}`}
      </Text>
      <Text fontSize={20} fontWeight="bold" mb={"15px"} flex="1 0 auto">
        {main ? `${main}` : "-"}
      </Text>
      <Text pr={7} background={"url(ArrowRightGrey.svg) no-repeat 100%"}>
        {main === "-" ? "" : `Выбрать ${another}`}
      </Text>
    </Button>
  );
};

export default Stage;
