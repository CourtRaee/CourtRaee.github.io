import Navbar from "../../components/navbar/navbar";
import BodyContainer from "../../components/bodyContainer/body-container";
import Footer from "../../components/footer/footer"
import "../dialled/dialled.css"

function Dialled() {
  return (
    <BodyContainer>
      <Navbar />
      <div className="page-structure">
      <h1 className="text">Oooo, you're early!</h1>
      <h2 className="text-two">This page is a work in progress, be sure to check back soon 👀</h2>
      </div>
      <Footer />
    </BodyContainer>
  );
}
export default Dialled;
