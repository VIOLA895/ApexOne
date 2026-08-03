import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import DashboardPreview from "../../components/DashboardPreview/DashboardPreview";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DashboardPreview />
      <Footer />
    </>
  );
}

export default Home;