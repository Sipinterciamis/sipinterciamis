import { Card } from "react-bootstrap";

const MyCard = ({ judul = "", kategori = "", lokasi = "", image = "" }) => {
  return (
    <Card style={{ boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.1), 0 2px 5px 0 rgba(0, 0, 0, 0.1)" }}>
      <Card.Img className="px-lg-3 px-2 pt-lg-3 pt-2" variant="top" src={image} />
      <Card.Body className="px-lg-3 px-2 pt-0 pb-lg-3 pb-2">
        <small style={{ color: "#8E8E8E" }}>{kategori}</small>
        <Card.Title className="mt-2">{judul}</Card.Title>
        <Card.Text>{lokasi}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyCard;