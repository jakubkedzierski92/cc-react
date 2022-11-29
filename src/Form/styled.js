import styled, { css } from "styled-components";

export const Background = styled.div`
  background-image: url("https://i.ibb.co/yF9tFdy/exchange.png");
  max-height: 100%;
  height: 600px;
  background-repeat: no-repeat;
  background-size: 600px;
  background-position: bottom;
  background-attachment: local;

 
`;

export const StyledForm = styled.form`
  align-items: center;
  justify-content: center;
`;

export const Fieldset = styled.fieldset`
  border: 2px solid hsl(240, 83%, 40%);
  display: inline;
  width: 100%;
  align-items: center;
  justify-content: center;

  
`;


export const Legend = styled.legend`
  border: 2px solid hsl(240, 83%, 40%);
  padding: 10px;
  background-color: #09095d;
  color: white;
`;

export const Input = styled.input`
  text-align: left;
  padding: 5px;
  margin-right: 5px;

  ${({ outcome }) =>
    outcome &&
    css`
      text-align: right;
      padding: 5px;
      border: solid 1px black;
    `}
`;

export const Selector = styled.select`
  width: 100%;
  max-width: 100px;
  padding: 5px;
  margin-left: 0px;
  text-align: center;

  @media (max-width: 767px){
    width: auto;
  }
`;

export const ButtonParagraph = styled.p`
  display: flex;
  justify-content: flex-start;
  margin-left: 100px;
`;

export const FormParagraph = styled.p`
  display: inline;
  width: 500px;
`;
export const Button = styled.button`
  padding: 5px;
  width: 100px;
  background-color: #09095d;
  color: white;
  border: 2px solid hsl(240, 83%, 40%);
`;

export const Info = styled.p`
text-align: start;
font-size: 12px;
margin-left: 16px;
padding: 2px;
`