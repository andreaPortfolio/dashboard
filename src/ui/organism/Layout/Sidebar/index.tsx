import { Flex, Box } from "../../../";
import Links from "./Links";

const Sidebar = () => {
  return (
    <Flex
      flexDirection="column"
      width="255px"
      height="100vh"
      backgroundColor="secondary"
      position="absolute"
    >
      <Box height="128px" />
      <Links />
    </Flex>
  );
};

export default Sidebar;
