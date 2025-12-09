import { MemoryRouter } from "react-router";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { HomePage } from "./HomePage";
import { fireEvent, render, screen } from "@testing-library/react";
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FavoriteHeroProvider } from "@/heroes/context/FavoriteHeroContext";

vi.mock('@/heroes/hooks/usePaginatedHero');

const mockUsePaginatedHero = vi.mocked(usePaginatedHero);

mockUsePaginatedHero.mockReturnValue({
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true
} as unknown as ReturnType<typeof usePaginatedHero>);

const queryClient = new QueryClient();

const renderHomePage = (initialEntries: string[] = ['/']) => {

  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <FavoriteHeroProvider>
        <QueryClientProvider client={queryClient}>
          <HomePage />
        </QueryClientProvider>
      </FavoriteHeroProvider>
    </MemoryRouter>
  )
};

describe('HomePage', () => {

  beforeEach( () => {
    vi.clearAllMocks();
  });

  it('should render HomePage with default values', () => {
    const { container } = renderHomePage();
    expect(container).toMatchSnapshot();
  });

  it('should call usePaginatedHero with default values', () => {
    renderHomePage();
    expect(mockUsePaginatedHero).toHaveBeenCalledWith(1, 6, 'all');
  });

  it('should call usePaginatedHero with custom query params', () => {
    renderHomePage(['/?page=2&limit=10&category=villain']);
    expect(mockUsePaginatedHero).toHaveBeenCalledWith(2, 10, 'villain');
  });

  it('should ', () => {
    renderHomePage(['/?tab=favorites&page=2&limit=10']);

    const [ , , , villiansTab] = screen.getAllByRole('tab');
    
    fireEvent.click(villiansTab);

    expect(mockUsePaginatedHero).toHaveBeenCalledWith(1, 10, 'villain');
  });
});