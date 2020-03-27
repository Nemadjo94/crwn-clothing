import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component {
  unsubsribeFromAuth = null;

  componentDidMount() { 
    const {setCurrentUser} = this.props;

    this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({ // call setCurrentUser action and pass our object as payload
              id: snapshot.id,
              ...snapshot.data()
            });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubsribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }

  
}

const mapDispatchToProps = dispatch => ({ // dispatch triggers the action to reducer
  setCurrentUser: user => dispatch(setCurrentUser(user)) // dispatch is a way redux dispatches an action to every reducer
});

export default connect(null, mapDispatchToProps)(App); // null as first argument because we dont need any state from reducer (we dont need mapStateToProps function)
