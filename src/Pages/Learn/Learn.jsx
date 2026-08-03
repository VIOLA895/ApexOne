import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BeginnerEssentials from "../../components/BeginnerEssentials/BeginnerEssentials";
import "./Learn.css";

function Learn() {
  return (
    <>
      <Navbar />

      <main className="learn-page">
        {/* Hero Section */}
        <section className="learn-hero">
          <p className="learn-tag">FORMULA 1 FOR BEGINNERS</p>

          <h1>Learn Formula 1</h1>

          <p className="learn-description">
            Everything you need to understand Formula 1, from race weekends
            and tyre strategy to flags, DRS, pit stops and championship points.
            Whether you're completely new or looking to deepen your knowledge,
            ApexOne makes Formula 1 easy to learn.
          </p>

          <div className="learn-search">
            <input
              type="text"
              placeholder="Search lessons..."
            />

            <button>Search</button>
          </div>
        </section>

        {/* Beginner Essentials Section */}
        <BeginnerEssentials />

      </main>

      <Footer />
    </>
  );
}

export default Learn;