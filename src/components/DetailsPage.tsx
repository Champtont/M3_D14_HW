import Container from "react-bootstrap/esm/Container";
import { Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { singleArticle } from "../interfaces";

const DetailsPage = () => {
  const params = useParams();
  console.log(params.articleID);

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
    <Container>
      {article !== null && (
        <>
          <h1>{article.title}</h1>
          <Card>
            <Card.Img variant="top" src={article.imageUrl} />
          </Card>
          <div className="mt-1 p-info">
            <p>{article.summary}</p>
          </div>
        </>
      )}
    </Container>
  );
};

export default DetailsPage;
