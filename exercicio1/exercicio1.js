// Implemente uma função assíncrona chamada fetchProductData que:
// Simula a busca de dados de um produto com setTimeout (2 segundos de atraso).
// Retorna um objeto com as informações do produto, como { id: 101, nome: "Notebook", preco: 3500 }.
// Caso o ID do produto seja inválido (exemplo: menor que 1), a função deve lançar um erro.
// Use try/catch para chamar a função e tratar o erro.

// Exemplo de entrada:

// fetchProductData(101); // ID válido
// fetchProductData(-1); // ID inválido

// Saída esperada no console:

// { id: 101, nome: "Notebook", preco: 3500 }
// Erro: ID do produto inválido


async function fetchProductData(id){

    if (id < 0){
        console.log(
            "Erro: ID do produto inválido"
        );
        return
        
    }

    try{
        const produto = await fetch('produtos.json')
        const data = await produto.json()
        const produtos = data.produtos
        // console.log(produtos)
        const produtoProcurado = produtos.filter(produto => produto.id === id);
        console.log(produtoProcurado);
    }
    catch{
        console.log('Deu erro')
    }
}

setTimeout(() => fetchProductData(101), 4000);
