import React, { useEffect, lazy, Suspense, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

import { PageWrapper, GlobalStyle } from "./global.styles";

import AuthService from "./services/auth.service";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));
const UserPage = lazy(() => import("./pages/userpage/userpage.component"));

const App = () => {
  let [user, setUser] = useState(undefined);
  console.log(user);
  let userPath =
    user !== undefined && user !== null ? `/${user.username}` : "/undefined";
  useEffect(() => {
    setUser(AuthService.getCurrentUser());
  }, []);

  return (
    <PageWrapper>
      <GlobalStyle />
      <Header user={user} userPath={userPath} />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route exact path={userPath} component={UserPage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                user ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </PageWrapper>
  );
};

export default App;
