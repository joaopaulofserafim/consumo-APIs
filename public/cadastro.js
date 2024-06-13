const produtoPost = {
    "descricao": document.querySelector('#descricao').value,    /* Pegando o valor dos inputs e label */
    "preco": document.querySelector('#preco').value
}

function cadastraProduto(produtoPost) {

    const reqPost = new Request('http://localhost:3000/produtos', {
        "method": "POST",
        "headers": {
            "Content-type": "application/json"
        },
        "body": JSON.stringify(produtoPost)    /*transformando as informações da const produto em JSON*/
    })
    
    fetch(reqPost)   /*Envia a solicitação usando fetch*/
}

document.querySelector('#btAdd').addEventListener('click', cadastraProduto(produtoPost)); 

