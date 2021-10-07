import ProductList from "./component/ProductList";
import ProductContextProvider from "./contexts/ProductContext";
function App() {
  return (
    <>
      <section className="navbar">
      </section>
      <section className="main-pagr">
        <div className="container-xl">
          <div className="table-responsive">
            <div className="table-wrapper">
              <ProductContextProvider>
                 <ProductList />
              </ProductContextProvider>
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
