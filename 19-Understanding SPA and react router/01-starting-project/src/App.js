import { Redirect, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetails from "./pages/ProductDetails";

// Chapter: Defining and Using Routes
/*
- We wrap our content first with <BrowserRouter>.

- Then we define our <Routes>. An application can have multiple <Routes>. Our basic example only uses one.

- <Route>s can be nested. The first <Route> has a path of "/" and renders the Layout component.

- The nested <Route>s inherit and add to the parent route. So the blogs path is combined with the parent and becomes "/blogs".

- The Home component route does not have a path but has an "index" attribute. That specifies this route as the default route for the parent route, which is /.

- Setting the path to "*" will act as a catch-all for any undefined URLs. This is great for a 404 error page.

*/

// function App() {
//   return (
//     <div>
//       <header>
//         <MainHeader />
//       </header>
//       <main>
//         <Route path="/welcome">
//           <Welcome />
//         </Route>
//         <Route path="/products">
//           <Products />
//         </Route>
//       </main>
//     </div>
//   );
// }

// Chapter: Adding Dynamic routes with "params"
/*
- <Switch> is unique in that it renders a route exclusively. In contrast, every <Route> that matches the location renders inclusively means path "/products" and "/.products/:productId" are similar for <Route/>

- Router V5 always matches path from Top to Bottom direction, means whatever path macthes first it will be url.

- "exact" props tells <Route/> that router should matches given exact path. 
*/

// function App() {
//   return (
//     <div>
//       <header>
//         <MainHeader />
//       </header>
//       <main>
//         <Switch>
//           <Route path="/welcome">
//             <Welcome />
//           </Route>
//           <Route path="/products" exact>
//             <Products />
//           </Route>
//           <Route path="/products/:productId">
//             <ProductDetails />
//           </Route>
//         </Switch>
//       </main>
//     </div>
//   );
// }

// ----------------------------------------------------------------

// Chapter: Redirecting the user
/*
- Here we understanding to redirect the user to some page.
*/

function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
        </Switch> 
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome  => shows Component Welcome
// our-domain.com/products => shows Component Products
// our-domain.com/product-detail/a-book
