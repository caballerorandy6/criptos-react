import { useState, useEffect } from "react";
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
  const [criptos, setCriptos] = useState([]);

  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu Moneda", monedas); //Extracting Hook
  const [criptomoneda, SelectCriptoMonedas] = useSelectMonedas(
    "Elige tu Criptomoneda",
    criptos
  ); //Extracting Hook

  //API Query
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      //console.log(resultado.Data);

      const arrayCriptos = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
          img: cripto.CoinInfo.Url,
        };
        //console.log(objeto);
        return objeto;
      });
      setCriptos[arrayCriptos];
    };
    consultarAPI();
  }, []);

  return (
    <form>
      <SelectMonedas />
      <SelectCriptoMonedas />

      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
};

export default Formulario;
