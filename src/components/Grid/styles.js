import styled from "styled-components";

export const Table = styled.table`
  width: 98%;
  background-color: #f1f1f1;
  padding: 20px;
  box-shadow: 0px 0px 5px #000;
  border-radius: 10px;
  max-width: 1120px;
  margin: 20px auto;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;