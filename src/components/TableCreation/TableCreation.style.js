import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #ffe4c4;
  width: 300px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 10px;
  box-shadow: 2px 1px 2px 1px rgba(0, 0, 0, 0.15),
    0 10px 10px rgba(0, 0, 0, 0.12);
  @media screen and (min-width: 768px) {
    width: 380px;
    padding: 30px 30px;
  }
`;

const LabelForm = styled.label`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: #e9967a;
`;

const InputForm = styled.input`
  display: block;
  margin: 20px auto;
  padding-left: 16px;
  font-size: 18px;
  &::placeholder {
    padding-left: 10px;
    font-size: 16px;
  }
`;

export { Form, LabelForm, InputForm };
