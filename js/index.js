console.log('Começou!');
let preparacoesDiv = document.getElementById('preparacoes');
console.log(preparacoesDiv);

let preparacoes = [
  {
    imagem:
      'https://plus.unsplash.com/premium_photo-1674931348670-68936350ed55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    titulo: 'Café Expresso',
    descricao: 'Preparado em máquinas profissionais com muito amor e carinho.',
  },

  {
    imagem:
      'https://images.unsplash.com/photo-1444594975920-e69885b357d5?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    titulo: 'Café Expresso 2',
    descricao:
      'Preparado em máquinas profissionais com muito amor e carinho 2.',
  },
];

for (let preparacao of preparacoes) {
  insertPreparcaoCard(preparacao);
}

function insertPreparcaoCard(preparacao) {
  preparacoesDiv.insertAdjacentHTML('beforeend', getPreparacaoCard(preparacao));
}

function getPreparacaoCard(preparacao) {
  return ` <div class="col mt-3">
  <div class="card mx-auto" style="width: 18rem;">
    <img src="${preparacao.imagem}" class="card-img-top" alt="${preparacao.titulo}">
    <div class="card-body">
      <h5 class="card-title">${preparacao.titulo}</h5>
      <p class="card-text">${preparacao.descricao}</p>
      <a href="#" class="btn btn-primary">Comprar</a>
    </div>
  </div>
</div>`;
}

let preparacaoForm = document.getElementById('preparacaoForm');
preparacaoForm.onsubmit = (event) => {
  event.preventDefault();

  let tituloInput = document.getElementById('titulo');
  let descricaoInput = document.getElementById('descricao');
  let imagemInput = document.getElementById('imagem');

  let novaPreparacao = {
    titulo: tituloInput.value,
    descricao: descricaoInput.value,
    imagem: imagemInput.value,
  };

  preparacoes.push(novaPreparacao);
  insertPreparcaoCard(novaPreparacao);

  $('#preparacaoModal').modal('hide');
};
