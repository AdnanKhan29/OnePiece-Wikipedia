import React, { useEffect, useState } from "react";
import Axios from "axios";
import {
  TextField,
  Button,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";

function SearchName() {
  const [fruitlist, setFruitlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCardDisplay, setShowCardDisplay] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get")
      .then((response) => {
        setFruitlist(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearch = () => {
    const filteredFruitList = fruitlist.filter((fruit) =>
      fruit.user.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredFruitList);
    setShowCardDisplay(true);
  };

  const renderCardDisplay = () => {
    if (showCardDisplay) {
      return (
        <div>
          {searchResults.map((val, index) => (
            <Card key={index} style={{ marginBottom: "16px" }}>
              <CardHeader title={val.user} subheader={val.type} />
              <CardContent>
                <p>Power: {val.power}</p>
                <p>Ability: {val.ability}</p>
                <p>User: {val.user}</p>
                <p>Info: {val.info}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      );
    }
    return null;
  };

  const clearSearchResults = () => {
    setSearchTerm(""); // Clear the search term
    setSearchResults([]); // Clear the search results
    setShowCardDisplay(false); // Hide the card display
  };

  return (
    <div>
      <TextField
        label="Search User"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={clearSearchResults}
      >
        Clear
      </Button>
      {renderCardDisplay()}
    </div>
  );
}

export default SearchName;
