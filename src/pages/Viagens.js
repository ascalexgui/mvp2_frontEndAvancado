// https://react.dev/reference/react/createContext
import { createContext, useEffect, useState } from "react"
import { Grid } from "@mui/material"
import SearchAppBar from "../components/MenuSearch.js"
import BarraInferior from "../components/BarraInferior.js"
import Item from "../components/Item.js"
import viagens from '../json/viagens.json'

// Criando um contexto com o nome Context (poderia ser outro) que poderá ser lido por toda a árvore de componentes filhos.
export const Context = createContext()

export default function Viagens() {
  const [viagemList, setViagemList] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    setViagemList(viagens.destinos)
  }, [])

  return (
    <div className="content-viagem">
      <header>
      </header>
      <SearchAppBar titulomenu="Viagens realizadas"/>

      <section className="main-viagens">
        <Context.Provider value={setCount}>
          {viagemList.map((p, index) => (
            <Item key={index} viagem={p} />
          ))}          
        </Context.Provider>
      </section>

      <div id="containerRodape"> 
            <p></p>
           <Grid><BarraInferior/></Grid>                
            <p></p>
      </div>            
      <p></p>
    </div>
  )
}
