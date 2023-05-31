import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import axios from "axios";

function KategoriaSelector({
  selectedKategoria,
  setSelectedKategoria,
  kategoriak,
  setTesztek,
}) {
  const getTesztek = async (id) => {
    axios
      .get("http://127.0.0.1:8000/tesztek/kategoria/" + id)
      .then((response) => {
        console.log(response.data);
        setTesztek(response.data);
      });
  };

  const handleChange = (event) => {
    setSelectedKategoria(event.target.value);
    getTesztek(event.target.value);
  };

  return (
    <FormControl className="w-2/5">
      <InputLabel>Kategória</InputLabel>
      <Select
        value={selectedKategoria.id}
        label="Kategória"
        onChange={handleChange}
      >
        {kategoriak.map((kategoria) => {
          return (
            <MenuItem key={kategoria.id} value={kategoria.id}>
              {kategoria.kategorianev}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default KategoriaSelector;
