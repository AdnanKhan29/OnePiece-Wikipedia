import React, { useEffect, useState } from "react";
import Axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Card,
  CardContent,
  CardHeader,
  Button,
} from "@mui/material";

function SearchName() {
  const [fruitlist, setFruitlist] = useState([]);
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get")
      .then((response) => {
        setFruitlist(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleFruitClick = (fruit) => {
    setSelectedFruit(fruit);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedFruit(null);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Devil Fruit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fruitlist.map((fruit, index) => (
              <TableRow key={index}>
                <TableCell>
                  <a href="#" onClick={() => handleFruitClick(fruit)}>
                    {fruit.devilfruit}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>{selectedFruit && selectedFruit.devilfruit}</DialogTitle>
        <DialogContent>
          {selectedFruit && (
            <Card>
              <CardHeader
                title={selectedFruit.devilfruit}
                subheader={selectedFruit.type}
              />
              <CardContent>
                <p>Power: {selectedFruit.power}</p>
                <p>Ability: {selectedFruit.ability}</p>
                <p>User: {selectedFruit.user}</p>
                <p>Info: {selectedFruit.info}</p>
              </CardContent>
            </Card>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SearchName;
