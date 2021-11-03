import './index.css';
import axios from "axios";
import React from 'react';



function MainPageComponet(){
    const [products, setproducts] =React.useState([]);

    React.useEffect(
        function(){ 
            axios.get("https://68ba080f-fa04-45c8-8092-028e50fdf4e0.mock.pstmn.io/products")
            .then(function(result){        
                const products =result.data.products;
            setproducts(products);
            }).catch(function(error){
                console.error("에러발생:",error);
            })
        

        },[]    )
    
    
   
    return (
    <div>
            <div id="header">
             <div id="header-area">
                <img src="images/icons/logo.png" alt="그랩마켓 이미지"/>
            </div>
             </div>
          <div id="body">
            <div id="banner">
                <img src="images/banners/banner1.png" alt="배너이미지"/>
            </div>
            <h1>판매되는 상품들</h1>
            <div id="product-list">
                {
                products.map(function(product, index){
                 return(
                        <div className="product-card">
                            <div>
                                <img className="product-img"  src={product.imageUrl} />
                            </div>  
                            <div className="product-contents">
                                <span className="product-name">
                                    {product.name}
                                </span>
                                <span className="product-price">
                                {product.price}
                                </span>    
                                <div className="product-seller">
                                    <img className="product-avatar" src="images/icons/avatar.png" />
                                    <span>{product.seller}</span>
                                
                                </div>
                            </div>       
                        </div>  
                        )
                    })
                }
                
               
                            
            </div>      
            
        </div>
        <div id="footer"></div>
    </div>
    );
    
}

export default MainPageComponet