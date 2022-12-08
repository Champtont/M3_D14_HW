import Container from "react-bootstrap/esm/Container";
import { Button, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { singleArticle } from "../interfaces";

const DetailsPage = () => {
  const params = useParams();
  console.log(params.articleID);

  const navigate = useNavigate();

  const [article, setArticle] = useState<singleArticle | null>(null);

  useEffect(() => {
    fetchSingleArticle();
  }, []);

  const fetchSingleArticle = async () => {
    try {
      let response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${params.articleID}`
      );
      console.log("RESPONSE", response);
      if (response.ok) {
        let data = await response.json();
        console.log("DATA", data);
        setArticle(data);
      } else {
        console.log("error from the server");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="p-2">
      {article !== null && (
        <>
          <h1>{article.title}</h1>
          <Card>
            <Card.Img variant="top" src={article.imageUrl} />
          </Card>
          <div className="mt-1 p-info">
            <p>{article.summary}</p>
          </div>
          <Button className="mt-1" variant="info" onClick={() => navigate("/")}>
            Home
          </Button>
        </>
      )}
    </Container>
  );
};

export default DetailsPage;
