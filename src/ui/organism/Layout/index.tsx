import { Flex } from "../../";
import SideBar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Flex flexDirection="column" height="100vh" width="100vw">
      <SideBar />
      <Flex
        flexDirection="column"
        paddingLeft="285px"
        paddingRight="33px"
        paddingTop="30px"
        overflow="auto"
      >
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default Layout;
