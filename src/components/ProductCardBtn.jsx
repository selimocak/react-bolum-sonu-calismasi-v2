const ProductCardBtn = ({ productId, handleProductSelect }) => <button 
onClick={() => handleProductSelect(productId)} 
className="outline"
>Sec.. {productId} 
</button> 

export default ProductCardBtn   