import { BrowserRouter,Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { NotFound } from "./pages/notfound"
import "./index.css";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element ={<Home/>}/>
          <Route path = "*" element ={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App