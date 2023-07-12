import { useLocation} from "react-router"
import SimpleBottomNavigation from "../components/Navigation.js";
import { Grid } from "@mui/material";
import SearchAppBar from "../components/MenuSearch.js"
import BarraInferior from "../components/BarraInferior.js"

export default function ViagemDetalhe(props) {
  let { state } = useLocation();
  console.log(useLocation())

  /* let { id } = useParams(); */

  /* const navigate = useNavigate() */
  const nomeViagem  = "Detalhamento da viagem"

  return (
    <div className="detailed-content">
      <header>
      </header>
      <SearchAppBar titulomenu={nomeViagem}/>
      <div>
        <div>
          <h2>{state.p.title}</h2>
        </div>
        <div>
          <img className="detailed-image" src={state.p.image} alt="" />
        </div>
        <div>
          <p>{state.p.description}</p>
        </div>
        <Grid
         container
         direction="row"
         justifyContent="center"
         alignItems="center"
         sx={{height: 100}}>
          <SimpleBottomNavigation/>
        </Grid>
      </div>
      <div id="containerRodape"> 
           <Grid><BarraInferior/></Grid>                
            <p></p>
      </div>  
    </div>
  )
}
