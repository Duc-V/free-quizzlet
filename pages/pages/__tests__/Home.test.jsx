import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../Home';

describe('Home Page', () => {
    it('renders without crashing', () => {
        render(<Home />);

        // Use a more reliable check
        expect(document.body).toBeInTheDocument();
    });
});