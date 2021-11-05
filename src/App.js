import 'antd/dist/antd.css'; 
import './logo.svg';
// eslint-disable-line no-unused-vars
import './App.css';
import MainPageComponet from "./main/index";
import {Switch, Route, Link, useHistory} from 'react-router-dom';
import ProductPAge from './product';
import UploadPage from './upload';
import {Button} from "antd";
import {DownloadOutlined} from"@ant-design/icons"

function App() {  
  const history = useHistory();
  
  return (
  <div> 
     <div id="header">
           <div id="header-area">
             <Link to={"/"}>
                <img src="/images/icons/logo.png" alt="그랩마켓 이미지"/>
              </Link> 
              <Button size="Large"
               onClick={function(){
                history.push('/upload')
              }} icon={<DownloadOutlined />}>
                상품 업로드
              </Button> 
           </div>
      </div>
      <div id="body">
      <Switch> 
        <Route exact={true} path="/">
        <MainPageComponet />
        </Route>
        <Route exact={true} path="/products/:id">
        <ProductPAge />
        </Route>
        <Route exact={true} path="/upload">
        <UploadPage />
        </Route>
      </Switch>
      </div>   
      <div id="footer"></div>
  </div>
  );
  
}


export default App;
