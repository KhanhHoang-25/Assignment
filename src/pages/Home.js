/* eslint-disable array-callback-return */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Stack from "@mui/joy/Stack";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Rating } from "@mui/material";
import "../styles/home.css";

const API = "https://64b38fa90efb99d86267f28d.mockapi.io/news";

const Home = () => {
  const [news, setNews] = useState([]);
  const [detail, setDetail] = useState(null);
  // eslint-disable-next-line no-unused-vars

  const handleOnClick = (data) => {
    setDetail(data);
  };

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.log(err.massage));
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <Stack
        width={"90vw"}
        direction={{ xs: "column", sm: "row" }}
        flexWrap="wrap"
        alignContent="space-between"
        justifyContent="space-evenly"
        spacing={{ xs: 1, sm: 2, md: 0 }}
        margin="auto"
        mt={4}
        mb={4}
        gap={3}
      >
        {news.map((data) => {
          {
            if (data.bestseller === true) {
              return (
                <>
                  <Card
                    key={data.id}
                    variant="outlined"
                    orientation="horizontal"
                    sx={{
                      width: 370,
                      "&:hover": {
                        boxShadow: "md",
                        borderColor: "neutral.outlinedHoverBorder",
                      },
                    }}
                  >
                    <AspectRatio ratio="1" sx={{ width: 90 }}>
                      <img
                        src={data.image}
                        srcSet={`${data.image} 20px`}
                        loading="lazy"
                        alt=""
                      />
                    </AspectRatio>
                    <CardContent>
                      <Typography
                        level="h2"
                        fontSize="lg"
                        id="card-description"
                        mb={0.5}
                      >
                        {data.name} - {data.price}
                      </Typography>
                      <Rating name="read-only" value={data.rating} readOnly />
                      <Typography
                        fontSize="sm"
                        aria-describedby="card-description"
                        mb={1}
                      >
                        <Link
                          // component={RouterLink}
                          overlay
                          underline="none"
                          onClick={() => {
                            handleOnClick(data);
                          }}
                          href="#detail"
                          key={data.id}
                          sx={{ color: "text.tertiary" }}
                        >
                          {data.category}
                        </Link>
                      </Typography>
                    </CardContent>
                  </Card>
                </>
              );
            }
          }
        })}
      </Stack>
      <div id="detail" className="overlay">
        {detail && (
          <>
            <div className="detail">
              <a className="close" href="#">
                &times;
              </a>
              <img src={detail.image} alt="" style={{ height: 130 }} />
              <h2>{detail.name}</h2>
              <h3 className="content">{detail.price}</h3>
              <div className="content">{detail.category}</div>

              <div className="content">{detail.description}</div>
              <Rating name="read-only" value={detail.rating} readOnly />
              <div className="content" style={{ color: "red" }}>
                BEST SELLER
              </div>
            </div>
          </>
        )}
      </div>{" "}
    </div>
  );
};

export default Home;
