import React, { useEffect } from "react";
import Sheet from "@mui/joy/Sheet";
import Table from "@mui/joy/Table";
import Button from "@mui/joy/Button";
import { Rating } from "@mui/material";

const API = "https://64b38fa90efb99d86267f28d.mockapi.io/news";

const TopNews = () => {
  const [data, setData] = React.useState([]);
  const [option, setOption] = React.useState("GET");
  const [id, setID] = React.useState();
  const [status, setStatus] = React.useState(null);
  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err.massage));
  }, []);

  React.useEffect(() => {
    fetch(`${API}/${id}`, { method: option })
      .then((res) => res.json())
      .then(() => setStatus(`${option} Successful`))
      .catch((err) => {
        setStatus(`${option} fail!!!`);
        console.log(err.message);
      });
  }, [option, id]);

  return (
    <div>
      <Sheet sx={{ height: "100vh", overflow: "auto", mt: 5, mb: 4 }}>
        {console.log(status)}
        <Table
          aria-label="table with sticky header"
          stickyHeader
          stickyFooter
          stripe="odd"
          hoverRow
          borderAxis="xBetwwen"
          sx={{ width: "80%", margin: "auto" }}
        >
          <thead>
            <tr>
              <th
                style={{
                  backgroundColor: "rgb(0, 89, 178)",
                  color: "white",
                  width: "5%",
                }}
              >
                ID
              </th>
              <th
                style={{
                  backgroundColor: "rgb(0, 89, 178)",
                  color: "white",
                  width: "20%",
                }}
              >
                Name
              </th>
              <th
                style={{
                  backgroundColor: "rgb(0, 89, 178)",
                  color: "white",
                  width: "7%",
                }}
              >
                Price
              </th>
              <th
                style={{
                  backgroundColor: "rgb(0, 89, 178)",
                  color: "white",
                  width: "20%",
                }}
              >
                Rating
              </th>
              <th
                style={{
                  backgroundColor: "rgb(0, 89, 178)",
                  color: "white",
                  width: "10%",
                }}
              >
                Best Seller
              </th>
              <th
                style={{ backgroundColor: "rgb(0, 89, 178)", color: "white" }}
              ></th>
              <th
                style={{ backgroundColor: "rgb(0, 89, 178)", color: "white" }}
              ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.price}</td>
                <td>
                  <Rating name="read-only" value={row.rating} readOnly />
                </td>
                <td>{row.bestseller}</td>
                <td>
                  <Button
                    variant="plain"
                    onClick={() => {
                      setOption("UPDATE");
                      setID(row.id);
                    }}
                  >
                    Upadte
                  </Button>
                </td>
                <td>
                  <Button
                    variant="plain"
                    onClick={() => {
                      setOption("DELETE");
                      setID(row.id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </div>
  );
};

export default TopNews;
