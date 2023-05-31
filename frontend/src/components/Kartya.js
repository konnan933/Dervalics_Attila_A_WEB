import { Typography } from "@mui/material";
import Valasz from "./Valaszok";

function Kartya({ teszt }) {
  return (
    <div className="flex content-center items-center mt-5 w-9/10 border border-black">
    <div className= "w-full">
      <Typography
        variant="h5"
        className="w-9/10 border-2 border-black rounded-lg"
        align="center"
      >
        {teszt.kerdes}
      </Typography>
      <div className="grid grid-cols-2 max-md:grid-cols-1 items-center content-center border ">
        <Valasz valasz={teszt.v1} helyesValasz={teszt.helyes} />
        <Valasz valasz={teszt.v2} helyesValasz={teszt.helyes} />
        <Valasz valasz={teszt.v3} helyesValasz={teszt.helyes} />
        <Valasz valasz={teszt.v4} helyesValasz={teszt.helyes} />
      </div>
      </div>
    </div>
  );
}
export default Kartya;
