import App from './App';
import { Posts } from './components/Posts';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";

// Fix the lib problem by these commands:
// npm install --save-dev react-test-renderer
// npm install --save-dev react-test-renderer --legacy-peer-deps
// npm i --save-dev @types/react-test-renderer
import * as renderer from 'react-test-renderer';

//unit test case
test('Check third image equal to what we are expecting', () => {
    render(<Router><Posts /></Router>);
    const image = screen.getAllByRole('img')[3];
    expect(image).toHaveAttribute('src', 'https://www.bing.com/th?id=OIP.W8apTKARTqVhmLzMCisNmAHaEs&w=185&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2')
});

//snapshot test
it('renders correctly2', async () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});

//component test
