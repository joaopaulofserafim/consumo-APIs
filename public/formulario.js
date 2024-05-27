// <button type="button" id="btAdd">Adicionar</button>
const btAdd = document.createElement('button');
btAdd.type = 'button';
btAdd.id = 'btAdd';
btAdd.innerHTML = "Adicionar";

const inputs = [
    { "type": "text", "id": "preco", "label": "Preço" },
    { "type": "text", "id": "descricao", "label": "Descrição" },
    { "type": "text", "id": "IdProduto", "label": "ID" }
];

function criaDivInsputs(inputs) {

    const divForm = document.createElement('div');
    divForm.classList.add('form')
    
    inputs.forEach((produto) => {
        const div = document.createElement('div');
        div.classList.add('controle-form');

        const i = document.createElement('input');
        i.type = produto.type;
        i.id = produto.id;
        i.placeholder = produto.label;

        // const l = document.createElement('label');
        // l.for = produto.id;
        // l.innerHTML = produto.label;

        div.append( i);
        divForm.append(div)
    });

    return divForm;
};

const divForm = criaDivInsputs(inputs);



divForm.append(btAdd)
document.body.append(divForm);