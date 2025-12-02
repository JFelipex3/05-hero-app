import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./app.router";
import { createMemoryRouter, Outlet, RouterProvider, useParams } from "react-router";
import { render, screen } from "@testing-library/react";

vi.mock('@/heroes/layouts/HeroesLayout', () => ({
    HeroesLayout: () => <div data-testid="heroes-layout"><Outlet /></div>
}));

vi.mock('@/heroes/pages/home/HomePage', () => ({
    HomePage: () => <div data-testid="hero-page"></div>
}));

vi.mock('@/heroes/pages/hero/HeroPage', () => ({
    HeroPage: () => {

        const { idSlug = '' } = useParams();

        return (
            <div data-testid="hero-page">
                HeroPage - {idSlug}
            </div>
        )
    }
}));

vi.mock('@/heroes/pages/search/SearchPage', () => ({
    SearchPage: () => <div data-testid="search-page"></div>
}));

describe('appRouter', () => {

    it('should be configured as expected', () => {

        expect(appRouter.routes).toMatchSnapshot();

    });

    it('shoukd render home page at root path', () => {

        const router = createMemoryRouter(appRouter.routes, {
            initialEntries: ['/']
        });

        render(<RouterProvider router={router} />);

        expect(screen.getByTestId('hero-page')).toBeDefined();
    });

    it('should render hero page at /hero/:idSlug path', () => {
        const router = createMemoryRouter(appRouter.routes, {
            initialEntries: ['/heroes/superman']
        });

        render(<RouterProvider router={router} />);

        expect(screen.getByTestId('hero-page').innerHTML).toContain('superman');

    });

    it('should render search page at /search path', async () => {
        const router = createMemoryRouter(appRouter.routes, {
            initialEntries: ['/search']
        });

        render(<RouterProvider router={router} />);

        expect(await screen.findByTestId('search-page')).toBeDefined();

    });
});