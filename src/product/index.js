import {useParams} from "react-router-dom";





function ProductPAge(){
    const {id} = useParams();
    
    return <h1>상품상세 {id} 상품</h1>


}

export default ProductPAge