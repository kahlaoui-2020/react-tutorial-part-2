import { useState, Component } from "react";
import styled from "styled-components";
import colors from "../utils/style/colors";
import { useTheme } from "../utils/hooks";

const InputWrapper = styled.div`
  color: ${({ theme }) => (theme === "light" ? colors.dark : colors.light)};
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const StyledLabel = styled.label`
  color: ${({ theme }) => (theme === "light" ? colors.dark : colors.light)};
`;
const StyledInput = styled.input`
  border: none;
  color: ${({ theme }) => (theme === "light" ? colors.dark : colors.light)};
  background-color: transparent;
  border-bottom: 2px solid
    ${({ theme }) => (theme === "light" ? colors.dark : colors.light)};
  margin-top: 5px;
  margin-bottom: 15px;
  &:focus {
    outline: none;
  }
`;
function EmailInput() {
  const { theme } = useTheme();
  const [inputValue, setInputValue] = useState("");
  function updateInputValue(e) {
    const val = e.target.value;
    setInputValue(val);
  }
  return (
    <InputWrapper theme={theme}>
      <StyledLabel theme={theme}>Adresse Email</StyledLabel>
      <StyledInput theme={theme} onChange={updateInputValue}></StyledInput>
    </InputWrapper>
  );
}
export default EmailInput;
