import "./App.css";
import { useState, useEffect } from "react";
import KategoriaSelector from "./components/KategoriaSelector";
import axios from "axios";
import Kartya from "./components/Kartya";
import { Typography } from "@mui/material";

function App() {
  const [tesztek, setTesztek] = useState();
  const [kategoriak, setKategoriak] = useState();
  const [joValaszok, setJoValaszok] = useState(0);
  const [selectedKategoria, setSelectedKategoria] = useState();

  const getTesztek = async () => {
    axios.get("http://127.0.0.1:8000/tesztek").then((response) => {
      setTesztek(response.data);
    });
  };

  const getKategoriak = async () => {
    axios.get("http://127.0.0.1:8000/kategoria").then((response) => {
      setKategoriak(response.data);
      setSelectedKategoria(response.data[0].id)
    });
  };

  useEffect(() => {
    getTesztek();
    getKategoriak();
  }, []);
  if (tesztek === undefined || kategoriak === undefined) {
    return "töltés...";
  }

  return (
    <div className="App mt-10">
      <KategoriaSelector
        kategoriak={kategoriak}
        selectedKategoria={selectedKategoria}
        setSelectedKategoria={setSelectedKategoria}
        setTesztek={setTesztek}
      />
      <div className="flex flex-col content-center items-center ">
        {tesztek.map((teszt) => {
          return <Kartya  key={teszt.id}teszt={teszt} setJoValaszok={setJoValaszok} joValaszok={joValaszok}/>;
        })}
      </div>
      <Typography variant="h6">Jó válaszok: {joValaszok}</Typography>
    </div>
  );
}

export default App;
