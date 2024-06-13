function consultaProdutos() {

  const reqGet = new Request('http://localhost:3000/produtos', {
      "method": "GET",     /*   Cria uma solicitação GET para obter uma lista de produtos de http://localhost:3000/produtos. */
      "headers": {
          "Content-type": "application/json"
      }
  });
    
  fetch(reqGet)     /* Envia a solicitação usando fetch. */
      .then(resposta => resposta.json())  /*   Quando a resposta chega, converte-a para JSON. */
      .then(resposta => {
  
          const ul = document.createElement('ul');    /*   Cria uma lista (ul) e para cada produto na resposta adiciona itens (li) para o ID */
  
          resposta.forEach(produto => {                                        /*   adiciona itens (li) para o ID */
              
              const liId = document.createElement('li');           
              liId.innerHTML = produto.id;                                      /* descrição e preço do produto. */
              
              const liDescricao = document.createElement('li');                               /*   . */
              liDescricao.innerHTML = produto.descricao;
    
              const liPreco = document.createElement('li');                                   /*   . */
              liPreco.innerHTML = produto.preco;
  
              ul.append(liId, liDescricao, liPreco);   /* Coloca as li dentro da ul */
          });
  
          document.body.appendChild(ul);    /*  pega a ul e add no body */
          
      });

}

const inputs = [
  { "type": "text", "id": "IdProduto", "label": "ID" },   /* Define o tipo do input , o  id e o for do label */
  { "type": "text", "id": "descricao", "label": "Descrição" },  
  { "type": "text", "id": "preco", "label": "Preço" },      /* const que virou JSON */
];

function criaDivForm(inputs) {

  const divForm = document.createElement('div'); /*  Cria a div que vai servir de section */
  divForm.classList.add('form');                                     /* . */
  
  inputs.forEach(produto => {
      const div = document.createElement('div');
      div.classList.add('controle-form');            /*  Cria um div para agrupar um campo de entrada e seu rótulo. */
  
      const i = document.createElement('input');
      i.type = produto.type;          /* Cria um campo de entrada (input) com o tipo e ID definidos no objeto. */
      i.id = produto.id;
  
      const l = document.createElement('label');
      l.htmlFor = produto.id;            /*  Cria um rótulo (label) para o campo de entrada. */
      l.innerHTML = produto.label;
  
      div.append(l, i);   /*Coloca as const "l" e "i" dentro da div*/
      divForm.append(div); /* Coloca a div dentro da divForm*/
  });

  return divForm;

}

const divForm = criaDivForm(inputs);

const btAdd = document.createElement('button');
btAdd.type = 'button';
btAdd.id = 'btAdd';                   /*    criando o botao e adicionando na divForm e dps adicionando no body */
btAdd.innerHTML = 'Adicionar';
divForm.append(btAdd);

document.body.append(divForm);

consultaProdutos();

const produto = {
  "descricao": document.querySelector('#descricao').value,     /* Pegando o valor dos inputs e label */
  "preco": document.querySelector('#preco').value
}

function cadastraProduto(produto) {

  const reqPost = new Request('http://localhost:3000/produtos', {
      "method": "POST",
      "headers": {
          "Content-type": "application/json"
      },
      "body": JSON.stringify(produto)  /*transformando as informações da const produto em JSON*/
  })
  
  fetch(reqPost)   /*Envia a solicitação usando fetch*/
}

document.querySelector('#btAdd').addEventListener('click', cadastraProduto(produtoPost)); 
