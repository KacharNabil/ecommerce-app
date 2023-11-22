import Announcement from "../components/Announcement"
import NavBar from "../components/NavBar"
import Categories from '../components/Categories'
import Products from "../components/Products"
import Slider from '../components/Slider'
import Footer from "../components/Footer"
import NewsLetter from "../components/NewsLetter"

function Home() {
  return (
    <div>
        <Announcement/>
        <NavBar/>
        <Slider/>
        <Categories/>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Home