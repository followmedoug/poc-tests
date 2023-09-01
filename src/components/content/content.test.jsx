import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, test, vi } from "vitest";
import Content from ".";
import * as FakeHook from "../../hooks/fakeHook";

const useFakeHookSpy = vi.spyOn(FakeHook, "FakeHook");

describe("Dado o conteúdo da minha home", () => {
  test("Deve renderizar o conteúdo", () => {
    render(
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    );
    expect(screen.getByText(/conteúdo/i)).toBeInTheDocument();
  });

  test("Quando carregando deve mostrar a palavra carregando", () => {
    useFakeHookSpy.mockReturnValue({
      data: [],
      loading: true,
    });

    render(
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    );

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});
