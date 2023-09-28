const prompt = require('prompt-sync')();

class Produto {
  constructor(cod, descricao, valor, estoque) {
    this.cod = cod;
    this.descricao = descricao;
    this.valor = valor;
    this.estoque = estoque;
  }
}

class Cliente {
  constructor(numero, nome, email) {
    this.numero = numero;
    this.nome = nome;
    this.email = email;
  }
}

const produtos = [];
const clientes = [];

function cadastrarNovoProduto() {
  let cod = prompt('Digite o codigo do novo produto: ');
  let descricao = prompt('Digite a descrição do produto: ');
  let valor = parseFloat(prompt('Digite o preço: '));
  let estoque = parseInt(prompt('Digite o estoque: '));

  const produto = new Produto(cod, descricao, valor, estoque);
  produtos.push(produto);
  console.log("Produto cadastrado com sucesso!");
}

function cadastrarNovoCliente() {
  let numero = parseFloat(prompt('Digite o numero do cliente: '));
  let nome = prompt('Digite o nome do cliente: ');
  let email = prompt('Digite o email do cliente: ');

  const cliente = new Cliente(numero, nome, email);
  clientes.push(cliente);
  console.log("Cliente cadastrado com sucesso!");
}

function listarProdutos() {
  console.log("Lista de Produtos:");
  for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];
    console.log(`Código: ${produto.cod}, Descrição: ${produto.descricao}, Valor: ${produto.valor}, Estoque: ${produto.estoque}`);
  }
}

function listarClientes() {
  console.log("Lista de Clientes:");
  for (let i = 0; i < clientes.length; i++) {
    const cliente = clientes[i];
    console.log(`Número: ${cliente.numero}, Nome: ${cliente.nome}, Email: ${cliente.email}`);
  }
}

function menuPrincipal() {
  while (true) {
    console.log("Escolha uma opção:");
    console.log("1 - Cadastrar Produto");
    console.log("2 - Cadastrar Cliente");
    console.log("3 - Listar Produtos");
    console.log("4 - Listar Clientes");
    console.log("0 - Sair");

    let opcao = parseInt(prompt("Digite o número da opção:"));
    
    if (opcao === 1) {
      cadastrarNovoProduto();
    } else if (opcao === 2) {
      cadastrarNovoCliente();
    } else if (opcao === 3) {
      listarProdutos();
    } else if (opcao === 4) {
      listarClientes();
    } else if (opcao === 0) {
      console.log('Você escolheu sair.');
      break;
    } else {
      console.log('Opção inválida. Tente novamente.');
    }
  }
}

menuPrincipal();
