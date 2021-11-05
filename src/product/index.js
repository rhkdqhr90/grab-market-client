import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import "./index.css"






function ProductPAge(){
    const {id} = useParams(); 
    const[product, setProduct]=useState(null);
    useEffect(function(){
        axios.get(`https://68ba080f-fa04-45c8-8092-028e50fdf4e0.mock.pstmn.io/products/${id}`).then(
            function(result){
                setProduct(result.data)
                
            }).catch(function(error){
                console.error(error);
            })
    },[id])
  if(product === null){
    return<h1>상품 정보를 받고 있습니다....</h1>
  }
    
    
    return (
        <div>
            <div id="image-box">
                <img src={"/"+product.imageUrl} alt="이미지" />

            </div>
            <div id="profile-box">
                <img src="\images\icons\avatar.png" alt="아바타"/>
                <span>{product.seller}</span>
            </div>
            <div id="contents-box">
                <div id="name">{product.name}</div>
                <div id="price">{product.price} </div>
                <div id="createdAt">2021년11월5일</div>
                <div id="description"> {product.description}</div>
            </div>
        </div>
    );


}

export default ProductPAge