import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { SearchHeroPage } from "../../../src/hero/pages/SearchHeroPage";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("SearchHeroPage tests", () => {
  fit("Should show with default values", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchHeroPage />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
    screen.debug();
  });

  it("Should should batman and input with value", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchHeroPage />
      </MemoryRouter>
    );

    const inputElement = screen.getByRole("textbox");
    const imgElement = screen.getByRole("img");
    const noHeroElement = screen.getByLabelText("no-heros");

    expect(noHeroElement.style?.display).toBe("none");
    console.log(noHeroElement.style);
    expect(inputElement.value).toBe("batman");
    expect(imgElement.src).toContain("/assets/heroes/dc-batman.jpg");
    screen.debug();
  });

  it("Should show error if hero does not exists", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/search?q=Ball12132"]}>
        <SearchHeroPage />
      </MemoryRouter>
    );

    const noHeroElement = screen.getByLabelText("no-heros-found");

    expect(noHeroElement.style?.display).not.toBe("none");
    expect(noHeroElement.textContent).toBe(
      "There is not results with Ball12132"
    );
  });

  it("Should navigate to the same page with different query", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=hola"]}>
        <SearchHeroPage />
      </MemoryRouter>
    );

    const inputElement = screen.getByRole("textbox");

    fireEvent.input(inputElement, {
      target: { name: "searchText", value: "goku" },
    });

    fireEvent.submit(inputElement);

    expect(mockUseNavigate).toHaveBeenCalledWith(`?q=goku`);
  });
});
