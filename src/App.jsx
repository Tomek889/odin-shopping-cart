import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./app.module.css";

function App() {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (response.status !== 200) {
          throw new Error(
            `Error fetching data with the status: ${response.status}`
          );
        }
        const data = await response.json();

        const updatedData = data.map((item) => ({
          ...item,
          number: 0,
        }));

        setCart(updatedData);
        setLoading(false);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Navbar number={cart.length} />
      <main>
        {isHome ? (
          <Outlet />
        ) : loading ? (
          <>
            <div className={styles.loader}>
              <p>Loading...</p>
            </div>
          </>
        ) : error ? (
          <p>An error while fetching data was encountered</p>
        ) : (
          <Outlet context={{ cart, setCart }} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
