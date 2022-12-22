import React, { useEffect } from "react";
import { Switch, Route, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sing-up/sign-in-and-sing-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./utils/firebase";
import { setCurrentUser } from "./redux/user/action";

const App = (props) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const { setCurrentUser } = props;
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }, );
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/signin" render={() => props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>)}/>
      </Switch>
    </div>
  );
};

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
