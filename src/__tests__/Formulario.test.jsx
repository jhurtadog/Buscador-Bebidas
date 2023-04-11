/* eslint-disable react/prop-types */
import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import Formulario from "../components/Formulario";
import { renderWithProviders } from "../utils/test-utils";
import "@testing-library/jest-dom/extend-expect";
//import userEvent from "@testing-library/user-event";

test("<Formulario /> Cargar el Formulario y revisar que todo se carga correcto", () => {
  const initialState = { categorias: [], error: null, loading: false };
  renderWithProviders(<Formulario />, {
    preloadedState: {
      categorias: initialState,
    },
  });
  const btnSubmit = screen.getByTestId("btn-submit");
  expect(btnSubmit.tagName).toBe("BUTTON");
  expect(btnSubmit.textContent).toBe("Buscar Bebida");
});

test("<Formulario /> Validación del Formulario", () => {
  const initialState = { categorias: [], error: null, loading: false };
  renderWithProviders(<Formulario />, {
    preloadedState: {
      categorias: initialState,
    },
  });
  const btnSubmit = screen.getByTestId("btn-submit");
  fireEvent.click(btnSubmit);
  const alerta = screen.getByTestId("alerta");
  expect(alerta).toBeInTheDocument();
  expect(alerta.textContent).toBe("Todos los campos son obligatorios");
});

test("<Formulario /> Validación del Formulario", () => {
  const initialState = { categorias: [], error: null, loading: false };
  renderWithProviders(<Formulario />, {
    preloadedState: {
      categorias: initialState,
    },
  });
  fireEvent.change(screen.getByTestId("nombre"), {
    target: { value: "Hook" },
  });
  const btnSubmit = screen.getByTestId("btn-submit");
  fireEvent.click(btnSubmit);
  const alerta = screen.getByTestId("alerta");
  expect(alerta).toBeInTheDocument();
});
