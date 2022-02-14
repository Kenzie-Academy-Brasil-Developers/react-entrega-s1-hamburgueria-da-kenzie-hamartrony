import Produto from "../Product/product"
import './productList.css'

function ProductList({prod, addCart, delCart}){


    return(
        <>
            <div className="header">
                <h1>Burguer</h1>
                <h2>Kenzie</h2>
                <input type="text" placeholder="Sanduiche" />
                <button>Pesquisar</button>
            </div>
            <div className="vitrine">            
                {prod.map((item) => <Produto item={item} key={item.id} addCart={addCart} delCart={delCart} button={'Adicionar'}/>)}
                

            </div>
        </>





    )
}

export default ProductList