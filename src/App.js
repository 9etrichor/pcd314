import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Swap from "./pages/Swap";
import Footer from "./components/Footer";
import Orders from "./pages/Orders";
import Home from "./pages/Home";
import Token from "./pages/Token";
import WebSocketContext from './contexts/WebSocket';
import Markets from "./pages/Markets";
import Staking from "./pages/Staking";
import useSetReferrerFromUrl from "./hooks/useSetReferrerFromUrl";
import Team from "./pages/Team";
import Snapped from "./pages/Snapped";

function App() {
  useSetReferrerFromUrl()

  return (
    <>
      <Header/>
      <main className={'relative flex-grow min-h-[calc(100vh_-_65px_-_164px)] md:min-h-[calc(100vh_-_65px_-_72px)]  text-white bg-[#26261f]'}>

        {/* below is route, if you need add any route, give path and element page component */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/snapped" element={<Snapped />} />
          <Route path="/Team" element={<Team/>} />
          <Route path="/swap" element={<Swap/>}/>
          <Route path="/swap/orders" element={<Orders/>}/>
          <Route path="/markets" element={<Markets/>}/>
          <Route path="/markets/:address" element={<WebSocketContext><Token/></WebSocketContext>}/>
          <Route path="/tokens/:address" element={<WebSocketContext><Token/></WebSocketContext>}/>
          <Route path="/staking" element={<Staking/>}/>
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
