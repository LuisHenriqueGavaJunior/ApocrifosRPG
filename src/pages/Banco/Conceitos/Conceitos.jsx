import './Conceitos.css'

function Conceitos() {
  return (
    <div className="Conceitos">
     <div className='ConteudoConceitos'>
      <section className='Vida'> 
       <h2 className='Conceitosvida'>VIDA</h2>
        <h3 className='Cuidado'>(CUIDADO: UMA VEZ NESSE CAMINHO, NÃO HÁ VOLTA):</h3>
        Vontade Incontrolável De Assassinar, ou simplesmente VIDA, é uma força desconhecida pela maioria das pessoas. 
        Não se sabe sua origem, e nem quem a descobriu, apenas que todos a têm e que, ao morrer para alguém, a pessoa deixa sua VIDA para trás, e, dentro de um tempo limitado, o indivíduo que a matou pode pegar essa VIDA para si, e assim se fortalecer.
        A VIDA age como uma droga, se tornando um vício para seu usuário. Quanto mais VIDA ele pegar, mais ele vai querer.
        <p/>Requisitos: Ter conhecimento de sua existência e aceitá-la.
      </section>

      <section className='Espiritos'>
        <h2 className='Conceitosespiritos'>Espíritos:</h2>

        Seres feitos puramente de mana vindos do centro do mundo de Ravager. Os espíritos são divididos em 4 categorias: Espíritos Menores, Espíritos Maiores, Espíritos Artificiais e Grandes Espíritos.

        <h3 className='espacoconceitos'>Espíritos menores:</h3>
        Espíritos menores normalmente não possuem uma inteligência apurada, e sua consciência e corpo físico são extremamente limitados, se manifestando apenas como uma pequena esfera de energia mágica.

        <h3 className='espacoconceitos'>Espíritos maiores:</h3>
        Espíritos que evoluíram ao ponto de possuírem uma forma física melhor desenvolvida. Além de sua forma corpórea, Espíritos maiores possuem uma consciência equivalente a de uma “criatura inteligente” (como elfos, humanos etc), além de, obviamente, serem mais poderosos que os Espíritos menores.

        <h3 className='espacoconceitos'>Grandes Espíritos:</h3>
        Espíritos que ascenderam e se tornaram absurdamente poderosos, são classificados como os mais fortes dentre todos os espíritos.

        <h3 className='espacoconceitos'>Espíritos artificiais:</h3>
        Espíritos criados artificialmente por alguém. São poucos no mundo que sabem como criar um Espírito artificial. 
        Espíritos artificiais podem ser tanto Maiores como Menores (podem também ascender para Grande Espírito), tudo depende de quem o cria.
      </section>

      <section className='Contratos'>
        <h2 className='Conceitocontratos'>Acordos:</h2>
        Um acordo mágico entre dois ou mais indivíduos.
        <p/>A diferença entre um Contrato e um acordo formal é a consequência gerada com o descumprimento do mesmo. Ao quebrar um Contrato, o indivíduo que faltou com a palavra receberá uma consequência pré estabelecida pelos dois participantes.
        <p/>As condições de um Contrato são especificadas antes do acordo ser firmado, não podendo haver alterações a não ser que ambas as partes concordem em encerrá-lo e refazê-lo com novos termos.
        <p/>Para um Contrato ser quebrado, é necessário que ambas as partes concordem que o mesmo seja encerrado.
        <p/>Contratos se limitam apenas aos indivíduos nele inseridos, um terceiro não poderá ser afetado pelas condições do acordo firmado.

        <h3 className='espacoconceitos'>Exemplo de Contrato 1:</h3> Um troll realiza um Contrato com um gnomo, onde as condições são do troll proteger o gnomo da melhor forma possível, e caso o Contrato seja descumprido o troll queimará.

        <h3 className='espacoconceitos'>Exemplo de Contrato 2:</h3> Um espírito de fogo realiza um Juramento com um humano, onde nele o humano terá acesso a mana e algumas magias concedidas pelo espírito, em troca, o humano deverá tocar flauta para o espírito toda noite antes de dormir. Ambos firmaram que, em caso de descumprimento, nada aconteceria a nenhuma das partes.
      </section>

     </div>
    </div>
  );
}

export default Conceitos;
