import Container from "react-bootstrap/esm/Container";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { singleArticle } from "../interfaces";

const DetailsPage = () => {
  const params = useParams();
  console.log(params.articleID);

  const [article, setArticle] = useState<singleArticle[]>([]);

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

  return <Container>{typeof article !== undefined && <h1>{}</h1>}</Container>;
};

export default DetailsPage;
