import ItemListContainer from "../components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "../components/pages/cart/CartCOntainer";
import CheckoutContainer from "../components/pages/checkout/CheckOutContainer";
import Dashboard from "../components/pages/dashboard/Dashboard";
// import FormFormik from "../components/pages/formFormik/FormFormik";
export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "detail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
  {
    id: "dashboard",
    path: "/dashboard",
    Element: Dashboard,
  },
  //   {
  //     id: "formik",
  //     path: "/formik",
  //     Element: FormFormik,
  //   }
];
