import { ImOpt } from 'react-icons/im'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import DrawerCardDesing from './components/DrawerCardDesing'
import { setDrawer } from './redux/BasketSlice'

function App() {

  const { product, drawer, productAmount } = useSelector((store) => store.basket)

  const dispacth = useDispatch();

  return (
    <>
      <PageContainer>
        <Loading></Loading>
        <Header></Header>
        <RouterConfig></RouterConfig>
        <Drawer onClose={() => dispacth(setDrawer())} anchor='right' open={drawer}>
          <h1 style={{ display: "flex", justifyContent: "center" }}>Sepet</h1>
          {
            product && product.map((item) => {
              return <DrawerCardDesing key={item.id} products={item} />
            })
          }
          <h3 style={{ display: "flex", justifyContent: "center" }}>Toplam Tutar : {productAmount}</h3>
        </Drawer>
      </PageContainer>
    </>
  )
}

export default App
