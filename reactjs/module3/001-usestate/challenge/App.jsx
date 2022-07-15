import React from 'react';
import Buttons from './Buttons';
import Products from './Products';


// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado


const App = () => {
  const links = [
    'https://ranekapi.origamid.dev/json/api/produto/tablet',
    'https://ranekapi.origamid.dev/json/api/produto/smartphone',
    'https://ranekapi.origamid.dev/json/api/produto/notebook',
  ]

  const [product, setProduct] = React.useState('');

  return (
    <>
      <Buttons links={links} product={product} setProduct={setProduct}/>
    </>
  )
}

export default App;