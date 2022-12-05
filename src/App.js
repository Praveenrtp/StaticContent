import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
    <Route path="/" element={<Home />}></Route>
		<Route path='/about' element={<About />}></Route>
		<Route path='/events' element={<Events />}></Route>
		<Route path='/annual' element={<AnnualReport />}></Route>
		<Route path='/team' element={<Teams />}></Route>
		<Route path='/blogs' element={<Blogs />}></Route>
		<Route path='/sign-up' element={<SignUp />}></Route>
	</Routes>
	</Router>
);
}

export default App;
