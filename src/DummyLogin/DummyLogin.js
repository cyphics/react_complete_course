import React, {useContext} from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from "./context/auth-context";

function DummyLogin() {
    const ctx = useContext(AuthContext);
    console.log(ctx)
    return (
      <React.Fragment>
          <MainHeader/>
          <main>
              {!ctx.isLoggedIn && <Login/>}
              {ctx.isLoggedIn && <Home/>}
          </main>
      </React.Fragment>
    );
}

export default DummyLogin;
