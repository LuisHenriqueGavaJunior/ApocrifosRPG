import './Tecnico.css'

function Tecnico() {
  return (
    <div className="Tecnico">
      <a className='Linkcomsublinhado' href = "https://ordempendragon.files.wordpress.com/2017/04/dd-5e-livro-do-jogador-fundo-branco-biblioteca-c3a9lfica.pdf" target="_blank" >Livro do Jogador</a>
      
      <p/><a className='Linkcomsublinhado' href = "https://drive.google.com/file/d/1YcpCyReAyY1NJYvIX4uqA780FTteblhP/view" target="_blank" >Ficha</a>

      <h5>Atributos iniciais: 15, 14, 13, 12, 10 e 8 </h5>

      <h5>Tabela de conversão de atributos:</h5>

      <div><img src='https://i.imgur.com/0q4uhnt.png'/></div>

      <h6>Perícias extras da ficha:
Analisar terreno (CD 20): Como uma ação de movimento, você pode observar o campo de batalha. Se passar, descobre uma vantagem, como cobertura, camuflagem ou terreno elevado, se houver.

Acalmar (CD 15): Como uma ação, você pode dialogar ou fazer gestos para acalmar alguém que esteja sobre efeito de algum debuff causado por um fracasso em um teste de sanidade (como ansiedade, por exemplo)

Sorte: Imprevisibilidade extra sempre é bem-vinda.

Vontade: Você usa Vontade para resistir a efeitos mentais, como encantamentos e ilusões. A CD é determinada pelo efeito.

Sanidade: 
O que é: Cada personagem começa com uma quantidade de Sanidade igual ao resultado do seguinte cálculo: Modificador de Sabedoria X Nível Total X 6. Por exemplo, um personagem de 3º nível com modificador de Sabedoria +3 começaria com 54 Pontos de Sanidade (3 x 3 x 6).

Como funciona no sistema: 
Ansiedade (novo local ou indivíduo que causa medo): O personagem pode ficar inquieto, nervoso e desconfiado. Ele pode receber uma penalidade de -1 em testes de Sabedoria, Carisma ou Percepção.
Sempre perderá apenas 1 ponto de sanidade.

Amedrontado (combate): caso seja no início do combate, o indivíduo será o último a agir e receberá uma penalidade de -2 em testes de Sabedoria, Carisma ou Percepção. Caso o combate já tenha sido iniciado, o indivíduo perderá sua próxima rodada e também receberá uma penalidade de -2 em testes de Sabedoria, Carisma ou Percepção.

Fobia (aleatório): Caso o indivíduo perca 1/4 da sua sanidade em um único teste, o personagem desenvolve uma fobia específica relacionada ao evento aterrorizante. Ele pode ter desvantagens em testes e jogadas envolvendo sua fobia.
 </h6>

    </div>
  );
}

export default Tecnico;
