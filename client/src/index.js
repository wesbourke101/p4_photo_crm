import App from './components/App';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom'
import './App.css'

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);


