import './Tecnico.css'

function Tecnico() {
  return (
    <div className="Tecnico">
      <a className='Linkcomsublinhado' href = "https://ordempendragon.files.wordpress.com/2017/04/dd-5e-livro-do-jogador-fundo-branco-biblioteca-c3a9lfica.pdf" target="_blank" >Livro do Jogador</a>
      
      <p/><a className='Linkcomsublinhado' href = "https://drive.google.com/file/d/1Nxt1x_L_B7fOu5jLIKyHao4-6E1EfVa2/view?usp=sharing" target="_blank" >Ficha</a>

      <h5>Atributos iniciais: 15, 14, 13, 12, 10 e 8 </h5>

      <h5>Tabela de conversão de atributos:</h5>

      <div><img src='https://i.imgur.com/0q4uhnt.png'/></div>

     <section className='Periciasesan'>
      <h4 className='Periciastitulo'>Perícias extras da ficha:</h4>

      <h6 className='Pericias'>Acalmar (CD 15):</h6> <p><h6 className='Tecnicodesc'>Como uma ação, você pode dialogar ou fazer gestos para acalmar alguém que esteja sobre efeito de algum debuff causado por um fracasso em um teste de sanidade (como ansiedade, por exemplo)</h6></p>

      <p/><h6 className='Pericias'>Sorte:</h6> <h6 className='Tecnicodesc'> Imprevisibilidade extra sempre é bem-vinda.</h6>

      <p/><h6 className='Pericias'>Vontade:</h6> <h6 className='Tecnicodesc'> Você usa Vontade para resistir a efeitos mentais, como encantamentos e ilusões. A CD é determinada pelo efeito.</h6>

      <h4 className='Sanidadetitulo'>Sanidade: </h4>
      <h6>Quanto de Sanidade cada um começa: Cada personagem começa com uma quantidade de Sanidade igual ao resultado da rolagem de 10d10. O player poderá tentar novamente o número de vezes de seu modificador de sabedoria. Por exemplo, caso o player tenha +3 de sabedoria ele poderá realizar a rolagem mais 3 vezes, e ficar com o melhor resultado.</h6>
      
      <h5 className='Sanidadetitulo'>Como funciona no sistema: </h5>

      <h6 className='Sanidade'>-Ansiedade (novo local ou indivíduo que causa medo):</h6> <h6 className='Tecnicodesc'>O personagem pode ficar inquieto, nervoso e desconfiado. Ele pode receber uma penalidade de -1 em testes de Sabedoria, Carisma ou Percepção.
      Sempre perderá apenas 1 ponto de sanidade.</h6>

      <h6 className='Sanidade'>-Amedrontado (combate):</h6> <h6 className='Tecnicodesc'>caso seja no início do combate, o indivíduo será o último a agir e receberá uma penalidade de -2 em testes de Sabedoria, Carisma ou Percepção. Caso o combate já tenha sido iniciado, o indivíduo perderá sua próxima rodada e também receberá uma penalidade de -2 em testes de Sabedoria, Carisma ou Percepção.</h6>

      <h6 className='Sanidade'>-Fobia (aleatório):</h6> <h6 className='Tecnicodesc'> Caso o indivíduo perca 1/4 da sua sanidade em um único teste, o personagem desenvolve uma fobia específica relacionada ao evento aterrorizante. Ele pode ter desvantagens em testes e jogadas envolvendo sua fobia.</h6>
     </section>
    </div>
  );
}

export default Tecnico;
