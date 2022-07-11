import "./App.css";
import desktopImg from "./images/desktopImg.jpg";
const App = () => {
  return (
    <div className="app">
      <div className="container">
        <div className="cartItem">
          <div className="left">
            <img src={desktopImg} alt="" />
          </div>
          <div className="right">
            <p className="category">P E R F U ME</p>
            <h1 className="title">
              Gabrielle
              <br /> Essence Eau De Parfum
            </h1>
            <p className="description">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator
              <br /> for the House of CHANNEL
            </p>
            <div className="price">
              <h1 className="newPrice">$149.99</h1>
              <p className="oldPrice">$169.99</p>
            </div>
            <button className="cartBtn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
