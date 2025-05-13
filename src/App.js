import "./App.css";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";

function App(props) {
  return (
    <div
      data-rsssl="1"
      className="home page-template-default page page-id-3720 _masterslider _msp_version_3.2.2  hotelmaster-button-classic-style  header-style-2  hotelmaster-classic-style  hotelmaster-single-classic-style"
    >
      <div
        className="body-wrapper  float-menu gdlr-icon-light gdlr-header-solid"
        data-home="#"
      >
        <Header />
        <main>{props.children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
