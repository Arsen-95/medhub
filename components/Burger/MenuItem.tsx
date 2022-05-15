import { Box, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const MenuItem = ({ children, href }) => {
  return (
    <NextLink href={href} passHref>
      <Link
        boxShadow={"0px 4px 6px rgba(103, 106, 117, 0.12)"}
        borderRadius={4}
        display={"block"}
        flex={1}
        _hover={{ textDecor: "none" }}
      >
        <Box minH={"120px"} padding={"13px 12px"}>
          <Image src="Fill.png" alt="" mb={2.5} />
          <Box fontSize={20} lineHeight={"26px"} color={"#313338"}>
            {children}
          </Box>
        </Box>
      </Link>
    </NextLink>
  );
};

export default MenuItem;
