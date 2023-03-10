import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 450px;
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }
`;

export const Router = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const CardTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  margin: 40px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;
