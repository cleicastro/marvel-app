import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Search from './pages/Search'
import Header from './components/Header'
import Footer from './components/Footer'
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <>
            <Header />
            <Home /> <Footer />
          </>
        )}
      />
      <Route
        path="/search"
        render={() => (
          <>
            <Header />
            <Search /> <Footer />
          </>
        )}
      />
      <Route exact path="/issue/:id/:title" component={Details} />
      <Route
        component={() => (
          <h1 style={{ textAlign: 'center' }}>
            Erro 404 <br />
            Page not found
          </h1>
        )}
      />
    </Switch>
  </BrowserRouter>
)
export default Routes
