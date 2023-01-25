import { useState } from 'react'
import { useSelector } from 'react-redux'
import { AsideComponent } from "../asideMenu";
import { Header, Title, BtnArea } from "./styles";
import {AiOutlineShoppingCart} from 'react-icons/ai'

export function HeaderComponent(){
    const [isVisible, setIsVisible] = useState(false)
    const STORE:object[] = useSelector((store:any) => store.Cart.products)
    function setVisible(){
       return setIsVisible(!isVisible)
    }

    return(
        <Header>
          <div>
            <Title>MKS <span>Sistemas</span></Title>
          </div>
          <BtnArea>
             <button onClick={setVisible}>
                 <AiOutlineShoppingCart size={18}/>
                 {
                   STORE.length > 0 ? 
                   (
                     <span>{STORE.length}</span>
                   )
                   :
                   (
                     <span>0</span>
                   )
                 }
             </button>
          </BtnArea>
          <AsideComponent isVisible={isVisible} setVisible={setVisible}/>
        </Header>
    )
}