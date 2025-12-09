import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SearchControl } from "./SearchControl";
import { MemoryRouter } from "react-router";

if(typeof window.ResizeObserver === 'undefined') {
    class ResizeObserver {
        observe() {}
        unobserve() {}
        disconnect() {}
    }
    window.ResizeObserver = ResizeObserver;
};

const renderWithRouter = (initialEntries: string[] = ['/']) => {
    return render(
        <MemoryRouter initialEntries={initialEntries}>
            <SearchControl />
        </MemoryRouter>
    )
}

describe('SearchControl', () => {

    it('should render SearchControl with default values', () => {
        const { container } = renderWithRouter();

        expect(container).toMatchSnapshot();
    });

    it('should set input value when search param name is set', () => {
        renderWithRouter(['/?name=Batman']);

        const input = screen.getByPlaceholderText('Buscar heroes, villanos, poder, equipos...');

        expect(input.getAttribute('value')).toBe('Batman');
    });

    it('should change params when input is changed and enter is pressed', () => {
        renderWithRouter(['/?name=Batman']);

        const input = screen.getByPlaceholderText('Buscar heroes, villanos, poder, equipos...');
        expect(input.getAttribute('value')).toBe('Batman');

        fireEvent.change(input, {target: {value: 'Superman'}});
        fireEvent.keyDown(input, {key: 'Enter'});

        expect(input.getAttribute('value')).toBe('Superman');
    });

    it('should change params strength when slider changed', () => {
        renderWithRouter(['/?name=Batman&active-accordion=advance-filters']);
        const slider = screen.getByRole('slider');

        expect(slider.getAttribute('aria-valuenow')).toBe('0');

        fireEvent.keyDown(slider, {key: 'ArrowRight'});

        expect(slider.getAttribute('aria-valuenow')).toBe('1');
    });

    it('should accordion be open when active-accordion param is set', () => {
        renderWithRouter(['/?name=Batman&active-accordion=advance-filters']);
        const accordion = screen.getByTestId('accordion');
        const accordionItem = accordion.querySelector('div');

        expect(accordionItem?.getAttribute('data-state')).toBe('open');
    });

    it('should accordion be closed when active-accordion param is not set', () => {
        renderWithRouter(['/?name=Batman']);
        const accordion = screen.getByTestId('accordion');
        const accordionItem = accordion.querySelector('div');

        expect(accordionItem?.getAttribute('data-state')).toBe('closed');
    });
});