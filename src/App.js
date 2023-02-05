import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Wisata from './pages/Wisata';
import Trayek from './pages/Trayek';
import Footer from './components/Footer';
import TrayekDetail from './pages/TrayekDetail';

// import Footer from './components/Footer';

function App() {
	return (
		<div className="">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/trayek" element={<Trayek />} />
				<Route path="/trayek/:idAngkot" element={<TrayekDetail />} />
				<Route path="/wisata" element={<Wisata />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
