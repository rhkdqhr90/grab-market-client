
import './logo.svg';
// eslint-disable-line no-unused-vars
import './App.css';
import MainPageComponet from "./main/index";
import {Switch, Route} from 'react-router-dom';
import ProductPAge from './product';
import UploadPage from './upload';

function App() {  
  
  return (
  <div>    
      <Switch> 
        <Route exact={true} path="/">
        <MainPageComponet />
        </Route>
        <Route exact={true} path="/product/:id">
        <ProductPAge />
        </Route>
        <Route exact={true} path="/upload">
        <UploadPage />
        </Route>
      </Switch>
  </div>
  );
  
}


export default App;
