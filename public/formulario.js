
const btAdd = document.createElement('button');
btAdd.type = 'button';
btAdd.id = 'btAdd';          /*    criando o botao e adicionando na divForm */
btAdd.innerHTML = 'Adicionar';

const inputs = [
    { "type": "text", "id": "IdProduto", "label": "ID" },
    { "type": "text", "id": "descricao", "label": "Descrição" },   /* Define o tipo do input , o  id e o for do label */
    { "type": "text", "id": "preco", "label": "Preço" },    /* const que virou JSON */
];

function criaDivForm(inputs) {

    const divForm = document.createElement('div');  /*  Cria a div que vai servir de section */
    divForm.classList.add('form');
    
    inputs.forEach(produto => {
        const div = document.createElement('div');   /*  Cria um div para agrupar um campo de entrada e seu rótulo. */
        div.classList.add('controle-form');
    
        const i = document.createElement('input');
        i.type = produto.type;        /* Cria um campo de entrada (input) com o tipo e ID definidos no JSON. */
        i.id = produto.id;
    
        const l = document.createElement('label');
        l.htmlFor = produto.id;             /*  Cria um rótulo (label) para o campo de entrada. */
        l.innerHTML = produto.label;
    
        div.append(l, i);         /*Coloca as const "l" e "i" dentro da div*/
        divForm.append(div);   /* Coloca a div dentro da divForm*/
    });

    return divForm;

}

const divForm = criaDivForm(inputs);  // Chama a função criaDivForm com o array inputs e armazena o formulário retornado na variável divForm //

divForm.append(btAdd); //Adiciona o botão btAdd ao final do formulário (divForm).//

document.body.append(divForm);  //Adiciona o formulário (divForm) ao body).//
