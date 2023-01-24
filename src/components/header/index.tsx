import { useState } from 'react'
import { AsideComponent } from "../asideMenu";
import { Header, Title, BtnArea } from "./styles";
import {AiOutlineShoppingCart} from 'react-icons/ai'

export function HeaderComponent(){
    const [isVisible, setIsVisible] = useState(false)
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
                 <span>0</span>
             </button>
          </BtnArea>
          <AsideComponent isVisible={isVisible} setVisible={setVisible}/>
        </Header>
    )
}