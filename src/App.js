import { Check } from "./componants/Check";
import { Navbar } from "./componants/Navbar";
import "./sass/global/global.css"
import { Routes,Route} from 'react-router-dom';
import { Home } from "./Pages/Home";
import "../src/sass/global/global.css"
import { Search } from "./componants/Search";
import { Searchpage } from "./Pages/Searchpage";

function App() {
  return (
    <>

    <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/search" element={<Searchpage/>} />
    </Routes>
    </>
  );
}

export default App;
