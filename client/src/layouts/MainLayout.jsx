import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <h1>Campus Connect</h1>
        <p>Welcome to the Campus Connect application.</p>
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;