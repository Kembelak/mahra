
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Futures from "./components/Futures";
import Latest from "./components/Latest";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

export default function Home() {
  return (

    <main className="">
      <Navbar />
      <Banner />
      <Futures />
      <Cards />
      <Latest />
      <Footer />
    </main>
  );
}
