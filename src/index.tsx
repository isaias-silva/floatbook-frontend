
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import config from './config/padroes.json'
const GlobalStyle=createGlobalStyle`

  margin: 0;
  padding: 0;
  body{
    background-color:${config.bkg};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
`
ReactDOM.render(
  <> 
  <GlobalStyle/>
  <App/>
  </>
,
  document.getElementById('root')
) 