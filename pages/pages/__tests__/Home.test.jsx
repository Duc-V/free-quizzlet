import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../Home'

describe('Home Page', () => {
    it('renders without crashing', () => {
        render(<Home />);

        // Check for the existence of any element on the page
        // This is just an example - replace with something that's actually on your page
        const pageContent = document.querySelector('div');
        expect(pageContent).toBeInTheDocument();
    });
});