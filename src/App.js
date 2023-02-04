import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Navbar from './components/Navbar';
import Wisata from './pages/Wisata';
import Trayek from './pages/Trayek';
import Footer from './components/Footer';

// import Footer from './components/Footer';

function App() {
	return (
		<div className="">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/trayek" element={<Trayek />} />
				<Route path="/wisata" element={<Wisata />} />
				<Route path="/blog/:id" element={<BlogDetail />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
