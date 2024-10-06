import { Outlet } from "react-router-dom"
import Header from "../components/shared/header/Header"
import Footer from "../components/shared/footer/Footer"

const Layout = () => {
  return (
    <div style={{maxWidth:"1920px"}}>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout