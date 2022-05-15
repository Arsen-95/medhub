import { Icon, IconButton } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { FC } from "react";

const Burger: FC<any> = ({ menu, setMenu }) => {
  return (
    <>
      <IconButton
        display={["block", "block", "none", "none"]}
        onClick={() => setMenu(!menu)}
        aria-label="Options"
        icon={<Icon as={!menu ? HamburgerIcon : CloseIcon} />}
        variant="outline"
      />
    </>
  );
};

export default Burger;
