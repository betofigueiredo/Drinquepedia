import type { Highlight } from '../types/highlight';

export const highlights: Array<Highlight> = [
  {
    id: '526397f6-bc9b-4bdb-9f9b-71ebf60583b8',
    oldId: 2,
    type: 'SPECIAL_OCCASION',
    title: 'ANO NOVO',
    subtitle:
      'Para comemorar a chegada do ano novo, nossa equipe separou deliciosos drinques com espumante para sua festa',
    description:
      'Para comemorar a chegada do ano novo, nossa equipe separou deliciosos drinques com espumante para sua festa.',
    drinks: [
      {
        id: '37647e05-9b6f-47a3-a2f5-f5ef11a37f7c',
        oldId: 35,
        name: 'Bellini',
        calories: 100,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Bellini é um coquetel refrescante muito apreciado por quem gosta de espumante. O suco de pêssego combina perfeitamente.',
        decoration: null,
        ingredients: [
          {
            order: 1,
            quantity: '22',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Pêssego gelado',
          },
          {
            order: 2,
            quantity: '90',
            unitOfMeasurement: 'ml',
            ingredientType: 'Espumante gelado',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Coloque o Suco de Pêssego na Taça Flute e depois adicione o Espumante',
          },
        ],
        categories: ['tropicais', 'classicos'],
        instructions: [],
      },
      {
        id: '48d5b56a-8234-4f90-b245-516a353d4a34',
        oldId: 140,
        name: 'Green Dragon',
        calories: 178,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Green Dragon é um coquetel simples, porém muito elegante. Sua coloração esverdeada o torna muito atraente, e seu sabor é suave e adocicado.',
        decoration: null,
        ingredients: [
          {
            order: 2,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Espumante gelado',
          },
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Melão',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description: 'Coloque o Licor de Melão em uma taça Flute',
          },
          {
            order: 2,
            description: 'Complete com o Espumante',
          },
        ],
        categories: [],
        instructions: [],
      },
      {
        id: '599b3943-6945-4ba4-ad8e-14a3b1d86fd3',
        oldId: 139,
        name: 'Campari Fizz',
        calories: 139,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Campari combina naturalmente com o suco de laranja. O Toque do espumante apenas complementa essa combinação perfeita, sem tirar o sabor inconfundível do Campari.',
        decoration: null,
        ingredients: [
          {
            order: 2,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Laranja',
          },
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Campari',
          },
          {
            order: 3,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Espumante gelado',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description: 'Coe para uma taça Flute',
          },
          {
            order: 3,
            description: 'Complete com o Espumante',
          },
          {
            order: 1,
            description:
              'Bata o Campari e o Suco de Laranja em uma coqueteleira com gelo',
          },
        ],
        categories: [],
        instructions: [],
      },
      {
        id: '74a11ed3-33bb-452c-9080-ac2014e8fc71',
        oldId: 240,
        name: 'Kir Royale',
        calories: 113,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'A combinação do espumante com o Creme de Cassis dá ao Kir Royale um sabor único. É um coquetel delicioso e muito suave, podendo ser tomado em qualquer ocasião.',
        decoration: null,
        ingredients: [
          {
            order: 2,
            quantity: '90',
            unitOfMeasurement: 'ml',
            ingredientType: 'Espumante gelado',
          },
          {
            order: 1,
            quantity: '7',
            unitOfMeasurement: 'ml',
            ingredientType: 'Creme de Cassis',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description: 'Adicione o Espumante',
          },
          {
            order: 1,
            description: 'Coloque o Creme de Cassis em uma taça Flute',
          },
        ],
        categories: ['classicos'],
        instructions: [],
      },
      {
        id: '918b25fb-bfcb-4848-9b97-420a8eb3f971',
        oldId: 239,
        name: 'Kir',
        calories: 99,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Kir é um coquetel delicioso. O Creme de Cassis dá um sabor mais suave e adocicado ao vinho branco.',
        decoration: null,
        ingredients: [
          {
            order: 1,
            quantity: '7',
            unitOfMeasurement: 'ml',
            ingredientType: 'Creme de Cassis',
          },
          {
            order: 2,
            quantity: '90',
            unitOfMeasurement: 'ml',
            ingredientType: 'Vinho Branco Seco (gelado)',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description: 'Coloque o Creme de Cassis em uma taça Flute',
          },
          {
            order: 2,
            description: 'Adicione o Vinho Branco',
          },
        ],
        categories: ['classicos'],
        instructions: [],
      },
      {
        id: '928e82d1-7d01-471c-ba69-d9162295a42d',
        oldId: 147,
        name: 'Royal Julep',
        calories: 159,
        alcoholicContent: 'MEDIUM',
        difficulty: 'EASY',
        description:
          'No Royal Julep o gosto do Whiskey se destaca. O sabor da hortelã aparece bem suave, porém é essencial para o coquetel.',
        decoration: null,
        ingredients: [
          {
            order: 4,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Espumante gelado',
          },
          {
            order: 3,
            quantity: '3',
            unitOfMeasurement: 'ramos',
            ingredientType: 'Hortelã',
          },
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Whiskey',
          },
          {
            order: 2,
            quantity: '1',
            unitOfMeasurement: 'torrão',
            ingredientType: 'Açúcar',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description: 'Coe para uma taça Flute gelada',
          },
          {
            order: 1,
            description:
              'Na coqueteleira, macere a hortelã com açúcar e 1/2 oz do Whiskey',
          },
          {
            order: 4,
            description: 'Complete com Espumante gelado',
          },
          {
            order: 3,
            description: 'Adicione o restante do Whiskey',
          },
        ],
        categories: [],
        instructions: [],
      },
      {
        id: 'e59edf15-763b-4801-920f-d9c8baa8e6fd',
        oldId: 136,
        name: 'James Bond',
        calories: 159,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'James Bond é um coquetel bem saboroso. O gosto da Vodca quase não aparece, se destacam mais o sabor do Espumante e o toque da Angostura no final.',
        decoration: null,
        ingredients: [
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Vodca gelada',
          },
          {
            order: 3,
            quantity: '1',
            unitOfMeasurement: 'torrão',
            ingredientType: 'Açúcar',
          },
          {
            order: 4,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Espumante gelado',
          },
          {
            order: 2,
            quantity: '2',
            unitOfMeasurement: 'splash',
            ingredientType: 'Angostura',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Umedeça o torrão de açúcar com a Agostura e coloque-o em uma taça Flute',
          },
          {
            order: 2,
            description: 'Adicione a Vodca e complete com o Espumante',
          },
        ],
        categories: [],
        instructions: [],
      },
      {
        id: 'ecf2b655-35f5-4e78-abab-b338c54f08c6',
        oldId: 34,
        name: 'Mimosa',
        calories: 214,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Mimosa é um coquetel refrescante e delicioso. O efeito efervescente dá um toque especial.',
        decoration: 'Triângulo de laranja para decorar',
        ingredients: [
          {
            order: 3,
            quantity: '120',
            unitOfMeasurement: 'ml',
            ingredientType: 'Espumante gelado',
          },
          {
            order: 2,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Laranja gelado',
          },
          {
            order: 1,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Triple Sec (Licor de laranja)',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description: 'Adicione o Espumante',
          },
          {
            order: 1,
            description:
              'Coloque o Suco de Laranja e o Triple Sec na taça Flute',
          },
        ],
        categories: ['tropicais', 'classicos'],
        instructions: [],
      },
    ],
  },
  {
    id: 'dbfb367e-990c-4bfd-9705-23253c74e68c',
    oldId: 7,
    type: 'GENERAL',
    title: 'BEST SHOTS',
    subtitle:
      'Selecionamos aqui alguns dos melhores Shots que temos em nosso site. Não deixe de experimentar. Com eles, sua festa nunca mais será a mesma!',
    description:
      'Selecionamos aqui alguns dos melhores Shots que temos em nosso site. Não deixe de experimentar. Com eles, sua festa nunca mais será a mesma!',
    drinks: [
      {
        id: '086ae0b2-65c6-4e0b-82aa-8e9da10762b1',
        oldId: 312,
        name: 'Black Cinnamon Apple',
        calories: 126,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Black Cinnamon Apple é um shot doce e saboroso. Nenhum sabor se destaca, todos formam uma ótima combinação.',
        decoration: null,
        ingredients: [
          {
            order: 1,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Creme de Cassis',
          },
          {
            order: 3,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Melão',
          },
          {
            order: 2,
            quantity: '7',
            unitOfMeasurement: 'ml',
            ingredientType: 'Goldschlager',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description: 'Coe para um copo de Shot',
          },
          {
            order: 1,
            description:
              'Bata todos os ingredientes em uma coqueteleira com gelo',
          },
        ],
        categories: ['shot'],
        instructions: [],
      },
      {
        id: '6806aadc-bdf8-4191-b4ed-ed80ef770ffb',
        oldId: 404,
        name: 'Red Headed Sister',
        calories: 183,
        alcoholicContent: 'MEDIUM',
        difficulty: 'EASY',
        description:
          'O Red Headed Sister é um shot delicioso. Bem cremoso e adocicado, a combinação dos ingredientes é perfeita.',
        decoration: null,
        ingredients: [
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Jägermeister',
          },
          {
            order: 3,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Cranberry',
          },
          {
            order: 2,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Pêssego',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Bata todos os ingredientes em uma coqueteleira com gelo',
          },
          {
            order: 2,
            description: 'Coe para um copo de Shot',
          },
        ],
        categories: ['shot'],
        instructions: [],
      },
      {
        id: '918dccca-bc32-4ef8-b31c-ff84c68f6553',
        oldId: 258,
        name: 'Safari',
        calories: 177,
        alcoholicContent: 'HIGH',
        difficulty: 'HARD',
        description:
          'O Safari é um shot bem gostoso. O gosto da Amarula se destaca e a Cachaça aparece bem suave.',
        decoration: null,
        ingredients: [
          {
            order: 3,
            quantity: '22',
            unitOfMeasurement: 'ml',
            ingredientType: 'Amaretto',
          },
          {
            order: 1,
            quantity: '22',
            unitOfMeasurement: 'ml',
            ingredientType: 'Cachaça envelhecida',
          },
          {
            order: 4,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Canela em pó e Açúcar para crustar',
          },
          {
            order: 2,
            quantity: '22',
            unitOfMeasurement: 'ml',
            ingredientType: 'Amarula',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Cruste um copo de shot com canela e açúcar (2 partes de canela para 1 de açúcar)',
          },
          {
            order: 2,
            description: 'Monte o coquetel direto no copo de shot crustado',
          },
        ],
        categories: ['shot'],
        instructions: [
          {
            id: '011ba134-03cc-4c25-9243-dcf309eab7c0',
            oldId: 5,
            title: 'Crustando a borda de uma taça',
            subtitle:
              'Crustar uma borda é um processo muito fácil. Aprenda aqui como fazer.',
            description:
              '<p class="p">Crustar uma borda é um processo muito fácil, mas que exige alguns cuidados. A crosta pode ser feita com sal ou açúcar, em qualquer tipo de taça ou copo, pois a técnica utilizada é a mesma. Veja abaixo algumas fotos que ensinam como crustar uma taça de coquetel com açúcar.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Como fazer</h3>\n\n<p class="p">Faça um corte no limão em forma de uma pequena meia-lua, como nas fotos abaixo:</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/5/01.jpg" /></p>\n\n<p class="p"><img class="image-border" src="/images/instructions/5/02.jpg" /></p>\n\n<p class="p">Encaixe o limão na taça e gire-a de forma que a borda fique toda umedecida:</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/5/03.jpg" /></p>\n\n<p class="p">Coloque açúcar em um prato, gire a borda externa da taça sobre ele e, ao mesmo, vá puxando-a delicadamente para trás. Desse modo, o açúcar gruda apenas do lado de fora da borda.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/5/04.jpg" /></p>\n\n<p class="p">Depois de crustada, a taça deve ficar como na foto abaixo. Lembre-se que um bom resultado depende de cuidado e prática.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/5/05.jpg" /></p>',
          },
        ],
      },
      {
        id: '970f8910-74e9-404a-b14b-94e314cbd7cf',
        oldId: 62,
        name: 'Brain Hemorrhage',
        calories: 219,
        alcoholicContent: 'LOW',
        difficulty: 'HARD',
        description:
          'O Brain Hemorrhage é um coquetel magnífico. Além de ser muito saboroso, ele é um dos mais bonitos e atraentes entre os "shots".',
        decoration: null,
        ingredients: [
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Pêssego',
          },
          {
            order: 2,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Bailey´s Irish Cream',
          },
          {
            order: 3,
            quantity: '1',
            unitOfMeasurement: 'splash',
            ingredientType: 'Grenadine para misturar',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Monte o coquetel em camadas no copo de Shot seguindo a ordem dos ingredientes',
          },
          {
            order: 2,
            description: 'Adicione o Grenadine no final',
          },
        ],
        categories: ['shot'],
        instructions: [
          {
            id: 'd9fd0cce-2315-4130-b72e-9b33d76e4db7',
            oldId: 4,
            title: 'Coquetel em camadas',
            subtitle:
              'Coquetéis em camadas são aqueles em que os ingredientes (bebidas) não se misturam durante o seu preparo. Veja aqui como são feitos.',
            description:
              '<p class="p">Para dividir um coquetel em camadas existem algumas regras básicas que devem ser seguidas. As bebidas devem ser adicionadas por ordem de densidade – quanto maior o teor alcoólico da bebida, menor é a sua densidade – sempre da mais densa para a menos densa. Geralmente, os licores são mais densos que os destilados, portanto devem ser adicionados primeiro. Elas também devem ser despejadas no copo sutilmente, com o auxílio de uma colher apropriada, para que não se misturem.</p>\n\n<p class="p">Existem coquetéis com diversas camadas e prepará-los exige muita habilidade. Portanto, procure treinar bastante a elaboração de coquetéis com poucas camadas, antes de partir para um número maior delas. A técnica será sempre a mesma, exigindo apenas muito treinamento.</p>\n\n<p class="p">As fotos abaixo mostram um exemplo prático de como preparar um coquetel com duas camadas. Observe e veja como é fácil.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Como fazer</h3>\n\n<p class="p">Em primeiro lugar, despeje no copo a bebida mais densa:</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/01.jpg" /></p>\n\n<p class="p">Em seguida, você vai precisar do auxílio de uma colher de bar (bailarina). Coloque-a de forma que sua ponta encoste no canto do copo e ao mesmo tempo na bebida que foi despejada primeiro, como na foto abaixo.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/02.jpg" /></p>\n\n<p class="p">Depois de acertar a posição da colher, despeje a próxima bebida sobre a mesma, bem suavemente.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/03.jpg" /></p>\n\n<p class="p">Observe que respeitando a densidade de cada bebida e a técnica ensinada, as bebidas não se misturam.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/04.jpg" /></p>\n\n<p class="p">Abaixo está o coquetel finalizado. Apesar de apresentar certo grau de dificuldade no seu preparo, o resultado final vale a pena por sua beleza.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/05.jpg" /></p>',
          },
        ],
      },
      {
        id: 'd1390961-4fd7-43a0-b76b-356997967aa4',
        oldId: 135,
        name: 'Sangrita',
        calories: 89,
        alcoholicContent: 'HIGH',
        difficulty: 'EASY',
        description:
          'A Sangrita é um shot muito exótico. A combinação dos ingedientes é perfeita.',
        decoration: null,
        ingredients: [
          {
            order: 3,
            quantity: '1',
            unitOfMeasurement: 'shot',
            ingredientType: 'Suco de Limão',
          },
          {
            order: 1,
            quantity: '1',
            unitOfMeasurement: 'shot',
            ingredientType: 'Suco de Tomate temperado a gosto',
          },
          {
            order: 2,
            quantity: '1',
            unitOfMeasurement: 'shot',
            ingredientType: 'Cachaça',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description: 'Coloque os ingredientes em três copos de shot',
          },
          {
            order: 2,
            description: 'Beba seguindo a ordem dos ingredientes',
          },
        ],
        categories: ['shot'],
        instructions: [],
      },
      {
        id: 'dd78c8d4-5804-43e5-866d-d5d9fd012c4d',
        oldId: 236,
        name: 'Coloso En Llamas',
        calories: 129,
        alcoholicContent: 'HIGH',
        difficulty: 'EASY',
        description:
          'O Coloso En Llamas é um shot bem forte. Ideal para quem procura alto teor alcoólico.',
        decoration: null,
        ingredients: [
          {
            order: 2,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Mix de Limão (Sweet and Sour)',
          },
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Absinto',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Bata os dois ingredientes em uma coqueteleira com gelo',
          },
          {
            order: 2,
            description: 'Coe para um copo de Shot',
          },
        ],
        categories: ['shot'],
        instructions: [
          {
            id: '0654b45a-8dde-4764-934b-d7fc74208a41',
            oldId: 1,
            title: 'Mixes - Modo de preparo',
            subtitle:
              'Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo.',
            description:
              '<p class="p">Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo. Estes mixes são feitos de frutas, leite e outros ingredientes, e na maioria das vezes são batidos no liquidificador.</p>\n<p class="p">Caso vá preparar mais de um mix, fique atento à ordem: é aconselhável preparar primeiro os que não contém leite condensado e creme de leite, ingredientes que sujam muito mais o liquidificador e requerem limpeza extra. Isto irá atrasar o seu trabalho.</p>\n<p class="p">Obs: As medidas utilizadas aqui são apenas exemplos. A quantidade que você vai usar dependerá do número de coquetéis a serem servidos.</p>\n<hr class="hr" />\n<h3 class="h3">Halk and Half</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Creme de leite</p>\n<p class="p">• 500 ml Leite</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de limão (Sweet and Sour)</h3>\n<p class="p">Um dos mixes mais utilizados no preparo de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 250 ml Limão espremido</p>\n<p class="p-no-margin">• 750 ml Água</p>\n<p class="p">• Aprox. 1 xícara de chá de Açúcar</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Côco</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Leite condensado</p>\n<p class="p">• 500 ml Leite de côco</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Morango</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 caixas de Morango</p>\n<p class="p">• Aprox. 50 ml Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os morangos no liquidificador e vá adicionando água até adquirir uma consistência um pouco mais líquida (cremosa)</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Pêssego</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p">• 1 lata de Pêssego em calda</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata o pêssego no liquidificador junto com a calda</p>\n<hr class="hr" />\n<h3 class="h3">Simple Syrup</h3>\n<p class="p">Utilizado em vários tipos de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 xícaras de chá de Açúcar</p>\n<p class="p">• 1 xícara de chá de Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Aqueça a água em uma panela no fogo baixo. Quando estiver quente adicione o açúcar e deixe-o dissolver. Remova a panela antes da água ferver e deixe-a esfriar até a temperatura ambiente. Depois ponha o líquido em um recipiente e armazene na geladeira.</p>',
          },
        ],
      },
      {
        id: 'f2c2e893-ec12-4f58-9634-2080ca6e66f3',
        oldId: 79,
        name: 'After Six',
        calories: 206,
        alcoholicContent: 'MEDIUM',
        difficulty: 'HARD',
        description:
          'O After Six é um shot delicioso. O Creme de menta se destaca mais, acompanhado do Bailey´s.',
        decoration: null,
        ingredients: [
          {
            order: 2,
            quantity: '20',
            unitOfMeasurement: 'ml',
            ingredientType: 'Creme de Menta verde',
          },
          {
            order: 3,
            quantity: '20',
            unitOfMeasurement: 'ml',
            ingredientType: 'Bailey´s Irish Cream',
          },
          {
            order: 1,
            quantity: '20',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Café',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Monte o coquetel em camadas no copo de Shot seguindo a ordem dos ingredientes',
          },
        ],
        categories: ['shot'],
        instructions: [
          {
            id: 'd9fd0cce-2315-4130-b72e-9b33d76e4db7',
            oldId: 4,
            title: 'Coquetel em camadas',
            subtitle:
              'Coquetéis em camadas são aqueles em que os ingredientes (bebidas) não se misturam durante o seu preparo. Veja aqui como são feitos.',
            description:
              '<p class="p">Para dividir um coquetel em camadas existem algumas regras básicas que devem ser seguidas. As bebidas devem ser adicionadas por ordem de densidade – quanto maior o teor alcoólico da bebida, menor é a sua densidade – sempre da mais densa para a menos densa. Geralmente, os licores são mais densos que os destilados, portanto devem ser adicionados primeiro. Elas também devem ser despejadas no copo sutilmente, com o auxílio de uma colher apropriada, para que não se misturem.</p>\n\n<p class="p">Existem coquetéis com diversas camadas e prepará-los exige muita habilidade. Portanto, procure treinar bastante a elaboração de coquetéis com poucas camadas, antes de partir para um número maior delas. A técnica será sempre a mesma, exigindo apenas muito treinamento.</p>\n\n<p class="p">As fotos abaixo mostram um exemplo prático de como preparar um coquetel com duas camadas. Observe e veja como é fácil.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Como fazer</h3>\n\n<p class="p">Em primeiro lugar, despeje no copo a bebida mais densa:</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/01.jpg" /></p>\n\n<p class="p">Em seguida, você vai precisar do auxílio de uma colher de bar (bailarina). Coloque-a de forma que sua ponta encoste no canto do copo e ao mesmo tempo na bebida que foi despejada primeiro, como na foto abaixo.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/02.jpg" /></p>\n\n<p class="p">Depois de acertar a posição da colher, despeje a próxima bebida sobre a mesma, bem suavemente.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/03.jpg" /></p>\n\n<p class="p">Observe que respeitando a densidade de cada bebida e a técnica ensinada, as bebidas não se misturam.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/04.jpg" /></p>\n\n<p class="p">Abaixo está o coquetel finalizado. Apesar de apresentar certo grau de dificuldade no seu preparo, o resultado final vale a pena por sua beleza.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/05.jpg" /></p>',
          },
        ],
      },
      {
        id: 'fad89a00-2d37-47fd-856d-4b12b04a06a2',
        oldId: 324,
        name: 'Piece Of Heaven',
        calories: 121,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Piece of Heaven é um coquetel muito saboroso. O leite o deixa bem cremoso.',
        decoration: null,
        ingredients: [
          {
            order: 1,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Goldschlager',
          },
          {
            order: 3,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Leite',
          },
          {
            order: 2,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Café',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Bata todos os ingredientes em uma coqueteleira com gelo',
          },
          {
            order: 2,
            description: 'Coe para um copo de Shot',
          },
        ],
        categories: ['shot'],
        instructions: [],
      },
    ],
  },
  {
    id: '91676391-3eb6-43ed-96d3-4b47477dd7f3',
    oldId: 5,
    type: 'GENERAL',
    title: 'DIA DO SORVETE',
    subtitle:
      'Em homenagem ao Dia do Sorvete, separamos nossos melhores drinques feitos com esse ingrediente maravilhoso.',
    description:
      'Desde 2002 o dia 23 de setembro não é mais somente o início da primavera: é o Dia do Sorvete. Essa celebração, instituída pela ABIS – Associação Brasileira das Indústrias de Sorvete – é comemorada justamente para marcar o início das temperaturas mais quentes do ano no país, época em que normalmente se acentua o consumo de sorvetes no Brasil. Por isso, separamos para vocês nossos melhores drinques que usam sorvete em sua receita. Divirta-se!',
    drinks: [
      {
        id: '1d4cc177-319c-40b3-9c78-648949d88b7f',
        oldId: 329,
        name: 'Oxidado',
        calories: 530,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Oxidado é um coquetel delicoso. O gosto do Whiskey aparece, porém seu sabor é bem suave.',
        decoration: 'Chantilly e Bolacha para decorar',
        ingredients: [
          {
            order: 4,
            quantity: '2',
            unitOfMeasurement: null,
            ingredientType: 'bolachas Negresco',
          },
          {
            order: 3,
            quantity: '2',
            unitOfMeasurement: 'bolas',
            ingredientType: 'Sorvete de Creme',
          },
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Whiskey',
          },
          {
            order: 2,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Amarula',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Bata todos os ingredientes no liquidificador com 1 ou 2 pás de gelo até adquirir uma textura cremosa',
          },
          {
            order: 2,
            description: 'Coe para um copo Hurricane ou outro de sua escolha',
          },
        ],
        categories: ['frozen', 'tropicais'],
        instructions: [],
      },
      {
        id: '687e05ed-a745-45f2-b288-6c14574bbf27',
        oldId: 331,
        name: 'Frozen Alexander',
        calories: 219,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Frozen Alexander é um coquetel gostoso. O sabor do Brandy aparece bem suave.',
        decoration: null,
        ingredients: [
          {
            order: 4,
            quantity: '2',
            unitOfMeasurement: 'bolas',
            ingredientType: 'Sorvete de Creme',
          },
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Brandy (Conhaque)',
          },
          {
            order: 2,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Creme de Cacau',
          },
          {
            order: 3,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Half and Half',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Bata todos os ingredientes no liquidificador com 1 ou 2 pás de gelo até adquirir uma textura cremosa',
          },
          {
            order: 2,
            description: 'Coe para um copo Hurricane ou outro de sua escolha',
          },
        ],
        categories: ['frozen', 'tropicais'],
        instructions: [
          {
            id: '0654b45a-8dde-4764-934b-d7fc74208a41',
            oldId: 1,
            title: 'Mixes - Modo de preparo',
            subtitle:
              'Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo.',
            description:
              '<p class="p">Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo. Estes mixes são feitos de frutas, leite e outros ingredientes, e na maioria das vezes são batidos no liquidificador.</p>\n<p class="p">Caso vá preparar mais de um mix, fique atento à ordem: é aconselhável preparar primeiro os que não contém leite condensado e creme de leite, ingredientes que sujam muito mais o liquidificador e requerem limpeza extra. Isto irá atrasar o seu trabalho.</p>\n<p class="p">Obs: As medidas utilizadas aqui são apenas exemplos. A quantidade que você vai usar dependerá do número de coquetéis a serem servidos.</p>\n<hr class="hr" />\n<h3 class="h3">Halk and Half</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Creme de leite</p>\n<p class="p">• 500 ml Leite</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de limão (Sweet and Sour)</h3>\n<p class="p">Um dos mixes mais utilizados no preparo de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 250 ml Limão espremido</p>\n<p class="p-no-margin">• 750 ml Água</p>\n<p class="p">• Aprox. 1 xícara de chá de Açúcar</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Côco</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Leite condensado</p>\n<p class="p">• 500 ml Leite de côco</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Morango</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 caixas de Morango</p>\n<p class="p">• Aprox. 50 ml Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os morangos no liquidificador e vá adicionando água até adquirir uma consistência um pouco mais líquida (cremosa)</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Pêssego</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p">• 1 lata de Pêssego em calda</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata o pêssego no liquidificador junto com a calda</p>\n<hr class="hr" />\n<h3 class="h3">Simple Syrup</h3>\n<p class="p">Utilizado em vários tipos de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 xícaras de chá de Açúcar</p>\n<p class="p">• 1 xícara de chá de Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Aqueça a água em uma panela no fogo baixo. Quando estiver quente adicione o açúcar e deixe-o dissolver. Remova a panela antes da água ferver e deixe-a esfriar até a temperatura ambiente. Depois ponha o líquido em um recipiente e armazene na geladeira.</p>',
          },
        ],
      },
      {
        id: '8cfda4c1-3418-47ca-be9c-e9b61ec3b937',
        oldId: 338,
        name: 'Chocolate Explosion',
        calories: 465,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Chocolate Explosion é um coquetel delicioso. Como seu nome sugere, seu sabor é todo a base de chocolate.',
        decoration: 'Chantilly e Chocolate ralado para decorar',
        ingredients: [
          {
            order: 6,
            quantity: '1',
            unitOfMeasurement: null,
            ingredientType: 'bolacha Negresco',
          },
          {
            order: 5,
            quantity: '2',
            unitOfMeasurement: null,
            ingredientType: 'Bis',
          },
          {
            order: 4,
            quantity: '2',
            unitOfMeasurement: 'bolas',
            ingredientType: 'Sorvete de Creme',
          },
          {
            order: 2,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Amarula',
          },
          {
            order: 1,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Vodca',
          },
          {
            order: 3,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Chocolate',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Bata todos os ingredientes no liquidificador com 1 ou 2 pás de gelo até adquirir uma textura cremosa',
          },
          {
            order: 2,
            description: 'Coe para um copo Hurricane ou outro de sua escolha',
          },
        ],
        categories: ['frozen', 'tropicais'],
        instructions: [],
      },
      {
        id: 'acf2cf14-3821-4547-b039-c9ede306ff30',
        oldId: 328,
        name: 'Rolling Stones',
        calories: 655,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Rolling Stones é um coquetel maravilhoso e pouco alcoólico. O sabor do Malibu aparece bem suave, o&nbsp;bombom e sorvete de creme aparecem mais.',
        decoration: 'Chantilly e Morango para decorar',
        ingredients: [
          {
            order: 4,
            quantity: '1',
            unitOfMeasurement: null,
            ingredientType: 'bombom Sonho de Valsa',
          },
          {
            order: 2,
            quantity: '60',
            unitOfMeasurement: 'ml',
            ingredientType: 'Mix de Morango',
          },
          {
            order: 3,
            quantity: '2',
            unitOfMeasurement: 'bolas',
            ingredientType: 'Sorvete de Creme',
          },
          {
            order: 1,
            quantity: '60',
            unitOfMeasurement: 'ml',
            ingredientType: 'Malibu',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Bata todos os ingredientes no liquidificador com 1 ou 2 pás de gelo até adquirir uma textura cremosa',
          },
          {
            order: 2,
            description: 'Coe para um copo Hurricane ou outro de sua escolha',
          },
        ],
        categories: ['frozen', 'tropicais'],
        instructions: [
          {
            id: '0654b45a-8dde-4764-934b-d7fc74208a41',
            oldId: 1,
            title: 'Mixes - Modo de preparo',
            subtitle:
              'Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo.',
            description:
              '<p class="p">Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo. Estes mixes são feitos de frutas, leite e outros ingredientes, e na maioria das vezes são batidos no liquidificador.</p>\n<p class="p">Caso vá preparar mais de um mix, fique atento à ordem: é aconselhável preparar primeiro os que não contém leite condensado e creme de leite, ingredientes que sujam muito mais o liquidificador e requerem limpeza extra. Isto irá atrasar o seu trabalho.</p>\n<p class="p">Obs: As medidas utilizadas aqui são apenas exemplos. A quantidade que você vai usar dependerá do número de coquetéis a serem servidos.</p>\n<hr class="hr" />\n<h3 class="h3">Halk and Half</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Creme de leite</p>\n<p class="p">• 500 ml Leite</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de limão (Sweet and Sour)</h3>\n<p class="p">Um dos mixes mais utilizados no preparo de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 250 ml Limão espremido</p>\n<p class="p-no-margin">• 750 ml Água</p>\n<p class="p">• Aprox. 1 xícara de chá de Açúcar</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Côco</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Leite condensado</p>\n<p class="p">• 500 ml Leite de côco</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Morango</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 caixas de Morango</p>\n<p class="p">• Aprox. 50 ml Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os morangos no liquidificador e vá adicionando água até adquirir uma consistência um pouco mais líquida (cremosa)</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Pêssego</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p">• 1 lata de Pêssego em calda</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata o pêssego no liquidificador junto com a calda</p>\n<hr class="hr" />\n<h3 class="h3">Simple Syrup</h3>\n<p class="p">Utilizado em vários tipos de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 xícaras de chá de Açúcar</p>\n<p class="p">• 1 xícara de chá de Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Aqueça a água em uma panela no fogo baixo. Quando estiver quente adicione o açúcar e deixe-o dissolver. Remova a panela antes da água ferver e deixe-a esfriar até a temperatura ambiente. Depois ponha o líquido em um recipiente e armazene na geladeira.</p>',
          },
        ],
      },
      {
        id: 'c7c38543-2a0d-496f-ba04-3384ca1a6e10',
        oldId: 332,
        name: 'Peach Bull',
        calories: 461,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Peach Bull é um coquetel saborosíssimo. O gosto pêssego é bem marcante.',
        decoration: null,
        ingredients: [
          {
            order: 5,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Lances de Grenadine',
          },
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Vodca',
          },
          {
            order: 3,
            quantity: '60',
            unitOfMeasurement: 'ml',
            ingredientType: 'Mix de Pêssego',
          },
          {
            order: 2,
            quantity: '37',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Pêssego',
          },
          {
            order: 4,
            quantity: '2',
            unitOfMeasurement: 'bolas',
            ingredientType: 'Sorvete de Creme',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description: 'Coloque o Grenadine na parede do copo',
          },
          {
            order: 3,
            description: 'Coe para o copo Hurricane ou outro de sua escolha',
          },
          {
            order: 1,
            description:
              'Bata todos os ingredientes no liquidificador com 1 ou 2 pás de gelo até adquirir uma textura cremosa',
          },
        ],
        categories: ['frozen', 'tropicais'],
        instructions: [
          {
            id: '0654b45a-8dde-4764-934b-d7fc74208a41',
            oldId: 1,
            title: 'Mixes - Modo de preparo',
            subtitle:
              'Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo.',
            description:
              '<p class="p">Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo. Estes mixes são feitos de frutas, leite e outros ingredientes, e na maioria das vezes são batidos no liquidificador.</p>\n<p class="p">Caso vá preparar mais de um mix, fique atento à ordem: é aconselhável preparar primeiro os que não contém leite condensado e creme de leite, ingredientes que sujam muito mais o liquidificador e requerem limpeza extra. Isto irá atrasar o seu trabalho.</p>\n<p class="p">Obs: As medidas utilizadas aqui são apenas exemplos. A quantidade que você vai usar dependerá do número de coquetéis a serem servidos.</p>\n<hr class="hr" />\n<h3 class="h3">Halk and Half</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Creme de leite</p>\n<p class="p">• 500 ml Leite</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de limão (Sweet and Sour)</h3>\n<p class="p">Um dos mixes mais utilizados no preparo de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 250 ml Limão espremido</p>\n<p class="p-no-margin">• 750 ml Água</p>\n<p class="p">• Aprox. 1 xícara de chá de Açúcar</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Côco</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Leite condensado</p>\n<p class="p">• 500 ml Leite de côco</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Morango</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 caixas de Morango</p>\n<p class="p">• Aprox. 50 ml Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os morangos no liquidificador e vá adicionando água até adquirir uma consistência um pouco mais líquida (cremosa)</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Pêssego</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p">• 1 lata de Pêssego em calda</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata o pêssego no liquidificador junto com a calda</p>\n<hr class="hr" />\n<h3 class="h3">Simple Syrup</h3>\n<p class="p">Utilizado em vários tipos de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 xícaras de chá de Açúcar</p>\n<p class="p">• 1 xícara de chá de Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Aqueça a água em uma panela no fogo baixo. Quando estiver quente adicione o açúcar e deixe-o dissolver. Remova a panela antes da água ferver e deixe-a esfriar até a temperatura ambiente. Depois ponha o líquido em um recipiente e armazene na geladeira.</p>',
          },
        ],
      },
      {
        id: 'cac25925-de9c-4a73-a739-be1d71cc9694',
        oldId: 330,
        name: 'Almond Joey',
        calories: 504,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Almond Joey é um coquetel muito saboroso. O Amaretto se destaca e combina muito bem com o sorvete de creme.',
        decoration: null,
        ingredients: [
          {
            order: 4,
            quantity: '2',
            unitOfMeasurement: 'bolas',
            ingredientType: 'Sorvete de Creme',
          },
          {
            order: 2,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Mix de Côco',
          },
          {
            order: 3,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Chocolate',
          },
          {
            order: 1,
            quantity: '37',
            unitOfMeasurement: 'ml',
            ingredientType: 'Amaretto',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description: 'Coe para um copo Hurricane ou outro de sua escolha',
          },
          {
            order: 1,
            description:
              'Bata todos os ingredientes no liquidificador com 1 ou 2 pás de gelo até adquirir uma textura cremosa',
          },
        ],
        categories: ['frozen', 'tropicais'],
        instructions: [
          {
            id: '0654b45a-8dde-4764-934b-d7fc74208a41',
            oldId: 1,
            title: 'Mixes - Modo de preparo',
            subtitle:
              'Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo.',
            description:
              '<p class="p">Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo. Estes mixes são feitos de frutas, leite e outros ingredientes, e na maioria das vezes são batidos no liquidificador.</p>\n<p class="p">Caso vá preparar mais de um mix, fique atento à ordem: é aconselhável preparar primeiro os que não contém leite condensado e creme de leite, ingredientes que sujam muito mais o liquidificador e requerem limpeza extra. Isto irá atrasar o seu trabalho.</p>\n<p class="p">Obs: As medidas utilizadas aqui são apenas exemplos. A quantidade que você vai usar dependerá do número de coquetéis a serem servidos.</p>\n<hr class="hr" />\n<h3 class="h3">Halk and Half</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Creme de leite</p>\n<p class="p">• 500 ml Leite</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de limão (Sweet and Sour)</h3>\n<p class="p">Um dos mixes mais utilizados no preparo de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 250 ml Limão espremido</p>\n<p class="p-no-margin">• 750 ml Água</p>\n<p class="p">• Aprox. 1 xícara de chá de Açúcar</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Côco</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Leite condensado</p>\n<p class="p">• 500 ml Leite de côco</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Morango</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 caixas de Morango</p>\n<p class="p">• Aprox. 50 ml Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os morangos no liquidificador e vá adicionando água até adquirir uma consistência um pouco mais líquida (cremosa)</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Pêssego</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p">• 1 lata de Pêssego em calda</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata o pêssego no liquidificador junto com a calda</p>\n<hr class="hr" />\n<h3 class="h3">Simple Syrup</h3>\n<p class="p">Utilizado em vários tipos de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 xícaras de chá de Açúcar</p>\n<p class="p">• 1 xícara de chá de Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Aqueça a água em uma panela no fogo baixo. Quando estiver quente adicione o açúcar e deixe-o dissolver. Remova a panela antes da água ferver e deixe-a esfriar até a temperatura ambiente. Depois ponha o líquido em um recipiente e armazene na geladeira.</p>',
          },
        ],
      },
      {
        id: 'd161fdfe-f139-4b22-b1fc-0cc8992ed929',
        oldId: 333,
        name: 'Barnamint Baileys',
        calories: 675,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Barnamint Baileys é um coquetel delicioso. A combinação da menta com o chocolate é fantástica.',
        decoration: 'Cobertura de chocolate, Chantilly e Bolacha para decorar',
        ingredients: [
          {
            order: 3,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Half and Half',
          },
          {
            order: 4,
            quantity: '2',
            unitOfMeasurement: 'bolas',
            ingredientType: 'Sorvete de Creme',
          },
          {
            order: 2,
            quantity: '22',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Menta',
          },
          {
            order: 5,
            quantity: '2',
            unitOfMeasurement: null,
            ingredientType: 'bolachas Negresco',
          },
          {
            order: 1,
            quantity: '45',
            unitOfMeasurement: 'ml',
            ingredientType: 'Bailey´s Irish Cream',
          },
        ],
        preparationSteps: [
          {
            order: 3,
            description: 'Coe para o copo Hurricane ou outro de sua escolha',
          },
          {
            order: 2,
            description: 'Coloque a cobertura de chocolate na parede do copo',
          },
          {
            order: 4,
            description: 'Decore com o Chantilly e a Bolacha',
          },
          {
            order: 1,
            description:
              'Bata todos os ingredientes no liquidificador com 1 ou 2 pás de gelo até adquirir uma textura cremosa',
          },
        ],
        categories: ['frozen', 'tropicais'],
        instructions: [
          {
            id: '0654b45a-8dde-4764-934b-d7fc74208a41',
            oldId: 1,
            title: 'Mixes - Modo de preparo',
            subtitle:
              'Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo.',
            description:
              '<p class="p">Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo. Estes mixes são feitos de frutas, leite e outros ingredientes, e na maioria das vezes são batidos no liquidificador.</p>\n<p class="p">Caso vá preparar mais de um mix, fique atento à ordem: é aconselhável preparar primeiro os que não contém leite condensado e creme de leite, ingredientes que sujam muito mais o liquidificador e requerem limpeza extra. Isto irá atrasar o seu trabalho.</p>\n<p class="p">Obs: As medidas utilizadas aqui são apenas exemplos. A quantidade que você vai usar dependerá do número de coquetéis a serem servidos.</p>\n<hr class="hr" />\n<h3 class="h3">Halk and Half</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Creme de leite</p>\n<p class="p">• 500 ml Leite</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de limão (Sweet and Sour)</h3>\n<p class="p">Um dos mixes mais utilizados no preparo de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 250 ml Limão espremido</p>\n<p class="p-no-margin">• 750 ml Água</p>\n<p class="p">• Aprox. 1 xícara de chá de Açúcar</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Côco</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Leite condensado</p>\n<p class="p">• 500 ml Leite de côco</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Morango</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 caixas de Morango</p>\n<p class="p">• Aprox. 50 ml Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os morangos no liquidificador e vá adicionando água até adquirir uma consistência um pouco mais líquida (cremosa)</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Pêssego</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p">• 1 lata de Pêssego em calda</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata o pêssego no liquidificador junto com a calda</p>\n<hr class="hr" />\n<h3 class="h3">Simple Syrup</h3>\n<p class="p">Utilizado em vários tipos de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 xícaras de chá de Açúcar</p>\n<p class="p">• 1 xícara de chá de Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Aqueça a água em uma panela no fogo baixo. Quando estiver quente adicione o açúcar e deixe-o dissolver. Remova a panela antes da água ferver e deixe-a esfriar até a temperatura ambiente. Depois ponha o líquido em um recipiente e armazene na geladeira.</p>',
          },
        ],
      },
      {
        id: 'd27ad9eb-f7df-4508-aa4b-0e7c2befc075',
        oldId: 334,
        name: 'Moosemilk',
        calories: 459,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Moosemilk é o coquetel ideal para os amantes de café. Os morangos dão um leve toque, mas o gosto dominante é o do café.',
        decoration: '3 Morangos (1 para decorar)',
        ingredients: [
          {
            order: 2,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Rum Escuro',
          },
          {
            order: 4,
            quantity: '2',
            unitOfMeasurement: 'bolas',
            ingredientType: 'Sorvete de Creme',
          },
          {
            order: 3,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Café',
          },
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Rum Branco',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description: 'Coe para o copo Hurricane ou outro de sua escolha',
          },
          {
            order: 3,
            description: 'Decore com o morango',
          },
          {
            order: 1,
            description:
              'Bata todos os ingredientes no liquidificador com 1 ou 2 pás de gelo até adquirir uma textura cremosa',
          },
        ],
        categories: ['frozen', 'tropicais'],
        instructions: [],
      },
    ],
  },
  {
    id: 'bf2982bc-5e26-424f-b805-457af2911200',
    oldId: 9,
    type: 'GENERAL',
    title: 'DRINQUES EM CAMADAS',
    subtitle:
      'Aqui a imagem faz toda a diferença! Aprenda já como separar vários ingredientes em camadas e veja também ótimas receitas',
    description:
      'Aqui a imagem faz toda a diferença! Aprenda já como separar vários ingredientes em camadas e veja também ótimas receitas para você aperfeiçoar a técnica.',
    drinks: [
      {
        id: '36281408-c76a-4358-8ad4-c5a394628bb0',
        oldId: 92,
        name: 'Detox',
        calories: 176,
        alcoholicContent: 'MEDIUM',
        difficulty: 'HARD',
        description:
          'O Detox é um coquetel muito atraente. O gosto do Cranberry é bem suave e o Licor de pêssego se destaca bastante.',
        decoration: null,
        ingredients: [
          {
            order: 3,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Vodca',
          },
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Pêssego',
          },
          {
            order: 2,
            quantity: '10',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Cranberry',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Monte o coquetel em camadas no copo de Shot seguindo a ordem dos ingredientes',
          },
        ],
        categories: ['shot'],
        instructions: [
          {
            id: 'd9fd0cce-2315-4130-b72e-9b33d76e4db7',
            oldId: 4,
            title: 'Coquetel em camadas',
            subtitle:
              'Coquetéis em camadas são aqueles em que os ingredientes (bebidas) não se misturam durante o seu preparo. Veja aqui como são feitos.',
            description:
              '<p class="p">Para dividir um coquetel em camadas existem algumas regras básicas que devem ser seguidas. As bebidas devem ser adicionadas por ordem de densidade – quanto maior o teor alcoólico da bebida, menor é a sua densidade – sempre da mais densa para a menos densa. Geralmente, os licores são mais densos que os destilados, portanto devem ser adicionados primeiro. Elas também devem ser despejadas no copo sutilmente, com o auxílio de uma colher apropriada, para que não se misturem.</p>\n\n<p class="p">Existem coquetéis com diversas camadas e prepará-los exige muita habilidade. Portanto, procure treinar bastante a elaboração de coquetéis com poucas camadas, antes de partir para um número maior delas. A técnica será sempre a mesma, exigindo apenas muito treinamento.</p>\n\n<p class="p">As fotos abaixo mostram um exemplo prático de como preparar um coquetel com duas camadas. Observe e veja como é fácil.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Como fazer</h3>\n\n<p class="p">Em primeiro lugar, despeje no copo a bebida mais densa:</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/01.jpg" /></p>\n\n<p class="p">Em seguida, você vai precisar do auxílio de uma colher de bar (bailarina). Coloque-a de forma que sua ponta encoste no canto do copo e ao mesmo tempo na bebida que foi despejada primeiro, como na foto abaixo.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/02.jpg" /></p>\n\n<p class="p">Depois de acertar a posição da colher, despeje a próxima bebida sobre a mesma, bem suavemente.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/03.jpg" /></p>\n\n<p class="p">Observe que respeitando a densidade de cada bebida e a técnica ensinada, as bebidas não se misturam.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/04.jpg" /></p>\n\n<p class="p">Abaixo está o coquetel finalizado. Apesar de apresentar certo grau de dificuldade no seu preparo, o resultado final vale a pena por sua beleza.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/05.jpg" /></p>',
          },
        ],
      },
      {
        id: '3958fc2a-f7dd-484d-9895-10e0ea8253db',
        oldId: 77,
        name: 'Bmw',
        calories: 186,
        alcoholicContent: 'HIGH',
        difficulty: 'HARD',
        description:
          'O Bmw é um shot bem saboroso. O Whiskey não é tão notado no sabor, os que se destacam mais são o Bailey´s e o Malibu.',
        decoration: null,
        ingredients: [
          {
            order: 1,
            quantity: '20',
            unitOfMeasurement: 'ml',
            ingredientType: 'Malibu',
          },
          {
            order: 3,
            quantity: '20',
            unitOfMeasurement: 'ml',
            ingredientType: 'Whiskey',
          },
          {
            order: 2,
            quantity: '20',
            unitOfMeasurement: 'ml',
            ingredientType: 'Bailey´s Irish Cream',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Monte o coquetel em camadas no copo de Shot seguindo a ordem dos ingredientes',
          },
        ],
        categories: ['shot'],
        instructions: [
          {
            id: 'd9fd0cce-2315-4130-b72e-9b33d76e4db7',
            oldId: 4,
            title: 'Coquetel em camadas',
            subtitle:
              'Coquetéis em camadas são aqueles em que os ingredientes (bebidas) não se misturam durante o seu preparo. Veja aqui como são feitos.',
            description:
              '<p class="p">Para dividir um coquetel em camadas existem algumas regras básicas que devem ser seguidas. As bebidas devem ser adicionadas por ordem de densidade – quanto maior o teor alcoólico da bebida, menor é a sua densidade – sempre da mais densa para a menos densa. Geralmente, os licores são mais densos que os destilados, portanto devem ser adicionados primeiro. Elas também devem ser despejadas no copo sutilmente, com o auxílio de uma colher apropriada, para que não se misturem.</p>\n\n<p class="p">Existem coquetéis com diversas camadas e prepará-los exige muita habilidade. Portanto, procure treinar bastante a elaboração de coquetéis com poucas camadas, antes de partir para um número maior delas. A técnica será sempre a mesma, exigindo apenas muito treinamento.</p>\n\n<p class="p">As fotos abaixo mostram um exemplo prático de como preparar um coquetel com duas camadas. Observe e veja como é fácil.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Como fazer</h3>\n\n<p class="p">Em primeiro lugar, despeje no copo a bebida mais densa:</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/01.jpg" /></p>\n\n<p class="p">Em seguida, você vai precisar do auxílio de uma colher de bar (bailarina). Coloque-a de forma que sua ponta encoste no canto do copo e ao mesmo tempo na bebida que foi despejada primeiro, como na foto abaixo.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/02.jpg" /></p>\n\n<p class="p">Depois de acertar a posição da colher, despeje a próxima bebida sobre a mesma, bem suavemente.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/03.jpg" /></p>\n\n<p class="p">Observe que respeitando a densidade de cada bebida e a técnica ensinada, as bebidas não se misturam.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/04.jpg" /></p>\n\n<p class="p">Abaixo está o coquetel finalizado. Apesar de apresentar certo grau de dificuldade no seu preparo, o resultado final vale a pena por sua beleza.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/05.jpg" /></p>',
          },
        ],
      },
      {
        id: '4589a3b6-6ff1-499a-99a6-ed9e81068ba4',
        oldId: 310,
        name: 'Brain Eraser',
        calories: 278,
        alcoholicContent: 'HIGH',
        difficulty: 'HARD',
        description:
          'O Brain Eraser é um shot muito forte. O gosto do café e do Goldschlager se destacam.',
        decoration: null,
        ingredients: [
          {
            order: 2,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Goldschlager',
          },
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Café',
          },
          {
            order: 3,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Vodca',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Monte o coquetel em camadas em um copo de Shot, seguindo a ordem dos ingredientes',
          },
          {
            order: 2,
            description:
              'Coloque cuidadosamente, pelo canto do copo, um canudo até o fundo e beba rapidamente',
          },
        ],
        categories: ['shot'],
        instructions: [
          {
            id: 'd9fd0cce-2315-4130-b72e-9b33d76e4db7',
            oldId: 4,
            title: 'Coquetel em camadas',
            subtitle:
              'Coquetéis em camadas são aqueles em que os ingredientes (bebidas) não se misturam durante o seu preparo. Veja aqui como são feitos.',
            description:
              '<p class="p">Para dividir um coquetel em camadas existem algumas regras básicas que devem ser seguidas. As bebidas devem ser adicionadas por ordem de densidade – quanto maior o teor alcoólico da bebida, menor é a sua densidade – sempre da mais densa para a menos densa. Geralmente, os licores são mais densos que os destilados, portanto devem ser adicionados primeiro. Elas também devem ser despejadas no copo sutilmente, com o auxílio de uma colher apropriada, para que não se misturem.</p>\n\n<p class="p">Existem coquetéis com diversas camadas e prepará-los exige muita habilidade. Portanto, procure treinar bastante a elaboração de coquetéis com poucas camadas, antes de partir para um número maior delas. A técnica será sempre a mesma, exigindo apenas muito treinamento.</p>\n\n<p class="p">As fotos abaixo mostram um exemplo prático de como preparar um coquetel com duas camadas. Observe e veja como é fácil.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Como fazer</h3>\n\n<p class="p">Em primeiro lugar, despeje no copo a bebida mais densa:</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/01.jpg" /></p>\n\n<p class="p">Em seguida, você vai precisar do auxílio de uma colher de bar (bailarina). Coloque-a de forma que sua ponta encoste no canto do copo e ao mesmo tempo na bebida que foi despejada primeiro, como na foto abaixo.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/02.jpg" /></p>\n\n<p class="p">Depois de acertar a posição da colher, despeje a próxima bebida sobre a mesma, bem suavemente.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/03.jpg" /></p>\n\n<p class="p">Observe que respeitando a densidade de cada bebida e a técnica ensinada, as bebidas não se misturam.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/04.jpg" /></p>\n\n<p class="p">Abaixo está o coquetel finalizado. Apesar de apresentar certo grau de dificuldade no seu preparo, o resultado final vale a pena por sua beleza.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/05.jpg" /></p>',
          },
        ],
      },
      {
        id: '970f8910-74e9-404a-b14b-94e314cbd7cf',
        oldId: 62,
        name: 'Brain Hemorrhage',
        calories: 219,
        alcoholicContent: 'LOW',
        difficulty: 'HARD',
        description:
          'O Brain Hemorrhage é um coquetel magnífico. Além de ser muito saboroso, ele é um dos mais bonitos e atraentes entre os "shots".',
        decoration: null,
        ingredients: [
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Pêssego',
          },
          {
            order: 2,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Bailey´s Irish Cream',
          },
          {
            order: 3,
            quantity: '1',
            unitOfMeasurement: 'splash',
            ingredientType: 'Grenadine para misturar',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Monte o coquetel em camadas no copo de Shot seguindo a ordem dos ingredientes',
          },
          {
            order: 2,
            description: 'Adicione o Grenadine no final',
          },
        ],
        categories: ['shot'],
        instructions: [
          {
            id: 'd9fd0cce-2315-4130-b72e-9b33d76e4db7',
            oldId: 4,
            title: 'Coquetel em camadas',
            subtitle:
              'Coquetéis em camadas são aqueles em que os ingredientes (bebidas) não se misturam durante o seu preparo. Veja aqui como são feitos.',
            description:
              '<p class="p">Para dividir um coquetel em camadas existem algumas regras básicas que devem ser seguidas. As bebidas devem ser adicionadas por ordem de densidade – quanto maior o teor alcoólico da bebida, menor é a sua densidade – sempre da mais densa para a menos densa. Geralmente, os licores são mais densos que os destilados, portanto devem ser adicionados primeiro. Elas também devem ser despejadas no copo sutilmente, com o auxílio de uma colher apropriada, para que não se misturem.</p>\n\n<p class="p">Existem coquetéis com diversas camadas e prepará-los exige muita habilidade. Portanto, procure treinar bastante a elaboração de coquetéis com poucas camadas, antes de partir para um número maior delas. A técnica será sempre a mesma, exigindo apenas muito treinamento.</p>\n\n<p class="p">As fotos abaixo mostram um exemplo prático de como preparar um coquetel com duas camadas. Observe e veja como é fácil.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Como fazer</h3>\n\n<p class="p">Em primeiro lugar, despeje no copo a bebida mais densa:</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/01.jpg" /></p>\n\n<p class="p">Em seguida, você vai precisar do auxílio de uma colher de bar (bailarina). Coloque-a de forma que sua ponta encoste no canto do copo e ao mesmo tempo na bebida que foi despejada primeiro, como na foto abaixo.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/02.jpg" /></p>\n\n<p class="p">Depois de acertar a posição da colher, despeje a próxima bebida sobre a mesma, bem suavemente.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/03.jpg" /></p>\n\n<p class="p">Observe que respeitando a densidade de cada bebida e a técnica ensinada, as bebidas não se misturam.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/04.jpg" /></p>\n\n<p class="p">Abaixo está o coquetel finalizado. Apesar de apresentar certo grau de dificuldade no seu preparo, o resultado final vale a pena por sua beleza.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/05.jpg" /></p>',
          },
        ],
      },
      {
        id: 'bfd22185-fbec-4e09-a2a7-f03e66bb744b',
        oldId: 247,
        name: 'Falling Star',
        calories: 180,
        alcoholicContent: 'HIGH',
        difficulty: 'EASY',
        description:
          'O Falling Star possui teor alcoólico elevado. Seu sabor é forte e adocicado.',
        decoration: null,
        ingredients: [
          {
            order: 1,
            quantity: '37',
            unitOfMeasurement: 'ml',
            ingredientType: 'Sambuca Branca',
          },
          {
            order: 2,
            quantity: '22',
            unitOfMeasurement: 'ml',
            ingredientType: 'Bourbon (Whiskey)',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description: 'Coloque a Sambuca em um copo de Shot',
          },
          {
            order: 2,
            description:
              'Adicione o Bourbon cuidadosamente para que ele não misture completamente com a Sambuca',
          },
        ],
        categories: ['shot'],
        instructions: [],
      },
      {
        id: 'd216e3b5-c48e-4fcd-9a37-653a14b4d9f3',
        oldId: 80,
        name: 'Baby Guinness',
        calories: 206,
        alcoholicContent: 'LOW',
        difficulty: 'HARD',
        description:
          'O Baby Guinness é um shot muito saboroso. O Licor de café combinado com o Bailey´s lembram o gosto de Capuccino.',
        decoration: null,
        ingredients: [
          {
            order: 1,
            quantity: '40',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Café',
          },
          {
            order: 2,
            quantity: '20',
            unitOfMeasurement: 'ml',
            ingredientType: 'Bailey´s Irish Cream',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Monte o coquetel em camadas no copo de Shot seguindo a ordem dos ingredientes',
          },
        ],
        categories: ['shot'],
        instructions: [
          {
            id: 'd9fd0cce-2315-4130-b72e-9b33d76e4db7',
            oldId: 4,
            title: 'Coquetel em camadas',
            subtitle:
              'Coquetéis em camadas são aqueles em que os ingredientes (bebidas) não se misturam durante o seu preparo. Veja aqui como são feitos.',
            description:
              '<p class="p">Para dividir um coquetel em camadas existem algumas regras básicas que devem ser seguidas. As bebidas devem ser adicionadas por ordem de densidade – quanto maior o teor alcoólico da bebida, menor é a sua densidade – sempre da mais densa para a menos densa. Geralmente, os licores são mais densos que os destilados, portanto devem ser adicionados primeiro. Elas também devem ser despejadas no copo sutilmente, com o auxílio de uma colher apropriada, para que não se misturem.</p>\n\n<p class="p">Existem coquetéis com diversas camadas e prepará-los exige muita habilidade. Portanto, procure treinar bastante a elaboração de coquetéis com poucas camadas, antes de partir para um número maior delas. A técnica será sempre a mesma, exigindo apenas muito treinamento.</p>\n\n<p class="p">As fotos abaixo mostram um exemplo prático de como preparar um coquetel com duas camadas. Observe e veja como é fácil.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Como fazer</h3>\n\n<p class="p">Em primeiro lugar, despeje no copo a bebida mais densa:</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/01.jpg" /></p>\n\n<p class="p">Em seguida, você vai precisar do auxílio de uma colher de bar (bailarina). Coloque-a de forma que sua ponta encoste no canto do copo e ao mesmo tempo na bebida que foi despejada primeiro, como na foto abaixo.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/02.jpg" /></p>\n\n<p class="p">Depois de acertar a posição da colher, despeje a próxima bebida sobre a mesma, bem suavemente.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/03.jpg" /></p>\n\n<p class="p">Observe que respeitando a densidade de cada bebida e a técnica ensinada, as bebidas não se misturam.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/04.jpg" /></p>\n\n<p class="p">Abaixo está o coquetel finalizado. Apesar de apresentar certo grau de dificuldade no seu preparo, o resultado final vale a pena por sua beleza.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/05.jpg" /></p>',
          },
        ],
      },
      {
        id: 'e23fc33f-3cdb-4dbc-86d9-d5e4f2064137',
        oldId: 206,
        name: 'Moranguito',
        calories: 180,
        alcoholicContent: 'HIGH',
        difficulty: 'EASY',
        description:
          'O Moranguito é um shot forte. O gosto do Absinto se destaca e o Grenadine adocica o coquetel.',
        decoration: null,
        ingredients: [
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Absinto',
          },
          {
            order: 2,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Tequila Prata',
          },
          {
            order: 3,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Grenadine',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description: 'de shot',
          },
          {
            order: 1,
            description: 'Coloque o Absinto e a Tequila em um copo',
          },
          {
            order: 3,
            description: 'Adicione o Grenadine por último',
          },
        ],
        categories: ['shot'],
        instructions: [],
      },
      {
        id: 'f2c2e893-ec12-4f58-9634-2080ca6e66f3',
        oldId: 79,
        name: 'After Six',
        calories: 206,
        alcoholicContent: 'MEDIUM',
        difficulty: 'HARD',
        description:
          'O After Six é um shot delicioso. O Creme de menta se destaca mais, acompanhado do Bailey´s.',
        decoration: null,
        ingredients: [
          {
            order: 2,
            quantity: '20',
            unitOfMeasurement: 'ml',
            ingredientType: 'Creme de Menta verde',
          },
          {
            order: 3,
            quantity: '20',
            unitOfMeasurement: 'ml',
            ingredientType: 'Bailey´s Irish Cream',
          },
          {
            order: 1,
            quantity: '20',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Café',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Monte o coquetel em camadas no copo de Shot seguindo a ordem dos ingredientes',
          },
        ],
        categories: ['shot'],
        instructions: [
          {
            id: 'd9fd0cce-2315-4130-b72e-9b33d76e4db7',
            oldId: 4,
            title: 'Coquetel em camadas',
            subtitle:
              'Coquetéis em camadas são aqueles em que os ingredientes (bebidas) não se misturam durante o seu preparo. Veja aqui como são feitos.',
            description:
              '<p class="p">Para dividir um coquetel em camadas existem algumas regras básicas que devem ser seguidas. As bebidas devem ser adicionadas por ordem de densidade – quanto maior o teor alcoólico da bebida, menor é a sua densidade – sempre da mais densa para a menos densa. Geralmente, os licores são mais densos que os destilados, portanto devem ser adicionados primeiro. Elas também devem ser despejadas no copo sutilmente, com o auxílio de uma colher apropriada, para que não se misturem.</p>\n\n<p class="p">Existem coquetéis com diversas camadas e prepará-los exige muita habilidade. Portanto, procure treinar bastante a elaboração de coquetéis com poucas camadas, antes de partir para um número maior delas. A técnica será sempre a mesma, exigindo apenas muito treinamento.</p>\n\n<p class="p">As fotos abaixo mostram um exemplo prático de como preparar um coquetel com duas camadas. Observe e veja como é fácil.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Como fazer</h3>\n\n<p class="p">Em primeiro lugar, despeje no copo a bebida mais densa:</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/01.jpg" /></p>\n\n<p class="p">Em seguida, você vai precisar do auxílio de uma colher de bar (bailarina). Coloque-a de forma que sua ponta encoste no canto do copo e ao mesmo tempo na bebida que foi despejada primeiro, como na foto abaixo.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/02.jpg" /></p>\n\n<p class="p">Depois de acertar a posição da colher, despeje a próxima bebida sobre a mesma, bem suavemente.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/03.jpg" /></p>\n\n<p class="p">Observe que respeitando a densidade de cada bebida e a técnica ensinada, as bebidas não se misturam.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/04.jpg" /></p>\n\n<p class="p">Abaixo está o coquetel finalizado. Apesar de apresentar certo grau de dificuldade no seu preparo, o resultado final vale a pena por sua beleza.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/05.jpg" /></p>',
          },
        ],
      },
    ],
  },
  {
    id: 'b86d1b22-55bc-410f-97fd-d19b24805fa7',
    oldId: 10,
    type: 'GENERAL',
    title: 'DRINQUES QUENTES',
    subtitle:
      'O frio chegou! Por isso separamos nossos melhores coquetéis para esquentar vocês nos dias mais frios. Aproveitem!',
    description:
      'O frio chegou! É época de apreciar aquele café delicioso e um bom chocolate quente com os amigos. Por isso separamos nossos melhores coquetéis para esquentar vocês nos dias mais frios. Alguns deles dão um pouco mais de trabalho, mas o resultado com certeza vale a pena. Aproveitem!',
    drinks: [
      {
        id: '0086266c-2087-404a-b6fa-1b06a6655cef',
        oldId: 174,
        name: 'Choconhaque',
        calories: 491,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Choconhaque é um coquetel magnífico. O seu sabor é delicioso e ideal para ser tomado a beira da lareira.',
        decoration: null,
        ingredients: [
          {
            order: 4,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Canela em pó',
          },
          {
            order: 1,
            quantity: '60',
            unitOfMeasurement: 'ml',
            ingredientType: 'Brandy (Conhaque)',
          },
          {
            order: 5,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Noz-moscada em pó',
          },
          {
            order: 3,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Chantilly',
          },
          {
            order: 2,
            quantity: '150',
            unitOfMeasurement: 'ml',
            ingredientType: 'Chocolate quente',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Coloque o brandy e o chocolate em uma caneca para coquetéis quentes',
          },
          {
            order: 2,
            description: 'Faça um espiral de Chantilly',
          },
          {
            order: 3,
            description:
              'Polvilhe canela em pó e Noz-moscada no espiral de Chantilly',
          },
        ],
        categories: ['quentes'],
        instructions: [
          {
            id: 'da3cc010-bb6b-4484-a886-f7f988d0d510',
            oldId: 6,
            title: 'Chocolate quente e Calda de chocolate',
            subtitle:
              'Veja aqui como preparar uma receita fácil e rápida de chocolate quente e também uma deliciosa calda de chocolate para usar em seus coquetéis.',
            description:
              '<p class="p">Existem diversas receitas de chocolate quente, com diferentes tipos de ingredientes como canela, cacau, amido de milho, menta e etc. Porém, para que o sabor original do coquetel não seja alterado, o ideal é preparar um chocolate quente básico.</p>\n\n<p class="p">Abaixo está uma receita muito fácil e rápida de ser preparada, e também uma receita de calda de chocolate muito usada em coquetéis quentes.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Chocolate Quente</h3>\n<p class="p-no-margin">&nbsp;</p>\n\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 1 litro de leite</p>\n<p class="p">• 300g chocolate ao leite</p>\n\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Leve o leite ao fogo tomando cuidado para que ele não ferva. Adicione o chocolate picado e mexa até dissolver.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Calda de Chocolate</h3>\n<p class="p-no-margin">&nbsp;</p>\n\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 1 1/2 xícara de chá (330g) de açúcar</p>\n<p class="p-no-margin">• 1 xícara de chá (220g) de cacau em pó</p>\n<p class="p-no-margin">• 1 pitada de sal</p>\n<p class="p-no-margin">• 1 xícara de chá (250ml) de água</p>\n<p class="p">• 2 colheres de chá (10ml) de essência de baunilha</p>\n\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p-no-margin">• Em uma panela, misture bem o açúcar, o cacau em pó e o sal. Aos poucos, acrescente a água, mexendo sempre, até os ingredientes ficarem incorporados.</p>\n<p class="p-no-margin">• Leve ao fogo médio, mexendo sempre, até ferver.</p>\n<p class="p-no-margin">• Deixe ferver por 3 minutos, mexendo sempre. Abaixe o fogo caso a mistura comece a subir e derramar.</p>\n<p class="p-no-margin">• Retire do fogo e coloque em uma jarra com capacidade para 750ml ou mais.</p>\n<p class="p-no-margin">• Deixe esfriar um pouco e leve para gelar, sem cobrir, até esfriar completamente.</p>\n<p class="p-no-margin">• Retire da geladeira, passe por uma peneira fina, acrescente a baunilha, tampe e guarde na geladeira.</p>\n<p class="p">• A calda pode ser mantida na geladeira por até 2 semanas.</p>\n\n<p class="p">Fonte: Livro "Eu amo café", da autora Susan Zimmer.</p>',
          },
        ],
      },
      {
        id: '024559dd-f86f-4439-8daa-4855667a1d7e',
        oldId: 467,
        name: 'Mocha',
        calories: 243,
        alcoholicContent: 'ZERO',
        difficulty: 'MEDIUM',
        description:
          'O Mocha é maravilhoso. Seu sabor é suave, delicioso. É perfeito para os dias frios. Vale a pena experimentar!',
        decoration: 'Chantilly e raspas de chocolate para decorar',
        ingredients: [
          {
            order: 1,
            quantity: '240',
            unitOfMeasurement: 'ml',
            ingredientType: 'Leite',
          },
          {
            order: 2,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Calda de Chocolate',
          },
          {
            order: 3,
            quantity: '37',
            unitOfMeasurement: 'ml',
            ingredientType: 'Café (expresso ou tradicional)',
          },
        ],
        preparationSteps: [
          {
            order: 5,
            description: 'Decore com o chantilly e com as rapas de chocolate',
          },
          {
            order: 1,
            description: 'Ferva o leite e separe',
          },
          {
            order: 2,
            description: 'Coloque a calda de chocolate em um copo alto',
          },
          {
            order: 3,
            description: 'Adicione a café e misture bem',
          },
          {
            order: 4,
            description: 'Complete o copo com leite',
          },
        ],
        categories: ['semalcool', 'quentes'],
        instructions: [
          {
            id: 'da3cc010-bb6b-4484-a886-f7f988d0d510',
            oldId: 6,
            title: 'Chocolate quente e Calda de chocolate',
            subtitle:
              'Veja aqui como preparar uma receita fácil e rápida de chocolate quente e também uma deliciosa calda de chocolate para usar em seus coquetéis.',
            description:
              '<p class="p">Existem diversas receitas de chocolate quente, com diferentes tipos de ingredientes como canela, cacau, amido de milho, menta e etc. Porém, para que o sabor original do coquetel não seja alterado, o ideal é preparar um chocolate quente básico.</p>\n\n<p class="p">Abaixo está uma receita muito fácil e rápida de ser preparada, e também uma receita de calda de chocolate muito usada em coquetéis quentes.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Chocolate Quente</h3>\n<p class="p-no-margin">&nbsp;</p>\n\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 1 litro de leite</p>\n<p class="p">• 300g chocolate ao leite</p>\n\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Leve o leite ao fogo tomando cuidado para que ele não ferva. Adicione o chocolate picado e mexa até dissolver.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Calda de Chocolate</h3>\n<p class="p-no-margin">&nbsp;</p>\n\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 1 1/2 xícara de chá (330g) de açúcar</p>\n<p class="p-no-margin">• 1 xícara de chá (220g) de cacau em pó</p>\n<p class="p-no-margin">• 1 pitada de sal</p>\n<p class="p-no-margin">• 1 xícara de chá (250ml) de água</p>\n<p class="p">• 2 colheres de chá (10ml) de essência de baunilha</p>\n\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p-no-margin">• Em uma panela, misture bem o açúcar, o cacau em pó e o sal. Aos poucos, acrescente a água, mexendo sempre, até os ingredientes ficarem incorporados.</p>\n<p class="p-no-margin">• Leve ao fogo médio, mexendo sempre, até ferver.</p>\n<p class="p-no-margin">• Deixe ferver por 3 minutos, mexendo sempre. Abaixe o fogo caso a mistura comece a subir e derramar.</p>\n<p class="p-no-margin">• Retire do fogo e coloque em uma jarra com capacidade para 750ml ou mais.</p>\n<p class="p-no-margin">• Deixe esfriar um pouco e leve para gelar, sem cobrir, até esfriar completamente.</p>\n<p class="p-no-margin">• Retire da geladeira, passe por uma peneira fina, acrescente a baunilha, tampe e guarde na geladeira.</p>\n<p class="p">• A calda pode ser mantida na geladeira por até 2 semanas.</p>\n\n<p class="p">Fonte: Livro "Eu amo café", da autora Susan Zimmer.</p>',
          },
        ],
      },
      {
        id: '04fb2cc8-cbdf-4abc-83d8-ed0fad90276f',
        oldId: 256,
        name: 'Irish Coffee',
        calories: 292,
        alcoholicContent: 'LOW',
        difficulty: 'MEDIUM',
        description:
          'O Irish Coffee é um coquetel delicioso. Este conhecido drinque é ideal para dias quentes.',
        decoration: null,
        ingredients: [
          {
            order: 3,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Creme de Leite fresco',
          },
          {
            order: 4,
            quantity: '1',
            unitOfMeasurement: 'colher de bar',
            ingredientType: 'Açúcar mascavo',
          },
          {
            order: 2,
            quantity: '75',
            unitOfMeasurement: 'ml',
            ingredientType: 'Café quente',
          },
          {
            order: 1,
            quantity: '37',
            unitOfMeasurement: 'ml',
            ingredientType: 'Irish Whiskey',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description:
              'Adicione o creme de leite cuidadosamente com uma colher para que ele fique no topo',
          },
          {
            order: 1,
            description:
              'Misture o Café, o Whiskey e o açúcar em uma taça para Coquetéis Quentes',
          },
        ],
        categories: ['quentes', 'classicos'],
        instructions: [
          {
            id: 'd9fd0cce-2315-4130-b72e-9b33d76e4db7',
            oldId: 4,
            title: 'Coquetel em camadas',
            subtitle:
              'Coquetéis em camadas são aqueles em que os ingredientes (bebidas) não se misturam durante o seu preparo. Veja aqui como são feitos.',
            description:
              '<p class="p">Para dividir um coquetel em camadas existem algumas regras básicas que devem ser seguidas. As bebidas devem ser adicionadas por ordem de densidade – quanto maior o teor alcoólico da bebida, menor é a sua densidade – sempre da mais densa para a menos densa. Geralmente, os licores são mais densos que os destilados, portanto devem ser adicionados primeiro. Elas também devem ser despejadas no copo sutilmente, com o auxílio de uma colher apropriada, para que não se misturem.</p>\n\n<p class="p">Existem coquetéis com diversas camadas e prepará-los exige muita habilidade. Portanto, procure treinar bastante a elaboração de coquetéis com poucas camadas, antes de partir para um número maior delas. A técnica será sempre a mesma, exigindo apenas muito treinamento.</p>\n\n<p class="p">As fotos abaixo mostram um exemplo prático de como preparar um coquetel com duas camadas. Observe e veja como é fácil.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Como fazer</h3>\n\n<p class="p">Em primeiro lugar, despeje no copo a bebida mais densa:</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/01.jpg" /></p>\n\n<p class="p">Em seguida, você vai precisar do auxílio de uma colher de bar (bailarina). Coloque-a de forma que sua ponta encoste no canto do copo e ao mesmo tempo na bebida que foi despejada primeiro, como na foto abaixo.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/02.jpg" /></p>\n\n<p class="p">Depois de acertar a posição da colher, despeje a próxima bebida sobre a mesma, bem suavemente.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/03.jpg" /></p>\n\n<p class="p">Observe que respeitando a densidade de cada bebida e a técnica ensinada, as bebidas não se misturam.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/04.jpg" /></p>\n\n<p class="p">Abaixo está o coquetel finalizado. Apesar de apresentar certo grau de dificuldade no seu preparo, o resultado final vale a pena por sua beleza.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/05.jpg" /></p>',
          },
        ],
      },
      {
        id: '10c7000e-3936-4051-9bbe-63c23c69fbd4',
        oldId: 460,
        name: 'Mochaccino Amaretto',
        calories: 343,
        alcoholicContent: 'LOW',
        difficulty: 'MEDIUM',
        description:
          'O Mochaccino Amaretto é delicioso. Perfeito para os dias quentes, seu sabor é adocicado na medida certa e o Amaretto dá um toque especial.',
        decoration: 'Chantilly e calda de chocolate para decorar',
        ingredients: [
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Calda de chocolate caseira',
          },
          {
            order: 4,
            quantity: '7',
            unitOfMeasurement: 'ml',
            ingredientType: 'Amaretto',
          },
          {
            order: 3,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Café (expresso ou tradicional)',
          },
          {
            order: 2,
            quantity: '120',
            unitOfMeasurement: 'ml',
            ingredientType: 'Leite',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description:
              'Use a máquina de expresso para vaporizar o leite até formar um chocolate quente espumoso (opcional)',
          },
          {
            order: 1,
            description:
              'Coloque a calda de chocolate e o leite em uma caneca para coquetéis quentes',
          },
          {
            order: 4,
            description: 'Decore com o chantilly e a calda de chocolate',
          },
          {
            order: 3,
            description: 'Adicione o café e o Amaretto',
          },
        ],
        categories: ['quentes'],
        instructions: [
          {
            id: 'da3cc010-bb6b-4484-a886-f7f988d0d510',
            oldId: 6,
            title: 'Chocolate quente e Calda de chocolate',
            subtitle:
              'Veja aqui como preparar uma receita fácil e rápida de chocolate quente e também uma deliciosa calda de chocolate para usar em seus coquetéis.',
            description:
              '<p class="p">Existem diversas receitas de chocolate quente, com diferentes tipos de ingredientes como canela, cacau, amido de milho, menta e etc. Porém, para que o sabor original do coquetel não seja alterado, o ideal é preparar um chocolate quente básico.</p>\n\n<p class="p">Abaixo está uma receita muito fácil e rápida de ser preparada, e também uma receita de calda de chocolate muito usada em coquetéis quentes.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Chocolate Quente</h3>\n<p class="p-no-margin">&nbsp;</p>\n\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 1 litro de leite</p>\n<p class="p">• 300g chocolate ao leite</p>\n\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Leve o leite ao fogo tomando cuidado para que ele não ferva. Adicione o chocolate picado e mexa até dissolver.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Calda de Chocolate</h3>\n<p class="p-no-margin">&nbsp;</p>\n\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 1 1/2 xícara de chá (330g) de açúcar</p>\n<p class="p-no-margin">• 1 xícara de chá (220g) de cacau em pó</p>\n<p class="p-no-margin">• 1 pitada de sal</p>\n<p class="p-no-margin">• 1 xícara de chá (250ml) de água</p>\n<p class="p">• 2 colheres de chá (10ml) de essência de baunilha</p>\n\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p-no-margin">• Em uma panela, misture bem o açúcar, o cacau em pó e o sal. Aos poucos, acrescente a água, mexendo sempre, até os ingredientes ficarem incorporados.</p>\n<p class="p-no-margin">• Leve ao fogo médio, mexendo sempre, até ferver.</p>\n<p class="p-no-margin">• Deixe ferver por 3 minutos, mexendo sempre. Abaixe o fogo caso a mistura comece a subir e derramar.</p>\n<p class="p-no-margin">• Retire do fogo e coloque em uma jarra com capacidade para 750ml ou mais.</p>\n<p class="p-no-margin">• Deixe esfriar um pouco e leve para gelar, sem cobrir, até esfriar completamente.</p>\n<p class="p-no-margin">• Retire da geladeira, passe por uma peneira fina, acrescente a baunilha, tampe e guarde na geladeira.</p>\n<p class="p">• A calda pode ser mantida na geladeira por até 2 semanas.</p>\n\n<p class="p">Fonte: Livro "Eu amo café", da autora Susan Zimmer.</p>',
          },
        ],
      },
      {
        id: '15b95a0a-c1d4-4383-8ee0-b46b6d5aa075',
        oldId: 468,
        name: 'Café De Mônaco',
        calories: 300,
        alcoholicContent: 'ZERO',
        difficulty: 'EASY',
        description:
          'O Café de Mônaco é um coquetel delicioso. A canela dá um sabor especial. É perfeito para os dias frios.',
        decoration: null,
        ingredients: [
          {
            order: 3,
            quantity: '1',
            unitOfMeasurement: 'colher de sopa',
            ingredientType: 'Chocolate meio-amargo ralado',
          },
          {
            order: 2,
            quantity: '120',
            unitOfMeasurement: 'ml',
            ingredientType: 'Leite quente',
          },
          {
            order: 4,
            quantity: '2',
            unitOfMeasurement: 'colheres de chá',
            ingredientType: 'Creme de Leite',
          },
          {
            order: 5,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Açúcar e canela em pó a gosto',
          },
          {
            order: 1,
            quantity: '120',
            unitOfMeasurement: 'ml',
            ingredientType: 'Café (expresso ou tradicional)',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description:
              'Adicione o chocolate ralado, o creme de leite e misture até derreter todo o chocolate',
          },
          {
            order: 3,
            description: 'Adoce com açúcar e canela em pó',
          },
          {
            order: 1,
            description:
              'Em uma caneca de vidro, misture o café e o leite quentes',
          },
        ],
        categories: ['semalcool', 'quentes'],
        instructions: [],
      },
      {
        id: '3f6a4aa0-840e-43fb-9503-99e300515196',
        oldId: 466,
        name: 'Caffè Vienense',
        calories: 346,
        alcoholicContent: 'LOW',
        difficulty: 'MEDIUM',
        description:
          'O Caffè Vienense é perfeito para quem gosta de café. Os ingrendientes combinam perfeitamente, inclusive o chantilly.',
        decoration: 'Chantilly para decorar',
        ingredients: [
          {
            order: 5,
            quantity: '7',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Café',
          },
          {
            order: 2,
            quantity: '1',
            unitOfMeasurement: 'colher de sopa',
            ingredientType: 'Açúcar',
          },
          {
            order: 1,
            quantity: '1',
            unitOfMeasurement: 'colher de sopa',
            ingredientType: 'Chocolate meio-amargo picado',
          },
          {
            order: 4,
            quantity: '240',
            unitOfMeasurement: 'ml',
            ingredientType: 'Café (expresso ou tradicional)',
          },
          {
            order: 3,
            quantity: '1',
            unitOfMeasurement: 'colher de sopa',
            ingredientType: 'Creme de Leite',
          },
        ],
        preparationSteps: [
          {
            order: 3,
            description:
              'Adicione o licor de café e passe tudo para uma caneca de vidro',
          },
          {
            order: 4,
            description: 'Decore com o chantilly',
          },
          {
            order: 2,
            description: 'Junte o café e leve ao fogo, sem deixar ferver',
          },
          {
            order: 1,
            description:
              'Derreta o chocolate, o açúcar e o creme de leite em banho-maria',
          },
        ],
        categories: ['quentes'],
        instructions: [],
      },
      {
        id: '7ccb21c2-bf20-44ba-9d99-682a76d2ea06',
        oldId: 175,
        name: 'Chocolate Mint',
        calories: 559,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Chocolate Mint é extremamente delicioso. O sabor da menta casa perfeitamente com o Chocolate.',
        decoration: null,
        ingredients: [
          {
            order: 2,
            quantity: '240',
            unitOfMeasurement: 'ml',
            ingredientType: 'Chocolate quente',
          },
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Creme de Menta',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Coloque o Creme de Menta em uma caneca para coquetéis quentes',
          },
          {
            order: 2,
            description: 'Complete com Chocolate',
          },
        ],
        categories: ['quentes'],
        instructions: [
          {
            id: 'da3cc010-bb6b-4484-a886-f7f988d0d510',
            oldId: 6,
            title: 'Chocolate quente e Calda de chocolate',
            subtitle:
              'Veja aqui como preparar uma receita fácil e rápida de chocolate quente e também uma deliciosa calda de chocolate para usar em seus coquetéis.',
            description:
              '<p class="p">Existem diversas receitas de chocolate quente, com diferentes tipos de ingredientes como canela, cacau, amido de milho, menta e etc. Porém, para que o sabor original do coquetel não seja alterado, o ideal é preparar um chocolate quente básico.</p>\n\n<p class="p">Abaixo está uma receita muito fácil e rápida de ser preparada, e também uma receita de calda de chocolate muito usada em coquetéis quentes.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Chocolate Quente</h3>\n<p class="p-no-margin">&nbsp;</p>\n\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 1 litro de leite</p>\n<p class="p">• 300g chocolate ao leite</p>\n\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Leve o leite ao fogo tomando cuidado para que ele não ferva. Adicione o chocolate picado e mexa até dissolver.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Calda de Chocolate</h3>\n<p class="p-no-margin">&nbsp;</p>\n\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 1 1/2 xícara de chá (330g) de açúcar</p>\n<p class="p-no-margin">• 1 xícara de chá (220g) de cacau em pó</p>\n<p class="p-no-margin">• 1 pitada de sal</p>\n<p class="p-no-margin">• 1 xícara de chá (250ml) de água</p>\n<p class="p">• 2 colheres de chá (10ml) de essência de baunilha</p>\n\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p-no-margin">• Em uma panela, misture bem o açúcar, o cacau em pó e o sal. Aos poucos, acrescente a água, mexendo sempre, até os ingredientes ficarem incorporados.</p>\n<p class="p-no-margin">• Leve ao fogo médio, mexendo sempre, até ferver.</p>\n<p class="p-no-margin">• Deixe ferver por 3 minutos, mexendo sempre. Abaixe o fogo caso a mistura comece a subir e derramar.</p>\n<p class="p-no-margin">• Retire do fogo e coloque em uma jarra com capacidade para 750ml ou mais.</p>\n<p class="p-no-margin">• Deixe esfriar um pouco e leve para gelar, sem cobrir, até esfriar completamente.</p>\n<p class="p-no-margin">• Retire da geladeira, passe por uma peneira fina, acrescente a baunilha, tampe e guarde na geladeira.</p>\n<p class="p">• A calda pode ser mantida na geladeira por até 2 semanas.</p>\n\n<p class="p">Fonte: Livro "Eu amo café", da autora Susan Zimmer.</p>',
          },
        ],
      },
      {
        id: 'e84ba585-6793-414b-978a-a9a7d1197d34',
        oldId: 465,
        name: 'Café Mágico',
        calories: 241,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Café Mágico é um coquetel delicioso. Os ingredientes formam uma ótima combinação.',
        decoration:
          'Chantilly e 4 grãos de café cobertos com chocolate para decorar',
        ingredients: [
          {
            order: 4,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Café',
          },
          {
            order: 1,
            quantity: '240',
            unitOfMeasurement: 'ml',
            ingredientType: 'Café (expresso ou tradicional)',
          },
          {
            order: 2,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Bailey´s Irish Cream',
          },
          {
            order: 3,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Amaretto',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Coloque o café em uma caneca grande de vidro e, aos poucos, adicione os licores',
          },
          {
            order: 2,
            description: 'Decore com o chantilly e os grãos de café',
          },
        ],
        categories: ['quentes'],
        instructions: [],
      },
    ],
  },
  {
    id: '55e0d0b7-6254-49a6-83c5-50231d119a54',
    oldId: 11,
    type: 'GENERAL',
    title: 'FÁCEIS E RÁPIDOS',
    subtitle:
      'Separamos 10 drinques deliciosos e muito fáceis de preparar para você fazer em casa, sem nenhum trabalho. Confira!',
    description:
      'Separamos 10 drinques deliciosos e muito fáceis de preparar para você fazer em casa, sem nenhum trabalho. Confira!',
    drinks: [
      {
        id: '37647e05-9b6f-47a3-a2f5-f5ef11a37f7c',
        oldId: 35,
        name: 'Bellini',
        calories: 100,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Bellini é um coquetel refrescante muito apreciado por quem gosta de espumante. O suco de pêssego combina perfeitamente.',
        decoration: null,
        ingredients: [
          {
            order: 1,
            quantity: '22',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Pêssego gelado',
          },
          {
            order: 2,
            quantity: '90',
            unitOfMeasurement: 'ml',
            ingredientType: 'Espumante gelado',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Coloque o Suco de Pêssego na Taça Flute e depois adicione o Espumante',
          },
        ],
        categories: ['tropicais', 'classicos'],
        instructions: [],
      },
      {
        id: '5fa895aa-2db9-409d-ac0e-9d6ed39b78dd',
        oldId: 292,
        name: 'Caribbean Dream',
        calories: 249,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Caribbean Dream é um coquetel refrescante. O Rum se destaca junto com o licor de pêssego.',
        decoration: null,
        ingredients: [
          {
            order: 4,
            quantity: '1',
            unitOfMeasurement: 'splash',
            ingredientType: 'Grenadine',
          },
          {
            order: 2,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Pêssego',
          },
          {
            order: 3,
            quantity: '120',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Laranja',
          },
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Rum Branco',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description: 'Mexa bem',
          },
          {
            order: 1,
            description: 'Monte o coquetel direto no copo Highball com gelo',
          },
        ],
        categories: ['tropicais'],
        instructions: [],
      },
      {
        id: '74a11ed3-33bb-452c-9080-ac2014e8fc71',
        oldId: 240,
        name: 'Kir Royale',
        calories: 113,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'A combinação do espumante com o Creme de Cassis dá ao Kir Royale um sabor único. É um coquetel delicioso e muito suave, podendo ser tomado em qualquer ocasião.',
        decoration: null,
        ingredients: [
          {
            order: 2,
            quantity: '90',
            unitOfMeasurement: 'ml',
            ingredientType: 'Espumante gelado',
          },
          {
            order: 1,
            quantity: '7',
            unitOfMeasurement: 'ml',
            ingredientType: 'Creme de Cassis',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description: 'Adicione o Espumante',
          },
          {
            order: 1,
            description: 'Coloque o Creme de Cassis em uma taça Flute',
          },
        ],
        categories: ['classicos'],
        instructions: [],
      },
      {
        id: '7e6e6e57-1007-4509-bea4-1f2e3eaa8186',
        oldId: 96,
        name: 'Malibu Sunrise',
        calories: 267,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Malibu Sunrise é um coquetel esplêndido. O sabor do Malibu se destaca dando um gosto doce e suave.',
        decoration: null,
        ingredients: [
          {
            order: 3,
            quantity: '1',
            unitOfMeasurement: 'splash',
            ingredientType: 'Grenadine',
          },
          {
            order: 1,
            quantity: '60',
            unitOfMeasurement: 'ml',
            ingredientType: 'Malibu',
          },
          {
            order: 2,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Suco de Laranja',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description: 'Ponha o Grenadine por último',
          },
          {
            order: 1,
            description:
              'Adicione o Malibu no copo Highball com gelo e complete com o Suco de Laranja',
          },
        ],
        categories: ['tropicais'],
        instructions: [],
      },
      {
        id: '82d88a30-81ec-4f3e-8d5d-174f33339eed',
        oldId: 382,
        name: 'Bay Breeze',
        calories: 215,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Bay Breeze é um coquetel suave e refrescante. Nenhum dos ingredientes se destaca.',
        decoration: 'Rodela de Limão para decorar',
        ingredients: [
          {
            order: 3,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Suco de Abacaxi',
          },
          {
            order: 2,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Suco de Cranberry',
          },
          {
            order: 1,
            quantity: '60',
            unitOfMeasurement: 'ml',
            ingredientType: 'Vodca',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description: 'Coloque a Vodca em um copo Highball com gelo',
          },
          {
            order: 2,
            description:
              'Complete com partes iguais de suco de Cranberry e suco de Abacaxi e mexa bem',
          },
          {
            order: 3,
            description: 'Decore com a rodela de limão',
          },
        ],
        categories: ['tropicais'],
        instructions: [],
      },
      {
        id: '849e4a2b-fabc-4d68-865d-f45e6dc641da',
        oldId: 391,
        name: 'Frangelico & Oj',
        calories: 163,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Frangelico & Oj é um coquetel delicioso. O Frangelico combina perfeitamente com o suco de Laranja.',
        decoration: null,
        ingredients: [
          {
            order: 2,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Suco de Laranja para completar',
          },
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Frangelico',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Coloque o Frangelico em um copo Highball com geloComplete com suco de LaranjaMexa bem',
          },
        ],
        categories: ['tropicais'],
        instructions: [],
      },
      {
        id: '9ba6519d-322a-4d5a-aab0-8a4162c164ed',
        oldId: 83,
        name: 'Campari Citrus',
        calories: 194,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Campari Citrus é um coquetel muito saboroso que estimula o apetite. A combinação do bitter com o sabor cítrico dá um gosto levemente amargo, porém único.',
        decoration: null,
        ingredients: [
          {
            order: 1,
            quantity: '45',
            unitOfMeasurement: 'ml',
            ingredientType: 'Campari',
          },
          {
            order: 2,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Schweppes Citrus para completar',
          },
        ],
        preparationSteps: [
          {
            order: 3,
            description: 'Mexa bem',
          },
          {
            order: 1,
            description:
              'Monte o coquetel direto no copo Double Old-Fashioned com gelo',
          },
          {
            order: 2,
            description: 'Complete com Schweppes Citrus',
          },
        ],
        categories: [],
        instructions: [],
      },
      {
        id: '9db10b67-8e73-42c2-a0d2-a5e7a6e910de',
        oldId: 85,
        name: 'Cranberry Toad',
        calories: 201,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Cranberry Toad é um coquetel tropical muito saboroso. Seu sabor é doce e suave.',
        decoration: null,
        ingredients: [
          {
            order: 3,
            quantity: '90',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Cranberry',
          },
          {
            order: 1,
            quantity: '60',
            unitOfMeasurement: 'ml',
            ingredientType: 'Vodca',
          },
          {
            order: 2,
            quantity: '90',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Laranja',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description: 'Mexa bem',
          },
          {
            order: 1,
            description: 'Monte o coquetel direto no copo Hurricane com gelo',
          },
        ],
        categories: ['tropicais'],
        instructions: [],
      },
      {
        id: 'c99fca7d-1e88-4145-97f1-f76744976db2',
        oldId: 225,
        name: 'Cassis Orange',
        calories: 286,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Cassis Orange é muito refrescante. A laranja misturada com o Cassis dá um sabor maravilhoso ao coquetel. Vale a pena experimentar.',
        decoration: null,
        ingredients: [
          {
            order: 1,
            quantity: '60',
            unitOfMeasurement: 'ml',
            ingredientType: 'Creme de Cassis',
          },
          {
            order: 2,
            quantity: '150',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Laranja',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Coloque o suco de laranja em uma taça Parfait com gelo',
          },
          {
            order: 3,
            description:
              'Mexa suavemente de modo que proporcione um efeito degradê ao coquetel',
          },
          {
            order: 2,
            description: 'Adicione o Creme de Cassis',
          },
        ],
        categories: ['tropicais'],
        instructions: [],
      },
      {
        id: 'd3c11f78-1b66-4801-b26a-b14c01958edd',
        oldId: 396,
        name: 'California Surfer',
        calories: 281,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O California Surfer é um coquetel delicioso e refrescante, ótimo para os dias quentes. Nenhum ingredientes se destaca, a combinação é ótima.',
        decoration: 'Rodela de Laranja para decorar',
        ingredients: [
          {
            order: 1,
            quantity: '45',
            unitOfMeasurement: 'ml',
            ingredientType: 'Jägermeister',
          },
          {
            order: 3,
            quantity: '150',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Abacaxi',
          },
          {
            order: 2,
            quantity: '45',
            unitOfMeasurement: 'ml',
            ingredientType: 'Malibu',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description: 'Mexa bem',
          },
          {
            order: 1,
            description: 'Monte o coquetel direto no copo Collins com gelo',
          },
        ],
        categories: ['tropicais'],
        instructions: [],
      },
    ],
  },
  {
    id: '33ff9e3e-edc6-487c-b2c3-c34ebe18db2c',
    oldId: 1,
    type: 'SPECIAL_OCCASION',
    title: 'HALLOWEEN',
    subtitle:
      'O Halloween chegou? Então surpreenda seus amigos com este terríveis e assustadores drinques que separamos para esse feriado',
    description:
      'Está planejando uma festa neste Halloween? Então surpreenda seus amigos com estes terríveis e assustadores coquetéis que separamos para esse dia. Além do tradicional Bloody Mary, escolhemos outros ótimos drinques que com certeza irão fazer a diferença na sua festa.',
    drinks: [
      {
        id: '02a6237b-d6eb-467d-9ba1-21e6780c3952',
        oldId: 75,
        name: 'Bloody Mary',
        calories: 199,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Bloody Mary é um coquetel nutritivo. Este clássico mundialmente conhecido possui um gosto único e extraordinário. A mistura de sabores combina perfeitamente, e o tempero do molho de tomate de acordo com seu gosto o deixa sempre especial.',
        decoration: 'Talo de salsão para decorar',
        ingredients: [
          {
            order: 1,
            quantity: '60',
            unitOfMeasurement: 'ml',
            ingredientType: 'Vodca',
          },
          {
            order: 3,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Limão',
          },
          {
            order: 2,
            quantity: '120',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Tomate',
          },
          {
            order: 4,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Sal, Molho de Pimenta e Molho Inglês a gosto',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Bata todos os ingredientes em uma coqueteleira com gelo',
          },
          {
            order: 2,
            description: 'Passe tudo para um copo Highball',
          },
        ],
        categories: ['classicos'],
        instructions: [],
      },
      {
        id: '05b88433-3d61-40f3-a657-cb2b5d0a845f',
        oldId: 386,
        name: 'Devil´S Sweat',
        calories: 460,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Devil´s Sweat é um coquetel delicioso. Seu sabor é adocicado por causa do Grenadine.',
        decoration: 'Ramo de Hortelã para decorar',
        ingredients: [
          {
            order: 2,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Limão',
          },
          {
            order: 1,
            quantity: '60',
            unitOfMeasurement: 'ml',
            ingredientType: 'Grenadine',
          },
          {
            order: 3,
            quantity: '90',
            unitOfMeasurement: 'ml',
            ingredientType: 'Triple Sec (Licor de laranja)',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description: 'Monte o coquetel direto no copo Higball com gelo',
          },
          {
            order: 2,
            description: 'Mexa bem',
          },
        ],
        categories: ['tropicais'],
        instructions: [],
      },
      {
        id: '4fe4e572-e13a-453c-b4b7-bdb14af70995',
        oldId: 385,
        name: 'Ghostbuster',
        calories: 155,
        alcoholicContent: 'HIGH',
        difficulty: 'EASY',
        description:
          'O Ghostbuster é um coquetel saboroso. O gosto do café se destaca.',
        decoration: null,
        ingredients: [
          {
            order: 3,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Café',
          },
          {
            order: 2,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Bailey´s Irish Cream',
          },
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Vodca',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description: 'Coe para uma Taça de Coquetel gelada',
          },
          {
            order: 1,
            description:
              'Bata todos os ingredientes em uma coqueteleira com gelo',
          },
        ],
        categories: [],
        instructions: [],
      },
      {
        id: '970f8910-74e9-404a-b14b-94e314cbd7cf',
        oldId: 62,
        name: 'Brain Hemorrhage',
        calories: 219,
        alcoholicContent: 'LOW',
        difficulty: 'HARD',
        description:
          'O Brain Hemorrhage é um coquetel magnífico. Além de ser muito saboroso, ele é um dos mais bonitos e atraentes entre os "shots".',
        decoration: null,
        ingredients: [
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Pêssego',
          },
          {
            order: 2,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Bailey´s Irish Cream',
          },
          {
            order: 3,
            quantity: '1',
            unitOfMeasurement: 'splash',
            ingredientType: 'Grenadine para misturar',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Monte o coquetel em camadas no copo de Shot seguindo a ordem dos ingredientes',
          },
          {
            order: 2,
            description: 'Adicione o Grenadine no final',
          },
        ],
        categories: ['shot'],
        instructions: [
          {
            id: 'd9fd0cce-2315-4130-b72e-9b33d76e4db7',
            oldId: 4,
            title: 'Coquetel em camadas',
            subtitle:
              'Coquetéis em camadas são aqueles em que os ingredientes (bebidas) não se misturam durante o seu preparo. Veja aqui como são feitos.',
            description:
              '<p class="p">Para dividir um coquetel em camadas existem algumas regras básicas que devem ser seguidas. As bebidas devem ser adicionadas por ordem de densidade – quanto maior o teor alcoólico da bebida, menor é a sua densidade – sempre da mais densa para a menos densa. Geralmente, os licores são mais densos que os destilados, portanto devem ser adicionados primeiro. Elas também devem ser despejadas no copo sutilmente, com o auxílio de uma colher apropriada, para que não se misturem.</p>\n\n<p class="p">Existem coquetéis com diversas camadas e prepará-los exige muita habilidade. Portanto, procure treinar bastante a elaboração de coquetéis com poucas camadas, antes de partir para um número maior delas. A técnica será sempre a mesma, exigindo apenas muito treinamento.</p>\n\n<p class="p">As fotos abaixo mostram um exemplo prático de como preparar um coquetel com duas camadas. Observe e veja como é fácil.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Como fazer</h3>\n\n<p class="p">Em primeiro lugar, despeje no copo a bebida mais densa:</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/01.jpg" /></p>\n\n<p class="p">Em seguida, você vai precisar do auxílio de uma colher de bar (bailarina). Coloque-a de forma que sua ponta encoste no canto do copo e ao mesmo tempo na bebida que foi despejada primeiro, como na foto abaixo.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/02.jpg" /></p>\n\n<p class="p">Depois de acertar a posição da colher, despeje a próxima bebida sobre a mesma, bem suavemente.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/03.jpg" /></p>\n\n<p class="p">Observe que respeitando a densidade de cada bebida e a técnica ensinada, as bebidas não se misturam.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/04.jpg" /></p>\n\n<p class="p">Abaixo está o coquetel finalizado. Apesar de apresentar certo grau de dificuldade no seu preparo, o resultado final vale a pena por sua beleza.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/4/05.jpg" /></p>',
          },
        ],
      },
      {
        id: 'bb2a2396-ba91-492a-8969-b42f8f531bf2',
        oldId: 153,
        name: 'Green Devil',
        calories: 137,
        alcoholicContent: 'MEDIUM',
        difficulty: 'HARD',
        description:
          'O Green Devil é um coquetel muito atraente e gostoso. O Sabor que mais se destaca é o de laranja, devido ao suco e o Curaçau blue.',
        decoration: 'Rodela de Limão para decorar',
        ingredients: [
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Rum Branco',
          },
          {
            order: 3,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Laranja',
          },
          {
            order: 2,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Curaçau Blue',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description: 'Cruste uma taça de Coquetel com açúcar',
          },
          {
            order: 3,
            description: 'Coe para a taça de Coquetel',
          },
          {
            order: 2,
            description:
              'Bata todos os ingredientes em um coqueteleira com gelo',
          },
        ],
        categories: [],
        instructions: [],
      },
      {
        id: 'c6c687af-0f5a-4952-a2ed-8acd989f1d16',
        oldId: 387,
        name: 'Purple Devil',
        calories: 159,
        alcoholicContent: 'MEDIUM',
        difficulty: 'EASY',
        description:
          'O Purple Devil é um coquetel bem adocicado. O sabor do Amaretto predomina. O suco de Cranberry o deixa mais suave.',
        decoration: null,
        ingredients: [
          {
            order: 1,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Amaretto',
          },
          {
            order: 2,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Triple Sec (Licor de laranja)',
          },
          {
            order: 3,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Cranberry',
          },
          {
            order: 4,
            quantity: '1',
            unitOfMeasurement: 'splash',
            ingredientType: 'Soda Limonada',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description: 'Mexa bem',
          },
          {
            order: 1,
            description:
              'Monte o coquetel direto no copo Old-Fashioned com gelo',
          },
        ],
        categories: [],
        instructions: [],
      },
      {
        id: 'd5c6302f-757b-40a8-96dc-77fb5e1c3420',
        oldId: 388,
        name: 'White Witch',
        calories: 137,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O White Witch é um coquetel suave, bem cremoso. O leite e o café se destacam.',
        decoration: null,
        ingredients: [
          {
            order: 3,
            quantity: '45',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Café',
          },
          {
            order: 4,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Leite para completar',
          },
          {
            order: 1,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Vodca',
          },
          {
            order: 2,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Rum Branco',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description: 'Monte o coquetel direto no copo Highball com gelo',
          },
          {
            order: 2,
            description: 'Complete até o topo com Leite',
          },
          {
            order: 3,
            description: 'Mexa bem',
          },
        ],
        categories: [],
        instructions: [],
      },
    ],
  },
  {
    id: '705bc35b-9395-4a1a-b22a-6be7ec4641b7',
    oldId: 3,
    type: 'SPECIAL_OCCASION',
    title: 'NATAL',
    subtitle:
      'Chegou o Natal!!! Encontre aqui coquetéis deliciosos para você comemorar essa data maravilhosa com sua família e seus amigos',
    description:
      '"Se temos de esperar, que seja para colher a semente boa que lançamos hoje no solo da vida. Se for para semear, então que seja para produzir milhões de sorrisos, de solidariedade e amizade." (Cora Coralina)\n\nA equipe Drinquepedia deseja à todos um Feliz Natal e um ótimo Ano Novo!',
    drinks: [
      {
        id: '18fc3874-3145-489c-82cd-9072d1cb8848',
        oldId: 431,
        name: 'Cosmopolitan Champagne',
        calories: 429,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Cosmopolitan Champagne é um coquetel refrescante e delicioso. O sabor do espumante se destaca e dá um toque especial.',
        decoration: null,
        ingredients: [
          {
            order: 2,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Triple Sec (Licor de laranja)',
          },
          {
            order: 4,
            quantity: '2',
            unitOfMeasurement: 'colheres de bar',
            ingredientType: 'Açúcar',
          },
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Cranberry',
          },
          {
            order: 5,
            quantity: '90',
            unitOfMeasurement: 'ml',
            ingredientType: 'Espumante gelado',
          },
          {
            order: 3,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Limão',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description: 'Coe para uma taça Flute',
          },
          {
            order: 3,
            description: 'Adicione o espumante por último',
          },
          {
            order: 1,
            description:
              'Bata todos os ingredientes, exceto o Espumante, em uma coqueteleira com gelo',
          },
        ],
        categories: ['tropicais'],
        instructions: [],
      },
      {
        id: '2f749735-1a80-4c75-9c7a-5e777fd2e4f2',
        oldId: 435,
        name: 'Ruby Red Seabreeze',
        calories: 235,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Ruby Red Seabreeze é um coquetel refrescante. Nenhum dos ingredientes se destaca.',
        decoration: null,
        ingredients: [
          {
            order: 2,
            quantity: '60',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Cranberry',
          },
          {
            order: 3,
            quantity: '60',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Grapefruit (Toranja)',
          },
          {
            order: 4,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Suco de 1/2 Limão',
          },
          {
            order: 1,
            quantity: '60',
            unitOfMeasurement: 'ml',
            ingredientType: 'Vodca',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description: 'Monte o coquetel direto no copo Highball com gelo',
          },
          {
            order: 2,
            description: 'Mexa bem',
          },
        ],
        categories: ['tropicais'],
        instructions: [],
      },
      {
        id: '3cdc31ca-ca02-4612-ae79-01cba25b8949',
        oldId: 413,
        name: 'Frangelico Caipiroska',
        calories: 311,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'Uma deliciosa versão da Caipirinha. Refrescante, saborosa, uma combinação perfeita.',
        decoration: null,
        ingredients: [
          {
            order: 3,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Suco de Cranberry',
          },
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Frangelico',
          },
          {
            order: 4,
            quantity: '1/2',
            unitOfMeasurement: null,
            ingredientType: 'Limão cortado em quatro partes',
          },
          {
            order: 5,
            quantity: '1',
            unitOfMeasurement: 'colher de bar',
            ingredientType: 'Açúcar',
          },
          {
            order: 2,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Vodca',
          },
        ],
        preparationSteps: [
          {
            order: 3,
            description: 'Adicione o Frangelico e a Vodca',
          },
          {
            order: 1,
            description:
              'Macere o limão e o açúcar em um copo Double Old-Fashioned',
          },
          {
            order: 2,
            description: 'Encha-o de gelo',
          },
          {
            order: 4,
            description: 'Complete com o suco de Cranberry e mexa bem',
          },
        ],
        categories: ['tropicais'],
        instructions: [],
      },
      {
        id: '68fa3583-94ef-4dc6-84a8-7e787d03f850',
        oldId: 436,
        name: 'Cranberry Vodca Punch',
        calories: 221,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Cranberry Vodca Punch é perfeito para todas as festas. Seu sabor é delicioso e bem refrescante.\n\nObs.: as calorias abaixo são referentes à um copo',
        decoration: null,
        ingredients: [
          {
            order: 1,
            quantity: '180',
            unitOfMeasurement: 'ml',
            ingredientType: 'Vodca',
          },
          {
            order: 2,
            quantity: '120',
            unitOfMeasurement: 'ml',
            ingredientType: 'Triple Sec (Licor de laranja)',
          },
          {
            order: 4,
            quantity: '1 1/2',
            unitOfMeasurement: 'litro',
            ingredientType: 'Suco de Cranberry',
          },
          {
            order: 3,
            quantity: '1',
            unitOfMeasurement: 'litro',
            ingredientType: 'Limonada',
          },
          {
            order: 5,
            quantity: '1',
            unitOfMeasurement: 'fatia',
            ingredientType: 'Melancia sem caroço',
          },
        ],
        preparationSteps: [
          {
            order: 4,
            description: 'Mexa bem',
          },
          {
            order: 1,
            description:
              'Bata a Vodca, o Triple sec e a melancia no liquidificador um pouco de gelo',
          },
          {
            order: 2,
            description: 'Passe tudo para uma poncheira',
          },
          {
            order: 3,
            description: 'Adicione a limonada, o suco de cranberry e mais gelo',
          },
        ],
        categories: ['tropicais'],
        instructions: [],
      },
      {
        id: '690cb819-6e97-4909-86a9-556606667cf8',
        oldId: 432,
        name: 'Mango Daiquiri',
        calories: 426,
        alcoholicContent: 'LOW',
        difficulty: 'MEDIUM',
        description:
          'O Mango Daiquiri é delicioso e muito refrescante, perfeito para os dias quentes.',
        decoration: null,
        ingredients: [
          {
            order: 4,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Triple Sec (Licor de laranja)',
          },
          {
            order: 2,
            quantity: '1/2',
            unitOfMeasurement: null,
            ingredientType: 'Manga',
          },
          {
            order: 3,
            quantity: '22',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Limão',
          },
          {
            order: 1,
            quantity: '45',
            unitOfMeasurement: 'ml',
            ingredientType: 'Rum Branco',
          },
          {
            order: 5,
            quantity: '1',
            unitOfMeasurement: 'colheres de bar',
            ingredientType: 'Açúcar',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description: 'Coe para uma Taça de Coquetel gelada',
          },
          {
            order: 1,
            description:
              'Bata todos os ingredientes no liquidificador com 1 ou 2 pás de gelo até adquirir uma textura cremosa',
          },
        ],
        categories: ['frozen', 'tropicais'],
        instructions: [],
      },
      {
        id: '6f16f1b3-d11e-467c-949e-d3e7e9644bc0',
        oldId: 433,
        name: 'Christmas Cheer',
        calories: 173,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Christmas Cheer é um coquetel maravilhoso. Ótimo para os dias quentes, a combinação dos ingredientes é perfeita.',
        decoration: null,
        ingredients: [
          {
            order: 2,
            quantity: '1/2',
            unitOfMeasurement: null,
            ingredientType: 'Maracujá',
          },
          {
            order: 4,
            quantity: '120',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Cranberry',
          },
          {
            order: 3,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Pêssego',
          },
          {
            order: 1,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Vodca',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Bata todos os ingredientes em uma coqueteleira com gelo',
          },
          {
            order: 2,
            description:
              'Coe para uma taça de Coquetel gelada ou outro copo de sua preferência',
          },
        ],
        categories: ['tropicais'],
        instructions: [],
      },
      {
        id: '772cf5db-1969-45a7-aa8b-ed5150510afe',
        oldId: 299,
        name: 'The French Cosmo',
        calories: 193,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'The French Cosmo é um coquetel delicioso. Seu sabor é adocicado e bem suave. O gosto do abacaxi se destaca.',
        decoration: 'Folha ou triângulo de Abacaxi para decorar',
        ingredients: [
          {
            order: 2,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Cassis',
          },
          {
            order: 1,
            quantity: '45',
            unitOfMeasurement: 'ml',
            ingredientType: 'Vodca',
          },
          {
            order: 3,
            quantity: '90',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Abacaxi',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description: 'Coe para uma taça de Coquetel gelada',
          },
          {
            order: 1,
            description:
              'Bata todos os ingredientes em uma coqueteleira com gelo',
          },
          {
            order: 3,
            description: 'Decore com a folha de abacaxi',
          },
        ],
        categories: ['tropicais'],
        instructions: [],
      },
      {
        id: 'e3d65555-3db5-435a-a6f0-14d5b62fddad',
        oldId: 434,
        name: 'Pink Iced Summer',
        calories: 148,
        alcoholicContent: 'ZERO',
        difficulty: 'EASY',
        description:
          'O Pink Iced Summer é gostoso e bem refrescante. Seu sabor é adocicado na medida certa.',
        decoration: 'Triângulo de Abacaxi para decorar',
        ingredients: [
          {
            order: 3,
            quantity: '150',
            unitOfMeasurement: 'ml',
            ingredientType: 'Limonada',
          },
          {
            order: 2,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Abacaxi',
          },
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Laranja',
          },
          {
            order: 4,
            quantity: '1',
            unitOfMeasurement: 'splash',
            ingredientType: 'Grenadine',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description: 'Monte o coquetel direto no copo Highball com gelo',
          },
          {
            order: 2,
            description: 'Mexa bem',
          },
        ],
        categories: ['semalcool'],
        instructions: [],
      },
    ],
  },
  {
    id: 'c24707ca-123b-4df4-8011-afbf1b0aa1ce',
    oldId: 4,
    type: 'SPECIAL_OCCASION',
    title: 'PÁSCOA',
    subtitle:
      'Nosso coelhinho separou os melhores drinques com chocolate para você saborear nesta Páscoa',
    description:
      'Nosso coelhinho separou os melhores drinques com chocolate para você saborear nesta Páscoa',
    drinks: [
      {
        id: '0086266c-2087-404a-b6fa-1b06a6655cef',
        oldId: 174,
        name: 'Choconhaque',
        calories: 491,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Choconhaque é um coquetel magnífico. O seu sabor é delicioso e ideal para ser tomado a beira da lareira.',
        decoration: null,
        ingredients: [
          {
            order: 4,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Canela em pó',
          },
          {
            order: 1,
            quantity: '60',
            unitOfMeasurement: 'ml',
            ingredientType: 'Brandy (Conhaque)',
          },
          {
            order: 5,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Noz-moscada em pó',
          },
          {
            order: 3,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Chantilly',
          },
          {
            order: 2,
            quantity: '150',
            unitOfMeasurement: 'ml',
            ingredientType: 'Chocolate quente',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Coloque o brandy e o chocolate em uma caneca para coquetéis quentes',
          },
          {
            order: 2,
            description: 'Faça um espiral de Chantilly',
          },
          {
            order: 3,
            description:
              'Polvilhe canela em pó e Noz-moscada no espiral de Chantilly',
          },
        ],
        categories: ['quentes'],
        instructions: [
          {
            id: 'da3cc010-bb6b-4484-a886-f7f988d0d510',
            oldId: 6,
            title: 'Chocolate quente e Calda de chocolate',
            subtitle:
              'Veja aqui como preparar uma receita fácil e rápida de chocolate quente e também uma deliciosa calda de chocolate para usar em seus coquetéis.',
            description:
              '<p class="p">Existem diversas receitas de chocolate quente, com diferentes tipos de ingredientes como canela, cacau, amido de milho, menta e etc. Porém, para que o sabor original do coquetel não seja alterado, o ideal é preparar um chocolate quente básico.</p>\n\n<p class="p">Abaixo está uma receita muito fácil e rápida de ser preparada, e também uma receita de calda de chocolate muito usada em coquetéis quentes.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Chocolate Quente</h3>\n<p class="p-no-margin">&nbsp;</p>\n\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 1 litro de leite</p>\n<p class="p">• 300g chocolate ao leite</p>\n\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Leve o leite ao fogo tomando cuidado para que ele não ferva. Adicione o chocolate picado e mexa até dissolver.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Calda de Chocolate</h3>\n<p class="p-no-margin">&nbsp;</p>\n\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 1 1/2 xícara de chá (330g) de açúcar</p>\n<p class="p-no-margin">• 1 xícara de chá (220g) de cacau em pó</p>\n<p class="p-no-margin">• 1 pitada de sal</p>\n<p class="p-no-margin">• 1 xícara de chá (250ml) de água</p>\n<p class="p">• 2 colheres de chá (10ml) de essência de baunilha</p>\n\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p-no-margin">• Em uma panela, misture bem o açúcar, o cacau em pó e o sal. Aos poucos, acrescente a água, mexendo sempre, até os ingredientes ficarem incorporados.</p>\n<p class="p-no-margin">• Leve ao fogo médio, mexendo sempre, até ferver.</p>\n<p class="p-no-margin">• Deixe ferver por 3 minutos, mexendo sempre. Abaixe o fogo caso a mistura comece a subir e derramar.</p>\n<p class="p-no-margin">• Retire do fogo e coloque em uma jarra com capacidade para 750ml ou mais.</p>\n<p class="p-no-margin">• Deixe esfriar um pouco e leve para gelar, sem cobrir, até esfriar completamente.</p>\n<p class="p-no-margin">• Retire da geladeira, passe por uma peneira fina, acrescente a baunilha, tampe e guarde na geladeira.</p>\n<p class="p">• A calda pode ser mantida na geladeira por até 2 semanas.</p>\n\n<p class="p">Fonte: Livro "Eu amo café", da autora Susan Zimmer.</p>',
          },
        ],
      },
      {
        id: '2138efcf-22a3-4c5c-8748-40d08fbe2dcc',
        oldId: 176,
        name: 'Chocolate Vodca',
        calories: 186,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Chocolate Vodca é um coquetem muito bom. Como a vodca possui um sabor neutro, o chocolate se destaca nesta combinação.',
        decoration: null,
        ingredients: [
          {
            order: 2,
            quantity: '60',
            unitOfMeasurement: 'ml',
            ingredientType: 'Chocolate quente',
          },
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Vodca',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description: 'Bata os ingredientes em uma coqueteleira com gelo',
          },
          {
            order: 2,
            description: 'Coe para uma taça de Coquetel gelada',
          },
        ],
        categories: [],
        instructions: [],
      },
      {
        id: '7ccb21c2-bf20-44ba-9d99-682a76d2ea06',
        oldId: 175,
        name: 'Chocolate Mint',
        calories: 559,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Chocolate Mint é extremamente delicioso. O sabor da menta casa perfeitamente com o Chocolate.',
        decoration: null,
        ingredients: [
          {
            order: 2,
            quantity: '240',
            unitOfMeasurement: 'ml',
            ingredientType: 'Chocolate quente',
          },
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Creme de Menta',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Coloque o Creme de Menta em uma caneca para coquetéis quentes',
          },
          {
            order: 2,
            description: 'Complete com Chocolate',
          },
        ],
        categories: ['quentes'],
        instructions: [
          {
            id: 'da3cc010-bb6b-4484-a886-f7f988d0d510',
            oldId: 6,
            title: 'Chocolate quente e Calda de chocolate',
            subtitle:
              'Veja aqui como preparar uma receita fácil e rápida de chocolate quente e também uma deliciosa calda de chocolate para usar em seus coquetéis.',
            description:
              '<p class="p">Existem diversas receitas de chocolate quente, com diferentes tipos de ingredientes como canela, cacau, amido de milho, menta e etc. Porém, para que o sabor original do coquetel não seja alterado, o ideal é preparar um chocolate quente básico.</p>\n\n<p class="p">Abaixo está uma receita muito fácil e rápida de ser preparada, e também uma receita de calda de chocolate muito usada em coquetéis quentes.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Chocolate Quente</h3>\n<p class="p-no-margin">&nbsp;</p>\n\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 1 litro de leite</p>\n<p class="p">• 300g chocolate ao leite</p>\n\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Leve o leite ao fogo tomando cuidado para que ele não ferva. Adicione o chocolate picado e mexa até dissolver.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Calda de Chocolate</h3>\n<p class="p-no-margin">&nbsp;</p>\n\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 1 1/2 xícara de chá (330g) de açúcar</p>\n<p class="p-no-margin">• 1 xícara de chá (220g) de cacau em pó</p>\n<p class="p-no-margin">• 1 pitada de sal</p>\n<p class="p-no-margin">• 1 xícara de chá (250ml) de água</p>\n<p class="p">• 2 colheres de chá (10ml) de essência de baunilha</p>\n\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p-no-margin">• Em uma panela, misture bem o açúcar, o cacau em pó e o sal. Aos poucos, acrescente a água, mexendo sempre, até os ingredientes ficarem incorporados.</p>\n<p class="p-no-margin">• Leve ao fogo médio, mexendo sempre, até ferver.</p>\n<p class="p-no-margin">• Deixe ferver por 3 minutos, mexendo sempre. Abaixe o fogo caso a mistura comece a subir e derramar.</p>\n<p class="p-no-margin">• Retire do fogo e coloque em uma jarra com capacidade para 750ml ou mais.</p>\n<p class="p-no-margin">• Deixe esfriar um pouco e leve para gelar, sem cobrir, até esfriar completamente.</p>\n<p class="p-no-margin">• Retire da geladeira, passe por uma peneira fina, acrescente a baunilha, tampe e guarde na geladeira.</p>\n<p class="p">• A calda pode ser mantida na geladeira por até 2 semanas.</p>\n\n<p class="p">Fonte: Livro "Eu amo café", da autora Susan Zimmer.</p>',
          },
        ],
      },
      {
        id: '8cfda4c1-3418-47ca-be9c-e9b61ec3b937',
        oldId: 338,
        name: 'Chocolate Explosion',
        calories: 465,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Chocolate Explosion é um coquetel delicioso. Como seu nome sugere, seu sabor é todo a base de chocolate.',
        decoration: 'Chantilly e Chocolate ralado para decorar',
        ingredients: [
          {
            order: 6,
            quantity: '1',
            unitOfMeasurement: null,
            ingredientType: 'bolacha Negresco',
          },
          {
            order: 5,
            quantity: '2',
            unitOfMeasurement: null,
            ingredientType: 'Bis',
          },
          {
            order: 4,
            quantity: '2',
            unitOfMeasurement: 'bolas',
            ingredientType: 'Sorvete de Creme',
          },
          {
            order: 2,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Amarula',
          },
          {
            order: 1,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Vodca',
          },
          {
            order: 3,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Chocolate',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Bata todos os ingredientes no liquidificador com 1 ou 2 pás de gelo até adquirir uma textura cremosa',
          },
          {
            order: 2,
            description: 'Coe para um copo Hurricane ou outro de sua escolha',
          },
        ],
        categories: ['frozen', 'tropicais'],
        instructions: [],
      },
      {
        id: 'd161fdfe-f139-4b22-b1fc-0cc8992ed929',
        oldId: 333,
        name: 'Barnamint Baileys',
        calories: 675,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Barnamint Baileys é um coquetel delicioso. A combinação da menta com o chocolate é fantástica.',
        decoration: 'Cobertura de chocolate, Chantilly e Bolacha para decorar',
        ingredients: [
          {
            order: 3,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Half and Half',
          },
          {
            order: 4,
            quantity: '2',
            unitOfMeasurement: 'bolas',
            ingredientType: 'Sorvete de Creme',
          },
          {
            order: 2,
            quantity: '22',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Menta',
          },
          {
            order: 5,
            quantity: '2',
            unitOfMeasurement: null,
            ingredientType: 'bolachas Negresco',
          },
          {
            order: 1,
            quantity: '45',
            unitOfMeasurement: 'ml',
            ingredientType: 'Bailey´s Irish Cream',
          },
        ],
        preparationSteps: [
          {
            order: 3,
            description: 'Coe para o copo Hurricane ou outro de sua escolha',
          },
          {
            order: 2,
            description: 'Coloque a cobertura de chocolate na parede do copo',
          },
          {
            order: 4,
            description: 'Decore com o Chantilly e a Bolacha',
          },
          {
            order: 1,
            description:
              'Bata todos os ingredientes no liquidificador com 1 ou 2 pás de gelo até adquirir uma textura cremosa',
          },
        ],
        categories: ['frozen', 'tropicais'],
        instructions: [
          {
            id: '0654b45a-8dde-4764-934b-d7fc74208a41',
            oldId: 1,
            title: 'Mixes - Modo de preparo',
            subtitle:
              'Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo.',
            description:
              '<p class="p">Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo. Estes mixes são feitos de frutas, leite e outros ingredientes, e na maioria das vezes são batidos no liquidificador.</p>\n<p class="p">Caso vá preparar mais de um mix, fique atento à ordem: é aconselhável preparar primeiro os que não contém leite condensado e creme de leite, ingredientes que sujam muito mais o liquidificador e requerem limpeza extra. Isto irá atrasar o seu trabalho.</p>\n<p class="p">Obs: As medidas utilizadas aqui são apenas exemplos. A quantidade que você vai usar dependerá do número de coquetéis a serem servidos.</p>\n<hr class="hr" />\n<h3 class="h3">Halk and Half</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Creme de leite</p>\n<p class="p">• 500 ml Leite</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de limão (Sweet and Sour)</h3>\n<p class="p">Um dos mixes mais utilizados no preparo de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 250 ml Limão espremido</p>\n<p class="p-no-margin">• 750 ml Água</p>\n<p class="p">• Aprox. 1 xícara de chá de Açúcar</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Côco</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Leite condensado</p>\n<p class="p">• 500 ml Leite de côco</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Morango</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 caixas de Morango</p>\n<p class="p">• Aprox. 50 ml Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os morangos no liquidificador e vá adicionando água até adquirir uma consistência um pouco mais líquida (cremosa)</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Pêssego</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p">• 1 lata de Pêssego em calda</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata o pêssego no liquidificador junto com a calda</p>\n<hr class="hr" />\n<h3 class="h3">Simple Syrup</h3>\n<p class="p">Utilizado em vários tipos de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 xícaras de chá de Açúcar</p>\n<p class="p">• 1 xícara de chá de Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Aqueça a água em uma panela no fogo baixo. Quando estiver quente adicione o açúcar e deixe-o dissolver. Remova a panela antes da água ferver e deixe-a esfriar até a temperatura ambiente. Depois ponha o líquido em um recipiente e armazene na geladeira.</p>',
          },
        ],
      },
      {
        id: 'd9275399-e605-435e-8ce3-d21ae6fbd6c8',
        oldId: 173,
        name: 'Mountain Melter',
        calories: 337,
        alcoholicContent: 'MEDIUM',
        difficulty: 'EASY',
        description:
          'O Mountain Melter é um coquetel muito bom. O gosto da Tequila quase não aparece e a canela em pó é fundamental para o sabor.',
        decoration: 'Chantilly e Canela em pó para decorar',
        ingredients: [
          {
            order: 3,
            quantity: '90',
            unitOfMeasurement: 'ml',
            ingredientType: 'Chocolate quente',
          },
          {
            order: 1,
            quantity: '45',
            unitOfMeasurement: 'ml',
            ingredientType: 'Tequila Ouro',
          },
          {
            order: 2,
            quantity: '1',
            unitOfMeasurement: 'splash',
            ingredientType: 'Triple Sec (Licor de laranja)',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description: 'Faça o espiral com o Chantilly',
          },
          {
            order: 3,
            description: 'Polvilhe canela em pó no espiral de Chantilly',
          },
          {
            order: 1,
            description:
              'Coloque todos os ingredientes em uma caneca para coquetéis quentes',
          },
        ],
        categories: ['quentes'],
        instructions: [
          {
            id: 'da3cc010-bb6b-4484-a886-f7f988d0d510',
            oldId: 6,
            title: 'Chocolate quente e Calda de chocolate',
            subtitle:
              'Veja aqui como preparar uma receita fácil e rápida de chocolate quente e também uma deliciosa calda de chocolate para usar em seus coquetéis.',
            description:
              '<p class="p">Existem diversas receitas de chocolate quente, com diferentes tipos de ingredientes como canela, cacau, amido de milho, menta e etc. Porém, para que o sabor original do coquetel não seja alterado, o ideal é preparar um chocolate quente básico.</p>\n\n<p class="p">Abaixo está uma receita muito fácil e rápida de ser preparada, e também uma receita de calda de chocolate muito usada em coquetéis quentes.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Chocolate Quente</h3>\n<p class="p-no-margin">&nbsp;</p>\n\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 1 litro de leite</p>\n<p class="p">• 300g chocolate ao leite</p>\n\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Leve o leite ao fogo tomando cuidado para que ele não ferva. Adicione o chocolate picado e mexa até dissolver.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Calda de Chocolate</h3>\n<p class="p-no-margin">&nbsp;</p>\n\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 1 1/2 xícara de chá (330g) de açúcar</p>\n<p class="p-no-margin">• 1 xícara de chá (220g) de cacau em pó</p>\n<p class="p-no-margin">• 1 pitada de sal</p>\n<p class="p-no-margin">• 1 xícara de chá (250ml) de água</p>\n<p class="p">• 2 colheres de chá (10ml) de essência de baunilha</p>\n\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p-no-margin">• Em uma panela, misture bem o açúcar, o cacau em pó e o sal. Aos poucos, acrescente a água, mexendo sempre, até os ingredientes ficarem incorporados.</p>\n<p class="p-no-margin">• Leve ao fogo médio, mexendo sempre, até ferver.</p>\n<p class="p-no-margin">• Deixe ferver por 3 minutos, mexendo sempre. Abaixe o fogo caso a mistura comece a subir e derramar.</p>\n<p class="p-no-margin">• Retire do fogo e coloque em uma jarra com capacidade para 750ml ou mais.</p>\n<p class="p-no-margin">• Deixe esfriar um pouco e leve para gelar, sem cobrir, até esfriar completamente.</p>\n<p class="p-no-margin">• Retire da geladeira, passe por uma peneira fina, acrescente a baunilha, tampe e guarde na geladeira.</p>\n<p class="p">• A calda pode ser mantida na geladeira por até 2 semanas.</p>\n\n<p class="p">Fonte: Livro "Eu amo café", da autora Susan Zimmer.</p>',
          },
        ],
      },
    ],
  },
  {
    id: '92c9f0e6-38f3-463e-9f59-f03c9f7b02cd',
    oldId: 6,
    type: 'GENERAL',
    title: 'TOP 10 DRINQUES TROPICAIS',
    subtitle:
      'Confira nossa lista dos 10 melhores drinques tropicais para esse verão. Não deixe de experimentar. Confira já e divirta-se!',
    description:
      'Está chegando a estação mais desejada do ano, o verão. Férias, calor, sol, praia e...festa! Por isso separamos uma lista de coquetéis que com certeza vai melhorar o seu verão. Não deixe de experimentar. Confira já e divirta-se!',
    drinks: [
      {
        id: '08bd3ffb-397c-45df-900e-efc7f8b56329',
        oldId: 12,
        name: 'Blue Lagoon (Lagoa Azul)',
        calories: 248,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Blue Lagoon é um coquetel refrescante. Os seus sabores cítricos, combinados com sua beleza e baixo teor alcoólico o fazem ser apreciado em diversos ambientes, como restaurantes, bares, baladas, etc.',
        decoration: 'Rodela de limão para decorar',
        ingredients: [
          {
            order: 3,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Mix de Limão (Sweet and Sour)',
          },
          {
            order: 4,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Soda Limonada',
          },
          {
            order: 1,
            quantity: '37',
            unitOfMeasurement: 'ml',
            ingredientType: 'Vodca',
          },
          {
            order: 2,
            quantity: '22',
            unitOfMeasurement: 'ml',
            ingredientType: 'Curaçau Blue',
          },
        ],
        preparationSteps: [
          {
            order: 3,
            description: 'Complete com Soda limonada',
          },
          {
            order: 1,
            description:
              'Bata os ingredientes em uma coqueteleira com gelo exceto a Soda',
          },
          {
            order: 2,
            description: 'Passe tudo para um copo Highball',
          },
        ],
        categories: ['tropicais'],
        instructions: [
          {
            id: '0654b45a-8dde-4764-934b-d7fc74208a41',
            oldId: 1,
            title: 'Mixes - Modo de preparo',
            subtitle:
              'Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo.',
            description:
              '<p class="p">Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo. Estes mixes são feitos de frutas, leite e outros ingredientes, e na maioria das vezes são batidos no liquidificador.</p>\n<p class="p">Caso vá preparar mais de um mix, fique atento à ordem: é aconselhável preparar primeiro os que não contém leite condensado e creme de leite, ingredientes que sujam muito mais o liquidificador e requerem limpeza extra. Isto irá atrasar o seu trabalho.</p>\n<p class="p">Obs: As medidas utilizadas aqui são apenas exemplos. A quantidade que você vai usar dependerá do número de coquetéis a serem servidos.</p>\n<hr class="hr" />\n<h3 class="h3">Halk and Half</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Creme de leite</p>\n<p class="p">• 500 ml Leite</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de limão (Sweet and Sour)</h3>\n<p class="p">Um dos mixes mais utilizados no preparo de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 250 ml Limão espremido</p>\n<p class="p-no-margin">• 750 ml Água</p>\n<p class="p">• Aprox. 1 xícara de chá de Açúcar</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Côco</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Leite condensado</p>\n<p class="p">• 500 ml Leite de côco</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Morango</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 caixas de Morango</p>\n<p class="p">• Aprox. 50 ml Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os morangos no liquidificador e vá adicionando água até adquirir uma consistência um pouco mais líquida (cremosa)</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Pêssego</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p">• 1 lata de Pêssego em calda</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata o pêssego no liquidificador junto com a calda</p>\n<hr class="hr" />\n<h3 class="h3">Simple Syrup</h3>\n<p class="p">Utilizado em vários tipos de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 xícaras de chá de Açúcar</p>\n<p class="p">• 1 xícara de chá de Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Aqueça a água em uma panela no fogo baixo. Quando estiver quente adicione o açúcar e deixe-o dissolver. Remova a panela antes da água ferver e deixe-a esfriar até a temperatura ambiente. Depois ponha o líquido em um recipiente e armazene na geladeira.</p>',
          },
        ],
      },
      {
        id: '32937adb-f379-44cb-9065-31d9dd6682bf',
        oldId: 104,
        name: 'Strawberry And Cream',
        calories: 265,
        alcoholicContent: 'LOW',
        difficulty: 'MEDIUM',
        description:
          'O Strawberry and Cream é um coquetel refrescante bem doce. Seu sabor lembra um milk shake de morango.',
        decoration: '3 Morangos (1 para decorar)',
        ingredients: [
          {
            order: 2,
            quantity: '60',
            unitOfMeasurement: 'ml',
            ingredientType: 'Half and Half',
          },
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Morango',
          },
          {
            order: 3,
            quantity: '1',
            unitOfMeasurement: 'colher de bar',
            ingredientType: 'Açúcar',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Bata todos os ingredientes no liquidificador com 1 ou 2 pás de gelo até adquirir uma textura cremosa',
          },
          {
            order: 2,
            description: 'Coe para uma Taça Parfait',
          },
        ],
        categories: ['frozen', 'tropicais'],
        instructions: [
          {
            id: '0654b45a-8dde-4764-934b-d7fc74208a41',
            oldId: 1,
            title: 'Mixes - Modo de preparo',
            subtitle:
              'Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo.',
            description:
              '<p class="p">Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo. Estes mixes são feitos de frutas, leite e outros ingredientes, e na maioria das vezes são batidos no liquidificador.</p>\n<p class="p">Caso vá preparar mais de um mix, fique atento à ordem: é aconselhável preparar primeiro os que não contém leite condensado e creme de leite, ingredientes que sujam muito mais o liquidificador e requerem limpeza extra. Isto irá atrasar o seu trabalho.</p>\n<p class="p">Obs: As medidas utilizadas aqui são apenas exemplos. A quantidade que você vai usar dependerá do número de coquetéis a serem servidos.</p>\n<hr class="hr" />\n<h3 class="h3">Halk and Half</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Creme de leite</p>\n<p class="p">• 500 ml Leite</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de limão (Sweet and Sour)</h3>\n<p class="p">Um dos mixes mais utilizados no preparo de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 250 ml Limão espremido</p>\n<p class="p-no-margin">• 750 ml Água</p>\n<p class="p">• Aprox. 1 xícara de chá de Açúcar</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Côco</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Leite condensado</p>\n<p class="p">• 500 ml Leite de côco</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Morango</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 caixas de Morango</p>\n<p class="p">• Aprox. 50 ml Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os morangos no liquidificador e vá adicionando água até adquirir uma consistência um pouco mais líquida (cremosa)</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Pêssego</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p">• 1 lata de Pêssego em calda</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata o pêssego no liquidificador junto com a calda</p>\n<hr class="hr" />\n<h3 class="h3">Simple Syrup</h3>\n<p class="p">Utilizado em vários tipos de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 xícaras de chá de Açúcar</p>\n<p class="p">• 1 xícara de chá de Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Aqueça a água em uma panela no fogo baixo. Quando estiver quente adicione o açúcar e deixe-o dissolver. Remova a panela antes da água ferver e deixe-a esfriar até a temperatura ambiente. Depois ponha o líquido em um recipiente e armazene na geladeira.</p>',
          },
        ],
      },
      {
        id: '39915a79-64a9-4812-9ce3-09fbb473418d',
        oldId: 293,
        name: 'Caribbean Splash',
        calories: 267,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Caribbean Splash é um coquetel magnífico. Sua textura cremosa e seu sabor suave o torna perfeito para dias de calor. É também uma ótima pedida para quem deseja fugir dos coquetéis tradicionais. Vale a pena conferir.',
        decoration: 'Rodela de banana para decorar (opcional)',
        ingredients: [
          {
            order: 2,
            quantity: '15',
            unitOfMeasurement: 'ml',
            ingredientType: 'Licor de Pêssego',
          },
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Malibu',
          },
          {
            order: 4,
            quantity: '120',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Laranja',
          },
          {
            order: 3,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Pedaço de 10 cm de uma Banana',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Bata todos os ingredientes no liquidificador com 1 ou 2 pás de gelo até obter uma consistência cremosa',
          },
          {
            order: 2,
            description: 'Coe para um Cálice de Vinho',
          },
          {
            order: 3,
            description: 'Decore com a rodela de banana',
          },
        ],
        categories: ['frozen', 'tropicais'],
        instructions: [],
      },
      {
        id: '3f1af478-020a-4b3e-8316-ab7e90908923',
        oldId: 100,
        name: 'Adios Muchachos',
        calories: 144,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Adios Muchachos é um coquetel bem refrescante. Seu sabor é muito suave e o gosto do morango se destaca.',
        decoration: 'Triângulo de Abacaxi e Morango para decorar',
        ingredients: [
          {
            order: 4,
            quantity: '22',
            unitOfMeasurement: 'ml',
            ingredientType: 'Mix de Limão (Sweet and Sour)',
          },
          {
            order: 5,
            quantity: '22',
            unitOfMeasurement: 'ml',
            ingredientType: 'Mix de Morango',
          },
          {
            order: 3,
            quantity: '45',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Abacaxi',
          },
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Vodca',
          },
          {
            order: 2,
            quantity: '45',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Laranja',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description: 'Monte o coquetel direto no copo Highball com gelo',
          },
          {
            order: 2,
            description: 'Mexa bem',
          },
        ],
        categories: ['tropicais'],
        instructions: [
          {
            id: '0654b45a-8dde-4764-934b-d7fc74208a41',
            oldId: 1,
            title: 'Mixes - Modo de preparo',
            subtitle:
              'Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo.',
            description:
              '<p class="p">Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo. Estes mixes são feitos de frutas, leite e outros ingredientes, e na maioria das vezes são batidos no liquidificador.</p>\n<p class="p">Caso vá preparar mais de um mix, fique atento à ordem: é aconselhável preparar primeiro os que não contém leite condensado e creme de leite, ingredientes que sujam muito mais o liquidificador e requerem limpeza extra. Isto irá atrasar o seu trabalho.</p>\n<p class="p">Obs: As medidas utilizadas aqui são apenas exemplos. A quantidade que você vai usar dependerá do número de coquetéis a serem servidos.</p>\n<hr class="hr" />\n<h3 class="h3">Halk and Half</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Creme de leite</p>\n<p class="p">• 500 ml Leite</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de limão (Sweet and Sour)</h3>\n<p class="p">Um dos mixes mais utilizados no preparo de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 250 ml Limão espremido</p>\n<p class="p-no-margin">• 750 ml Água</p>\n<p class="p">• Aprox. 1 xícara de chá de Açúcar</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Côco</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Leite condensado</p>\n<p class="p">• 500 ml Leite de côco</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Morango</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 caixas de Morango</p>\n<p class="p">• Aprox. 50 ml Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os morangos no liquidificador e vá adicionando água até adquirir uma consistência um pouco mais líquida (cremosa)</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Pêssego</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p">• 1 lata de Pêssego em calda</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata o pêssego no liquidificador junto com a calda</p>\n<hr class="hr" />\n<h3 class="h3">Simple Syrup</h3>\n<p class="p">Utilizado em vários tipos de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 xícaras de chá de Açúcar</p>\n<p class="p">• 1 xícara de chá de Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Aqueça a água em uma panela no fogo baixo. Quando estiver quente adicione o açúcar e deixe-o dissolver. Remova a panela antes da água ferver e deixe-a esfriar até a temperatura ambiente. Depois ponha o líquido em um recipiente e armazene na geladeira.</p>',
          },
        ],
      },
      {
        id: '44982dee-0064-4960-b553-f26456839f25',
        oldId: 41,
        name: 'Tom Collins',
        calories: 146,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Tom Collins é um coquetel refrescante e delicioso. Possui baixo teor alcoólico e a combinação do Gin com o limão é extraordinária.',
        decoration: 'Squeeze de Limão para decorar',
        ingredients: [
          {
            order: 2,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Mix de Limão (Sweet and Sour)',
          },
          {
            order: 3,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Água com gás',
          },
          {
            order: 1,
            quantity: '60',
            unitOfMeasurement: 'ml',
            ingredientType: 'Gin',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Bata os ingredientes em uma coqueteleira com gelo exceto a Água com gás',
          },
          {
            order: 3,
            description: 'Mexa bem',
          },
          {
            order: 2,
            description:
              'Passe tudo para um copo Highball e complete com Água com gás',
          },
        ],
        categories: ['tropicais', 'classicos'],
        instructions: [
          {
            id: '0654b45a-8dde-4764-934b-d7fc74208a41',
            oldId: 1,
            title: 'Mixes - Modo de preparo',
            subtitle:
              'Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo.',
            description:
              '<p class="p">Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo. Estes mixes são feitos de frutas, leite e outros ingredientes, e na maioria das vezes são batidos no liquidificador.</p>\n<p class="p">Caso vá preparar mais de um mix, fique atento à ordem: é aconselhável preparar primeiro os que não contém leite condensado e creme de leite, ingredientes que sujam muito mais o liquidificador e requerem limpeza extra. Isto irá atrasar o seu trabalho.</p>\n<p class="p">Obs: As medidas utilizadas aqui são apenas exemplos. A quantidade que você vai usar dependerá do número de coquetéis a serem servidos.</p>\n<hr class="hr" />\n<h3 class="h3">Halk and Half</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Creme de leite</p>\n<p class="p">• 500 ml Leite</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de limão (Sweet and Sour)</h3>\n<p class="p">Um dos mixes mais utilizados no preparo de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 250 ml Limão espremido</p>\n<p class="p-no-margin">• 750 ml Água</p>\n<p class="p">• Aprox. 1 xícara de chá de Açúcar</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Côco</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Leite condensado</p>\n<p class="p">• 500 ml Leite de côco</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Morango</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 caixas de Morango</p>\n<p class="p">• Aprox. 50 ml Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os morangos no liquidificador e vá adicionando água até adquirir uma consistência um pouco mais líquida (cremosa)</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Pêssego</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p">• 1 lata de Pêssego em calda</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata o pêssego no liquidificador junto com a calda</p>\n<hr class="hr" />\n<h3 class="h3">Simple Syrup</h3>\n<p class="p">Utilizado em vários tipos de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 xícaras de chá de Açúcar</p>\n<p class="p">• 1 xícara de chá de Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Aqueça a água em uma panela no fogo baixo. Quando estiver quente adicione o açúcar e deixe-o dissolver. Remova a panela antes da água ferver e deixe-a esfriar até a temperatura ambiente. Depois ponha o líquido em um recipiente e armazene na geladeira.</p>',
          },
          {
            id: '54e7afbe-126e-4900-b5d2-ed1bd9c15de9',
            oldId: 2,
            title: 'Decorações básicas',
            subtitle:
              'Surgiu alguma dúvida quanto as decorações de nossos coquetéis, tais como Twist, Zest ou Squeeze? Clique aqui e veja como são feitas.',
            description:
              '<p class="p">Surgiu alguma dúvida quanto as decorações de nossos coquetéis, tais como Twist, Zest ou Squeeze? Não se preocupe, aqui você descobre quais são elas, como são feitas e para que servem.</p>\n\n<p class="p">Obs: Sempre prepare as decorações antes de iniciar o preparo dos coquetéis. Algumas demoram um pouco para serem elaboradas, podendo assim esquentar ou esfriar seu coquetel durante o processo.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Twist / Zest</h3>\n\n<p class="p">O Twist e o Zest são praticamente a mesma coisa. Ambos são feitos com a casca da fruta e a única diferença entre eles é que, no caso do Twist, a decoração vai junto com o coquetel e no Zest, não. Veja abaixo mais detalhes:</p>\n\n<p class="p">Primeiro, lave a fruta e corte um pequeno pedaço da casca:</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/2/01.jpg" /></p>\n\n<p class="p">O próximo passo é melhorar sua aparência. Corte todos os lados deixando os cantos retos como nas fotos abaixo:</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/2/02.jpg" /></p>\n\n<p class="p"><img class="image-border" src="/images/instructions/2/03.jpg" /></p>\n\n<p class="p">Quando o coquetel estiver pronto, torça a casca em cima dele para extrair o líquido:</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/2/04.jpg" /></p>\n\n<p class="p">Neste momento é que aparece a diferença entre as duas decorações. Se você estiver fazendo um Twist, jogue a casca torcida dentro do coquetel e sirva. Caso esteja fazendo um Zest, dispense a casca e sirva o coquetel sem ela.</p>\n\n<hr class="hr" />\n\n<h3 class="h3">Squeeze</h3>\n\n<p class="p">O Squeeze é o mais fácil de ser feito. Usando o limão como exemplo, corte-o em 8 pedaços, primeiro no meio e depois as metades em 4 pedaços cada.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/2/squezze1.jpg" /></p>\n\n<p class="p"><img class="image-border" src="/images/instructions/2/squezze2.jpg" /></p>\n\n<p class="p">Quando o coquetel estiver pronto, esprema um desses pedaços dentro do coquetel e depois jogue-o no mesmo.</p>\n\n<p class="p"><img class="image-border" src="/images/instructions/2/squezze3.jpg" /></p>\n\n<p class="p"><img class="image-border" src="/images/instructions/2/squezze4.jpg" /></p>',
          },
        ],
      },
      {
        id: '55d9b455-8528-4afa-a381-54191dac79d5',
        oldId: 24,
        name: 'Mojito',
        calories: 198,
        alcoholicContent: 'LOW',
        difficulty: 'MEDIUM',
        description:
          'O Mojito é um coquetel refrescante conhecido mundialmente. Este clássico é um dos poucos feitos com hortelã fresca, o que o torna único. Seu sabor é suave e delicioso, conquistando até mesmo quem prefere bebidas mais fortes e amargas.',
        decoration: null,
        ingredients: [
          {
            order: 2,
            quantity: '1/2',
            unitOfMeasurement: null,
            ingredientType: 'Limão cortado em pedaços',
          },
          {
            order: 3,
            quantity: '1',
            unitOfMeasurement: 'folhas',
            ingredientType: 'Hortelã',
          },
          {
            order: 5,
            quantity: null,
            unitOfMeasurement: null,
            ingredientType: 'Completar com Água com gás',
          },
          {
            order: 4,
            quantity: '1',
            unitOfMeasurement: 'colher de bar',
            ingredientType: 'Açúcar',
          },
          {
            order: 1,
            quantity: '45',
            unitOfMeasurement: 'ml',
            ingredientType: 'Rum Branco',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description: 'Complete o copo com gelo e adicione o Rum',
          },
          {
            order: 1,
            description:
              'Macere as folhas de hortelã com o limão e o açúcar em um copo Highball',
          },
          {
            order: 3,
            description: 'Complete com Água com gás e misture os ingredientes',
          },
        ],
        categories: ['tropicais', 'classicos'],
        instructions: [],
      },
      {
        id: '65607db5-9cd0-4e0d-a736-fc84c6e4bbbb',
        oldId: 36,
        name: 'Blue Hawaiian',
        calories: 268,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Blue Hawaiian é um coquetel muito refrescante e saboroso, combinado com sua cor atraente é impossível dizer não.',
        decoration: 'Triângulo de abacaxi e cereja para decorar',
        ingredients: [
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Rum Branco',
          },
          {
            order: 2,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Curaçau Blue',
          },
          {
            order: 3,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Mix de Côco',
          },
          {
            order: 4,
            quantity: '60',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Abacaxi',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description:
              'Coe para um copo Highball de modo que apenas pequenos pedaços de gelo passem para o copo',
          },
          {
            order: 1,
            description:
              'Bata todos os ingredientes no liquidificador com 1 ou 2 pás de gelo até adquirir uma textura cremosa',
          },
        ],
        categories: ['frozen', 'tropicais'],
        instructions: [
          {
            id: '0654b45a-8dde-4764-934b-d7fc74208a41',
            oldId: 1,
            title: 'Mixes - Modo de preparo',
            subtitle:
              'Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo.',
            description:
              '<p class="p">Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo. Estes mixes são feitos de frutas, leite e outros ingredientes, e na maioria das vezes são batidos no liquidificador.</p>\n<p class="p">Caso vá preparar mais de um mix, fique atento à ordem: é aconselhável preparar primeiro os que não contém leite condensado e creme de leite, ingredientes que sujam muito mais o liquidificador e requerem limpeza extra. Isto irá atrasar o seu trabalho.</p>\n<p class="p">Obs: As medidas utilizadas aqui são apenas exemplos. A quantidade que você vai usar dependerá do número de coquetéis a serem servidos.</p>\n<hr class="hr" />\n<h3 class="h3">Halk and Half</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Creme de leite</p>\n<p class="p">• 500 ml Leite</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de limão (Sweet and Sour)</h3>\n<p class="p">Um dos mixes mais utilizados no preparo de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 250 ml Limão espremido</p>\n<p class="p-no-margin">• 750 ml Água</p>\n<p class="p">• Aprox. 1 xícara de chá de Açúcar</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Côco</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Leite condensado</p>\n<p class="p">• 500 ml Leite de côco</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Morango</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 caixas de Morango</p>\n<p class="p">• Aprox. 50 ml Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os morangos no liquidificador e vá adicionando água até adquirir uma consistência um pouco mais líquida (cremosa)</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Pêssego</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p">• 1 lata de Pêssego em calda</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata o pêssego no liquidificador junto com a calda</p>\n<hr class="hr" />\n<h3 class="h3">Simple Syrup</h3>\n<p class="p">Utilizado em vários tipos de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 xícaras de chá de Açúcar</p>\n<p class="p">• 1 xícara de chá de Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Aqueça a água em uma panela no fogo baixo. Quando estiver quente adicione o açúcar e deixe-o dissolver. Remova a panela antes da água ferver e deixe-a esfriar até a temperatura ambiente. Depois ponha o líquido em um recipiente e armazene na geladeira.</p>',
          },
        ],
      },
      {
        id: 'adc784f3-9871-4ada-bbd2-f32313c7436b',
        oldId: 33,
        name: 'Tequila Sunrise',
        calories: 144,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Tequila Sunrise é um coquetel refrescante e delicioso. O suco e o grenadine suavizam o gosto marcante da tequila.',
        decoration: 'Rodela de laranja e cereja para decorar',
        ingredients: [
          {
            order: 2,
            quantity: '90',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Laranja',
          },
          {
            order: 1,
            quantity: '37',
            unitOfMeasurement: 'ml',
            ingredientType: 'Tequila Prata',
          },
          {
            order: 3,
            quantity: '1',
            unitOfMeasurement: 'splash',
            ingredientType: 'Grenadine',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description: 'Monte o coquetel direto no copo Higball com gelo',
          },
          {
            order: 2,
            description: 'Adicione o Grenadine por último',
          },
        ],
        categories: ['tropicais'],
        instructions: [],
      },
      {
        id: 'c99fca7d-1e88-4145-97f1-f76744976db2',
        oldId: 225,
        name: 'Cassis Orange',
        calories: 286,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'O Cassis Orange é muito refrescante. A laranja misturada com o Cassis dá um sabor maravilhoso ao coquetel. Vale a pena experimentar.',
        decoration: null,
        ingredients: [
          {
            order: 1,
            quantity: '60',
            unitOfMeasurement: 'ml',
            ingredientType: 'Creme de Cassis',
          },
          {
            order: 2,
            quantity: '150',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Laranja',
          },
        ],
        preparationSteps: [
          {
            order: 1,
            description:
              'Coloque o suco de laranja em uma taça Parfait com gelo',
          },
          {
            order: 3,
            description:
              'Mexa suavemente de modo que proporcione um efeito degradê ao coquetel',
          },
          {
            order: 2,
            description: 'Adicione o Creme de Cassis',
          },
        ],
        categories: ['tropicais'],
        instructions: [],
      },
      {
        id: 'f3ff14f0-ae8d-4ed0-8762-39b3a7ba2302',
        oldId: 284,
        name: 'Piña Colada',
        calories: 200,
        alcoholicContent: 'LOW',
        difficulty: 'EASY',
        description:
          'Este magnífico drinque Porto Riquenho é um sucesso absoluto. Servido em quase todos os bares, seu sabor refrescante e adocicado o torna um coquetel muito apreciado.',
        decoration: 'Triângulo de Abacaxi e Cereja para decorar',
        ingredients: [
          {
            order: 2,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Mix de Côco',
          },
          {
            order: 1,
            quantity: '30',
            unitOfMeasurement: 'ml',
            ingredientType: 'Rum Branco',
          },
          {
            order: 3,
            quantity: '90',
            unitOfMeasurement: 'ml',
            ingredientType: 'Suco de Abacaxi',
          },
        ],
        preparationSteps: [
          {
            order: 2,
            description: 'Coe para um copo Hurricane',
          },
          {
            order: 3,
            description: 'Decore com a Cereja e o Abacaxi',
          },
          {
            order: 1,
            description:
              'Bata os três primeiros ingredientes no liquidificador com 1 ou 2 pás de gelo, até obter uma textura cremosa',
          },
        ],
        categories: ['frozen', 'tropicais', 'classicos'],
        instructions: [
          {
            id: '0654b45a-8dde-4764-934b-d7fc74208a41',
            oldId: 1,
            title: 'Mixes - Modo de preparo',
            subtitle:
              'Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo.',
            description:
              '<p class="p">Aqui você encontra orientações de como preparar os principais mixes utilizados na elaboração de coquetéis em todo o mundo. Estes mixes são feitos de frutas, leite e outros ingredientes, e na maioria das vezes são batidos no liquidificador.</p>\n<p class="p">Caso vá preparar mais de um mix, fique atento à ordem: é aconselhável preparar primeiro os que não contém leite condensado e creme de leite, ingredientes que sujam muito mais o liquidificador e requerem limpeza extra. Isto irá atrasar o seu trabalho.</p>\n<p class="p">Obs: As medidas utilizadas aqui são apenas exemplos. A quantidade que você vai usar dependerá do número de coquetéis a serem servidos.</p>\n<hr class="hr" />\n<h3 class="h3">Halk and Half</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Creme de leite</p>\n<p class="p">• 500 ml Leite</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de limão (Sweet and Sour)</h3>\n<p class="p">Um dos mixes mais utilizados no preparo de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 250 ml Limão espremido</p>\n<p class="p-no-margin">• 750 ml Água</p>\n<p class="p">• Aprox. 1 xícara de chá de Açúcar</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Côco</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 500 ml Leite condensado</p>\n<p class="p">• 500 ml Leite de côco</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os ingredientes no liquidificador</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Morango</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 caixas de Morango</p>\n<p class="p">• Aprox. 50 ml Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata os morangos no liquidificador e vá adicionando água até adquirir uma consistência um pouco mais líquida (cremosa)</p>\n<hr class="hr" />\n<h3 class="h3">Mix de Pêssego</h3>\n<p class="p">Geralmente utilizado em coquetéis nutritivos.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p">• 1 lata de Pêssego em calda</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Bata o pêssego no liquidificador junto com a calda</p>\n<hr class="hr" />\n<h3 class="h3">Simple Syrup</h3>\n<p class="p">Utilizado em vários tipos de coquetéis.</p>\n<p class="p-no-margin"><strong>Ingredientes:</strong></p>\n<p class="p-no-margin">• 2 xícaras de chá de Açúcar</p>\n<p class="p">• 1 xícara de chá de Água</p>\n<p class="p-no-margin"><strong>Modo de preparo:</strong></p>\n<p class="p">• Aqueça a água em uma panela no fogo baixo. Quando estiver quente adicione o açúcar e deixe-o dissolver. Remova a panela antes da água ferver e deixe-a esfriar até a temperatura ambiente. Depois ponha o líquido em um recipiente e armazene na geladeira.</p>',
          },
        ],
      },
    ],
  },
];
