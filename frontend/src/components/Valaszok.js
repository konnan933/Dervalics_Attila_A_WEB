import { Button, Typography } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";

function Valasz({ valasz, helyesValasz }) {
  const [jo, setJo] = useState(undefined);
  const [nemJo, setNemJo] = useState(undefined);

  const helyesE = () => {
    if (valasz === helyesValasz) {
      alert("Helyes");
      setJo(true);
      setNemJo(false);
    } else {
      alert("nem helyes");
      setNemJo(true);
      setJo(false);
    }
  };

  return (
    <div
      className={`${nemJo && "bg-red-500"} ${
        jo && "bg-green-500"
      }bg-white rounded-md border border-black w-4/5  mt-3  `}
    >
      <Button onClick={helyesE}>{valasz}</Button>
      {jo && <DoneIcon />} {nemJo && <CloseIcon />}
    </div>
  );
}
export default Valasz;
