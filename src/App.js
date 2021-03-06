import React, { useState } from 'react';
import IndexPage from './pages/IndexPage';
import BottomNav from './components/BottomNav';
import './static/iconfont/iconfont.css'
import CartPage from './pages/CartPage';
import OrderListPage from './pages/OrderListPage';
import UserPage from './pages/UserPage';
import MyRCForm from './pages/Form/MyRCForm';


function App() {
  const [activeNum, setActiveNum] = useState(0)
  return (
    <div className="App">
      {activeNum === 0 && <IndexPage />}
      {activeNum === 1 && <CartPage />}
      {activeNum === 2 && <OrderListPage />}
      {activeNum === 3 && <UserPage />}
      <MyRCForm />
      <BottomNav activeNum={activeNum} setActiveNum={setActiveNum} />
    </div>
  );
}

export default App;
