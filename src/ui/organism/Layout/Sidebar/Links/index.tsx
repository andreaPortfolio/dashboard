import { SIDEBAR_LINKS, capitalizeFirstLetter } from "../../../../../utils";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
//import { useTheme } from 'styled-components'

const NAMES = Object.keys(SIDEBAR_LINKS);

const Ul = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  height: 56px;
  list-style: none;
  display: flex;
  align-items: center;
  padding-left: 29px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    border-left-width: 5px;
    border-left-color: #DDE2FF;
    border-left-style: solid;
    padding-left: 24px;

  }
`;

const A = styled.a`
  text-decoration: none;
  font-family: Mulish;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  color: #DDE2FF;             
`;

const Links = () => {
  const navigate = useNavigate();
  //const theme = useTheme();

  const handleLink = (link: string) => {
    navigate(link);
  };

  return (
    <Ul>
      {NAMES.map((name, index) => (
        <Li key={`${index}-link`} onClick={() => handleLink(SIDEBAR_LINKS[name])}>
          <A>
            {capitalizeFirstLetter(name)}
          </A>
        </Li>
      ))}
    </Ul>
  );
};

export default Links;
