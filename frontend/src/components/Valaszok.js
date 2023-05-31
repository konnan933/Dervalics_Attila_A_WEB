import { Button, Typography } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";

function Valasz({ valasz, helyesValasz, setJoValaszok, joValaszok }) {
  const [jo, setJo] = useState(undefined);
  const [nemJo, setNemJo] = useState(undefined);

  const helyesE = () => {
    if (valasz === helyesValasz) {
      alert("Helyes");
      if (jo === undefined) {
        setJoValaszok((joValaszok += 1));
      }
      setJo(true);
      setNemJo(false);
    } else {
      alert("nem helyes");
      setNemJo(true);
      setJo(false);
    }
  };

  return (
    <>
      {(nemJo || jo) !== true && (
        <div
          className={`$ bg-white rounded-md border border-black w-4/5  mt-3  `}
        >
          <Button onClick={helyesE}>{valasz}</Button>
        </div>
      )}
      {nemJo && (
        <div
          className={`${
            nemJo && "bg-red-500"
          }  rounded-md border border-black w-4/5  mt-3  `}
        >
          <Button onClick={helyesE}>{valasz}</Button>
          {nemJo && <CloseIcon />}
        </div>
      )}
      {jo && (
        <div
          className={`${
            jo && "bg-green-500"
          }  rounded-md border border-black w-4/5  mt-3  `}
        >
          <Button onClick={helyesE}>{valasz}</Button>
          {jo && <DoneIcon />}
        </div>
      )}
    </>
  );
}
export default Valasz;
