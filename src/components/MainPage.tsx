import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { singleArticle } from "../interfaces";
import SingleArticle from "./SingleArticle";

const MainPage = () => {
  const [articles, setArticles] = useState<singleArticle[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      console.log("RESPONSE", response);
      if (response.ok) {
        let data = await response.json();
        console.log("DATA", data);
        setArticles(data);
      } else {
        console.log("error from the server");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h1>All Things Spacey</h1>
      <Row>
        {articles.map((article) => (
          <SingleArticle article={article} key={article.id} />
        ))}
      </Row>
    </Container>
  );
};

export default MainPage;
