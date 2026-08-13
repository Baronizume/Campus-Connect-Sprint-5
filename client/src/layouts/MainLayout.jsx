import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout() {
  return (
    <div>
      <Navbar />

      <main>
        <h1>EventSpark</h1>
        <p>Welcome to the EventSpark application.</p>
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;