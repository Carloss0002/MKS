import GlobalStyle from './styles/global'
import { api } from './services/api'
import { useEffect, useState } from 'react'
import { Footer } from './components/footer'
import { HeaderComponent } from './components/header'
import {  ProductsEntity } from './model/IProducts'
import { AreaButton, CardSection, Loading } from './styles/App'
import { CardComponent } from './components/card'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';
import { ShowToast } from './components/showtoast'


type State = {
    StoreProducts: ProductsEntity[],
    row: number,
    loading: boolean
}

function App() {
  const [state, setState]=useState<State>({
     StoreProducts: [] as ProductsEntity[],
     row: 8,
     loading: false
  })
  let {StoreProducts, row, loading} = state
  useEffect(()=>{
    getProducts()
  },[])
  async function getProducts(){
    setState({...state, loading: true})
    await api.get('products',{
      params:{
        page: 1,
        rows: 8,
        sortBy: 'id',
        orderBy: 'ASC'
      }
    })
    .then((response)=>{
      setState({...state, StoreProducts: response.data.products, loading: false}) 
      console.log(response.data)
    })
    .catch(()=>ShowToast({type: 'error', message: 'Entre em contato com o servidor'}))
  }


  return (
    <div className="App">
       <ToastContainer position='top-right' autoClose={5000} theme="light"/>
       <GlobalStyle/>
       <HeaderComponent/>
       {
        loading &&
        <Loading>
          <div>
            <div className="loading">

            </div>
          </div>
        </Loading>
       }
        <CardSection>
            {
              StoreProducts.map(itens=>(
                <CardComponent itens={itens} key={itens.id}/>
              ))
            }
        </CardSection>
       <Footer/>
    </div>
  )
}

export default App
