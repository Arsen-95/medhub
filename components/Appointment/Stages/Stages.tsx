import { Container, Flex } from "@chakra-ui/react";
import { FC } from "react";
import Stage from "./Stage";

const Stages: FC<any> = ({
  step,
  setStep,
  district,
  specialization,
  clinic,
  appointmentTime,
}) => {
  return (
    <Container mt={10} mb="67px">
      <Flex gap={"11px"} flexDir={["column", "row", "row"]} flexWrap="wrap">
        <Stage
          previousStep={true}
          setStep={setStep}
          step={step}
          stage={1}
          choice="района"
          main={district ? `${district}` : "-"}
          another="другой район"
        />
        <Stage
          previousStep={district ? true : false}
          setStep={setStep}
          step={step}
          stage={2}
          choice="медорганизации"
          main={clinic ? `${clinic}` : "-"}
          another="другую медорганизацию"
        />
        <Stage
          previousStep={clinic ? true : false}
          setStep={setStep}
          step={step}
          stage={3}
          choice="специальности"
          main={specialization ? `${specialization}` : "-"}
          another="другую специальность"
        />
        <Stage
          previousStep={specialization ? true : false}
          setStep={setStep}
          step={step}
          stage={4}
          choice="времени приёма"
          main={appointmentTime ? `${appointmentTime}` : "-"}
          another="другое время"
        />
      </Flex>
    </Container>
  );
};

export default Stages;
