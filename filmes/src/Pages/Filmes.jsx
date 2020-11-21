import filmes from '../Services/dados'
import '../Styles/Pages/filmes.css'

import Sidebar from '../Components/Sidebar'



const ListaInterna = ()=>{

    return(
        <>
        <Sidebar/>
            <div id= "container">            
                
                {filmes.map(filme=>{
                    return <div className="card" key={filme.id}>
                        <h3>Título: {filme.nome}</h3>
                        <p>Gênero: {filme.genero}</p>
                        <img src={filme.capa} alt="capa"/>
                    </div>
                })}             
            </div>
        </>
    )
}

export default ListaInterna