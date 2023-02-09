
import { Navbar } from "./componants/Navbar";
import store from './Redux-Store/store/index'
import "./sass/global/global.css"
import { Routes,Route} from 'react-router-dom';
import { Home } from "./Pages/Home";
import "../src/sass/global/global.css"
import { Search } from "./componants/Search";
import { Searchpage } from "./Pages/Searchpage";
import { Login } from "./componants/Login";
import { Enquire } from "./Pages/Enquire";
import { UpdatePage } from "./Pages/UpdatePage";
import { Provider } from "react-redux";
import { Footer } from "./componants/Footer";
import "../src/App.css";




function App() {
  return (
    <Provider store={store}>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/search" element={<Search/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/enquiry" element={<Enquire/>} />
      <Route path="/update" element={<UpdatePage/>} />
    </Routes>
    <Footer/>
    </Provider>
  );
}

export default App;
