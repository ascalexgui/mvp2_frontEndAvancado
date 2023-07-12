import { useNavigate } from 'react-router'
import DrawerAppBar from "../components/MenuPrincipal.js";
import icone01 from "../assets/MinhasViagens.jpg"
import icone02 from "../assets/NovaViagem.jpg"
import icone03 from "../assets/Fotos.jpg"
import menuviagem from "../assets/MenuViagem.jpg"
import BarraInferior from "../components/BarraInferior.js"



export default function Home() {
    const navigate = useNavigate()
    
    return (
        <div className="content-viagem">
            <header>
            </header>
            <DrawerAppBar/>
            <div className="text-intro">
                    <p>Suas viagens organizadas em um ÚNICO lugar</p>
            </div>
            
            <div id="containerMenu">
                <div id="ladoalado"><img src={icone01} alt="Viagens Realizadas" onClick={() => navigate('/viagens')} /><img src={icone02} alt="Nova viagem" /><img src={icone03} alt="Fotos viagens" /><img src={menuviagem} alt="Outras informações" /></div> 
            </div>

            <p></p>
            <p></p>
            <BarraInferior/>
        </div>
    )
}
