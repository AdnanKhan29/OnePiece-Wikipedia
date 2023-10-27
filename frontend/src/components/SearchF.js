import React, { useEffect, useState } from "react";
import Axios from "axios";
import { TextField } from "@mui/material";
function SearchF() {
  const [fruitlist, setFruitlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get")
      .then((response) => {
        setFruitlist(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
  };

  const cellStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  const headerStyle = {
    backgroundColor: "#f2f2f2",
  };

  const filteredFruitList = fruitlist.filter((fruit) =>
    fruit.devilfruit.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <TextField
        label="Search Devil Fruit"
        variant="outlined"
        onChange={handleSearch}
      />
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...cellStyle, ...headerStyle }}>Devil Fruit</th>
            <th style={{ ...cellStyle, ...headerStyle }}>Type</th>
            <th style={cellStyle}>Power</th>
            <th style={cellStyle}>Ability</th>
            <th style={cellStyle}>User</th>
            <th style={cellStyle}>Info</th>
          </tr>
        </thead>
        <tbody>
          {filteredFruitList.map((val, index) => (
            <tr key={index}>
              <td style={cellStyle}>{val.devilfruit}</td>
              <td style={cellStyle}>{val.type}</td>
              <td style={cellStyle}>{val.power}</td>
              <td style={cellStyle}>{val.ability}</td>
              <td style={cellStyle}>{val.user}</td>
              <td style={cellStyle}>{val.info}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchF;
