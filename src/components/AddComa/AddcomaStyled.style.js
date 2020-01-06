import styled from "styled-components";

const AddComaStyled = styled.div`
  position: fixed;
  width: 50%;
  height: 50%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
  z-index: 10;

  .btn--close {
    display: flex;
    flex-direction: row-reverse;
  }

  .inputs--coma {
    color: white;
    margin-left: 19%;
    margin-top: 6%;
    font-size: 1.5em;
  }
`

export default AddComaStyled