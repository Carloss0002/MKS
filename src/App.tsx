import GlobalStyle from './styles/global'
import { api } from './services/api'
import { useEffect, useState } from 'react'
import { Footer } from './components/footer'
import { HeaderComponent } from './components/header'
import {  ProductsEntity } from './model/IProducts'
import {FiShoppingBag} from 'react-icons/fi'
import { Card, CardImg, CardSection, CardText, CardTitle } from './styles/App'

type State = {
    StoreProducts: ProductsEntity[]
}

function App() {
  const [state, setState]=useState<State>({
     StoreProducts: [] as ProductsEntity[]
  })
  let {StoreProducts} = state
  useEffect(()=>{
    getProducts()
  },[])
  async function getProducts(){
    await api.get('products',{
      params:{
        page: 1,
        rows: 8,
        sortBy: 'id',
        orderBy: 'ASC'
      }
    })
    .then((response)=>setState({StoreProducts: response.data.products}))
  }
  return (
    <div className="App">
       <GlobalStyle/>
       <HeaderComponent/>
        <CardSection>
            {
              StoreProducts.map(itens=>(
                 <Card key={itens.id}>
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
                   <button>
                    <span><FiShoppingBag size={13} color="#FFF"/></span> Comprar
                   </button>
                 </Card>
              ))
            }
        </CardSection>
       <Footer/>
    </div>
  )
}

export default App
