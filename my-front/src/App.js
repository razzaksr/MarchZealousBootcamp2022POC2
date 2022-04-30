import { Menus } from "./Navi";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Agaram, Thenali, Vikatan } from "./MyComps";
import { NewAccount } from "./SignUp";
import { Login } from "./Login";
import { Home } from "./Home";
import { Transactions } from "./Transactions";
import { ProUp } from "./ProUp";
import { Perform } from "./PerformTransactions";

const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Menus/>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/sign" exact element={<NewAccount/>}/>
          <Route path="/home" exact element={<Home/>}/>
          <Route path="/showt" exact element={<Transactions/>}/>
          <Route path="/update" exact element={<ProUp/>}/>
          <Route path="/perform" exact element={<Perform/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
