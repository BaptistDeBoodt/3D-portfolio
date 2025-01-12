import './style.css'
import ReactDOM from 'react-dom/client'
import Experience from './Experience.jsx'
import { BrowserRouter } from 'react-router-dom'

const App = () => {

    return (
        <BrowserRouter>
            <Experience />
        </BrowserRouter>
    );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
