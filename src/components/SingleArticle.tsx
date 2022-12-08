import { Col, Card } from "react-bootstrap";
import { singleArticle } from "../interfaces";
import { format } from "date-fns";
import { Link } from "react-router-dom";

interface ArticleProps {
  article: singleArticle;
}

const SingleArticle = ({ article }: ArticleProps) => {
  return (
    <Col xs={12} md={6} className="mb-1">
      <Card className="bg-dark text-white">
        <Card.Img
          src={article.imageUrl}
          alt="Card image"
          className="fluid"
          style={{ height: "400px" }}
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center">
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>
            <>
              Last updated {format(new Date(article.updatedAt), "MMM, dd, yyy")}
            </>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
};
export default SingleArticle;
