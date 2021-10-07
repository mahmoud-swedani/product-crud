import ProductList from "./component/ProductList";
// <div className=""></div>

function App() {
  return (
    <>
      <section className="navbar">
      </section>
      <section className="main-pagr">
        <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
              <ProductList />
           </div>
          </div>
        </div>
      </section>
      <section className="footer">

      </section>

    </>
  );
}

export default App;
