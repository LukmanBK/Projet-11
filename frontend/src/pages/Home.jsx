import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
<main>
        <Banner />
 <section className="features">
          <h2 className="sr-only">Features</h2>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
