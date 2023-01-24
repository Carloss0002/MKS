import { Aside, TextTitle, TitleDiv, FooterDiv, CardElement, CartProducts} from "./style";
import { AiFillCloseCircle } from 'react-icons/ai'

interface IAside{
    isVisible: boolean,
    setVisible: ()=>void
}

export function AsideComponent({isVisible, setVisible}:IAside) {
    let obj = ['', '', '', '', '', '', '', '', '']
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
                 obj.map(i=>(
                    <CartProducts>
                        
                    </CartProducts>
                 ))
               }
            </CardElement>  
            <FooterDiv>
                <p>Total: <span>R$798</span></p>
                <button>
                    Finalizar Compra
                </button>
            </FooterDiv>
        </Aside>
    );
}
