import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const classes = {
  boxContainer: {
    display: "flex",
    justifyContent: "center",
    pt: 16,
  },
  boxWrapper: {
    backgroundColor: "#cccccc",
    p: 3,
  },
  boxWhite: {
    width: "100%",
    height: 113,
    backgroundColor: "#ffffff",
    p: 1,
    mb: 2,
  },
  boxbuttonRow: {
    display: "flex",
    flexDirection: "row",
    gap: 1,
    mb: 1,
  },
};

function App() {
  const [operacion, setOperacion] = useState(null);
  const [numA, setNumA] = useState("");
  const [numB, setNumB] = useState("");
  const [resultado, setResultado] = useState("");

  const handleClickNum = (num) => () => {
    if (operacion) {
      setNumB(numB + num);
    } else {
      setNumA(numA + num);
    }
  };

  const handleClickOperacion = (nuevaOperacion) => () => {
    if (!operacion) {
      setOperacion(nuevaOperacion);
    }
  };

  const handleClickIgual = () => {
    if ((operacion, numA, numB)) {
      const a = parseFloat(numA);
      const b = parseFloat(numB);

      const operaciones = {
        "+": (a, b) => setResultado(a + b),
        "-": (a, b) => setResultado(a - b),
        x: (a, b) => setResultado(a * b),
        "/": (a, b) => setResultado(a / b),
        "%": (a, b) => setResultado((a * b) / 100),
      };

      operaciones[operacion](a, b);
    }
  };

  const handleClickPunto = () => {
    if (operacion) {
      if (!numB.includes(".")) setNumB(numB + ".");
    } else {
      if (!numA.includes(".")) setNumA(numA + ".");
    }
  };

  const handleClickBorrar = () => {
    setOperacion(null);
    setNumA("");
    setNumB("");
    setResultado("");
  };

  const handleClickMasMenos = () => {
    if (operacion) {
      if (numB.includes("-")) setNumB(numB.slice(1));
      else setNumB("-" + numB);
    } else {
      if (numA.includes("-")) setNumA(numA.slice(1));
      else setNumA("-" + numA);
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Calculadora
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={classes.boxContainer}>
        <Box sx={classes.boxWrapper}>
          <Box sx={classes.boxWhite}>
            {numA} {operacion} {numB} {resultado}
          </Box>
          <Box>
            <Box sx={classes.boxbuttonRow}>
              <Button onClick={handleClickBorrar} variant="contained">
                AC
              </Button>
              <Button onClick={handleClickMasMenos} variant="contained">
                +/-
              </Button>
              <Button onClick={handleClickOperacion("%")} variant="contained">
                %
              </Button>
              <Button onClick={handleClickOperacion("/")} variant="contained">
                /
              </Button>
            </Box>
            <Box sx={classes.boxbuttonRow}>
              <Button onClick={handleClickNum("7")} variant="contained">
                7
              </Button>
              <Button onClick={handleClickNum("8")} variant="contained">
                8
              </Button>
              <Button onClick={handleClickNum("9")} variant="contained">
                9
              </Button>
              <Button onClick={handleClickOperacion("x")} variant="contained">
                x
              </Button>
            </Box>
            <Box sx={classes.boxbuttonRow}>
              <Button onClick={handleClickNum("4")} variant="contained">
                4
              </Button>
              <Button onClick={handleClickNum("5")} variant="contained">
                5
              </Button>
              <Button onClick={handleClickNum("6")} variant="contained">
                6
              </Button>
              <Button onClick={handleClickOperacion("-")} variant="contained">
                -
              </Button>
            </Box>
            <Box sx={classes.boxbuttonRow}>
              <Button onClick={handleClickNum("1")} variant="contained">
                1
              </Button>
              <Button onClick={handleClickNum("2")} variant="contained">
                2
              </Button>
              <Button onClick={handleClickNum("3")} variant="contained">
                3
              </Button>
              <Button onClick={handleClickOperacion("+")} variant="contained">
                +
              </Button>
            </Box>
            <Box sx={classes.boxbuttonRow}>
              <Button
                onClick={handleClickNum("0")}
                variant="contained"
                sx={{ width: "100%" }}
              >
                0
              </Button>
              <Button onClick={handleClickPunto} variant="contained">
                .
              </Button>
              <Button onClick={handleClickIgual} variant="contained">
                =
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
