import React, {useEffect, useState} from 'react';
import './css/Style.css';
import MainNav from './components/MainNav';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout'
import Room from './components/Room';
import RoomEdit from './components/RoomEdit';
import RoomAddRoom from './components/RoomAddRoom';
import Booking from './components/Booking';
import Reservation from './components/Reservation';
import ReservationSingle from './components/ReservationSingle';
import {AppProvider} from './AppProvider';
import PrivateRoute from './PrivateRoute';
import Page404 from './Page404';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


function App() {



  return (
    <AppProvider>

      <Router>
        <MainNav />

      <Switch>

      <Route path="/login">
        <Login  />
      </Route>
      
      <Route path="/register">
        <Register />
      </Route>

      <Route exact path="/rooms">
        <Room />
      </Route>

      <PrivateRoute path="/rooms/add-room">
        <RoomAddRoom />
      </PrivateRoute>

      <Route exact path="/rooms/:id/edit">
        <RoomEdit />
      </Route>

      <Route exact path="/bookings/:id">
        <Booking />
      </Route>

      <PrivateRoute exact path="/reservations">
        <Reservation />
      </PrivateRoute>

      <Route exact path="/reservations/:id">
        <ReservationSingle  />
      </Route>


      <Route path="/register">
        <Register />
      </Route>



      <Route path="/logout">
        <Logout />
      </Route>

      <Route path="*">
        <Home />
      </Route>

      <Route exact path="/">
        <Page404 />
      </Route>
        
      </Switch>

      </Router>

    </AppProvider>
    
  );
}

export default App;
