import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./app.router";
import { Outlet, RouterProvider } from "react-router";
import { render, screen } from "@testing-library/react";

vi.mock('@/heroes/layouts/HeroesLayout', () => ({
    HeroesLayout: () => <div data-testid="heroes-layout"><Outlet /></div>
}));

vi.mock('@/heroes/pages/home/HomePage', () => ({
    HomePage: () => <div data-testid="hero-page"></div>
}));

describe('appRouter', () => {

    it('should be configured as expected', () => {

        expect(appRouter.routes).toMatchSnapshot();

    });

    it('shoukd render home page at root path', () => {
        render(<RouterProvider router={appRouter} />);

        expect(screen.getByTestId('hero-page')).toBeDefined();
    });
});