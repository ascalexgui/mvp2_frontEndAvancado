import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LuggageIcon from '@mui/icons-material/Luggage';
import Orcamento from '@mui/icons-material/Calculate';
import PasseiosLegais from '@mui/icons-material/ThumbUp';
import Negativo from '@mui/icons-material/ThumbDownAlt';
import Fotos from '@mui/icons-material/LinkedCamera';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 700, backgroundColor: "rgb(236, 235, 235)"}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Hotel" icon={<LocalHotelIcon/>} />
        <BottomNavigationAction label="Passagem aérea" icon={<FlightTakeoffIcon />} />
        <BottomNavigationAction label="CheckList bagagem" icon={<LuggageIcon />} />
        <BottomNavigationAction label="Orçamento" icon={<Orcamento />} />
        <BottomNavigationAction label="Pontos positivos" icon={<PasseiosLegais />} />
        <BottomNavigationAction label="Pontos Negativos" icon={<Negativo />} />
        <BottomNavigationAction label="Fotos" icon={<Fotos />} />


      </BottomNavigation>
    </Box>
  );
}