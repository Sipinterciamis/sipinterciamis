import './App.css';
// import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Wisata from './pages/Wisata';
import Trayek from './pages/Trayek';
import Footer from './components/Footer';
import TrayekDetail from './pages/TrayekDetail';
import WisataDetail from './pages/WisataDetail';
import ScrollToTop from './components/scrollToTop.jsx';

// import Footer from './components/Footer';

function App() {
	return (
		<div className="">
			<Navbar />
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/trayek" element={<Trayek />} />
				<Route path="/trayek/:idAngkot" element={<TrayekDetail />} />
				<Route path="/wisata" element={<Wisata />} />
				<Route path='/wisata/:slug' element={<WisataDetail />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
