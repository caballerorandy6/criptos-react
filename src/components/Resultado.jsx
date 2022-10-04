import styled from "@emotion/styled";

const ResultadoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
  color: #fff;
  font-family: "Lato", sans-serif;
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <ResultadoDiv>
      <img src={`https://cryptocompare.com/${IMAGEURL}`} />
      <div>
        {" "}
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          El precio más alto del día: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          El precio más bajo del dia: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Ultima actualizacion: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </ResultadoDiv>
  );
};

export default Resultado;
