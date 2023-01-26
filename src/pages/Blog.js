import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import articles from '../../public/data/terminal'
import angkot from '../data/angkot'


export default function Blog() {
	// const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		console.log(angkot)
	}, [])


	// useEffect(() => {
	// 	document.title = 'Blog';

	// 	async function getArticles() {
	// 		const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
	// 		// const request = await fetch('http://localhost:8080/terminal');

	// 		const response = await request.json();
	// 		console.log(response);

	// 		// setArticles(response);
	// 		setLoading(false);
	// 	}
	// 	getArticles();
	// }, []);

	return (
		<section className="section">
			<h1 className="section-title underline">Ini halaman blog</h1>
			<p className="section-description">Ini adalah isi kontentnya:</p>

			{loading && <i>loading articles ...</i>}
			{!loading && (
				<div className="articles">
					{angkot.map((angkot) => (
						<article key={angkot.id} className="article">
							<h3 className="article-title">
								<Link to={`/blog/${angkot.id}`}>{angkot.nama}</Link>
							</h3>
							<p>{angkot.trayek}</p>
							<div className="">
								<img src={angkot.imageUrl} alt={angkot.nama} className="article-image" />
							</div>
						</article>
					))}
				</div>
			)}
		</section>
	);
}
