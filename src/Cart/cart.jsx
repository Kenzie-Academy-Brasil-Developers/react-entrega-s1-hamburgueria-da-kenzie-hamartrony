import Produto from "../Product/product"
import './cart.css'
function Cart({sale, delCart}){
    console.log(sale)


    return(

        <>
            {
                sale.length === 0 ? (
                    <div className="sale_vazio">
                        <h2>Carrinho de Compras</h2>
                        <p>Sua sacola está vazia</p>
                        <p>Adicione itens</p>
                    </div>

                ):(
                    <div className="sale">
                        <h2>Carrinho de Compras</h2>
                        <div className="produtos">
                            {sale.map((item) => <Produto item={item} key={item.id} delCart={delCart} button={'Remover'}/>)}
                        </div>

                    </div>)
            }
        

        </>



    )
}

export default Cart