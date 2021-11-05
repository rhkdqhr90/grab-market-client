import './index.css';
import axios from "axios";
import React from 'react';
import {Link} from 'react-router-dom';



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
           
        
            <div id="banner">
                <img src="images/banners/banner1.png" alt="배너이미지"/>
            </div>
            <h1>판매되는 상품들</h1>
            <div id="product-list">
                {
                products.map(function(product, index){
                 return(
                        <div className="product-card">
                            <Link className="product-Link" to={`/products/${product.id}`}>
                            <div>
                                <img className="product-img"  src={product.imageUrl} alt="product"/>
                            </div>  
                            <div className="product-contents">
                                <span className="product-name">
                                    {product.name}
                                </span>
                                <span className="product-price">
                                {product.price}
                                </span>    
                                <div className="product-seller">
                                    <img className="product-avatar" src="images/icons/avatar.png"alt="avatar" />
                                    <span>{product.seller}</span>
                                
                                </div>
                            </div>    
                            </Link>   
                        </div>  
                        )
                    })
                }
                
               
                            
            </div>      
            
        
    </div>
    );
    
}

export default MainPageComponet