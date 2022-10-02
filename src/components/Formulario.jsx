import React from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";

//Styled Components
const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  margin-top: 30px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = () => {
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu Moneda", monedas); //Extracting Hook
  //const [SelectCriptoMonedas] = useSelectMonedas("Elige tu Criptomoneda");

  return (
    <form>
      <SelectMonedas />

      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
};

export default Formulario;
