import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import NewArrival from "../components/NewArrival";
import Offer from "../components/Offer";
import Header from "../components/Header";
import Products from '../components/Products';

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Offer />
      <NewArrival />
      <Products/>
    </>
  )
}

export default Home;