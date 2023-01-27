import { Card } from "react-bootstrap";
const PicCard = ({ image="", lokasi=""}) => {
    return ( 
        <Card style={{border:"none", borderRadius:"10px",width: "300px", height:"400px", boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.1), 0 2px 5px 0 rgba(0, 0, 0, 0.1)", backgroundImage:`url(${image})`, backgroundSize:"cover", backgroundPosition:"center" }}>
            <Card.Body className="px-3 pt-0 pb-3" style={{ position:"absolute", bottom:"10px" }}>
            {/* <Card.Img style={{ width:"100%", height:"100%" }}  variant="top" src={image} /> */}
            <Card.Text className="text-white " style={{ fontWeight:"600" }}>{lokasi}</Card.Text>
            </Card.Body>
          </Card>
     );
}
 
export default PicCard;