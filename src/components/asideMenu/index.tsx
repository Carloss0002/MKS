import { Aside, TextTitle, TitleDiv, FooterDiv, CardElement, CartProducts} from "./style";
import { AiFillCloseCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";
import { remove, addQuantity, removeQuantity } from '../../store/reducer/Cart'
import { ProductsEntity } from '../../model/IProducts'

interface IAside{
    isVisible: boolean,
    setVisible: ()=>void
}

export function AsideComponent({isVisible, setVisible}:IAside) {
    const DISPATCH = useDispatch()
    const products:any = useSelector((store:any)=>store.Cart.products)
    const somarProdutos = products.reduce(soma, 0)
    function soma(total:any, item:any){
        return total + Number(item.product.price * item.quantity)
    }
    function removeItem(id:any){
        return DISPATCH(remove(id))  
    }
    function AddQuantity(id:any){
       DISPATCH(addQuantity(id))
    }
    function RemoveQuantity(id:any){
       DISPATCH(removeQuantity(id))
    }
    return (
        <Aside visible={isVisible}>
            <TitleDiv>
                <TextTitle>Carrinho <br/>de compras</TextTitle>
                <button onClick={setVisible}>
                    <AiFillCloseCircle size={38}/>
                </button>
             </TitleDiv>
            <CardElement>
               {
                 products.map((itens:any)=>(
                    <CartProducts key={itens.product.id}> 
                      <button className="close" onClick={()=>removeItem(itens.product.id)}>
                        <AiFillCloseCircle size={18}/>  
                      </button>     
                      <div>
                        <img src={itens.product.photo} alt={itens.product.name} width={46} height={57}/>
                        <p id="name">{itens.product.name}</p>
                        <div className="areaBtn">
                          <p>QTD:</p>  
                          <div>
                            <button onClick={()=>AddQuantity(itens.product.id)}>+</button>
                            <span>{itens.quantity}</span>
                            <button onClick={()=>RemoveQuantity(itens.product.id)}>-</button>
                          </div>  
                        </div>
                        <p id="price">R$ {itens.product.price}</p>   
                      </div> 
                    </CartProducts>
                 ))
               }
            </CardElement>  
            <FooterDiv>
                <p>Total: <span>R$ {Number(somarProdutos).toFixed(2)}</span></p>
                <button>
                    Finalizar Compra
                </button>
            </FooterDiv>
        </Aside>
    );
}
