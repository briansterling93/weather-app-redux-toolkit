import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  input {
    margin-top: 32px;
    height: 30px;
    width: 300px;
    outline: none;
    box-shadow: none;
    font-size: 25px;

    ::placeholder {
      text-align: center;
    }
  }
`;
