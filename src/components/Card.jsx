import { Card } from "react-bootstrap";

const MyCard = ({ judul = "", kategori = "", lokasi = "", image = "" }) => {
	return (
		<Card className="w-100" style={{ boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.1), 0 2px 5px 0 rgba(0, 0, 0, 0.1)", maxHeight: '280px' }}>
			<Card.Img className="p-2" variant="top" src={image} style={{ height: '196px', objectFit: 'cover' }} />
			<Card.Body className="p-2 pt-0">
				<small style={{ color: "#8E8E8E" }}>{kategori}</small>
				<Card.Title className="mt-2">{judul}</Card.Title>
				<Card.Text>{lokasi}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default MyCard;