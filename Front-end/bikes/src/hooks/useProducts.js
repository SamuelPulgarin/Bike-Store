import { useNavigate } from "react-router-dom";

export const useNavigateToProductos = () => {
  const navigate = useNavigate();

  const redirectToProductos = () => {
    navigate("/productos"); 
  };

  return redirectToProductos;
};