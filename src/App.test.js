import { render, waitFor, screen } from "@testing-library/react";
import Pokedex from "./Pokedex";
import { getPokemon } from "./fetchApi/pokemon.js";
import Card from './components/Card';
import { act } from "react-dom/test-utils";

jest.mock("./fetchApi/pokemon.js");

describe("Card Component", () => {
  beforeEach(() => jest.clearAllMocks());
  it("should render pokemon properties when api responds", async () => {
    getPokemon.mockResolvedValue({
      name: "charmander"
    });
    render(<Card />);
    await waitFor(() => {
      const resolvedValue = screen.getByText("charmander");
      expect(resolvedValue).toBeInTheDocument();
      screen.debug();
    });
  });

  // it("should render error message when api fails", async () => {
  //   api.getAllPokemon.mockRejectedValue({});
  //   render(<App />);
  //   await waitFor(() => {
  //     screen.getByText("Unable to fetch data");
  //   });
  // });
});

