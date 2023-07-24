import './Header.css'
import { Link } from 'react-router-dom'

function Header(){
  return(
   <div className='Header'>
    <div className='HContent'>
    <Link to="/"><img src ='https://i.imgur.com/YAAIYEc.png' className='HImg'/> </Link>
      <div className='HButtons'>
       <button className='HButton'><h1> <Link to="/sobre" className='Linksemsublinhado'>Sobre a CCG</Link> </h1></button>

       <div class="dropdown">
        <button className='HButton'><h1>Banco de dados</h1></button>
         <div class="dropdown-content">
          <nav>
           <Link to="/missoes">Missões</Link>
           <Link to="/racas">Raças</Link>
           <Link to="/locais">Locais</Link>
           <Link to="/personagens">Personagens</Link>
           <Link to="/conceitos">Conceitos</Link>
          </nav>
         </div>
       </div>

       <div class="dropdown">
        <button className='HButton'><h1>Arquivos</h1></button>
         <div class="dropdown-content">
          <nav>
           <Link to="/videos">Audiovisual</Link>
           <Link to="/mapas">Mapas</Link>
           <Link to="/artes">Artes</Link>
           <Link to="/tecnico">Técnico</Link>
          </nav>
         </div>
       </div>
      </div>
    </div>
   </div>
  )
}
export default Header