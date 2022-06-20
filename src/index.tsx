
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App'

const GlobalStyle=createGlobalStyle`
  margin: 0;
  padding: 0;

`
ReactDOM.render(
  <> 
  <GlobalStyle/>
  <App/>
  </>
,
  document.getElementById('root')
) 