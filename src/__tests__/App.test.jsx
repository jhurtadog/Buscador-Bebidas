import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom/extend-expect";

test("<App /> Cargar el App y revisar que todo se carga correcto", () => {
  render(<App />);
  expect(screen.getByText("Buscador de Bebidas")).toBeInTheDocument();
  const titulo = screen.getByTestId("titulo");
  expect(titulo.tagName).toBe("H1");
  expect(titulo.tagName).not.toBe("H2");
  expect(titulo.textContent).toBe("Buscador de Bebidas");
});
