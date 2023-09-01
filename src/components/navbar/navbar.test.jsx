import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import Navbar from ".";

describe("Dado o navbar da nossa aplicação", () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  test("Deve renderizar corretamente", () => {
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  test("Deve conter o logo da totvs", () => {
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("Deve conter um input de busca", () => {
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("Deve conter um botão de entrar", () => {
    expect(screen.getByText(/entrar/i)).toBeInTheDocument();
  });

  test("Deve conter um botão de criar conta", () => {
    expect(screen.getByText(/criar conta/i)).toBeInTheDocument();
  });

  test("Deve ter estilos", () => {
    expect(screen.getByRole("navigation")).toHaveStyle({
      width: "100%",
      flexShrink: 0,
      background: "#000",
      padding: "16px 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    });
  });
});

describe("Dado logo da totvs", () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  test("Deve ter largura de 118px e altura de 35px", () => {
    expect(screen.getByRole("img")).toHaveStyle({
      width: "118px",
      height: "35px",
    });
  });
});

describe("Dado o input de pesquisa", () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  test("Deve ter um placeholder Buscar eventos", () => {
    expect(screen.getByRole("textbox")).toHaveProperty(
      "placeholder",
      "Buscar eventos"
    );
  });

  test("Deve ter estilos", () => {
    expect(screen.getByRole("textbox")).toHaveStyle({
      width: "601px",
      height: "40px",
      flexShrink: 0,
      borderRadius: "30px",
      border: "1px solid #E6E7E8",
      background: "#000",
    });
  });
});

describe("Dado o botão de entrar", () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  test("Deve ter estilos", () => {
    expect(screen.getByText(/entrar/i)).toHaveStyle({
      display: "flex",
      width: "126px",
      height: "40px",
      padding: "8px 32px",
      justifyContent: "center",
      alignItems: "center",
      gap: "9px",
      flexShrink: 0,
      borderRadius: "30px",
      background: "#FEAC0E",
      color: "#FFF",
      fontFamily: "Lato",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "16px",
    });
  });
});
