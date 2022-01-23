import React from "react";
// import './Content.css'

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <section className="content-container">
        {conteudos.map(({ conteudo, status, bloco }) => {
          return (
            <div key={conteudo} className="content">
              <h3>{`O conteúdo é: ${conteudo}`}</h3>
              <h4>{`Status: ${status}`}</h4>
              <h5>{`Bloco: ${bloco}`}</h5>
            </div>
          )
        })}
      </section>
    )
  }
}

export default Content;
