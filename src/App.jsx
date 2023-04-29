import { Footer } from "./Components/Footer/Footer"
import { Header } from "./Components/Header/Header"
import { Categories } from "./Pages/Categories/Categories"
import { Home } from "./Pages/Home/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {


  return (
    <main >
    <Router>
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="categories" element={<Categories/>} />
      </Routes>
     <Footer/>
    </Router>
    </main>
  )
}

export default App
