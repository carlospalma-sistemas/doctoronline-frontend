import { BrowserRouter, Routes, Route } from "react-router-dom";
import TablaEspecialidades from "./especialidades/TablaEspecialidades";
import Banner from "./general/Banner";
import Header from "./general/Header";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner />} exact></Route>
          <Route path="/especialidades" element={<TablaEspecialidades />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
