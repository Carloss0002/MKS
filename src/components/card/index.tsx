import {Card, CardImg, CardText, CardTitle} from './style'
import {FiShoppingBag} from 'react-icons/fi'
import { useDispatch } from 'react-redux/es/exports'
import { add } from '../../store/reducer/Cart'
import { ProductsEntity } from '../../model/IProducts'

interface IProps{
    itens: ProductsEntity
}

export function CardComponent({ itens }:IProps){
    const dispatch = useDispatch()
    function addInCart(product:any){
        dispatch(add(product))
     }
    return(
     <Card>
        <CardImg>
          <img src={itens.photo} alt={itens.name} width={111} height={138}/>
        </CardImg>
        <CardTitle>
           <p>{itens.name}</p>
           <button>
             R${itens.price}
           </button>
        </CardTitle>
        <CardText>
           <p>{itens.description}</p>
        </CardText>
        <button onClick={()=>addInCart(itens)}>
         <span><FiShoppingBag size={13} color="#FFF"/></span> Comprar
        </button>
      </Card>
    )
}