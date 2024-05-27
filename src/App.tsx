import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./layout/root-layout";
import { Home } from "./components/home";
import { ProductDetail } from "./components/product-details";
import { Toaster } from "react-hot-toast";
import { AllBooks } from "./components/allproduct";
import { Provider } from "react-redux";
import store from "./store/store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index path="/" element={<Home />} />
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/all-product" element={<AllBooks />} />
    </Route>
  )
);

function App() {
  return (
    <Provider store={store}>
      <Toaster
        toastOptions={{
          style: {
            padding: "16px",
          },
        }}
      />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
