import { render, screen } from '@testing-library/react';
import TestComp from '../TestComp';

describe('First test to check Jest and absolute imports', () => {
    it('Should not break with absolute imports', () => {
        render(<TestComp />);
        screen.getByText('Test Comp 2');
    });
});
