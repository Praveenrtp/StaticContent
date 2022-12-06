import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';


import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Comment from './pages/Comment';
import Product from './pages/Product';
import ProductList from './pages/ProductList';

function App() {
return (
	<Router>
		<Navbar />
		<Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
		  <Route path="/dashboard" element={<Dashboard />} />
		<Route path='/events' element={<Events />}></Route>
		<Route path='/annual' element={<AnnualReport />}></Route>
		<Route path='/team' element={<Teams />}></Route>
		<Route path='/blogs' element={<Blogs />}></Route>
		<Route path='/sign-up' element={<SignUp />}></Route>
		<Route path='/ProductList' element={<ProductList />}></Route>
        </Routes>
		</Sidebar>


	
	</Router>
);
}

export default App;
