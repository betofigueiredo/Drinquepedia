import type { Drink } from '@/types/drink';

export const drinks: Array<Drink> = [
  {
    id: '2b557eaa-b7c7-45c9-ab17-a41c6aea074a',
    oldId: 296,
    name: '007',
    calories: 240,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description: 'O 007 é um coquetel forte e seco.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 3,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água com gás',
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
    categories: [],
    instructions: [],
  },
  {
    id: 'f3a98fc5-4cc6-4c9a-85bf-77662345434c',
    oldId: 377,
    name: '50-50 Martini',
    calories: 135,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'O 50-50 Martini é um coquetel forte e seco. Um bom aperitivo para quem gosta de Gin.',
    decoration: 'Azeitona no palito para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 2,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Seco',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Mexa todos os ingredientes em um Mixing Glass com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
      {
        order: 3,
        description: 'Decore com a azeitona',
      },
    ],
    categories: ['martinis'],
    instructions: [],
  },
  {
    id: 'ee741317-8454-42b5-bc1e-7e99ba43c004',
    oldId: 50,
    name: '77 Sunset Strip',
    calories: 184,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O 77 Sunset Strip é um coquetel com o sabor forte porém adocicado. O Suco de Laranja e o Grenadine dão um tom especial na cor do coquetel.',
    decoration: 'Triângulo de abacaxi para decorar',
    ingredients: [
      {
        order: 5,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Abacaxi',
      },
      {
        order: 6,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Água com gás',
      },
      {
        order: 4,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 1,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 7,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Grenadine',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Passe tudo para um copo Highball',
      },
      {
        order: 1,
        description:
          'Bata os ingredientes em uma coqueteleira com gelo exceto a Água com gás e o Grenadine',
      },
      {
        order: 3,
        description: 'Complete com Água com gás',
      },
      {
        order: 4,
        description: 'Adicione o Grenadine por último',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '9821e3f6-b74d-486b-b7b3-cac8ff76f10b',
    oldId: 151,
    name: '99-Park Lane',
    calories: 272,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O 99-Park Lane é um coquetel muito saboroso. A Clara de ovo o deixa bem cremoso, e o sabor da laranja se destaca. O creme de Menta da um toque especial.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Menta verde',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 4,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 5,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Clara de ovo',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma taça Fiesta',
      },
      {
        order: 3,
        description: 'Adicione o Creme de Menta',
      },
      {
        order: 1,
        description:
          'Bata todos os ingredientes em uma coqueteleira com gelo, exceto o Creme de Menta',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '8cead43f-f097-4995-ac0c-333f0af06e8a',
    oldId: 437,
    name: 'A Bumpy Sunrise',
    calories: 155,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description: 'O Bumpy Sunrise é um coquetel gostoso, bem suave.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Grenadine',
      },
      {
        order: 2,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Escuro',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Old-fashioned com gelo',
      },
      {
        order: 2,
        description: 'Coloque o Grenadine por último',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: 'c3b34e91-efc2-419e-b52b-1a4d0b9cb7a3',
    oldId: 438,
    name: 'A Day At The Beach',
    calories: 195,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'A Day At The Beach é um coquetel bem refrescante. Seu sabor é suave.',
    decoration: 'Triângulo de abacaxi e morango para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Amaretto',
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
        ingredientType: 'Malibu',
      },
      {
        order: 4,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Grenadine',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Passe tudo para um copo Highball',
      },
      {
        order: 1,
        description:
          'Bata todos os ingredientes, exceto o Grenadine, em uma coqueteleira com gelo',
      },
      {
        order: 3,
        description: 'Por último, coloque o Grenadine',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: 'fed82042-c7b2-430a-89a0-c6628ea23737',
    oldId: 265,
    name: 'Absinthe Cocktail',
    calories: 122,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'No Absinthe Cocktail, o sabor do Absinto se destaca combinando perfeitamente com o Bénédictine.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Bénédictine',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Angostura',
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
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
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
    id: '1964bf82-98eb-486d-9ce0-beebec50ca7b',
    oldId: 200,
    name: 'Absinthe Curaçau Frappe',
    calories: 234,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'O Absinthe Curaçau Frappe é um coquetel forte, porém saboroso. O gosto do absinto se destaca e combina com os sabores da laranja, proporcionados pelo Curaçau e o suco.',
    decoration: 'Twist de Laranja para decorar',
    ingredients: [
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Absinto',
      },
      {
        order: 3,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma taça Champanhe Saucer com gelo picado',
      },
      {
        order: 1,
        description: 'Mexa todos os ingredientes em um Mixing glass com gelo',
      },
    ],
    categories: [],
    instructions: [
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
    id: '544bc403-ff89-4b1c-a002-d13a9dbf5b96',
    oldId: 219,
    name: 'Absinthe Flip',
    calories: 226,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Absinthe Flip é um coquetel com sabor exótico. O gosto do Absinto aparece levemente e o gosto do ovo é bem forte.',
    decoration: 'Noz-moscada ralada para decorar',
    ingredients: [
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colher de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 5,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'ovo',
      },
      {
        order: 1,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Absinto',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
      {
        order: 3,
        description: 'Polvilhe Noz-moscada no topo',
      },
      {
        order: 1,
        description:
          'Bata todos os ingredientes em uma coqueteleira com gelo, exceto a Noz-moscada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'cac8e44e-0f4c-44be-b786-1b9c7f36942e',
    oldId: 199,
    name: 'Absinthe Martini',
    calories: 148,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'O Absinthe Martini é um coquetel forte. O gosto do Gin se destaca e o Absinto dá um leve toque no sabor.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Absinto',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Seco',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Mexa todos os ingredientes em um Mixing glass com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
    ],
    categories: ['martinis'],
    instructions: [],
  },
  {
    id: '638404f1-0c52-4c96-a01a-7b29b520e653',
    oldId: 156,
    name: 'Acapulco',
    calories: 257,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Acapulco é um coquetel um pouco forte. O gosto do Rum e do limão se destacam.',
    decoration: 'Ramo de Hortelã para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Clara de ovo',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Limão (Sweet and Sour)',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Passe tudo para um copo Highball',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: ['classicos'],
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
    id: '6550bb11-0bab-4f12-89be-21124f27f9de',
    oldId: 414,
    name: 'Affinity',
    calories: 188,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'O Affinity é um coquetel bem forte. O sabor do Whisky se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Doce',
      },
      {
        order: 4,
        quantity: '2',
        unitOfMeasurement: 'gotas',
        ingredientType: 'Orange Bitter',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Seco',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Scotch Whisky',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Mexa os ingredientes em um Mixing Glass com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '5615b1f6-e320-4ae5-a726-fae0ef3465c8',
    oldId: 235,
    name: 'African Mint',
    calories: 155,
    alcoholicContent: 'LOW',
    difficulty: 'HARD',
    description:
      'O African Mint é um shot bem doce. O sabor da menta se sobressai sobre a Amarula.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Amarula',
      },
      {
        order: 1,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Menta verde',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Monte o coquetel em camadas em um copo de Shot, seguindo a ordem dos ingredientes',
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
    id: '20efd817-f65f-4228-be63-047a59e1362f',
    oldId: 216,
    name: 'African Wench',
    calories: 241,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'Neste shot, o sabor do Amaretto se destaca. O licor de Café aparece levemente e o Rum o deixa um pouco forte. É indicado para ser consumido após as refeições.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Escuro',
      },
      {
        order: 1,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Amaretto',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Cacau escuro',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
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
    id: '19e22c5f-9264-406b-861a-d4bb5f73bc0e',
    oldId: 425,
    name: 'Alfie Cocktail',
    calories: 92,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Alfie Cocktail é um drinque forte. Seu sabor é um pouco adocicado e o abacaxi aparece levemente.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Triple Sec (Licor de laranja)',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca Citrus',
      },
      {
        order: 3,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Abacaxi',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '0279faa1-f5f3-423b-9031-afa35c96fe5a',
    oldId: 426,
    name: 'Algebra',
    calories: 121,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description: 'O Algebra é um coquetel gostoso. Seu sabor é um pouco forte.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
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
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '1975edff-1077-43d8-a4f5-cbcc00f8cbc6',
    oldId: 56,
    name: 'Algonquin',
    calories: 137,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Algonquin é um coquetel com sabor suave que, apesar de ter bastante Whiskey em sua receita, não chega a ser forte.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Whiskey',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Seco',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Abacaxi',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '892143e2-1e15-48ce-96e6-ecfff18deaa5',
    oldId: 160,
    name: 'Alice Springs',
    calories: 246,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Alice Spring é um coquetel refrescante muito gostoso. O Gin aparece bem suave.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 6,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Soda Limonada',
      },
      {
        order: 1,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Grenadine',
      },
      {
        order: 5,
        quantity: '3',
        unitOfMeasurement: 'gotas',
        ingredientType: 'Angostura',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Complete com Soda e adicione a Angostura',
      },
      {
        order: 1,
        description:
          'Bata os quatro primeiros ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Passe tudo para um copo Hurricane',
      },
    ],
    categories: [],
    instructions: [],
  },

  {
    id: 'ac2972e0-c830-4605-9405-25fab340a87a',
    oldId: 288,
    name: 'Alien Urine',
    calories: 264,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Alien Urine é um coquetel tropical bem doce. O licor de Melão se destaca junto com o Malibu.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Pêssego',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Mix de Limão (Sweet and Sour)',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Melão',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Malibu',
      },
      {
        order: 5,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Suco de Laranja',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Mexa bem',
      },
      {
        order: 2,
        description:
          'Complete com Mix de Limão e Suco de Laranja em partes iguais',
      },
      {
        order: 1,
        description:
          'Coloque os três primeiros ingredientes em um copo Highball com gelo',
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
    id: '5350f2e0-64b4-4732-9583-3bda8394bf7a',
    oldId: 427,
    name: 'Amaretto & Cream',
    calories: 198,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Amaretto & Cream é um coquetel bem gostoso. Seu sabor é bastante adocicado.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Amaretto',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Half and Half',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: [],
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
    id: '4fe8ad1f-1122-40dd-83f2-59af26432acd',
    oldId: 428,
    name: 'Amaretto Mist',
    calories: 117,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'Amaretto Mist é o Amaretto com um toque de limão. Parece um coquetel forte mas é bem saboroso.',
    decoration: 'Squeeze de Limão para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Amaretto',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Old-fashioned com gelo',
      },
      {
        order: 2,
        description: 'Adicione o squeeze de limãoMexa bem',
      },
    ],
    categories: [],
    instructions: [
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
    id: '0a95c800-a678-47bd-b999-eb13a487262f',
    oldId: 279,
    name: 'Amaretto Paradise',
    calories: 304,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Amaretto Paradise é um coquetel muito saboroso e refrescante. O sabor adocicado do Amaretto de destaca.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Suco de Abacaxi',
      },
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Malibu',
      },
      {
        order: 1,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Amaretto',
      },
      {
        order: 3,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Melão',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Complete com suco de Abacaxi',
      },
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Highball com gelo',
      },
      {
        order: 3,
        description: 'Mexa bem',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: '7d07db88-5fde-42c6-91cf-045ee48c36f2',
    oldId: 429,
    name: 'Amaretto Rose',
    calories: 118,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Amaretto Rose é um coquetel suave, bem gostoso. O sabor do Amaretto aparece levemente.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Água com gás',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Amaretto',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Mexa bem',
      },
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Highball com gelo',
      },
      {
        order: 2,
        description: 'Complete com água com gás',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: '69bd1ecc-3369-4ec1-91aa-ee38edc0738e',
    oldId: 237,
    name: 'Amaretto Sour',
    calories: 161,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Amaretto Sour é um coquetel bem doce. O gosto do Amaretto se destaca.',
    decoration: 'Twist de Laranja e Cereja (opcional) para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Limão (Sweet and Sour)',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Amaretto',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Passe tudo para um copo Old-fashioned',
      },
    ],
    categories: [],
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
    id: '37800ffd-62ff-4927-9688-9ff30154e713',
    oldId: 29,
    name: 'Americano',
    calories: 91,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'Para os apreciadores de Campari este coquetel é uma ótima escolha. Com seu sabor amargo ele estimula o apetite, ideal para ser tomado antes das refeições.',
    decoration: 'Rodela de laranja e twist de limão para decorar',
    ingredients: [
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Água com gás',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Campari',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Tinto',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Old-Fashioned com gelo',
      },
      {
        order: 2,
        description: 'Complete com Água com gás',
      },
    ],
    categories: ['classicos'],
    instructions: [
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
    id: '83b2fb3c-4faa-465d-a707-f14d40edadf2',
    oldId: 259,
    name: 'Anabolic Steroid',
    calories: 198,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Anabolic Steroid é um shot doce e forte. O gosto do licor de Melão e do Curaçau se destacam.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Curaçau Blue',
      },
      {
        order: 3,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Melão',
      },
      {
        order: 1,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Misture todos os ingredientes em um copo de Shot',
      },
    ],
    categories: ['shot'],
    instructions: [],
  },
  {
    id: '2060eccb-011e-4fbb-95ca-973701059308',
    oldId: 251,
    name: 'Anaconda Shot',
    calories: 175,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Anaconda Shot é um drink bem forte. O gosto da Sambuca se destaca e o Whiskey aparece bem suave.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Sambuca Branca',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Bourbon (Whiskey)',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Misture os ingredientes em um copo de Shot',
      },
    ],
    categories: ['shot'],
    instructions: [],
  },
  {
    id: '8c8e227f-8f64-429c-b953-00bf487c0b67',
    oldId: 57,
    name: 'Apple Blossom',
    calories: 115,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Apple Blossom é um ótimo coquetel para os apreciadores de Conhaque. Seu sabor é um pouco acentuado apesar do suco de maçã adocicá-lo.',
    decoration: 'Rodela de limão para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Maçã',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy (Conhaque)',
      },
      {
        order: 3,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Vodca',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Mexa bem',
      },
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Old-Fashioned com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '9dcf288f-dc71-4a9c-88a2-68c5009b8a2b',
    oldId: 58,
    name: 'Apple Brandy Cocktail',
    calories: 168,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Apple Brandy Cocktail é um coquetel com sabor forte e ácido. O gosto do Brandy se destaca.',
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
        ingredientType: 'Brandy de Maçã',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '275e6c9d-86db-4dcf-b8e8-f95f6f1e8e77',
    oldId: 59,
    name: 'Apple Brandy Highball',
    calories: 150,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Apple Brandy Highball é um coquetel que estimula o apetite. Seu sabor é amargo porém a água com gás o suaviza levemente.',
    decoration: 'Twist de Limão para decorar',
    ingredients: [
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Água com gás',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy de Maçã',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Em um copo Highball com gelo, coloque o Brandy de Maçã e complete com Água com Gás',
      },
      {
        order: 2,
        description: 'Mexa levemente',
      },
    ],
    categories: [],
    instructions: [
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
    id: 'b7cfe2f1-7c3b-4b9b-a301-4acb2422539c',
    oldId: 60,
    name: 'Apple Cart',
    calories: 165,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Apple Cart é um coquetel muito saboroso. A mistura dos ingredientes deixa o sabor levemente adocicado.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy de Maçã',
      },
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Limão (Sweet and Sour)',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Old-Fashioned com gelo',
      },
    ],
    categories: [],
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
    id: '9c5d731f-b575-4eca-897b-d41f88e3ea20',
    oldId: 144,
    name: 'Apple Classic',
    calories: 135,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'No Apple Classic o gosto de maçã predomina completamente. O sabor proporcionado pelo Brandy de Maçã e a Sidra se sobressaem sobre as outras bebidas.',
    decoration: 'Maçã para decorar',
    ingredients: [
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Sidra gelada (Espumante de maçã)',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy (Conhaque)',
      },
      {
        order: 1,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy de Maçã',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Complete com a Sidra',
      },
      {
        order: 1,
        description: 'Bata o Gin e os Brandys em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Passe tudo para um copo Highball',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '9e72717d-d051-4b55-be70-9747f056a80d',
    oldId: 61,
    name: 'Apple Daiquiri',
    calories: 207,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Apple Daiquiri é um coquetel aperitivo muito saboroso. O gosto do Brandy de maçã aparece bastante.',
    decoration: 'Maçã para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy de Maçã',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Limão (Sweet and Sour)',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 3,
        description: 'Decore com a maçã',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: [],
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
    id: 'e36ad25c-9917-41b5-8dd8-f06974e8073d',
    oldId: 63,
    name: 'Apple Fizz',
    calories: 209,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Apple Fizz é um coquetel refrescante. Seu sabor é bem suave e o suco de maçã se destaca.',
    decoration: 'Limão para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy de Maçã',
      },
      {
        order: 2,
        quantity: '120',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Maçã',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Água com gás',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Complete com Água com Gás',
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
    id: 'ab860689-08fc-41ca-9895-d79aabd155ee',
    oldId: 64,
    name: 'Apple Frazzle',
    calories: 62,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Apple Frazzle é um coquetel refrescante muito saboroso. Por não conter álcool, seu gosto é bem suave.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '120',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Maçã',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Água com gás',
      },
      {
        order: 2,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Limão (Sweet and Sour)',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Mexa levemente',
      },
      {
        order: 2,
        description: 'Complete com Água com Gás',
      },
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Highball com gelo',
      },
    ],
    categories: ['semalcool'],
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
    id: 'c88df68c-de2c-4894-a8e4-c85f08963ad3',
    oldId: 378,
    name: 'Apple Martini',
    calories: 155,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Apple Martini é um coquetel delicioso. Seu sabor é bem adocicado.',
    decoration: 'Maçã para decorar (opcional)',
    ingredients: [
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Maçã Verde',
      },
      {
        order: 1,
        quantity: '37',
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
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: ['martinis'],
    instructions: [],
  },
  {
    id: '12b66250-9ead-474f-b0ce-b2e264318ccd',
    oldId: 65,
    name: 'Apple Pie',
    calories: 223,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Apple Pie é um coquetel um pouco forte. O sabor do Brandy se destaca sobre os outros ingredientes.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Doce',
      },
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy de Maçã',
      },
      {
        order: 6,
        quantity: '2',
        unitOfMeasurement: 'gotas',
        ingredientType: 'Grenadine',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 5,
        quantity: '2',
        unitOfMeasurement: 'gotas',
        ingredientType: 'Brandy de Damasco',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },

  {
    id: 'c7f0f26e-ce86-42a4-bc9c-0391f5a622e2',
    oldId: 66,
    name: 'Apple Rum Rickey',
    calories: 110,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Apple Rum Rickey é um coquetel que estimula o apetite. Seu sabor é fraco e levemente amargo.',
    decoration: 'Twist de limão para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy de Maçã',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Água com gás',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Highball com gelo',
      },
      {
        order: 2,
        description: 'Complete com Água com Gás',
      },
    ],
    categories: [],
    instructions: [
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
    id: 'f05d2acb-2164-4f9c-b729-e549f8d57099',
    oldId: 67,
    name: 'Apple Swizzle',
    calories: 180,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Apple Swizzle é um coquetel de sabor forte que estimula o apetite.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: '2',
        unitOfMeasurement: 'gotas',
        ingredientType: 'Angostura',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Limão (Sweet and Sour)',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy de Maçã',
      },
      {
        order: 2,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Old-Fashioned com gelo',
      },
      {
        order: 2,
        description: 'Mexa bem',
      },
    ],
    categories: [],
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
    id: '134f2f33-92bb-44dd-81eb-1d8f566f5088',
    oldId: 68,
    name: 'Applejack Manhattan',
    calories: 172,
    alcoholicContent: 'MEDIUM',
    difficulty: 'MEDIUM',
    description:
      'O Applejack Manhattan é um coquetel aperitivo com sabor forte. O gosto do Vermouth dá um toque especial.',
    decoration: 'Cereja para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Doce',
      },
      {
        order: 3,
        quantity: '3',
        unitOfMeasurement: 'gotas',
        ingredientType: 'Orange Bitters',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy de Maçã',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Mexa os ingredientes em um Mixing Glass com gelo exceto o Bitter e a Cereja',
      },
      {
        order: 3,
        description: 'Adicione o Bitter e a Cereja',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '354724f5-e7da-487d-9bf2-72039a645fca',
    oldId: 69,
    name: 'Applejack Sour',
    calories: 176,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Applejack Sour é um coquetel muito gostoso com sabor doce e suave.',
    decoration: 'Limão para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Limão (Sweet and Sour)',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy de Maçã',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
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
    id: '52733335-648a-4043-8d3b-fc45bf8efca3',
    oldId: 440,
    name: 'Aqua',
    calories: 220,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Aqua é um coquetel com sabor bem diferente do comum. O gosto do Bailey´s se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Schweppes Citrus',
      },
      {
        order: 3,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Curaçau Blue',
      },
      {
        order: 1,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Bailey´s Irish Cream',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Passe tudo para um copo Highball',
      },
      {
        order: 1,
        description:
          'Bata todos os ingredientes, exceto o Schweppes Citrus, em uma coqueteleira com gelo',
      },
      {
        order: 3,
        description: 'Complete com Schweppes Citrus',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: '54db9e15-5ace-435a-9571-3f30ea7d91a2',
    oldId: 278,
    name: 'Asian Hooker',
    calories: 390,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Asian Hooker é um coquetel muito gostoso. Possui um sabor bem adocicado.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: '150',
        unitOfMeasurement: 'ml',
        ingredientType: 'Soda Limonada',
      },
      {
        order: 5,
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
      {
        order: 1,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
      {
        order: 3,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Melão',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto copo Hurricane com gelo',
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
    id: '797580d0-f4c1-4df5-8cd8-ef067ab5c5a2',
    oldId: 439,
    name: 'Atlas',
    calories: 264,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Atlas é um coquetel forte. O sabor da Vodca aparece bastante.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Suco de Cranberry',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Curaçau Blue',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Mexa bem',
      },
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Highball com gelo',
      },
      {
        order: 2,
        description: 'Complete com suco de Cranberry',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: '2fb0dc1b-258b-4be2-98ef-bd3b965fdfde',
    oldId: 422,
    name: 'Atomic Cat',
    calories: 54,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Atomic Cat é um coquetel muito gostoso, mesmo para quem não gosta de água tônica.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água Tônica',
      },
      {
        order: 1,
        quantity: '90',
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
    categories: ['semalcool'],
    instructions: [],
  },
  {
    id: '1c063760-8a5d-4c5f-be25-77439cbb72fd',
    oldId: 264,
    name: 'B & B',
    calories: 178,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O B & B é um coquetel bem forte. O sabor do Brandy se destaca.',
    decoration: null,
    ingredients: [
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
        ingredientType: 'Bénédictine',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Coloque o Bénédictine em uma taça pequena',
      },
      {
        order: 2,
        description:
          'Adicione o Brandy com cuidado para que os ingredientes não misturem',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '335a64b6-46ec-4686-b1f9-308a4f7dadf4',
    oldId: 270,
    name: 'B&B Collins',
    calories: 224,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O B & B Collins é um coquetel delicioso, muito bonito e refrescante. O sabor do limão combina muito bem com o Brandy e o Bénédictine, e a cereja dá um toque especial.',
    decoration: 'Cereja e tiras de casca de Limão e Laranja para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Bénédictine',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colher de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 5,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Água com gás',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy (Conhaque)',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description:
          'Adicione gelo e Água com gás, deixando um pouco de espaço para o Bénédictine',
      },
      {
        order: 2,
        description: 'Mexa bem para dissolver o açúcar',
      },
      {
        order: 1,
        description:
          'Coloque o Brandy, o suco de limão e o açúcar em um copo Collins',
      },
      {
        order: 4,
        description: 'Coloque suavemente o Bénédictine no topo',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: '36e33e01-1b67-4702-a1ce-b5df86694307',
    oldId: 183,
    name: 'B-52 Flame',
    calories: 136,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'Flame é um shot bem forte. O gosto do café e do rum quase não aparecem, o principal é o do Absinto.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Absinto',
      },
      {
        order: 1,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Café',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Adicione o licor de café',
      },
      {
        order: 1,
        description: 'Coloque o Rum e o Absinto em um copo de shot',
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
    id: '3801086e-ac4e-41d7-a85d-825834227308',
    oldId: 207,
    name: 'B-55 #2',
    calories: 103,
    alcoholicContent: 'HIGH',
    difficulty: 'HARD',
    description:
      'O B-55 #2 é um shot bem forte. O gosto do Absinto é o que mais aparece, e o Bailey´s dá um toque especial.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '10',
        unitOfMeasurement: 'ml',
        ingredientType: 'Bailey´s Irish Cream',
      },
      {
        order: 1,
        quantity: '10',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Café',
      },
      {
        order: 3,
        quantity: '10',
        unitOfMeasurement: 'ml',
        ingredientType: 'Absinto',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Monte o coquetel em camadas no copo de Shot, seguindo a ordem dos ingredientes',
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
    id: '294f45a3-bdb9-4482-9590-4a50bf4b7ea5',
    oldId: 423,
    name: 'Baby Cocktail',
    calories: 156,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Baby Cocktail é um drinque gostoso. Seu sabor é pouco adocicado e o abacaxi quase não aparece.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Half and Half',
      },
      {
        order: 1,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Abacaxi',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Passe tudo para um copo Highball',
      },
    ],
    categories: ['semalcool'],
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
    id: 'b93a0266-9437-459f-8632-4cd8494fc844',
    oldId: 154,
    name: 'Bacardi Cocktail',
    calories: 161,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Bacardi Cocktail é um coquetel aperitivo. O sabor ácido do limão é bem marcante.',
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
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
    ],
    categories: ['classicos'],
    instructions: [],
  },
  {
    id: 'b8503d65-0ffa-4f06-ab0f-d38115499f85',
    oldId: 221,
    name: 'Baltic Murder Mystery',
    calories: 205,
    alcoholicContent: 'LOW',
    difficulty: 'MEDIUM',
    description:
      'Este coquetel é muito gostoso. Caso você prefira algo menos doce, a Soda limonada pode ser substituída por Água com gás.',
    decoration: 'Limão para decorar',
    ingredients: [
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Soda Limonada',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Cassis',
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
        description:
          'Mexa o Creme de Cassis e a Vodca em um Mixing Glass com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
      {
        order: 3,
        description: 'Complete com Soda Limonada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '3ef0b5a0-c572-4eec-a138-07f404ac992a',
    oldId: 406,
    name: 'Banana Berry',
    calories: 332,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Banana Berry é rico em fibras, potássio, vitaminas A, B e C.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'pote',
        ingredientType: 'Iogurte natural desnatado (200g)',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Banana prata',
      },
      {
        order: 1,
        quantity: '8',
        unitOfMeasurement: null,
        ingredientType: 'Amoras grandes',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 5,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Bata todos os ingredientes no liquidificador com uma ou duas pás de gelo até adquirir uma textura cremosa',
      },
      {
        order: 2,
        description: 'Coe para um copo Collins',
      },
    ],
    categories: ['smoothies'],
    instructions: [],
  },
  {
    id: '1518d359-37b1-41ec-83cc-6669c007a25d',
    oldId: 355,
    name: 'Banana Mix',
    calories: 267,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Banana Mix possui bastante cálcio, ferro e potássio. É rico em vitaminas A, C, B1 e B2.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Banana prata',
      },
      {
        order: 1,
        quantity: '5',
        unitOfMeasurement: null,
        ingredientType: 'Morangos',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'pote',
        ingredientType: 'Iogurte natural desnatado (200g)',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 5,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Bata todos os ingredientes no liquidificador com uma ou duas pás de gelo até adquirir uma textura cremosa',
      },
      {
        order: 2,
        description: 'Coe para um copo Collins',
      },
    ],
    categories: ['smoothies'],
    instructions: [],
  },
  {
    id: 'b909ebb5-e7a8-4e15-8604-daa43e895477',
    oldId: 244,
    name: 'Barbarella',
    calories: 309,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Barbarella é um coquetel doce e com gosto forte. O sabor do Triple sec se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Sambuca Branca',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Mexa bem',
      },
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Old-fashioned com gelo',
      },
    ],
    categories: [],
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
    id: '0d4c30c1-59e2-4422-a8c5-c3b1236460e6',
    oldId: 155,
    name: 'Batida De Pepino',
    calories: 130,
    alcoholicContent: 'LOW',
    difficulty: 'MEDIUM',
    description:
      'A Batida de Pepino é um coquetel exótico. Esta combinação é muito gostosa e refrescante. Vale a pena conferir.',
    decoration: 'Rodela de Pepino e Hortelã para decorar',
    ingredients: [
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 1,
        quantity: '1/4',
        unitOfMeasurement: null,
        ingredientType: 'de Pepino sem casca',
      },
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Suco de 1 limão',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Soda Limonada',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Bata todos os ingredientes, exceto a Soda, no liquidificador com gelo até obter uma consistência cremosa',
      },
      {
        order: 2,
        description:
          'Passe tudo para um copo Highball e complete com a Soda Limonada',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: 'a5388cd8-07f0-43ec-8203-939a21966265',
    oldId: 424,
    name: 'Batman Cocktail',
    calories: 118,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Batman Cocktail é um drinque delicioso. Seu sabor é bem adocicado.',
    decoration: 'Rodela de Laranja para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '180',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 2,
        quantity: ' ',
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
    id: '712695da-2f6f-4dbc-82d7-f3a87fd7065b',
    oldId: 261,
    name: 'Beach Cooler',
    calories: 216,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Beach Cooler é um coquetel muito gostoso e refrescante. Apesar do mamão papaya, o gosto do limão se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
      {
        order: 4,
        quantity: '1/2',
        unitOfMeasurement: null,
        ingredientType: 'Mamão Papaya batido no liquidificador',
      },
      {
        order: 3,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Passe tudo para um copo Highball',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: 'd9b8e8cc-00f7-471b-87e2-7d63af4ba6df',
    oldId: 454,
    name: 'Beadlestone',
    calories: 156,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Beadlestone é um coquetel com sabor forte, um pouco seco. O gosto do Whisky aparece bastante.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Scotch Whisky',
      },
      {
        order: 2,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Seco',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
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
    id: '4f748286-f1da-41f3-bb55-884753282307',
    oldId: 291,
    name: 'Beelzebub',
    calories: 175,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Beelzebub é um coquetel doce, porém forte. Dependendo da quantidade de pimenta, fica um pouco menos adocicado.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Pimenta a gosto',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
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
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
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
    id: '13723c81-2a22-4687-be02-5fff749c6e60',
    oldId: 301,
    name: 'Beer Buster',
    calories: 221,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Beer Buster é um coquetel gostoso. O sabor da cerveja se destaca e o molho de pimenta dá um leve sabor.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '360',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cerveja Lager ou Ale gelada',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca gelada',
      },
      {
        order: 2,
        quantity: '2',
        unitOfMeasurement: 'gotas',
        ingredientType: 'Molho de Pimenta',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Coloque a Vodca e molho de Pimenta em uma caneca de cerveja gelada',
      },
      {
        order: 2,
        description: 'Adicione a Cerveja cuidadosamente',
      },
    ],
    categories: [],
    instructions: [],
  },
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
    id: '4342c019-13de-4d24-8dce-ac39c03cadd6',
    oldId: 473,
    name: 'Bellinitini',
    calories: 239,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Bellinitini é delicioso. Sua textura é cremosa e a combinação dos ingredientes é perfeita.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Pêssego',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Pêssego',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Espumante gelado',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Bata a vodca, o licor de pêssego e o suco de pêssego em uma coqueteleira com gelo',
      },
      {
        order: 3,
        description: 'Complete com o espumante',
      },
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
    ],
    categories: ['martinis', 'tropicais'],
    instructions: [],
  },
  {
    id: '5f211bfd-e20c-4ccc-b62a-b1c19f731c5d',
    oldId: 70,
    name: 'Bermuda Highball',
    calories: 195,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Bermuda Highball é um coquetel indicado para ser tomado antes das refeições. Seu sabor é suavemente seco e o gosto de Gin é bem destacado.',
    decoration: 'Twist de limão para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy (Conhaque)',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Água com gás',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Seco',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Highball com gelo',
      },
      {
        order: 2,
        description: 'Complete com Água com Gás',
      },
      {
        order: 3,
        description: 'Mexa bem',
      },
    ],
    categories: [],
    instructions: [
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
    id: '7b6cc7df-4bbb-4f5b-924f-b48b32036618',
    oldId: 409,
    name: 'Best Berry',
    calories: 320,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Best Berry é rico em proteínas, antioxidantes, vitaminas A, B1, B5, C, cálcio, fósforo e ferro.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'pote',
        ingredientType: 'Iogurte natural desnatado (200g)',
      },
      {
        order: 1,
        quantity: '6',
        unitOfMeasurement: null,
        ingredientType: 'Amoras grandes',
      },
      {
        order: 3,
        quantity: '6',
        unitOfMeasurement: null,
        ingredientType: 'Morangos',
      },
      {
        order: 2,
        quantity: '6',
        unitOfMeasurement: null,
        ingredientType: 'Framboesas grandes',
      },
      {
        order: 6,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água',
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
        description: 'Coe para um copo Collins',
      },
      {
        order: 1,
        description:
          'Bata todos os ingredientes no liquidificador com uma ou duas pás de gelo até adquirir uma textura cremosa',
      },
    ],
    categories: ['smoothies'],
    instructions: [],
  },
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
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: ['shot'],
    instructions: [],
  },
  {
    id: '4cadf241-7ff1-48a1-9c2c-5f5c7e8151fe',
    oldId: 150,
    name: 'Black Russian',
    calories: 203,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'No Black Russian, o sabor do café se destaca bastante. Apesar do seu alto teor alcoólico, ele possui um sabor suave proporcionado pelo licor.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '52',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Café',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Mexa bem',
      },
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Old-Fashioned com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'ca4cf649-37c1-4eeb-98d4-b9f1f788ac14',
    oldId: 132,
    name: 'Black Velvet',
    calories: 243,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Black Velvet é um coquetel bem suave. O sabor dos dois ingredientes combinam muito bem.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Cerveja escura gelada',
      },
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Espumante gelado',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Complete a outra metade com a Cerveja escura',
      },
      {
        order: 1,
        description:
          'Encha um copo Highball ou de cerveja até a metade com Espumante',
      },
    ],
    categories: ['classicos'],
    instructions: [],
  },
  {
    id: 'a17505da-9602-4357-86a8-34345e91a98a',
    oldId: 232,
    name: 'Black Watch',
    calories: 133,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Black Watch é um coquetel muito gostoso. O sabor do Whisky aparece suavemente e o licor de Café dá um toque sofisticado ao coquetel.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Café',
      },
      {
        order: 1,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Whisky',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Soda Limonada',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Monte o coquetel direto em um Cálice de Vinho ou copo Old-fashioned com gelo',
      },
      {
        order: 2,
        description: 'Complete com Soda Limonada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '7e1b1d2b-2f58-49a5-8b2d-bfa413e4f1f7',
    oldId: 163,
    name: 'Bleu Bleu Bleu',
    calories: 345,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Bleu Bleu Bleu é um coquetel bem alcoólico. O sabor da tequila se destaca e a soda o deixa um pouco mais suave.',
    decoration: null,
    ingredients: [
      {
        order: 7,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Soda Limonada',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 5,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Tequila',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 6,
        quantity: '1/2',
        unitOfMeasurement: null,
        ingredientType: 'Clara de ovo',
      },
      {
        order: 4,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Curaçau Blue',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Passe tudo para um copo Collins',
      },
      {
        order: 1,
        description:
          'Bata todos os ingredientes em uma coqueteleira com gelo, exceto a Soda',
      },
      {
        order: 3,
        description: 'Complete com Soda Limonada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '3522fda6-59e9-4774-a874-dd0b1ba98337',
    oldId: 86,
    name: 'Blizzard',
    calories: 272,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Blizzard é um coquetel gostoso com sabor marcante. O gosto do bourbon se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colher de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Cranberry',
      },
      {
        order: 1,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Bourbon (Whiskey)',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Passe tudo para um copo Highball',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '5505b66d-b419-4b0e-bd60-d603c820b61d',
    oldId: 76,
    name: 'Bloody Maria',
    calories: 188,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Bloody Maria é um coquetel nutritivo. A tequila entra em perfeita harmonia com o tomate e o limão, e com o toque dos temperos o resultado é fantástico. Esta receita é uma variação do Bloody Mary, a única diferença é a vodca que foi trocada pela tequila.',
    decoration: 'Cenoura para decorar',
    ingredients: [
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Sal, Molho de Pimenta e Molho Inglês a gosto',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Tequila Prata',
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
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Passe tudo para um copo Highball',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
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
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
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
    id: 'c660d485-9664-46c5-ac1b-c7a17e92bf4d',
    oldId: 452,
    name: 'Blue Canary',
    calories: 87,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Blue Canary é um coquetel gostoso. O Curaçau Blue deixa seu sabor adocicado.',
    decoration: 'Ramo de Hortelã para decorar',
    ingredients: [
      {
        order: 3,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Curaçau Blue',
      },
      {
        order: 1,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 2,
        quantity: '37',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Grapefruit (Toranja)',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel cheia de gelo picado',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '65051652-6725-4b53-b9d0-2f3250883ff3',
    oldId: 453,
    name: 'Blue Dog',
    calories: 204,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Blue Dog é um coquetel bem saboroso. Suave e refrescante, é ótimo para os dias quentes.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '150',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Grapefruit (Toranja)',
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
    id: 'de31b0cc-39cc-4cf6-acd8-a86b1f232e7a',
    oldId: 71,
    name: 'Blue Margarita',
    calories: 235,
    alcoholicContent: 'MEDIUM',
    difficulty: 'HARD',
    description:
      'A Blue Margarita é um coquetel frozen muito gostoso e refrescante. O sabor da tequila combinada com o limão é fantástico. Esta receita é uma variação da Margarita, com duas diferenças, o triple-sec é azul e ela é feita no liquidificador, mas o sabor é praticamente o mesmo.',
    decoration: 'Sal para crustar a taça',
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Tequila Prata',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 4,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Curaçau Blue',
      },
      {
        order: 5,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Sal para crustar a taça',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Cruste a borda de uma Taça Fiesta com sal',
      },
      {
        order: 2,
        description:
          'Bata todos os ingredientes no liquidificador com 1 ou 2 pás de gelo até adquirir uma textura cremosa',
      },
      {
        order: 3,
        description: 'Coe para a Taça Fiesta crustada',
      },
    ],
    categories: ['frozen', 'tropicais'],
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
    id: '53ad603d-3b7f-4492-96dc-c6549fd48f44',
    oldId: 23,
    name: 'Blue Monday',
    calories: 299,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'O Blue Monday é um coquetel que estimula o apetite. Sua cor intensa mais a taça em que é servido o tornam muito atraente, mas não se engane, a mistura do licor com a vodca resulta em um sabor um pouco mais forte.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Curaçau Blue',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Mexa os ingredientes em um Mixing glass com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '3df8f8d0-1f0a-433a-b63e-6564ad5932aa',
    oldId: 28,
    name: 'Blue Moon',
    calories: 236,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Blue Moon é um coquetel refrescante e bem adocicado, ideal para ser tomado em dias quentes. O côco e o abacaxi são uma combinação clássica muito saborosa, utilizada em diversos coquetéis.',
    decoration: 'Triângulo de abacaxi e cerejas para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Abacaxi',
      },
      {
        order: 3,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Curaçau Blue (no topo)',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Grenadine',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Malibu',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Monte o coquetel direto no copo Highball com gelo e deixe o Curaçau por último',
      },
      {
        order: 2,
        description: 'Adicione o Grenadine',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: '1e0c2040-ce21-4cd2-ba4d-e869831e3386',
    oldId: 327,
    name: 'Blue Orchid',
    calories: 208,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Blue Orchid é um coquetel muito gostoso e refrescante. O Saquê combina muito bem com os outros ingredientes, e a água com gás deixa o drinque menos adoçicado.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Água com gás',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Grenadine',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Curaçau Blue',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Saquê',
      },
      {
        order: 5,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Soda Limonada',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description:
          'Complete com água com gás e soda limonada em partes iguais',
      },
      {
        order: 2,
        description: 'Passe tudo para um copo Highball',
      },
      {
        order: 1,
        description:
          'Bata os três primeiros ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: 'd05f4550-8c95-4b05-a094-99e3f6670723',
    oldId: 289,
    name: 'Blue Peach',
    calories: 155,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Blue Peach é um shot forte e doce. O sabor do Pêssego se destaca.',
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
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Curaçau Blue',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Batas todos os ingredientes em uma coqueteleira com gelo',
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
    id: '3a33eeae-0f23-4063-8693-4601fa97134b',
    oldId: 37,
    name: 'Blue Shark',
    calories: 286,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Blue Shark é um coquetel forte onde o gosto da Tequila predomina. O Curaçau quase não aparece no sabor, serve mais para dar coloração.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Tequila Prata',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Curaçau Blue',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Passe tudo para um copo Old-Fashioned',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'a29497d0-1faa-4b4a-a005-58593a5f4eb7',
    oldId: 214,
    name: 'Blues Island',
    calories: 117,
    alcoholicContent: 'LOW',
    difficulty: 'HARD',
    description:
      'O Blues Island é um coquetel muito gostoso. O sabor do licor de Melão se destaca e a clara de ovo o deixa mais cremoso. A borda crustada com açúcar é essencial.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Clara de ovo',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Curaçau Blue',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 1,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Melão',
      },
      {
        order: 6,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Açúcar para crustar a taça',
      },
      {
        order: 5,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Água com gás',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Coe para a taça de Coquetel',
      },
      {
        order: 1,
        description: 'Cruste uma taça de Coquetel com açúcar',
      },
      {
        order: 4,
        description: 'Complete com Água com gás',
      },
      {
        order: 2,
        description:
          'Bata todos ingredientes em uma coqueteleira com gelo, exceto a Água com gás',
      },
    ],
    categories: [],
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
    id: 'f81121ef-3553-439d-bc6a-0dd28ca98057',
    oldId: 272,
    name: 'Bobby Burn´S',
    calories: 183,
    alcoholicContent: 'MEDIUM',
    difficulty: 'MEDIUM',
    description:
      'O Bobby Burn´s é um coquetel forte. Seu gosto adocicado é dominado pelo sabor do Whisky.',
    decoration: 'Twist de Limão para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Doce',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Scotch Whisky',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Bénédictine',
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
          'Mexa bem todos os ingredientes em um Mixing glass com gelo',
      },
      {
        order: 3,
        description: 'Adicione o twist de limão',
      },
    ],
    categories: [],
    instructions: [
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
    id: 'c83ae247-d15c-4a4f-b0cc-fd76e3d41c62',
    oldId: 302,
    name: 'Boilermaker',
    calories: 209,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Boilermaker é um coquetel ideal para ser tomado entre amigos. O sabor do whiskey se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Whiskey',
      },
      {
        order: 2,
        quantity: '240',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cerveja Lager ou Pale Ale gelada',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Coloque o Whiskey em um copo de shot e a Cerveja em uma caneca de cerveja gelada',
      },
      {
        order: 2,
        description:
          'Beba o Whikey primeiro e em seguida a Cerveja ou jogue o shot dentro da caneca de cerveja e beba imediatamente (como na foto ao lado)',
      },
    ],
    categories: [],
    instructions: [],
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
    id: '059e1f67-ac38-4b99-ae7a-7b27e25bcc48',
    oldId: 266,
    name: 'Brainstorm',
    calories: 201,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'O Brainstorm é um coquetel forte e adocicado. O sabor do Whisky se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Bénédictine',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Vermouth Doce',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Scotch Whisky',
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
          'Mexa bem todos os ingredientes em um Mixing glass com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '124e00f4-e6a6-4a09-a6d6-a5564b3a0966',
    oldId: 238,
    name: 'Brandy Alexander',
    calories: 164,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Brandy Alexander é um coquetel magnífico. Seu gosto é suave, cremoso e muito saboroso, podendo ser consumido antes ou depois das refeições. É uma ótima pedida.',
    decoration: 'Noz-moscada em pó para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy (Conhaque)',
      },
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Cacau escuro',
      },
      {
        order: 3,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Half and Half',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Polvilhe a Noz-moscada no topo',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
    ],
    categories: ['classicos'],
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
    id: '7eb9ed4f-016e-4ac6-be8e-da33536d755e',
    oldId: 463,
    name: 'Brandy Cappuccino',
    calories: 128,
    alcoholicContent: 'LOW',
    difficulty: 'MEDIUM',
    description:
      'O Brandy Cappuccino é um coquetel gostoso. Seu sabor é bem suave.\n\nVariação: O Conhaque pode ser substituído por Bailey´s Irish Cream.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy (Conhaque)',
      },
      {
        order: 4,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Laranja',
      },
      {
        order: 2,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Café (expresso ou tradicional)',
      },
      {
        order: 1,
        quantity: '120',
        unitOfMeasurement: 'ml',
        ingredientType: 'Leite',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description:
          'Coloque o café em uma caneca de vidro e despeje o leite sobre ele',
      },
      {
        order: 1,
        description:
          'Use a máquina de expresso para vaporizar o leite até ficar com bem espumoso (opcional)',
      },
      {
        order: 3,
        description:
          'Adicione o conhaque, o licor de laranja e misture delicadamente',
      },
    ],
    categories: ['quentes'],
    instructions: [],
  },
  {
    id: 'f70076ff-7010-4fd9-b3cd-f892d2aaf592',
    oldId: 260,
    name: 'Brandy Egg Nog',
    calories: 209,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Brandy Egg Nog é um coquetel bem diferente. O gosto da gema de ovo é bem marcante.',
    decoration: 'Noz-moscada ralada para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '37',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy (Conhaque)',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'colher de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'gema',
        ingredientType: 'ovo',
      },
      {
        order: 2,
        quantity: '52',
        unitOfMeasurement: 'ml',
        ingredientType: 'Leite',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Passe tudo para um copo Highball',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 3,
        description: 'Polvilhe Noz-moscada no topo',
      },
    ],
    categories: ['classicos'],
    instructions: [],
  },
  {
    id: '69d85529-cfef-41a4-a73d-f75c7136187c',
    oldId: 72,
    name: 'Brave Bull',
    calories: 235,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Brave Bull é um ótimo coquetel para quem gosta de café. Apesar do alto teor alcoólico seu sabor não é agressivo, pelo contrário, a combinação é deliciosa. Vale a pena conferir.',
    decoration: 'Twist de limão para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Tequila Prata',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Café',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Old-Fashioned com gelo',
      },
      {
        order: 2,
        description: 'Mexa suavemente',
      },
    ],
    categories: [],
    instructions: [
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
    id: '0b5b6e7e-6cb0-449d-b6df-3df46acde37b',
    oldId: 203,
    name: 'Broken Down Golf Cart',
    calories: 103,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'Este shot é bem doce e muito gostoso. O Sabor do licor de melão se destaca e o Amaretto fica bem suave.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Melão',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Suco de Limão',
      },
      {
        order: 1,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Amaretto',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para um copo de shot',
      },
    ],
    categories: ['shot'],
    instructions: [],
  },
  {
    id: '3bed151a-b759-423a-97f4-2ba043c8104f',
    oldId: 42,
    name: 'Bronx',
    calories: 154,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Bronx é um coquetel que estimula o apetite. Devido ao Vermouth, o sabor fica um pouco seco, porém o coquetel fica mais suave.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Tinto',
      },
      {
        order: 4,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 3,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Seco',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: ['classicos'],
    instructions: [],
  },
  {
    id: '95162c3e-dab6-4217-a04d-9162cc75c267',
    oldId: 74,
    name: 'Bronx Terrace Cocktail',
    calories: 145,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Bronx Terrace é um coquetel aperitivo bem saboroso. Seu gosto é um pouco mais forte e o Gin é mais notável do que os outros ingredientes.',
    decoration: 'Cereja para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Seco',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em um coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'f98ab28d-7389-499b-89bf-f63d90015065',
    oldId: 210,
    name: 'Brown Elephant #2',
    calories: 263,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Brown Elephant #2 é um coquetel muito saboroso. O gosto da Amarula se destaca e a combinação com o leite deixa o coquetel bem cremoso.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Leite',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Amarula',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Café',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Encha um copo Double Old-fashioned com gelo',
      },
      {
        order: 3,
        description: 'Complete com Leite',
      },
      {
        order: 2,
        description: 'Coloque a Amarula e o Licor de Café',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '1cac6652-d4d1-40e3-adfd-40150f7b4d6b',
    oldId: 267,
    name: 'Brown Fox',
    calories: 190,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description: 'O Brown Fox é um coquetel doce, porém forte.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Bénédictine',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Bourbon (Whiskey)',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Old-fashioned com gelo',
      },
      {
        order: 2,
        description: 'Mexa bem',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'bf2a922e-0dfe-456c-a2a6-7b4e1ca9221c',
    oldId: 249,
    name: 'Bucatini',
    calories: 335,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Bucatini é um coquetel forte. O gosto da Sambuca aparece bastante, deixando-o bem adocicado.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Sambuca Branca',
      },
      {
        order: 1,
        quantity: '75',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: ['martinis'],
    instructions: [],
  },
  {
    id: '292a70cc-3d7d-4304-816c-6f52b52b54eb',
    oldId: 250,
    name: 'Buccaneer',
    calories: 250,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Buccaneer é um coquetel bem suave e doce. O sabor da Sambuca de destaca.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Grenadine',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Sambuca Branca',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Soda Limonada',
      },
    ],
    preparationSteps: [
      {
        order: 4,
        description: 'Mexa bem',
      },
      {
        order: 2,
        description: 'Passe tudo para um copo Highball',
      },
      {
        order: 1,
        description:
          'Bata a Sambuca e o Grenadine em uma coqueteleira com gelo',
      },
      {
        order: 3,
        description: 'Complete com Soda Limonada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '614c3976-d384-4985-969e-919a057b0098',
    oldId: 366,
    name: 'Bug´S Bunny',
    calories: 215,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Bug´s Bunny é rico em betacaroteno, um elemento fundamental para a visão, além de ser rico em fibras e vitaminas A, C, B2 e B3. As vitaminas contidas na cenoura e no suco de laranja estimulam a produção de melanina, que confere pigmentação à pele e aos cabelos.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '150',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 5,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Tangerina',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colher de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 1,
        quantity: '1/2',
        unitOfMeasurement: null,
        ingredientType: 'Cenoura sem pele ralada',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão siciliano',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Bata no liquidificador a cenoura ralada com o suco de laranja',
      },
      {
        order: 2,
        description:
          'Coe e bata novamente com os outros ingredientes e uma pá de gelo até obter uma consistência cremosa',
      },
      {
        order: 3,
        description: 'Coe para um copo Collins',
      },
    ],
    categories: ['smoothies'],
    instructions: [],
  },
  {
    id: '710c0f11-72f5-45dc-a8e4-5d5d603137d7',
    oldId: 177,
    name: 'Bullfrog',
    calories: 252,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Bullfrog é um coquetel bem suave. A água com gás o deixa bem refrescante e o licor dá uma leve adocicada.',
    decoration: 'Rodela de Limão para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 4,
        quantity: '120',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água com gás',
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
        order: 2,
        description:
          'Passe tudo para um copo Collins e acrescente a Água com gás suavemente',
      },
      {
        order: 1,
        description:
          'Bata todos os ingredientes em uma coqueteleira com gelo, exceto a Água com gás',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '974bb07a-3e62-45a0-9d60-f658f4113386',
    oldId: 99,
    name: 'Burning Sun',
    calories: 212,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Burning Sun é um coquetel refrescante muito suave. Seu sabor é bem adocicado.',
    decoration: 'Morango para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '120',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Abacaxi',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Morango',
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
    id: '1b83f2ff-2caf-4efe-b21c-7efbb5f9b729',
    oldId: 271,
    name: 'Burn´S Night Special',
    calories: 159,
    alcoholicContent: 'MEDIUM',
    difficulty: 'MEDIUM',
    description:
      'O Burn’s Night Special é um coquetel levemente adocicado. O sabor do Whisky se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Bénédictine',
      },
      {
        order: 2,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Doce',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Scotch Whisky',
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
          'Mexa bem todos os ingredientes em um Mixing glass com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '0541d02e-f691-4490-a0c8-e35c70dd8f5d',
    oldId: 234,
    name: 'Cactus Coffee',
    calories: 136,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'No Cactus Coffee, o sabor do café se destaca. A Tequila aparece suavemente.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Tequila',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Água com gás',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Café',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Complete com Água com gás',
      },
      {
        order: 1,
        description:
          'Coloque a Tequila e o Licor de café em um copo Highball com gelo',
      },
    ],
    categories: [],
    instructions: [],
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
        description: 'Em uma caneca de vidro, misture o café e o leite quentes',
      },
    ],
    categories: ['semalcool', 'quentes'],
    instructions: [],
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
  {
    id: '9ec671fb-4e0d-458c-ab0b-687e9fc63e8e',
    oldId: 254,
    name: 'Café Oliver',
    calories: 205,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Café Oliver é um coquetel digestivo. Ideal para ser tomado após as refeições e em dias frios.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Café Expresso quente',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Sambuca Branca',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Misture os ingredientes em um taça Sherry',
      },
    ],
    categories: ['quentes'],
    instructions: [],
  },
  {
    id: 'cfb819b6-1813-4bdc-9008-533f632f4094',
    oldId: 243,
    name: 'Café Romano',
    calories: 247,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Café Romano é um coquetel muito gostoso e cremoso. O sabor do café se destaca e a Sambuca aparece bem suave.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Half and Half',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Café',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Sambuca Branca',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em um coqueteleira com gelo',
      },
    ],
    categories: [],
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
    id: 'd213e39f-f5a5-497d-bdd5-af6210c5d651',
    oldId: 146,
    name: 'Caipirinha',
    calories: 236,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'A Caipirinha é um coquetel mundialmente conhecido. Sua combinação é magnífica e bem-vinda em qualquer ocasião.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '1/2',
        unitOfMeasurement: null,
        ingredientType: 'Limão cortado em quatro partes',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
      {
        order: 3,
        quantity: '2',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Macere o limão e o açúcar em um copo Double Old-Fashioned',
      },
      {
        order: 3,
        description: 'Adicione a Cachaça',
      },
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
      {
        order: 4,
        description: 'Mexa bem',
      },
    ],
    categories: ['tropicais', 'classicos'],
    instructions: [],
  },
  {
    id: 'ccaaed96-b82c-4137-b6d5-40b40b2f316e',
    oldId: 124,
    name: 'Caipiríssima',
    calories: 248,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'A Caipiríssima é mais uma variação da Caipirinha, a diferença é que ela é feita com Rum. O Rum combina perfeitamente com o limão, podemos ver isso em outros coquetéis como Daiquiri e Mojito, e neste caso não é diferente, essa combinação permanece muito saborosa.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '1/2',
        unitOfMeasurement: null,
        ingredientType: 'Limão',
      },
      {
        order: 3,
        quantity: '2',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Complete o copo com gelo e depois adicione o Rum',
      },
      {
        order: 1,
        description:
          'Corte meio limão em 4 pedaços e macere dentro do copo com açúcar',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '1fdcbe41-a8ce-4784-b7b2-f81b07de81da',
    oldId: 22,
    name: 'Caipiroska',
    calories: 254,
    alcoholicContent: 'MEDIUM',
    difficulty: 'MEDIUM',
    description:
      'A Caipiroska é uma versão modificada da Caipirinha, sendo feita com Vodca ao invés de Cachaça. Pode ou não ser batido na coqueteleira para misturar os ingredientes mais facilmente. É sempre servida com mexedor e nunca com canudo, porque contém pedaços de frutas em sua mistura.\n\nAqui colocamos o limão como fruta principal, mas a Caipiroska pode ser feita com qualquer outra fruta de sua preferência. Morango, abacaxi ou maracujá são opções muitos saborosas para quem quiser experimentar novas receitas.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '1/2',
        unitOfMeasurement: null,
        ingredientType: 'Limão',
      },
      {
        order: 3,
        quantity: '2',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
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
        description:
          'Corte meio limão em 4 pedaços e macere dentro do copo com açúcar',
      },
      {
        order: 2,
        description: 'Complete o copo com gelo e depois adicione a Vodca',
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
  {
    id: '33a65116-5c58-4a22-828d-87f261ac8d6f',
    oldId: 148,
    name: 'Calypso Sting',
    calories: 235,
    alcoholicContent: 'LOW',
    difficulty: 'MEDIUM',
    description:
      'O Calypso Sting é um coquetel muito gostoso e refrescante. O sabor do Malibu se destaca bastante.',
    decoration: 'Cereja e rodela de Limão para decorar',
    ingredients: [
      {
        order: 5,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 7,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Água Tônica',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 6,
        quantity: '2',
        unitOfMeasurement: 'gotas',
        ingredientType: 'Angostura',
      },
      {
        order: 4,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Escuro',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Malibu',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Bata os cinco primeiros ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 3,
        description: 'com a Água Tônica',
      },
      {
        order: 2,
        description: 'Passe tudo para um copo Highball e complete',
      },
      {
        order: 4,
        description: 'Adicione a Angostura',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: 'db08be19-c92c-4194-b5b4-47987d87ca5b',
    oldId: 118,
    name: 'Campari & Vodca',
    calories: 255,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Campari & Vodca é um ótimo aperitivo. Seu sabor é forte e o gosto do Campari é bem marcante.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Campari',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
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
    id: 'fd8865e5-6031-49cc-9295-b599e31cfd30',
    oldId: 430,
    name: 'Campari Berry',
    calories: 156,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'No Campari Berry o sabor do Campari se destaca, mas a combinação com o suco de laranja e o de cranberry é ótima. Uma boa escolha para quem gosta de drinques mais amargos.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Cranberry',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Campari',
      },
      {
        order: 3,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
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
    id: 'ea089e3f-b457-427f-8561-2ff5390ae516',
    oldId: 119,
    name: 'Campari Orange',
    calories: 205,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Campari Orange é um coquetel saboroso, onde o gosto do Campari predomina suavizado pelo suco de laranja.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Campari',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Monte o coquetel direto no copo Highball com gelo e complete com Suco de Laranja',
      },
      {
        order: 2,
        description: 'Mexa bem',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '457e1d68-4765-42df-9b74-6119154657d9',
    oldId: 121,
    name: 'Campari Royale',
    calories: 307,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Campari Royale é muito parecido com o Campari Orange, a única diferença é o licor de laranja que dá uma adocicada a mais no coquetel.',
    decoration: 'Rodela de laranja para decorar',
    ingredients: [
      {
        order: 3,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Campari',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
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
    categories: [],
    instructions: [],
  },
  {
    id: '9af3a2cb-2780-4833-afd8-9904d51a2cd3',
    oldId: 122,
    name: 'Campari Special',
    calories: 259,
    alcoholicContent: 'MEDIUM',
    difficulty: 'MEDIUM',
    description:
      'O Campari Special é um coquetel de sabor forte onde o licor de laranja dá uma leve adocicada no gosto marcante do Campari.',
    decoration: 'Twist de laranja para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Campari',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Mexa todos os ingredientes em um Mixing Glass com gelo',
      },
    ],
    categories: [],
    instructions: [
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
    id: '22fefaa9-bcc7-46c1-8e62-14b9c9b595b5',
    oldId: 117,
    name: 'Campari Splash',
    calories: 112,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Campari Splash foi o coquetel escolhido pela Campari para ser servido nos maiores eventos de moda pelo Brasil afora, como por exemplo São Paulo Fashion Week. Isso já diz tudo sobre o coquetel, ele é extremamente saboroso e a combinação do Campari com o morango é fantástica.',
    decoration: 'Twist de laranja para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Campari',
      },
      {
        order: 2,
        quantity: '105',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Morango',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: ['tropicais'],
    instructions: [
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
    id: '84d3e774-a9be-49db-be5a-e6de322078dc',
    oldId: 87,
    name: 'Cape Codder',
    calories: 159,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Cape Codder é um coquetel refrescante e muito saboroso. O gosto do Cranberry se destaca mais devido a vodca ser uma bebida de sabor suave.',
    decoration: 'Squeeze de limão para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Suco de Cranberry',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Mexa bem',
      },
      {
        order: 2,
        description: 'Complete com suco de Cranberry',
      },
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Highball com gelo',
      },
    ],
    categories: ['tropicais'],
    instructions: [
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
    id: '7e19d45f-0ad1-40ce-9464-90652c22d7ef',
    oldId: 89,
    name: 'Cape Cooler',
    calories: 77,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Cape Cooler é um coquetel refrescante. Seu sabor é bem suave e a Vodca quase não aparece.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Água com gás',
      },
      {
        order: 2,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Cranberry',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Complete com Água com gás',
      },
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Higball com gelo',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: '3ddad5d1-a15e-4a0e-95be-c10802959aa0',
    oldId: 363,
    name: 'Caribbean Afternoon',
    calories: 290,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Caribbean Afternoon possui fósforo, ferro, potássio e muito cálcio. É rico em vitaminas C, A, B1, B2, B3 e B6.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'pote',
        ingredientType: 'Iogurte natural desnatado (200g)',
      },
      {
        order: 5,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água',
      },
      {
        order: 2,
        quantity: '3/4',
        unitOfMeasurement: null,
        ingredientType: 'Manga',
      },
      {
        order: 1,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Goiaba sem casca',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Bata todos os ingredientes no liquidificador com uma ou duas pás de gelo até adquirir uma textura cremosa',
      },
      {
        order: 2,
        description: 'Coe para um copo Collins',
      },
    ],
    categories: ['smoothies'],
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
    id: '3fd83617-71d3-49c8-ab88-0db87d63a7c3',
    oldId: 277,
    name: 'Caribbean Pineapple',
    calories: 146,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Caribbean Pineapple é um coquetel refrescante e muito gostoso, ideal para dias de calor.',
    decoration: 'Cereja para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Malibu',
      },
      {
        order: 2,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Abacaxi',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Old-fashioned com gelo',
      },
      {
        order: 2,
        description: 'Decore com a cereja',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
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
    id: '00c6937c-6c7d-4ade-928c-eaea6a2a7c12',
    oldId: 274,
    name: 'Caribou Lou',
    calories: 279,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Caribou Lou é um coquetel muito saboroso e refrecante. O sabor do Malibu combina muito bem com o suco de abacaxi.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '150',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Abacaxi',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
      {
        order: 2,
        quantity: '30',
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
        description: 'Monte o coquetel direto no copo Highball com gelo',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: 'b3532172-5a41-4a23-a3f2-2d7ae86d483a',
    oldId: 82,
    name: 'Caruso',
    calories: 145,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Caruso é um coquetel com sabor forte, indicado para quem gosta de Gin. O Creme de menta dá cor e um leve sabor ao coquetel.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Creme de Menta verde',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Seco',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Mexa todos os ingredientes em um Mixing glass com gelo',
      },
    ],
    categories: [],
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
        description: 'Coloque o suco de laranja em uma taça Parfait com gelo',
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
    id: '80dc46c5-7556-4904-9ce2-834f9934a704',
    oldId: 134,
    name: 'Champagne Cocktail',
    calories: 150,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'No Champagne Cocktail o sabor do espumante predomina. O Brandy e a Angostura dão um toque especial, e o açúcar só aparece no final.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'torrão',
        ingredientType: 'Açúcar',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Angostura',
      },
      {
        order: 1,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy (Conhaque)',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Espumante gelado',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Adicione a Angostura e o Brandy',
      },
      {
        order: 1,
        description: 'Coloque o torrão de açúcar em uma taça Flute',
      },
      {
        order: 3,
        description: 'Complete com o Espumante',
      },
    ],
    categories: ['classicos'],
    instructions: [],
  },

  {
    id: '8c79932d-bed7-4e71-98b3-041ca145a1fd',
    oldId: 32,
    name: 'Charmer',
    calories: 173,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Charmer é um coquetel forte e saboroso onde o gosto do Whisky prevalece. O Vermouth doce e o Bitter dão um toque especial.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Orange Bitter',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Vermouth Seco',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Curaçau Blue',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Scotch Whisky',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'd8dc54b6-d433-495a-9f6a-ce8cf85c24c8',
    oldId: 389,
    name: 'Cherry Blossom Tini',
    calories: 82,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Cherry Blossom Tini é um coquetel delicioso. Seu sabor é suave e adocicado.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Splash de Suco de Limão',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Cranberry',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Saquê',
      },
      {
        order: 5,
        quantity: '2',
        unitOfMeasurement: 'gotas',
        ingredientType: 'Angostura',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: ['martinis'],
    instructions: [],
  },
  {
    id: 'cd5905f8-b08b-4668-870d-cce6d6192ae7',
    oldId: 133,
    name: 'Chicago',
    calories: 188,
    alcoholicContent: 'MEDIUM',
    difficulty: 'HARD',
    description:
      'O Chicago é um coquetel bem gostoso. O sabor do Brandy é evidente, sem ser agressivo. A crosta de açúcar é essencial para adocicar o coquetel.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy (Conhaque)',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Espumante gelado',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 5,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Açúcar para crustar a taça',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Angostura',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Coe para a taça e complete com Espumante',
      },
      {
        order: 2,
        description:
          'Misture os demais ingrendientes em um Mixing glass com gelo, exceto o Espumante',
      },
      {
        order: 1,
        description: 'Cruste a borda de uma Taça Flute com açúcar',
      },
    ],
    categories: ['classicos'],
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
    id: '3fd85c9a-bf84-4d97-b55b-7b7a8e8c74c2',
    oldId: 393,
    name: 'Chocolate Cake Shot',
    calories: 78,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Chocolate Cake Shot é forte mas saboroso. O sabor do Frangelico aparece bastante.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Frangelico',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Açúcar',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Fatia de Limão',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: '2º passo – Coloque o açúcar na boca',
      },
      {
        order: 3,
        description: '3º passo – Beba o shot',
      },
      {
        order: 4,
        description: '4º passo – Chupe o Limão',
      },
      {
        order: 1,
        description:
          '1º passo – Coloque o Frangelico e a Vodca em um copo de Shot',
      },
    ],
    categories: ['shot'],
    instructions: [],
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
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
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
    id: '2532effa-5cd2-4271-9ad5-354b507d5c56',
    oldId: 379,
    name: 'Cinnamon Touch',
    calories: 226,
    alcoholicContent: 'MEDIUM',
    difficulty: 'MEDIUM',
    description:
      'O Cinnamon Touch tem um sabor adocicado bem natural proveniente do simple syrup e a presença do Blueberry é bem marcante. Vale a pena experimentar.\n\nCoquetel criado por Rodrigo Farias de Campos.\n\nCrédito da foto: Rodrigo Farias de Campos',
    decoration: 'Twist de limão para decorar (opcional)',
    ingredients: [
      {
        order: 4,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Simple Syrup',
      },
      {
        order: 1,
        quantity: '52',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 2,
        quantity: '2',
        unitOfMeasurement: 'colheres',
        ingredientType: 'sopa de Blueberries',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Suco de 1/2 Limão',
      },
      {
        order: 5,
        quantity: 'U',
        unitOfMeasurement: 'pitada',
        ingredientType: 'Canela',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Adicione a Vodca e bastante gelo',
      },
      {
        order: 3,
        description: 'Bata tudo e coe para uma Taça de Coquetel gelada',
      },
      {
        order: 1,
        description:
          'Macere em uma coqueteleira os Blueberries, o suco de limão, o simple syrup e a canela',
      },
    ],
    categories: [],
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
    id: '8b318157-81ce-424d-915e-ebdbc5ce38b8',
    oldId: 362,
    name: 'Citrus Mix',
    calories: 195,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Citrus Mix possui cálcio, fósforo e potássio. É rico em vitaminas A, B1 e B2.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '4',
        unitOfMeasurement: null,
        ingredientType: 'Morangos',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
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
        unitOfMeasurement: 'fatia',
        ingredientType: 'grossa de Abacaxi',
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
        description: 'Coe para um copo Collins',
      },
      {
        order: 1,
        description:
          'Bata todos os ingredientes no liquidificador com uma ou duas pás de gelo até adquirir uma textura cremosa',
      },
    ],
    categories: ['smoothies'],
    instructions: [],
  },
  {
    id: 'cc9636d4-7d45-408a-a643-ef345d4037f1',
    oldId: 359,
    name: 'Citrus Passion',
    calories: 227,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description: 'O Citrus Passion é rico em vitaminas C, A, B1 e B2.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '5',
        unitOfMeasurement: null,
        ingredientType: 'Morangos',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 1,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Kiwi',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Limão',
      },
      {
        order: 5,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para um copo Collins',
      },
      {
        order: 1,
        description:
          'Bata todos os ingredientes no liquidificador com uma ou duas pás de gelo até adquirir uma textura cremosa',
      },
    ],
    categories: ['smoothies'],
    instructions: [],
  },
  {
    id: '850bfb03-c56d-44a5-ab2c-4ddea1ae79d5',
    oldId: 245,
    name: 'Clarity Cocktail',
    calories: 129,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Clarity Cocktail é um coquetel muito refrescante. Seu sabor é bem adocicado e o gosto da Sambuca é marcante.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Mix de Limão ou Limonada para completar',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Sambuca Branca',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Coloque a Sambuca em um copo Highball com gelo',
      },
      {
        order: 2,
        description: 'Complete com Mix de Limão',
      },
      {
        order: 3,
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
    id: '4ea458a1-f87a-447b-82d5-24e82fec2d25',
    oldId: 40,
    name: 'Cock´Style',
    calories: 185,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Cock´style é um coquetel refrescante com sabor adocicado. O suco de laranja e o curaçau blue dão uma bela coloração esverdeada e um sabor especial ao coquetel.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Curaçau Blue',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 4,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Limão (Sweet and Sour)',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Old-Fashioned com gelo',
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
    id: '29a37afa-dc78-44fd-9a8e-cc6c9344bcd0',
    oldId: 343,
    name: 'Coco Chanel',
    calories: 238,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Coco Chanel é um coquetel bem saboroso. O gosto do Gin aparece suavemente, junto com o sabor do café.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Café',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Leite',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
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
    id: 'ddacb9bf-5e2f-4937-88e5-f7516a4947ef',
    oldId: 39,
    name: 'Coco Loco',
    calories: 420,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Coco Loco é um coquetel refrescante, apesar do alto teor alcoólico. Seu sabor não é forte devido ao suco e à água de côco que o deixam mais saboroso.',
    decoration: 'Squeeze de limão para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Côco fresco com água',
      },
      {
        order: 2,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Tequila Prata',
      },
      {
        order: 7,
        quantity: '1',
        unitOfMeasurement: 'Splash',
        ingredientType: 'Simple Syrup',
      },
      {
        order: 6,
        quantity: '1',
        unitOfMeasurement: 'pá',
        ingredientType: 'gelo moído',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 5,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Abacaxi',
      },
      {
        order: 4,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Abra o Côco cortando o topo e deixe a água dentro',
      },
      {
        order: 2,
        description: 'Adicione todos os ingredientes e mexa levemente',
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
    id: '80c82578-e01f-43ae-9257-f81f0331e3a7',
    oldId: 178,
    name: 'Coconut Citrus',
    calories: 264,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Coconut Citrus é perfeito para dias de calor. É um coquetel refrescante e muito saboroso. Os ingredientes combinam perfeitamente.',
    decoration: 'Twist de Limão para decorar (opcional)',
    ingredients: [
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Água de Côco para completar',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Limão (Sweet and Sour)',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Curaçau Blue',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Highball com gelo',
      },
      {
        order: 2,
        description: 'Complete com Água de Côco',
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
    id: '5acf4c09-0194-4a9a-a33d-4e1c6c1e35af',
    oldId: 172,
    name: 'Coffee Time',
    calories: 281,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Coffee Time é um coquetel ideal para os dias de frio. O licor de côco dá um toquel especial e combina muito bem com o café.',
    decoration: 'Chantilly para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Côco',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Café',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Café quente',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy (Conhaque)',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Coloque os três primeiros ingredientes em uma caneca para coquetéis quentes',
      },
      {
        order: 2,
        description: 'Complete com café',
      },
      {
        order: 3,
        description: 'Decore com o Chantilly',
      },
    ],
    categories: ['quentes'],
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
        description: 'Bata os dois ingredientes em uma coqueteleira com gelo',
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
    id: '7e1a47a0-7ac0-4f19-aba5-04dbe28e6273',
    oldId: 167,
    name: 'Continental',
    calories: 177,
    alcoholicContent: 'MEDIUM',
    difficulty: 'MEDIUM',
    description:
      'O Continental é um coquetel doce muito gostoso. Seu sabor leve é dominado pelo gosto de menta.',
    decoration: 'Twist de limão para decorar',
    ingredients: [
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Limão (Sweet and Sour)',
      },
      {
        order: 2,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Menta verde',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
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
          'Mexa bem todos os ingredientes em um Mixing glass com gelo',
      },
    ],
    categories: [],
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
    id: '8be5e8f3-c911-4e7b-b55a-03e2aaece4f2',
    oldId: 201,
    name: 'Corrida',
    calories: 203,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'No Corrida, o sabor do energético se destaca. Já o absinto aparece mais suavemente.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Energético',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
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
        order: 2,
        description: 'Complete com energético',
      },
      {
        order: 1,
        description: 'Coloque o Absinto e a Vodca em um copo Highball com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'fdcddaec-3ea6-4905-9f7b-2c1e66361664',
    oldId: 88,
    name: 'Cosmopolitan',
    calories: 261,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Cosmopolitan é um coquetel clássico. Possui um gosto adocicado, porém um pouco forte.',
    decoration: 'Twist de Laranja para decorar',
    ingredients: [
      {
        order: 4,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Cranberry',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca Citrus',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: ['classicos'],
    instructions: [
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
    id: '1b8f3699-2453-450a-87f3-778b7f5519de',
    oldId: 345,
    name: 'Costa Del Sol',
    calories: 300,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Costal del Sol é um coquetel bem saboroso. O gosto do Brandy de damasco aparece bem.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
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
        ingredientType: 'Brandy de Damasco',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
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
    id: 'c27a04ba-bd2b-4e10-871b-118b2e11fdf9',
    oldId: 231,
    name: 'Country Club',
    calories: 113,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'No Country Club, o sabor do Vermouth é suavizado pelo Grenadine. O Grenadine também perde um pouco do seu sabor adocicado por causa do Vermouth. É uma ótima combinação.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Seco',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Soda Limonada',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Grenadine',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Monte o coquetel direto no copo Double Old-fashioned com gelo',
      },
      {
        order: 2,
        description: 'Complete com Soda Limonada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'aea1e530-f501-4f16-8774-612b93eea9cd',
    oldId: 84,
    name: 'Cranberry Frog',
    calories: 76,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Cranberry Frog é um coquetel delicioso. O Cranberry esconde a acidez do suco de laranja.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '120',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 2,
        quantity: '120',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Cranberry',
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
    categories: ['semalcool'],
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
    id: '74b87339-286b-4c4a-9fc5-2d7be4989a8c',
    oldId: 471,
    name: 'Creamy Screwdriver',
    calories: 332,
    alcoholicContent: 'LOW',
    difficulty: 'MEDIUM',
    description:
      'O Creamy Screwdriver tem um sabor suave. O gosto do ovo predomina.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'colher de chá',
        ingredientType: 'Açúcar',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'gema',
        ingredientType: 'ovo',
      },
      {
        order: 2,
        quantity: '180',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
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
        description: 'Coe para o copo Collins',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: '34f76488-cdf5-44b7-82f6-6067a4008e6a',
    oldId: 217,
    name: 'Crocodile',
    calories: 185,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Crocodile é um coquetel doce e gostoso. O sabor do licor de Melão se destaca e o gosto cítrico do limão e do licor de laranja dão um toque especial.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 4,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Melão',
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
        description: 'Coe para uma taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'ae874566-1acc-42df-879b-15c1d16b89cf',
    oldId: 27,
    name: 'Cuba Libre',
    calories: 199,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'A Cuba Libre é um coquetel refrescante e bem simples de ser preparado. Muito saboroso, este clássico está sempre presente em festas e bares.',
    decoration: 'Rodela de limão para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Refrigerante de cola',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Complete com Refrigerante de cola',
      },
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Highball com gelo',
      },
    ],
    categories: ['tropicais', 'classicos'],
    instructions: [],
  },
  {
    id: 'd7aabd8d-a7bf-430e-945e-d244345cf2aa',
    oldId: 44,
    name: 'Cubano',
    calories: 173,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Cubano é um coquetel que estimula o apetite. O sabor do Rum é bem acentuado, mas não ao ponto de deixar o coquetel agressivo.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'colher de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'c9f4ea76-1b78-4444-8282-0299e0ce9d97',
    oldId: 157,
    name: 'Cucumber Fresh Mint',
    calories: 104,
    alcoholicContent: 'ZERO',
    difficulty: 'MEDIUM',
    description:
      'O Cucumber Fresh Mint é um coquetel ideal para dias de calor. O pepino o deixa com um leve sabor e combina perfeitamente com os outros ingredientes.',
    decoration: 'Ramo de Hortelã para decorar',
    ingredients: [
      {
        order: 1,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Suco de 1 limão',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Soda Limonada gelada',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Açúcar para crustar a taça',
      },
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Pedaço de 2 cm de Pepino cortado em rodelas',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Cruste um copo Hurricane com açúcar',
      },
      {
        order: 3,
        description: 'Adicione o suco do Limão e complete com a Soda',
      },
      {
        order: 2,
        description: 'Coloque os Pepinos e cubos de gelo',
      },
    ],
    categories: ['semalcool'],
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
    id: 'e2b2ff2d-f758-4967-a29d-b7a510e0e676',
    oldId: 305,
    name: 'Cucumber Margarita',
    calories: 267,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Cucumber Margarita é um coquetel saboroso e forte. O gosto da Tequila se destaca e o Pepino dá um toque especial.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Tequila Prata',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colher de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 5,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Rodelas de Pepino',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Adicione a Tequila e o Triple Sec',
      },
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
      {
        order: 1,
        description:
          'Encha 1/4 do copo Old-fashioned com Pepino e macere com o açúcar e o limão',
      },
      {
        order: 4,
        description: 'Mexa bem',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '267b7c49-aa17-4dc9-9071-31ab8e4b7083',
    oldId: 7,
    name: 'Daiquiri',
    calories: 177,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Daiquiri é um coquetel refrescante ideal para ser tomado em dias quentes. A combinação do rum com o limão proporciona um sabor único.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Limão (Sweet and Sour)',
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
        description: 'Coe para uma Taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata os ingredientes em uma coqueteleira com gelo',
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
    ],
  },
  {
    id: 'c661d313-c337-4989-9ac5-c7c5b64b89be',
    oldId: 168,
    name: 'Daisy',
    calories: 274,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Daisy é um coquetel bem alcoólico. O gosto do Gin se destaca.',
    decoration: 'Rodela de laranja para decorar',
    ingredients: [
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Soda Limonada',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Grenadine',
      },
      {
        order: 2,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Limão (Sweet and Sour)',
      },
      {
        order: 1,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Passe tudo para um copo Highball',
      },
      {
        order: 3,
        description: 'Complete com a Soda Limonada',
      },
      {
        order: 1,
        description:
          'Bata todos os ingredientes em uma coqueteleira com gelo, exceto a Soda',
      },
    ],
    categories: ['classicos'],
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
    id: '9019030b-9d41-4cea-bae8-a1f17682e587',
    oldId: 313,
    name: 'Dallas Stars',
    calories: 103,
    alcoholicContent: 'LOW',
    difficulty: 'HARD',
    description:
      'O Dallas Star é um shot bem doce e forte. O combinação do sabor da menta com o gosto da canela do Goldschlager é muito boa.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Menta verde',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Goldschlager',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Monte o coquetel em camadas em um copo de Shot, seguindo a ordem dos ingredientes',
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
    id: '09fe5d4b-0921-4b8f-a1ed-3d25392fbef9',
    oldId: 45,
    name: 'Damn The Weather',
    calories: 144,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Damn the Weather é um coquetel ideal para quem gosta de Gin. Tem um sabor mais forte, e o gosto da laranja o suaviza levemente.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Vermouth Doce',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '6d9d8e81-463e-426d-886d-fd3efc74a945',
    oldId: 46,
    name: 'Daniel´S Cocktail',
    calories: 60,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Daniel´s é um coquetel bem ácido com sabor doce. Muito saboroso, é ideal para quem gosta de limão.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
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
        ingredientType: 'Suco de Laranja',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: ['semalcool'],
    instructions: [],
  },
  {
    id: '5c413929-de47-427b-8efb-88e3eaa3e9bd',
    oldId: 368,
    name: 'Dark Secrets',
    calories: 248,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Dark Secrets é um coquetel com sabor bem marcante. O gosto do Conhaque se destaca.',
    decoration: 'Lâminas de Amêndoas tostadas para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Amaretto',
      },
      {
        order: 3,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Café',
      },
      {
        order: 1,
        quantity: '37',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy (Conhaque)',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel e decore com as amêndoas',
      },
      {
        order: 1,
        description:
          'Bata todos os ingredientes em uma coqueteleira com gelo, exceto as amêndoas',
      },
    ],
    categories: [],
    instructions: [],
  },

  {
    id: 'af57e4c9-9613-4b23-93db-145d684df82d',
    oldId: 344,
    name: 'Dawn',
    calories: 146,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Dawn é um coquetel com sabor bem marcante. O gosto do Campari se destaca.',
    decoration: 'Twist de Laranja para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Campari',
      },
      {
        order: 3,
        quantity: '52',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Decore com o twist de Laranja',
      },
      {
        order: 2,
        description: 'Passe tudo para um copo Old-fashioned',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [
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
    id: '3223478b-efd7-4913-9eeb-f726e74ca6a8',
    oldId: 311,
    name: 'Dead Man Walking',
    calories: 102,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Dead Man Walking é um shot muito forte. O sabor do Absinto se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Goldschlager',
      },
      {
        order: 1,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Absinto',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Misture os ingredientes em um copo de Shot',
      },
    ],
    categories: ['shot'],
    instructions: [],
  },
  {
    id: '40942ef5-3174-414f-b22f-725d66de8477',
    oldId: 342,
    name: 'Delmonico Number 1',
    calories: 135,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Delmonico Number 1 é um coquetel bem forte. O sabor do Brandy e do Gin se destacam.',
    decoration: 'Twist de Laranja para decorar',
    ingredients: [
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Doce',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy (Conhaque)',
      },
      {
        order: 5,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Angostura',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 4,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Seco',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
      {
        order: 3,
        description: 'Decore com o twist de Laranja',
      },
    ],
    categories: [],
    instructions: [
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
    id: '9845ab2c-d128-4363-8ce4-dc3d32b68663',
    oldId: 47,
    name: 'Diamond Fizz',
    calories: 270,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Diamond Fizz é um coquetel com gosto um pouco seco. O sabor do Gin predomina e o espumante da um toque essencial.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Espumante gelado',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'colher de bar',
        ingredientType: 'Açúcar',
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
          'Bata os ingredientes em uma coqueteleira com gelo exceto o Espumante',
      },
      {
        order: 2,
        description: 'Passe tudo para um copo Highball',
      },
      {
        order: 4,
        description: 'Mexa suavemente',
      },
      {
        order: 3,
        description: 'Complete com o Espumante',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '66fb7523-16b0-456a-b6c2-d6121d9b59d7',
    oldId: 451,
    name: 'Dieci E Lode',
    calories: 208,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Dieci e Lode é um coquetel com sabor forte. O gosto do Gin aparece bastante.',
    decoration: 'Rodela de Limão para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Campari',
      },
      {
        order: 3,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Grapefruit (Toranja)',
      },
      {
        order: 1,
        quantity: '75',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
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
    id: '6bc0540a-8fff-48de-a70d-34e17615b3fc',
    oldId: 397,
    name: 'Diesel Fuel',
    calories: 172,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Diesel Fuel é um shot forte. O sabor do Jägermeister aparece bastante.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Jägermeister',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para um copo de Shot',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: ['shot'],
    instructions: [],
  },
  {
    id: '07907b45-f950-45a0-b467-35bd8860a6f8',
    oldId: 285,
    name: 'Dingo',
    calories: 329,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Dingo é um coquetel gostoso e adocicado. O sabor do Rum e do Amaretto se destacam e o licor de pêssego aparece bem pouco.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Pêssego',
      },
      {
        order: 5,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 6,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Grenadine',
      },
      {
        order: 4,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Limão (Sweet and Sour)',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Amaretto',
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
        description: 'Passe tudo para um copo Highball',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
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
    id: 'd2d06b74-7903-49a2-aeb5-069c7ab16f36',
    oldId: 280,
    name: 'Dirty Melon',
    calories: 262,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Dirty Melon é um coquetel muito saboroso e bem doce. O sabor do licor de melão se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Grenadine',
      },
      {
        order: 3,
        quantity: '120',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Abacaxi',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Melão',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Passe tudo para um copo Highball',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: 'a621596e-9733-43a7-9961-1b92a2bb23fd',
    oldId: 241,
    name: 'Dry Manhattan',
    calories: 159,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'O Dry Manhattan é um coquetel forte. O Vermouth suaviza levemente o sabor do Whiskey.',
    decoration: 'Twist de Limão para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '52',
        unitOfMeasurement: 'ml',
        ingredientType: 'Whiskey',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Angostura',
      },
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Seco',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
      {
        order: 3,
        description: 'Adicione o twist de Limão',
      },
      {
        order: 1,
        description: 'Mexa todos os ingredientes em um Mixing glass com gelo',
      },
    ],
    categories: ['classicos'],
    instructions: [
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
    id: '7f523fab-e6a2-4e28-bba1-bce6ee5194cd',
    oldId: 52,
    name: 'Dry Martini',
    calories: 188,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'O mais extraordinário dos coquetéis, o Dry Martini é definitivamente o coquetel mais famoso do mundo. Forte, porém delicado, é um aperitivo fantástico para quem gosta de Gin.',
    decoration: 'Azeitona no palito para decorar',
    ingredients: [
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Zest de limão',
      },
      {
        order: 1,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 2,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Seco',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Mexa os ingredientes em um Mixing Glass com gelo',
      },
      {
        order: 3,
        description: 'Adicione o Zest de limão e a azeitona por último',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: ['martinis', 'classicos'],
    instructions: [
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
    id: 'cbd9bb29-091a-40c4-a9c9-2b636d0cc5ca',
    oldId: 326,
    name: 'Early Burn',
    calories: 306,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Early Burn é um coquetel refrescante bem gostoso. O gosto do Goldschlager combina bem com o suco de laranja.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '180',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Goldschlager',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Highball com gelo',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: '85a214b9-6e68-4f45-835f-2a756b5efc79',
    oldId: 202,
    name: 'Earthquake Cocktail',
    calories: 208,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'O Earthquake Cocktail é um coquetel forte. O sabor do whiskey se destaca e o absinto aparece mais suave.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Bourbon (Whiskey)',
      },
      {
        order: 3,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Absinto',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Mexa todos os ingredientes em um Mixing glass com gelo',
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
    id: '9497d651-7b5d-4103-981e-506d86842e19',
    oldId: 281,
    name: 'Electric Smurf',
    calories: 270,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Electric Smurf é um coquetel muito bonito e saboroso. Seus ingredientes combinam perfeitamente.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Soda Limonada',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Suco de Abacaxi',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Malibu',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Curaçau Blue',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Complete com o suco de Abacaxi e a Soda em partes iguais',
      },
      {
        order: 3,
        description: 'Mexa bem',
      },
      {
        order: 1,
        description:
          'Adicione o Curaçau e o Malibu em um copo Highball com gelo',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: 'f744fe9f-415d-4363-ad2e-d06ed070226e',
    oldId: 314,
    name: 'Emerald Jewel Funtini',
    calories: 278,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Emerald Jewel é um drinque forte. O gosto do Goldschlager aparece bastante.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Goldschlager',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Melão',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Passe tudo para um copo On The Rocks',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'e5d1b76d-30ca-4275-8dc8-acc7e1de4dda',
    oldId: 364,
    name: 'Energy Blend',
    calories: 278,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Energy Blend possui fósforo, ferro, potássio e muito cálcio. É rico em vitaminas A, E, D e K.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 2,
        quantity: '5',
        unitOfMeasurement: null,
        ingredientType: 'Morangos',
      },
      {
        order: 1,
        quantity: '4',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açaí',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'pote',
        ingredientType: 'Iogurte natural desnatado (200g)',
      },
      {
        order: 5,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Bata todos os ingredientes no liquidificador com uma ou duas pás de gelo até adquirir uma textura cremosa',
      },
      {
        order: 2,
        description: 'Coe para um copo Collins',
      },
    ],
    categories: ['smoothies'],
    instructions: [],
  },
  {
    id: 'acdddd71-131c-4eb2-a3fe-2b0d02bfbb6b',
    oldId: 290,
    name: 'Espanhola',
    calories: 195,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'A Espanhola é um coquetel tropical bem doce. A combinação do Vinho com o Abacaxi é bem saborosa e refrescante.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '2',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Leite Condensado',
      },
      {
        order: 1,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vinho Tinto',
      },
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Rodela de Abacaxi de 1 cm de espessura',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Adicione o vinho e bata tudo com gelo',
      },
      {
        order: 1,
        description:
          'Macere bem o abacaxi com o leite condensado em uma coqueteleira',
      },
      {
        order: 3,
        description: 'Passe tudo para um copo Hurricane',
      },
    ],
    categories: ['tropicais', 'classicos'],
    instructions: [],
  },
  {
    id: '047bd4b7-ed65-4df2-924c-541ea93fe4ec',
    oldId: 349,
    name: 'Evergreen',
    calories: 169,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Evergreen é um coquetel forte. O sabor do licor de melão se destaca e o Gin aparece suavemente.',
    decoration: 'Cereja para decorar',
    ingredients: [
      {
        order: 5,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Curaçau Blue',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Seco',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Melão',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Suco de Limão',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Bata os 4 primeiros ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 3,
        description: 'Adicione o Curaçau Blue e a cereja',
      },
      {
        order: 2,
        description: 'Coe para uma taça de coquetel gelada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '0baf51dd-9847-488e-ad32-d8eeec6b2078',
    oldId: 339,
    name: 'Evita Cocktail',
    calories: 212,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Evita Cocktail é muito suave e gostoso. O sabor do melão se destaca.',
    decoration: 'Rodela de Laranja para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 4,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Limão (Sweet and Sour)',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Melão',
      },
      {
        order: 3,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Decore com a rodela de Laranja',
      },
      {
        order: 1,
        description:
          'Bata todos os ingredientes no liquidificador com 1 ou 2 pás de gelo até adquirir uma textura cremosa',
      },
      {
        order: 2,
        description: 'Coe para uma taça Fiesta',
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
    id: '7e7da164-e19d-4d5c-b550-55b56f2a8a3f',
    oldId: 48,
    name: 'Fair And Warmer',
    calories: 162,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Fair and Warmer é um coquetel que estimula o apetite. O gosto do Rum prevalece e o Vermouth da uma leve adocicada.',
    decoration: 'Twist de limão para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Doce',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
      {
        order: 3,
        quantity: '3',
        unitOfMeasurement: 'gotas',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 3,
        description: 'Decore com o twist de Limão',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: [],
    instructions: [
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
    id: '2f877c7b-7e19-41de-8a7b-b211caf94236',
    oldId: 205,
    name: 'Fire Fairy',
    calories: 194,
    alcoholicContent: 'MEDIUM',
    difficulty: 'HARD',
    description:
      'O Fire Fairy é um shot muito gostoso. O energético, combinado com o Amaretto e o Absinto, fica fantástico.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Amaretto',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Energético',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Absinto',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description:
          'Cuidadosamente, coloque fogo no Absinto e jogue o copo de shot dentro do copo com energético',
      },
      {
        order: 2,
        description:
          'Encha um copo Double Old-fashioned ou outro copo largo com energético',
      },
      {
        order: 1,
        description:
          'Coloque o Amaretto em um copo de shot pequeno e adicione o Absinto separando-os em camadas',
      },
      {
        order: 4,
        description: 'Beba imediatamente',
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
    id: '7d1ffc07-9715-4e58-95cd-f2f30b7d53a4',
    oldId: 166,
    name: 'Fireman´S Sour',
    calories: 168,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Fireman’s Sour, como o nome já diz, é um coquetel bastante ácido. A adição do grenadine é mais para dar coloração do que sabor.',
    decoration: 'Cereja para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 3,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Grenadine',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada e adicione a cereja',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'e5f5bd60-e606-42fa-8f0b-83b2d23df2d4',
    oldId: 421,
    name: 'Flamingo',
    calories: 80,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Flamingo é um coquetel refrescante e delicioso. A água com gás dá um toque especial ao sabor.',
    decoration: 'Rodela de Limão para decorar',
    ingredients: [
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 1,
        quantity: '120',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Cranberry',
      },
      {
        order: 4,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água com gás',
      },
      {
        order: 2,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Abacaxi',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Passe tudo para um copo Highball',
      },
      {
        order: 1,
        description:
          'Bata todos os ingredientes, exceto a água com gás, em uma coqueteleira com gelo',
      },
      {
        order: 3,
        description: 'Complete com água com gás e mexa bem',
      },
    ],
    categories: ['semalcool'],
    instructions: [],
  },
  {
    id: '70442cf7-7f69-4022-90d7-3fb37c99952b',
    oldId: 129,
    name: 'Flying Dutchman',
    calories: 223,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'O Flying Dutchman é um coquetel forte, ideal para os apreciadores de Gin. O Triple Sec o adocica levemente.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Mexa bem os ingredientes em um Mixing glass com gelo',
      },
      {
        order: 2,
        description: 'Passe tudo para um copo Old-Fashioned',
      },
    ],
    categories: [],
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
    id: 'e64315d0-08d6-4f82-85e4-fc00ab5415f4',
    oldId: 395,
    name: 'Frangelico Cola & Lime',
    calories: 127,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Frangelico Coca & Lima é um coquetel bem gostoso. Seu sabor é bem suave.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Refrigerante de cola',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Squeeze de Limão',
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
        description: 'Coloque o Frangelico em um copo Highball com gelo',
      },
      {
        order: 3,
        description: 'Adicione o squeeze de limão',
      },
      {
        order: 2,
        description: 'Complete com refrigerante de Cola e mexa bem',
      },
    ],
    categories: ['tropicais'],
    instructions: [
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
    id: 'f61c9ac5-b8a6-470e-8f27-9c2357cb0ca8',
    oldId: 185,
    name: 'French Connection',
    calories: 219,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'No French Connection o sabor do Brandy se destaca. O Amaretto deixa o gosto mais adocicado.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '37',
        unitOfMeasurement: 'ml',
        ingredientType: 'Amaretto',
      },
      {
        order: 1,
        quantity: '37',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy (Conhaque)',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo old-fashioned com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '0625f41e-d3c0-4fa8-8ac0-0065e4409007',
    oldId: 226,
    name: 'French Daiquiri',
    calories: 181,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O French Daiquiri é um coquetel forte e ácido. O sabor do limão se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Creme de Cassis',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
      {
        order: 4,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
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
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
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
    id: '1b880087-0069-456c-8ab2-02bb9d605eb0',
    oldId: 91,
    name: 'French Kiss',
    calories: 273,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O French Kiss é um coquetel saboroso. O gosto do Bourbon é suave e o do Licor de pêssego se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Bourbon (Whiskey)',
      },
      {
        order: 3,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Grenadine',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Suco de Limão',
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
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '33d401f6-1a24-4058-9831-71ffc0272398',
    oldId: 211,
    name: 'French Toast #2',
    calories: 199,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O French Toast #2 é um coquetel muito gostoso. O sabor da Amarula se destaca e é fortalecido pelo Rum.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Amarula',
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
        ingredientType: 'Rum',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
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
    id: 'e3ca9fb5-7d9a-4ba2-a834-6d5331bf508b',
    oldId: 73,
    name: 'Frozen Daiquiri',
    calories: 211,
    alcoholicContent: 'LOW',
    difficulty: 'MEDIUM',
    description:
      'O Frozen Daiquiri é um coquetel delicioso e muito refrescante. Sua receita é bem simples e seu sabor é extraordinário, o que o torna único. Esta receita é uma variação do Daiquiri, mas o sabor continua praticamente o mesmo.',
    decoration: 'Limão para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Limão (Sweet and Sour)',
      },
      {
        order: 1,
        quantity: '75',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
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
        description: 'Coe para uma Taça Tulipa',
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
    id: 'b7f9e93b-2b50-4c9a-b1de-102cf704ac88',
    oldId: 415,
    name: 'Fuzzy Lemon Fizz',
    calories: 52,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Fuzzy Lemon Fizz é um coquetel bem refrescante, mas um pouco ácido por causa do limão.',
    decoration: 'Twist de Limão para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 1,
        quantity: '135',
        unitOfMeasurement: 'ml',
        ingredientType: 'Néctar de Pêssego batido no liquidificador',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Highball com gelo',
      },
      {
        order: 2,
        description: 'Decore com o twist de limão e mexa bem',
      },
    ],
    categories: ['semalcool'],
    instructions: [
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
    id: '2576cc3a-d9d4-4957-9d94-875094c1d064',
    oldId: 286,
    name: 'Fuzzy Navel',
    calories: 290,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Fuzzy Navel é um coquetel bem refrescante e gostoso. Seu sabor adocicado lembra bastante o Sex on the Beach.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Pêssego',
      },
      {
        order: 3,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Limão (Sweet and Sour)',
      },
      {
        order: 2,
        quantity: '60',
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
    id: 'c1364780-0ab5-4eca-9f53-31c35b8299f5',
    oldId: 294,
    name: 'Fuzzy Pirate',
    calories: 219,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Fuzzy Pirate é um coquetel bem refrescante. O sabor do Rum aparece bem suave.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Pêssego',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
      {
        order: 3,
        quantity: '120',
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
        description: 'Monte o coquetel direto no copo Highball com gelo',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: 'bc6c4d37-3818-43eb-b54c-4c3cd7bf76fb',
    oldId: 315,
    name: 'G Bomb',
    calories: 124,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O G Bomb é um shot bem forte. O gosto do Goldschlager se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca gelada',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Goldschlager gelado',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Misture os ingredientes em um copo de shot gelado',
      },
    ],
    categories: ['shot'],
    instructions: [],
  },
  {
    id: '3f6957e9-9aab-4bef-80a1-195c29c43ac8',
    oldId: 30,
    name: 'Garibaldi',
    calories: 91,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Garibaldi é um coquetel amargo e ao mesmo tempo um pouco refrescante devido ao suco de laranja.',
    decoration: 'Rodela de laranja para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Campari',
      },
      {
        order: 2,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Old-Fashioned com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },

  {
    id: '3117e7bb-25e5-448f-a6b6-ab76f2448033',
    oldId: 475,
    name: 'Genoa Vodca',
    calories: 278,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Genoa Vodca é um coquetel um pouco mais amargo, porém saboroso. O gosto do Campari se destaca. Ótimo para quem procura drinques mais amargos.',
    decoration: 'Casca de laranja para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Campari',
      },
      {
        order: 3,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Decore com a casca de laranja',
      },
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Highball com gelo',
      },
    ],
    categories: [],
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
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '2a73cbe0-c315-45df-b669-df8baa629b45',
    oldId: 341,
    name: 'Gibson',
    calories: 130,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'O Gibson lembra bastante o Dry Martini. O sabor do Gin se destaca e a cebolinha dá um toque especial.',
    decoration: '1 Cebolinha para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 2,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Seco',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Decore com a cebolinha',
      },
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Mexa todos os ingredientes em um Mixing glass com gelo',
      },
    ],
    categories: ['classicos'],
    instructions: [],
  },
  {
    id: '0f52f7f8-db40-49ab-8efa-f8c5afba1b54',
    oldId: 165,
    name: 'Gimlet',
    calories: 105,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Gimlet é um coquetel ácido bem gostoso. O Sabor do Gin se destaca.',
    decoration: 'Rodelas de Limão para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Soda Limonada',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Old-Fashioned com gelo',
      },
      {
        order: 2,
        description: 'Complete com Soda Limonada',
      },
    ],
    categories: ['classicos'],
    instructions: [],
  },
  {
    id: '3536f5dd-8fc1-4aed-ab42-76a7d9759de1',
    oldId: 111,
    name: 'Gin & It',
    calories: 201,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'O Gin & It é um coquetel bem forte e o sabor do gin predomina.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Doce',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Mexa todos os ingredientes em um Mixing Glass com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '303cd01a-1e70-4bc6-9ef7-234c23247899',
    oldId: 112,
    name: 'Gin & Sin',
    calories: 143,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Gin & Sin é um coquetel seco e um pouco ácido onde o sabor do Gin se destaca sobre os outros ingredientes.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 4,
        quantity: '2',
        unitOfMeasurement: 'gotas',
        ingredientType: 'Grenadine',
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
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'c9f9bd05-5088-4009-8c17-4fe424d69b34',
    oldId: 346,
    name: 'Gin And Tonic',
    calories: 156,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Gin and Tonic é um coquetel forte. O sabor do Gin se destaca, e a água tônica o suaviza.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'squeezes',
        ingredientType: 'Limão',
      },
      {
        order: 2,
        quantity: '120',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água Tônica',
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
        description: 'Monte o coquetel direto no copo Old-fashioned com gelo',
      },
      {
        order: 2,
        description: 'Mexa bem',
      },
    ],
    categories: [],
    instructions: [
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
    id: '2c0011f5-00d8-49f0-821e-93e642195485',
    oldId: 222,
    name: 'Gin Cassis',
    calories: 489,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description: 'O Gin Cassis é um coquetel forte. O gosto do Gin se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Cassis',
      },
      {
        order: 1,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Highball com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '499f4056-a445-4146-ac54-2601fecda5e8',
    oldId: 113,
    name: 'Gin Daisy',
    calories: 210,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Gin Daisy é um coquetel de sabor adocicado onde o gosto do Gin se destaca um pouco mais que os outros ingredientes.',
    decoration: 'Twist de Limão para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '75',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Grenadine',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Passe tudo para um copo Highball',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [
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
    id: 'e22d0de6-e596-45aa-8f74-faddd4df416f',
    oldId: 54,
    name: 'Gin Fizz',
    calories: 180,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Gin Fizz é um coquetel efervecente. O sabor do Gin se mistura com os outros ingredientes deixando seu gosto levemente forte.',
    decoration: 'Limão para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Água com gás',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'colher de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Passe tudo para um copo Highball',
      },
      {
        order: 1,
        description:
          'Bata os ingredientes em uma coqueteleira com gelo exceto a Água com gás',
      },
      {
        order: 3,
        description: 'Complete com a Água com gás',
      },
    ],
    categories: ['classicos'],
    instructions: [],
  },
  {
    id: '1f001175-76f9-4111-8a41-88deec2379cb',
    oldId: 164,
    name: 'Gin Rickey',
    calories: 132,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Gin Rickey é um coquetel forte e saboroso. O gosto do Gin se destaca.',
    decoration: 'Rodela de Limão para decorar',
    ingredients: [
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Soda Limonada',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o copo direto no copo Highball com gelo',
      },
      {
        order: 3,
        description: 'Mexa suavemente',
      },
      {
        order: 2,
        description: 'Complete com Soda Limonada',
      },
    ],
    categories: ['classicos'],
    instructions: [],
  },
  {
    id: '7400a4c5-5c40-4bc5-a826-7408d5c49947',
    oldId: 347,
    name: 'Gin Sling',
    calories: 176,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Gin Sling é o coquetel ideal para ser consumido antes das refeições. Seu sabor é um pouco ácido e o gosto do Gin se destaca.',
    decoration: 'Squeeze de Limão para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 4,
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
        order: 2,
        description: 'Passe tudo para um copo Highball',
      },
      {
        order: 3,
        description: 'Complete com Água com gás',
      },
      {
        order: 1,
        description:
          'Bata os três primeiros ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [
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
    id: 'ecdcdb2f-9160-4216-9b3e-72069f29698b',
    oldId: 268,
    name: 'Gipsy',
    calories: 134,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Gipsy é um coquetel adocicado. A Angostura aparece levemente dando um toque especial.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Bénédictine',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Angostura',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para um taça de Coquetel gelada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '576fc8ac-ad50-4404-8aaf-e81de9481d22',
    oldId: 295,
    name: 'Glass Tower',
    calories: 466,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Glass Tower é um coquetel bem adocicado. O gosto da Sambuca se destaca sobre todas as outras bebidas.',
    decoration: 'Twist de Laranja e Cereja para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 6,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Soda Limonada',
      },
      {
        order: 4,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Pêssego',
      },
      {
        order: 5,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Sambuca Branca',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Complete com Soda limonada',
      },
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Collins com gelo',
      },
      {
        order: 3,
        description: 'Decore com o twist e a cereja',
      },
    ],
    categories: [],
    instructions: [
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
    id: 'e28ea209-f106-4c12-a437-f035fa30d2e3',
    oldId: 182,
    name: 'God Father',
    calories: 216,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O God Father é um coquetel muito saboroso. O gosto do whisky é bem suave e o Amaretto o adocica levemente.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '37',
        unitOfMeasurement: 'ml',
        ingredientType: 'Scotch Whisky',
      },
      {
        order: 2,
        quantity: '37',
        unitOfMeasurement: 'ml',
        ingredientType: 'Amaretto',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo old-fashioned com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '2640c004-5234-4793-9e41-e5c024bcd66a',
    oldId: 184,
    name: 'God Mother',
    calories: 216,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O God Mother é um coquetel razoavelmente suave. O gosto do Amaretto se sobressai e é fortificado pela vodca.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '37',
        unitOfMeasurement: 'ml',
        ingredientType: 'Amaretto',
      },
      {
        order: 1,
        quantity: '37',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo old-fashioned com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '10b503a1-b765-47fb-91ef-f4df51e4d26a',
    oldId: 318,
    name: 'Gold Bomb',
    calories: 169,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Gold Bomb é um coquetel delicioso. O Goldschlager combina muito bem com o energético.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '270',
        unitOfMeasurement: 'ml',
        ingredientType: 'Energético',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Goldschlager',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Encha um copo de shot com Goldschlager',
      },
      {
        order: 3,
        description:
          'Encha-o com Energético até que ele se misture com o Goldschlager e depois beba rapidamente',
      },
      {
        order: 2,
        description:
          'Ponha o copo de shot dentro de um copo Double-old fashioned (como na foto ao lado)',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'edd95118-47c5-47ea-b263-a98b2e05f0bd',
    oldId: 316,
    name: 'Gold Furnace',
    calories: 103,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Gold Furnace é um shot bem forte. A pimenta misturada com o sabor da canela é bem exótico.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de molho de Pimenta',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Goldschlager',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Adicione o molho de Pimenta',
      },
      {
        order: 1,
        description: 'Coloque o Goldschlager em um copo de shot',
      },
    ],
    categories: ['shot'],
    instructions: [],
  },
  {
    id: 'c00ef9c1-dd32-4b2a-9710-0be35f949d31',
    oldId: 317,
    name: 'Gold Rush',
    calories: 58,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Gold Rush é um coquetel muito gostoso. Seu sabor é forte e o Goldschlager combina muito bem com o energético.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Goldschlager gelado',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Energético gelado',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Misture os dois ingredientes em um copo de shot',
      },
    ],
    categories: ['shot'],
    instructions: [],
  },
  {
    id: 'da077beb-9eb8-4871-b4a3-fe687a3126f8',
    oldId: 416,
    name: 'Golden Next',
    calories: 167,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description: 'No Golden Next o sabor do ovo predomina.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '120',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'Gema',
        ingredientType: 'ovo',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Cranberry',
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
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Passe tudo para um copo Old-fashioned',
      },
    ],
    categories: ['semalcool'],
    instructions: [],
  },

  {
    id: '52afb679-c5f3-4d55-b342-15ddb60a5e80',
    oldId: 141,
    name: 'Golden Rain',
    calories: 181,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Golden Rain é um coquetel um pouco mais forte. O sabor do Rum aparece bastante.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Espumante gelado',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Escuro',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata o Rum e o Triple Sec em uma coqueteleira com gelo',
      },
      {
        order: 3,
        description: 'Complete com o Espumante',
      },
      {
        order: 2,
        description: 'Coe para uma taça Flute gelada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '1e5132ec-6455-498e-923a-ac817c18945e',
    oldId: 381,
    name: 'Gorila Jr',
    calories: 180,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Gorila Jr tem um sabor doce, bem suave. Foi criado pelo bartender Junior Cabral especialmente para o restaurante Gorila Café. Também foi destaque no Guia Folha.\n\nCoquetel criado por Junior Cabral.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca Citrus',
      },
      {
        order: 3,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Polpa de Frutas Vermelhas',
      },
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Grenadine',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: '010ead56-9cac-4a4d-bfad-7749f0ff6dfe',
    oldId: 479,
    name: 'Grand Duchess',
    calories: 318,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Grand Duchess é um coquetel bem saboroso. Suave e refrescante, é perfeito para os dias quentes. É adocicado na medida certa.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 3,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Cranberry',
      },
      {
        order: 4,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Passe tudo para um copo Collins ou outro de sua escolha',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: '2c7673a6-7f87-4bab-b1c2-bb7d606c4133',
    oldId: 376,
    name: 'Grasshopper',
    calories: 208,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Grasshopper é um coquetel delicioso. Seu sabor é adocicado e bem cremoso.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Cacau branco',
      },
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Leite',
      },
      {
        order: 3,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Menta verde',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
    ],
    categories: ['classicos'],
    instructions: [],
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
        description: 'Bata todos os ingredientes em um coqueteleira com gelo',
      },
    ],
    categories: [],
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
    id: '7373ea1b-6663-4add-b4a0-447f59ff9d44',
    oldId: 218,
    name: 'Green Fairy',
    calories: 130,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Green Fairy é um coquetel ácido. O sabor do Absinto se destaca e a clara de ovo o deixa bem cremoso. Você pode substituir o suco de limão e a água por Mix de Limão, assim o coquetel ficará bem mais doce.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Suco de 1 limão',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água',
      },
      {
        order: 4,
        quantity: '2',
        unitOfMeasurement: 'colheres de chá',
        ingredientType: 'Clara de ovo',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Absinto',
      },
      {
        order: 5,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Angostura',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
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
    id: 'f7a0587e-15ac-4d46-9fe0-ffdf67944c75',
    oldId: 204,
    name: 'Green Fairy #2',
    calories: 154,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description: 'O Green Fairy #2 é um shot forte e bem doce.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Pêssego',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Melão',
      },
      {
        order: 1,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Absinto',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Misture todos os ingredientes em um copo de shot',
      },
    ],
    categories: ['shot'],
    instructions: [],
  },
  {
    id: '6ca5eb52-d138-4a4b-9631-72747ed04aaf',
    oldId: 337,
    name: 'Guacamole',
    calories: 334,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Guacamole é um coquetel baseado no tradicional prato mexicano de mesmo nome, porém aqui, a pimenta faz parte apenas da decoração. Nenhum ingrediente se destaca, todos formam uma bela combinação.',
    decoration: 'Triângulo de Abacaxi e Pimenta para decorar',
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
        ingredientType: 'Mix de Limão (Sweet and Sour)',
      },
      {
        order: 3,
        quantity: '1/4',
        unitOfMeasurement: null,
        ingredientType: 'de um Abacate médio',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: 'rodela',
        ingredientType: '1 cm de expessura de Abacaxi',
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
    categories: ['frozen', 'semalcool'],
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
    id: 'b7622799-c9a3-4b19-be8a-22d008200743',
    oldId: 128,
    name: 'Gypsy',
    calories: 154,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'O Gypsy é um coquetel com sabor forte. O Vermouth dá uma leve adocicada mas o gosto do Gin é sempre mais forte.',
    decoration: 'Cereja para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 2,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Doce',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Adicione a cereja',
      },
      {
        order: 1,
        description: 'Mexa o Vermouth e o Gin em um Mixing glass com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '8dd54921-1773-4ac9-a384-355334ac3a1c',
    oldId: 370,
    name: 'Hair Of The Dog',
    calories: 410,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Hair Of The Dog possui um sabor bem suave e adoçicado. O Whisky e o mel formam uma combinação muito gostosa.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mel',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Scotch Whisky',
      },
      {
        order: 2,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Leite fresco',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Passe tudo para um copo Old-fashioned.',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'b3f6fb20-3699-4c9c-a2d1-b01bfb404f85',
    oldId: 392,
    name: 'Hazelnut Martini',
    calories: 270,
    alcoholicContent: 'HIGH',
    difficulty: 'HARD',
    description:
      'Embora tenha alto teor alcoólico, o Hazelnut Martini é muito saboroso. O chocolate em pó faz toda a diferença no sabor.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Frangelico',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Chocolate em pó para crustar a taça',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Cruste uma taça de Coquetel com o chocolate em pó',
      },
      {
        order: 3,
        description: 'Coe para a taça de Coquetel crustada',
      },
      {
        order: 2,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: ['martinis'],
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
    id: 'ecc22746-08e2-4454-86f8-1738723ebf67',
    oldId: 283,
    name: 'Hi Fi',
    calories: 124,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Hi Fi é um dos coquetéis mais encontrados nos bares. Sua receita simples e sabor agradável o torna um dos favoritos dos cardápios.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Refrigerante de Laranja',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Complete com refrigerante de laranja',
      },
      {
        order: 1,
        description: 'Coloque a Vodca em um copo Highball com gelo',
      },
    ],
    categories: ['tropicais', 'classicos'],
    instructions: [],
  },
  {
    id: 'ec5b8327-bc67-40cc-a84d-c9fb03a2322d',
    oldId: 335,
    name: 'Hummer',
    calories: 380,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Hummer é um coquetel bem gostoso. O sabor do café se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '2',
        unitOfMeasurement: 'bolas',
        ingredientType: 'Sorvete de Creme',
      },
      {
        order: 2,
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
        description: 'Coe para um copo Highball',
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
    id: '66659a7f-45f3-44b4-9558-84317b552c83',
    oldId: 159,
    name: 'Impacto',
    calories: 100,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description: 'O Impacto é um coquetel aperitivo. Seu sabor é seco e forte.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Doce',
      },
      {
        order: 2,
        quantity: '10',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy de Maçã',
      },
      {
        order: 1,
        quantity: '20',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma taça Pony',
      },
    ],
    categories: [],
    instructions: [],
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
    id: 'd60317db-d13d-4645-b667-c4f382b94e0e',
    oldId: 321,
    name: 'Irish Kiss',
    calories: 264,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Irish Kiss é um coquetel delicioso. Seu sabor é adocicado e bem suave.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Pêssego',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Irish Whiskey',
      },
      {
        order: 2,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Ginger Ale',
      },
      {
        order: 3,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
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
    id: '028d8505-9188-4866-a579-c34002761d4e',
    oldId: 212,
    name: 'Italian Margarita',
    calories: 239,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'Esta versão da Margarita é muito boa. O Amaretto dá um toque adocicado muito especial.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 4,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Limão (Sweet and Sour)',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Tequila Ouro',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Amaretto',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma taça Fiesta',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
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
    id: '4f0af690-302f-40d5-8eb5-7d5e12229fdb',
    oldId: 127,
    name: 'Jade',
    calories: 251,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Jade é um coquetel ácido devido ao Triple Sec e o suco de limão. O sabor de menta se aparece bastante.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Menta verde',
      },
      {
        order: 4,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '1ee283f8-dffd-44ff-b2f7-fe8ae06dbe06',
    oldId: 398,
    name: 'Jager Bomb',
    calories: 364,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Jager Bomb é um drinque delicioso. A combinação do Jägermeister com o energético é perfeita.\n\nObs: É um coquetel muito famoso na Austrália. Já foi até banido em alguns locais do país por causa de consumidores que abusavam da combinação e criavam problemas.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '1',
        unitOfMeasurement: 'shot',
        ingredientType: 'Jägermeister',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: 'lata',
        ingredientType: 'Energético gelado',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Jogue o shot de Jägermeister dentro do copo com Energético e beba',
      },
    ],
    categories: [],
    instructions: [],
  },

  {
    id: '3de7e4dd-b1cc-4ef4-aec0-3e529c6dfd65',
    oldId: 399,
    name: 'Jager Club',
    calories: 103,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description: 'O Jager Club é um coquetel seco. Seu sabor é suave.',
    decoration: 'Rodela de Limão para decorar',
    ingredients: [
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Água com gás',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Jägermeister',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Complete com água com gás',
      },
      {
        order: 3,
        description: 'Mexa bem',
      },
      {
        order: 1,
        description: 'Coloque o Jägermeister em um copo Old-fashioned com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'cd4a8256-e204-44f4-9bfb-468303074f79',
    oldId: 400,
    name: 'Jager Monster',
    calories: 203,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Jager Monster é um coquetel delicioso. Seu sabor é suave e adocicado. Bem refrescante, é perfeito para dias quentes.',
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
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Suco de Laranja para completar',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Grenadine',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Complete com suco de Laranja e mexa bem',
      },
      {
        order: 1,
        description:
          'Coloque o Jägermeister e o Grenadine em um copo Highball com gelo',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: 'cc4c0d0f-bd73-4e06-a9b7-16fc147f1c52',
    oldId: 401,
    name: 'Jager Rita',
    calories: 201,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Jager Rita é um coquetel muito saboroso. É suave e adocicado, uma ótima combinação.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Limão (Sweet and Sour)',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Jägermeister',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
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
    id: '544c1177-d5e8-4ded-9be9-75407afc2b05',
    oldId: 402,
    name: 'Jager Tonic',
    calories: 163,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Jager Tonic é um coquetel um pouco forte. Gostoso, seu sabor é marcante.',
    decoration: 'Rodela de Limão para decorar',
    ingredients: [
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Água Tônica',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Jägermeister',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Complete com água tônica e mexa bem',
      },
      {
        order: 1,
        description: 'Coloque o Jägermeister em um copo Highball com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'a9ab9cef-05ee-45a0-ac99-8df3640fbed5',
    oldId: 403,
    name: 'Jagersicle',
    calories: 158,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Jagersicle é um coquetel saboroso. Seu gosto é adocicado. Nenhum dos ingredientes se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Café',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Jägermeister',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Refrigerante de cola',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Mexa bem',
      },
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Old-fashioned',
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
    id: '779739c4-5303-4ada-b387-d3cac0e132db',
    oldId: 208,
    name: 'Japanese Slipper',
    calories: 216,
    alcoholicContent: 'LOW',
    difficulty: 'MEDIUM',
    description:
      'No Japanese Slipper, o sabor do licor de melão é bem suave. O gosto do limão e do Triple-sec se destacam mais.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Melão',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Mexa todos os ingredientes em um Mixing Glass com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '00b9e5e0-f02c-4095-a4d7-449f6f985518',
    oldId: 455,
    name: 'Kamikaze',
    calories: 176,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Kamikaze é um coquetel bem gostoso. Seu sabor é adocicado, um pouco forte.',
    decoration: 'Rodela de limão para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
    ],
    categories: ['tropicais', 'classicos'],
    instructions: [],
  },
  {
    id: 'a5b98d2e-982d-4289-915b-06ef51bb504d',
    oldId: 81,
    name: 'Kamikaze Shot',
    calories: 110,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Kamikaze, como o nome já diz, é um shot mais forte. Seu sabor é bem intenso e gosto do limão se destaca mais.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 1,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para um copo de Shot',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: ['shot'],
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
    id: '4b2c66fd-e4a3-4f01-99af-3e6f5cd02f05',
    oldId: 348,
    name: 'Kyoto Cocktail',
    calories: 158,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Kyoto Cocktail é um coquetel forte. O sabor do licor de melão se destaca, e o adocica levemente.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Melão',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Seco',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Suco de Limão',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
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
    id: '97a794fd-061b-41e1-ba43-11f3b6a1651b',
    oldId: 369,
    name: 'La Bamba',
    calories: 300,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'No La Bamba o sabor do café se destaca. O licor de côco o suaviza levemente.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Café',
      },
      {
        order: 1,
        quantity: '37',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy (Conhaque)',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Malibu',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
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
    id: 'feaa30a7-cdbe-4e3b-b28e-fbe7cc2574c4',
    oldId: 350,
    name: 'Lady Diana',
    calories: 195,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Lady Diana é um coquetel de sabor amargo. O gosto do Campari se destaca.',
    decoration: 'Twist de Limão para decorar',
    ingredients: [
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'pitada',
        ingredientType: 'Açúcar',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Campari',
      },
      {
        order: 3,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 3,
        description: 'Adicione o Twist de limão',
      },
    ],
    categories: [],
    instructions: [
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
    id: '07f7739d-f6e9-4869-84d9-304a114f0494',
    oldId: 481,
    name: 'Last Mango In Paris',
    calories: 271,
    alcoholicContent: 'LOW',
    difficulty: 'MEDIUM',
    description:
      'O Last Mango In Paris é um coquetel gostoso e bem refrescante. Seu sabor não é tão adocicado.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: '1/2',
        unitOfMeasurement: null,
        ingredientType: 'Manga cortada em pedaços',
      },
      {
        order: 5,
        quantity: '2',
        unitOfMeasurement: null,
        ingredientType: 'Morangos',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 2,
        quantity: '2',
        unitOfMeasurement: null,
        ingredientType: 'Framboesas',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe um copo Highball',
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
    id: '484cb6b8-b9d8-43d2-b115-64aabc721e39',
    oldId: 461,
    name: 'Latte De Laranja',
    calories: 240,
    alcoholicContent: 'LOW',
    difficulty: 'MEDIUM',
    description:
      'O Latte de Laranja é um coquetel com sabor um pouco mais forte. O gosto do café aparece bastante, já o rum e o licor não.',
    decoration: 'Chantilly e raspas da casca de 1 laranja para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Laranja',
      },
      {
        order: 6,
        quantity: '150',
        unitOfMeasurement: 'ml',
        ingredientType: 'Leite (vaporizado é o ideal)',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'pedaço pequeno',
        ingredientType: 'casca de laranja',
      },
      {
        order: 1,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Cravo-da-índia',
      },
      {
        order: 5,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Café (expresso ou tradicional)',
      },
    ],
    preparationSteps: [
      {
        order: 4,
        description:
          'Adicione o café e transfira a mistura para uma caneca de vidro',
      },
      {
        order: 3,
        description: 'Retire do fogo e remova o cravo',
      },
      {
        order: 1,
        description:
          'Em uma panela, misture o licor de laranja, o cravo-da-índia, a casca de laranja e o Rum',
      },
      {
        order: 2,
        description: 'Leve ao fogo baixo somente até a mistura amornar',
      },
      {
        order: 5,
        description: 'Aos poucos, acrescente o leite e misture delicadamente',
      },
      {
        order: 6,
        description: 'Decore com o chantilly e as raspas de laranja',
      },
    ],
    categories: ['quentes'],
    instructions: [],
  },
  {
    id: '47c9bffc-6a85-40cd-996b-2ea04af8d6b7',
    oldId: 253,
    name: 'Laze On The Deck',
    calories: 153,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Laze on the Deck é bem refrescante. O gosto da Sambuca se destaca e adocica bastante o coquetel.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Sambuca Branca',
      },
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Refrigerante de cola',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Coloque a Sambuca em um copo Highball com gelo',
      },
      {
        order: 2,
        description: 'Complete com refrigerante de cola',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: '35ea921b-c2b0-41c0-977e-2f8780c9a49b',
    oldId: 417,
    name: 'Lemon Cocktail',
    calories: 18,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'Como já diz o nome, o Lemon Cocktail é praticamente suco de limão.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 2,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão ou Limonada',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: ['semalcool'],
    instructions: [],
  },
  {
    id: 'ed96ea3a-3243-481c-aa6a-a26e72299e70',
    oldId: 303,
    name: 'Lemon Top',
    calories: 179,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Lemon Top é um coquetel muito saboroso. A Soda dá um gosto especial ao coquetel.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '360',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cerveja Lager ou Ale gelada',
      },
      {
        order: 2,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Soda Limonada gelada',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Adicione a Soda Limonada',
      },
      {
        order: 1,
        description: 'Coloque a cerveja em uma caneca de cerveja gelada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'a31cdb54-2d52-488b-9617-af017032694f',
    oldId: 170,
    name: 'Lighting ´N Thunder',
    calories: 112,
    alcoholicContent: 'LOW',
    difficulty: 'MEDIUM',
    description:
      'No Lighting ´N Thunder, o sabor do ovo é muito marcante. Apesar de bonito, seu sabor é exótico.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy (Conhaque)',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Angostura',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'Gema',
        ingredientType: 'ovo',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Bata todos os ingredientes, exceto a Angostura, em um liquidificador até obter uma consitência cremosa',
      },
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
      {
        order: 3,
        description: 'Adicione 1 cubo de gelo, e Angostura a gosto',
      },
    ],
    categories: [],
    instructions: [],
  },

  {
    id: 'c24c8012-3ff5-434a-be78-b49d50bc6aa5',
    oldId: 145,
    name: 'Lights Of Havana',
    calories: 294,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Lights of Havana é um coquetel magnífico. Muito refrescante, a mistura de seus ingredientes deixa o coquetel suave, doce e muito saboroso. É perfeito para dias de calor.',
    decoration: 'Rodela de Laranja para decorar',
    ingredients: [
      {
        order: 5,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Soda Limonada',
      },
      {
        order: 3,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Malibu',
      },
      {
        order: 4,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Abacaxi',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Melão',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Complete com a Soda limonada',
      },
      {
        order: 2,
        description: 'Passe tudo para um copo Collins',
      },
      {
        order: 1,
        description:
          'Bata os ingredientes em uma coqueteleira com gelo, exceto a Soda',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: '2c6921b6-8b2c-4b88-8728-1e37314faee0',
    oldId: 276,
    name: 'Liquid Marijuana Shot',
    calories: 151,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Liquid Marijuana Shot é um coquetel bem doce e muito gostoso, além de ser um shot muito bonito.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Malibu',
      },
      {
        order: 3,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Melão',
      },
      {
        order: 2,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Curaçau Blue',
      },
      {
        order: 5,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Suco de Abacaxi',
      },
      {
        order: 6,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Mix de Limão (Sweet and Sour)',
      },
      {
        order: 1,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
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
    id: 'b97c766e-2769-4d00-add2-5139ea60e469',
    oldId: 107,
    name: 'Long Island Iced Tea',
    calories: 241,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'Mesmo com o alto teor alcoólico o Long Island Iced Tea é um coquetel adocicado devido ao refrigerante. O sabor da Tequila se destaca suavemente.',
    decoration: 'Rodela de Limão para decorar',
    ingredients: [
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
      {
        order: 6,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 7,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Refrigerante de Cola para completar',
      },
      {
        order: 4,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Tequila Prata',
      },
      {
        order: 5,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
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
        ingredientType: 'Gin',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Bata todos os ingredientes em uma coqueteleira com gelo exceto o refrigerante',
      },
      {
        order: 3,
        description: 'Complete com o refrigerante de Cola',
      },
      {
        order: 2,
        description: 'Passe tudo para um copo Collins',
      },
    ],
    categories: ['classicos'],
    instructions: [],
  },
  {
    id: '0f372f6f-a23c-4a63-ae94-08ed8bc8ba45',
    oldId: 43,
    name: 'Lynchburg Lemonade',
    calories: 216,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Lynchburg Lemonade é um coquetel refrescante. O sabor do Whiskey é bem marcante.',
    decoration: 'Squeeze de limão para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Whiskey',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Completar com Soda Limonada',
      },
      {
        order: 3,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Limão (Sweet and Sour)',
      },
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Passe tudo para um copo Highball e complete com a Soda',
      },
      {
        order: 1,
        description:
          'Bata os ingredientes em uma coqueteleira com gelo exceto a Soda Limonada',
      },
    ],
    categories: [],
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
    id: 'f6a8d7ce-56fa-4fb6-8580-98d7b87f6ded',
    oldId: 115,
    name: 'Maberry',
    calories: 121,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Maberry é um coquetel muito refrescante e saboroso. Seu gosto é suave e adocicado.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Suco de Cranberry para completar',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Malibu',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Mexa bem',
      },
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Old-Fashioned com gelo',
      },
      {
        order: 2,
        description: 'Complete com o Suco de Cranberry',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: 'ec2cb7e6-4241-440d-b7b2-4eabaefa5d42',
    oldId: 93,
    name: 'Madras',
    calories: 181,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description: 'O Madras é um coquetel refrescante de sabor doce e suave.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Cranberry',
      },
      {
        order: 2,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
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
    id: 'a36cc297-62f7-4cdb-8e4f-85862610348d',
    oldId: 94,
    name: 'Maiden´S Blush Cocktail',
    calories: 177,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Maiden´s Blush Cocktail possui um sabor levemente adocicado onde o gosto do Gin se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: '2',
        unitOfMeasurement: 'gotas',
        ingredientType: 'Grenadine',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '4c27b444-14cf-47bf-81af-2cfc05a4e2fa',
    oldId: 95,
    name: 'Maiden´S Prayer',
    calories: 176,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Maiden´s Prayer é um coquetel com sabor um pouco forte e ácido, onde o gosto do Gin se destaca junto com o suco de laranja.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 4,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: [],
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
    id: '89c53a0f-58ef-4ad3-9446-d06b187114d6',
    oldId: 106,
    name: 'Man O´War',
    calories: 273,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Man O´War é um coquetel suave, porém o sabor do Bourbon se destaca bastante.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Bourbon (Whiskey)',
      },
      {
        order: 4,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Doce',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: [],
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
    id: '97804120-0277-4eb8-9ca6-f77389675f15',
    oldId: 360,
    name: 'Mango Explosion',
    calories: 224,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Mango Explosion age como antioxidante prevenindo o envelhecimento. É rico em vitaminas C, A, B1, B2, B3 e B6.',
    decoration: null,
    ingredients: [
      {
        order: 5,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água',
      },
      {
        order: 1,
        quantity: '1/2',
        unitOfMeasurement: null,
        ingredientType: 'Manga',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 2,
        quantity: '5',
        unitOfMeasurement: null,
        ingredientType: 'Morangos',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Tangerina',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para um copo Collins',
      },
      {
        order: 1,
        description:
          'Bata todos os ingredientes no liquidificador com uma ou duas pás de gelo até adquirir uma textura cremosa',
      },
    ],
    categories: ['smoothies'],
    instructions: [],
  },
  {
    id: '20f80efa-1bda-48e6-9bc7-e8e8e91df848',
    oldId: 408,
    name: 'Mango Lover',
    calories: 402,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Mango Lover é rico em proteínas, fibras, vitaminas A, B, B1, B5, C, cálcio, fósforo e ferro.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '1/2',
        unitOfMeasurement: null,
        ingredientType: 'Manga',
      },
      {
        order: 1,
        quantity: '10',
        unitOfMeasurement: null,
        ingredientType: 'Framboesas grandes',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Limão',
      },
      {
        order: 5,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Bata todos os ingredientes no liquidificador com uma ou duas pás de gelo até adquirir uma textura cremosa',
      },
      {
        order: 2,
        description: 'Coe para um copo Collins',
      },
    ],
    categories: ['smoothies'],
    instructions: [],
  },
  {
    id: '314b7aeb-c7e9-44eb-a3d8-92dd444c539d',
    oldId: 351,
    name: 'Mango Tree',
    calories: 222,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Mango Tree age como um ótimo antioxidante prevenindo o envelhecimento. É rico em vitaminas A, C, B1, B2, B3 e B6.',
    decoration: null,
    ingredients: [
      {
        order: 5,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água',
      },
      {
        order: 1,
        quantity: '3/4',
        unitOfMeasurement: null,
        ingredientType: 'Manga',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Limão',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'colher de chá',
        ingredientType: 'Gengibre ralado',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para um copo Collins',
      },
      {
        order: 1,
        description:
          'Bata todos os ingredientes no liquidificador com uma ou duas pás de gelo até adquirir uma textura cremosa',
      },
    ],
    categories: ['smoothies'],
    instructions: [],
  },
  {
    id: 'dfa988f0-13b5-4764-b538-fd929ad08824',
    oldId: 49,
    name: 'Manhattan',
    calories: 213,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'O Manhattan é um coquetel clássico de sabor forte onde o gosto do Whiskey prevalece. A cereja, além de uma decoração é um item excencial para o sabor do coquetel.',
    decoration: 'Cereja para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Tinto',
      },
      {
        order: 1,
        quantity: '52',
        unitOfMeasurement: 'ml',
        ingredientType: 'Whiskey',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Angostura',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Mexa bem os ingredientes em um Mixing Glass com gelo',
      },
      {
        order: 3,
        description: 'Decore com a Cereja',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: ['classicos'],
    instructions: [],
  },
  {
    id: 'a508cbf0-6986-4f91-a1aa-315355395fc4',
    oldId: 25,
    name: 'Margarita',
    calories: 167,
    alcoholicContent: 'MEDIUM',
    difficulty: 'HARD',
    description:
      'A Margarita é um coquetel que estimula o apetite. A tequila e o limão é uma combinação clássica muito saborosa que adicionada ao licor de laranja e a borda crustada torna o coquetel ideal para ser consumido antes das refeições.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Sal para crustar',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 1,
        quantity: '37',
        unitOfMeasurement: 'ml',
        ingredientType: 'Tequila Prata',
      },
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 1,
        description: 'Cruste uma taça Fiesta com sal',
      },
      {
        order: 3,
        description: 'Coe para a taça Fiesta crustada',
      },
    ],
    categories: ['classicos'],
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
    id: '8fc7b1a7-dc3b-4b3c-ad01-f77b14e60e9c',
    oldId: 472,
    name: 'Mars Explosion',
    calories: 130,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Mars Explosion é um drinque suave e gostoso. O grenadine dá um toque especial.',
    decoration: 'Casca de laranja e cereja para decorar',
    ingredients: [
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Grenadine',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 3,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
      {
        order: 2,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
    ],
    preparationSteps: [
      {
        order: 4,
        description: 'Decore com a casca de laranja e a cereja',
      },
      {
        order: 1,
        description:
          'Bata a vodca, o rum e o suco de laranja em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description:
          'Coe para um copo Old-fashioned ou outro de sua preferência',
      },
      {
        order: 3,
        description:
          'Coloque o grenadine por último, para que ele se misture aos poucos ao coquetel',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: '1a26ac67-1665-48dd-946f-5b283707e8e3',
    oldId: 229,
    name: 'Mediterrâneo',
    calories: 112,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Mediterrâneo é um coquetel muito bonito e saboroso. O Gin fica bem suave quando combinado com o Curaçau e a água com gás.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Curaçau Blue',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Água com gás',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'de gelo',
      },
      {
        order: 3,
        description: 'Complete com Água com gás',
      },
      {
        order: 1,
        description: 'Monte o coquetel em uma taça Flute com um pouco',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '6d2f5495-6753-421b-bf31-daa691846bc7',
    oldId: 242,
    name: 'Medium Manhattan',
    calories: 144,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'O Medium Manhattan é um coquetel forte. Os Vermouth´s suavizam levemente o sabor do Whiskey.',
    decoration: 'Twist de Limão e Cereja para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '52',
        unitOfMeasurement: 'ml',
        ingredientType: 'Whiskey',
      },
      {
        order: 3,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Seco',
      },
      {
        order: 2,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Tinto',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Adicione o twist de Limão e a Cereja',
      },
      {
        order: 1,
        description: 'Mexa todos os ingredientes em um Mixing glass com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
    ],
    categories: ['classicos'],
    instructions: [
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
    id: '83ad68a6-dc53-4a04-ad06-7607a4fcbc0b',
    oldId: 307,
    name: 'Melon Ball',
    calories: 237,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Melon Ball é um coquetel delicioso e refrescante. Seu sabor é bem adocicado.',
    decoration: 'Pedaço de Laranja e de Melancia para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Melão',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 3,
        quantity: '120',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Passe tudo para um Cálice de vinho gelado',
      },
      {
        order: 1,
        description: 'Bata todos ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 3,
        description: 'Decore com a Laranja e a Melancia ',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },

  {
    id: 'a9fcbd28-f51d-4924-bfb7-efd740f21f76',
    oldId: 353,
    name: 'Melon Sensation',
    calories: 223,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Melon Sensation possui cálcio, ferro e potássio. É rico em vitaminas A e C.',
    decoration: null,
    ingredients: [
      {
        order: 5,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Kiwi sem casca',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 1,
        quantity: '1',
        unitOfMeasurement: 'fatia',
        ingredientType: 'grossa de Melão',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Limão',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para um copo Collins',
      },
      {
        order: 1,
        description:
          'Bata todos os ingredientes no liquidificador com uma ou duas pás de gelo até adquirir uma textura cremosa',
      },
    ],
    categories: ['smoothies'],
    instructions: [],
  },
  {
    id: '3b5ec936-16b0-4b47-a796-567f2d714232',
    oldId: 78,
    name: 'Mexican Flag',
    calories: 207,
    alcoholicContent: 'MEDIUM',
    difficulty: 'HARD',
    description:
      'O Mexican Flag é um shot bem adocicado. Os sabores mais presentes são os do Creme de menta e do Grenadine.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '20',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Menta verde',
      },
      {
        order: 1,
        quantity: '20',
        unitOfMeasurement: 'ml',
        ingredientType: 'Grenadine',
      },
      {
        order: 3,
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
    id: 'c15625a0-9157-4697-bc30-b403a034d8f7',
    oldId: 282,
    name: 'Mexicana',
    calories: 123,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Mexicana é um coquetel bem ácido. Seu sabor lembra muito o da Margarita, apesar de conter grenadine e suco de abacaxi.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Grenadine',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Suco de Abacaxi',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Tequila Prata',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
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
    id: 'f58c6145-4526-49eb-85f3-9e03cfa25b17',
    oldId: 477,
    name: 'Mimi',
    calories: 204,
    alcoholicContent: 'LOW',
    difficulty: 'MEDIUM',
    description:
      'O Mimi é um coquetel delicioso. Seu sabor é leve e refrescante, perfeito para dias quentes. O côco dá um toque especial.',
    decoration: 'Triângulo de abacaxi para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Côco',
      },
      {
        order: 3,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Abacaxi',
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
        order: 3,
        description: 'Decore com o triângulo de abacaxi',
      },
      {
        order: 1,
        description:
          'Bata todos os ingredientes no liquidificador com 1 ou 2 pás de gelo até adquirir uma textura cremosa',
      },
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
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
        description: 'Coloque o Suco de Laranja e o Triple Sec na taça Flute',
      },
    ],
    categories: ['tropicais', 'classicos'],
    instructions: [],
  },
  {
    id: '322eb25d-b24a-4af6-8afa-9d9b038a6e5f',
    oldId: 230,
    name: 'Mint Cooler',
    calories: 207,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Mint Cooler é um coquetel muito saboroso. O gosto do creme de Menta se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Menta verde',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Whisky',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Soda Limonada',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Complete com Soda Limonada',
      },
      {
        order: 1,
        description:
          'Monte o coquetel direto no copo Double Old-fashioned com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '618df970-ea76-414c-9792-1563de031a88',
    oldId: 31,
    name: 'Mint Sunrise',
    calories: 197,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Mint Sunrise é um coquetel com sabor mais forte onde o gosto do Whisky se sobrepõe ao das outras bebidas. Ótimo para quem é fã de Whisky e gosta de variar.',
    decoration: 'Rodela de limão e hortelã para decorar',
    ingredients: [
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy (Conhaque)',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Scotch Whisky',
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
    categories: [],
    instructions: [],
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
    id: 'df31fbb4-1c00-4dbf-ab13-beaa945af85a',
    oldId: 459,
    name: 'Mochaccino & Laranja',
    calories: 352,
    alcoholicContent: 'ZERO',
    difficulty: 'MEDIUM',
    description:
      'O Mochaccino & Laranja é um coquetel muito gostoso. A laranja e a canela dão um sabor e um aroma especial.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Suco de 1 laranja',
      },
      {
        order: 1,
        quantity: '240',
        unitOfMeasurement: 'ml',
        ingredientType: 'Leite',
      },
      {
        order: 5,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Canela em pó',
      },
      {
        order: 3,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Café (expresso ou tradicional)',
      },
      {
        order: 6,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Raspas da casca da laranja (sem a parte branca)',
      },
      {
        order: 2,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Calda de Chocolate',
      },
    ],
    preparationSteps: [
      {
        order: 4,
        description:
          'Complete com o chocolate quente espumoso e decore com as raspas de laranja e mais uma pitada de canela',
      },
      {
        order: 2,
        description:
          'Use a máquina de expresso para vaporizar o leite até formar um chocolate quente espumoso (opcional)',
      },
      {
        order: 1,
        description:
          'Coloque o leite e a calda de chocolate em uma xícara funda',
      },
      {
        order: 3,
        description:
          'Coloque o café em uma caneca grande e adicione o suco de laranja e uma pitada de canela',
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
    id: 'cb7c996f-e696-4f5c-a3c9-31d453415b3a',
    oldId: 462,
    name: 'Mochaccino Com Conhaque',
    calories: 536,
    alcoholicContent: 'LOW',
    difficulty: 'MEDIUM',
    description:
      'O Mochaccino com Conhaque é uma delícia. O sabor do chocolate é bem presente e o conhaque praticamente não aparece.',
    decoration: 'Raspas de chocolate para decorar',
    ingredients: [
      {
        order: 3,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Café (expresso ou tradicional)',
      },
      {
        order: 5,
        quantity: '120',
        unitOfMeasurement: 'ml',
        ingredientType: 'Leite',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: 'colher de chá',
        ingredientType: 'Açúcar',
      },
      {
        order: 4,
        quantity: '120',
        unitOfMeasurement: 'ml',
        ingredientType: 'Chocolate quente',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy (Conhaque)',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description:
          'Em seguida, use a máquina de expresso para vaporizar o leite ou simplesmente o aqueça em outra panela',
      },
      {
        order: 3,
        description:
          'Despeje a mistura com café em uma caneca de vidro e despeje o leite sobre ela',
      },
      {
        order: 1,
        description:
          'Em uma panela, misture o conhaque, o açúcar, o café e o chocolate quente. Leve ao fogo baixo até aquecer, sem deixar ferver',
      },
      {
        order: 4,
        description: 'Decore com as raspas de chocolate',
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
    id: '5256afea-df99-4817-8cc0-2c71dbed141b',
    oldId: 300,
    name: 'Momokawa Mojito',
    calories: 178,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Momokawa Mojito é um coquetel muito saboroso e refrescante. O sabor do hortelã combina muito bem com o Saquê.',
    decoration: 'Ramo de Hortelã para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Saquê',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Simple Syrup',
      },
      {
        order: 4,
        quantity: '5',
        unitOfMeasurement: 'folhas',
        ingredientType: 'Hortelã',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
    ],
    preparationSteps: [
      {
        order: 4,
        description: 'Decore com o ramo de hortelã',
      },
      {
        order: 3,
        description: 'Passe tudo para um copo Highball',
      },
      {
        order: 1,
        description:
          'Macere as folhas de hortelã com o suco de limão em uma coqueteleira',
      },
      {
        order: 2,
        description: 'Adicione gelo e os demais ingredientes e bata bem',
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
    id: 'd45d618d-fdd6-4ae5-bc82-0b71ad6cdcb4',
    oldId: 367,
    name: 'Monkey Gland',
    calories: 127,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Monkey Gland é um coquetel forte. O sabor do Gin se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: '2',
        unitOfMeasurement: 'gotas',
        ingredientType: 'Grenadine',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Bénédictine',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Passe tudo para um copo Old-fashioned.',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '30a05274-0d1a-4e39-a729-158d9eb602bc',
    oldId: 55,
    name: 'Moonlight',
    calories: 201,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Moonlight é um coquetel refrescante e muito saboroso. O limão é bem presente no sabor.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Limão (Sweet and Sour)',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy de Maçã',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Old-Fashioned com gelo',
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
    id: 'bf20b57f-6b29-4686-9c07-dbb7130cdee4',
    oldId: 252,
    name: 'Moroz',
    calories: 169,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Moroz é um shot bem forte. O gosto da Tequila se destaca e a Sambuca aparece mais suave.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Sambuca Branca',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Tequila Prata',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Misture os ingredientes em um copo de Shot',
      },
    ],
    categories: ['shot'],
    instructions: [],
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
  {
    id: '9dc106cf-3d93-44bb-a72f-5c49e454b727',
    oldId: 262,
    name: 'Mulatto',
    calories: 206,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Mullato é um shot bem doce. A combinação do café com a Sambuca é bem harmoniosa.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Sambuca',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Café',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Misture os dois ingredientes em um copo de Shot',
      },
    ],
    categories: ['shot'],
    instructions: [],
  },

  {
    id: '9806b8e6-2425-4dc6-8ce3-590037f629eb',
    oldId: 53,
    name: 'Negroni',
    calories: 181,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Negroni é uma variação do Americano. É um coquetel que estimula o apetite com seu sabor forte e amargo. Muitas pessoas hoje em dia preferem fazer este coquetel com Vodca ao invés de Gin.',
    decoration: 'Twist de laranja para decorar',
    ingredients: [
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Campari',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Doce',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Old-Fashioned com gelo',
      },
    ],
    categories: ['classicos'],
    instructions: [
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
    id: '40e92932-76ba-43c8-b7f2-abc888611c0b',
    oldId: 383,
    name: 'Northern Lights',
    calories: 188,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Northern Lights é um coquetel gostoso, levemente adocicado. O sabor do Whisky aparece bem suave.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Suco de Cranberry',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Whisky Canadense',
      },
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Licor de Pêssego',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description:
          'Complete com partes iguais de suco de Laranja e suco de Cranberry',
      },
      {
        order: 1,
        description:
          'Coloque o Whisky e o Licor de Pêssego em um copo Old-fashioned com gelo',
      },
      {
        order: 3,
        description: 'Mexa bem',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: 'cbb2e956-4bba-49bd-aeba-ff47090daf1e',
    oldId: 394,
    name: 'Nutty Irishman',
    calories: 269,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Nutty Irishman é bem saboroso. Nenhum dos ingredientes se destaca, os dois formam uma ótima combinação.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Bailey´s Irish Cream',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Frangelico',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Passe tudo para um copo Old-fashioned ou On the Rocks',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'fea318ed-6564-4ffd-9af7-f5e1d8652dab',
    oldId: 464,
    name: 'O Poderoso Chefão',
    calories: 216,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Poderoso Chefão é um coquetel de sabor forte. O gosto do whisky aparece bastante.',
    decoration: 'Chantilly para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Amaretto',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Whisky',
      },
      {
        order: 3,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Café (expresso ou tradicional)',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Cubra com o chantilly e sirva',
      },
      {
        order: 1,
        description:
          'Monte o coquetel direto em uma caneca para coquetéis quentes',
      },
    ],
    categories: ['quentes'],
    instructions: [],
  },
  {
    id: 'e902a351-d936-4796-8a0b-e9da9eb701a0',
    oldId: 162,
    name: 'Oasis',
    calories: 273,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Oasis é um coquetel refrescante, porém com sabor um pouco mais forte. A combinação do Gin com o Curaçau é bem interessante.',
    decoration: 'Laranja e Hortelã para decorar',
    ingredients: [
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Soda Limonada',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Curaçau Blue',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Highball com gelo',
      },
      {
        order: 2,
        description: 'Complete com Soda Limonada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'be103afd-2d5f-4ca0-a94c-c66c23db8593',
    oldId: 248,
    name: 'Old Fashioned',
    calories: 150,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Old Fashioned é um coquetel bem saboroso. O gosto do Whiskey se destaca.',
    decoration: 'Twist de laranja, de limão e 2 cerejas para decorar',
    ingredients: [
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Água com gás',
      },
      {
        order: 1,
        quantity: '37',
        unitOfMeasurement: 'ml',
        ingredientType: 'Bourbon , Scotch or Rye Whiskey',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: 'cubo',
        ingredientType: 'Açúcar',
      },
      {
        order: 3,
        quantity: '2',
        unitOfMeasurement: 'gotas',
        ingredientType: 'Angostura',
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
          'Em um copo Old-fashioned, macere o cubo de açúcar com a Angostura e a Água com gás',
      },
      {
        order: 2,
        description: 'Encha-o de gelo e adicione o Whiskey',
      },
    ],
    categories: ['classicos'],
    instructions: [
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
    id: '729bf811-676b-4123-a91e-f80ea62207ba',
    oldId: 480,
    name: 'On The Beach',
    calories: 145,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O On The Beach é delicioso. Seu sabor é refrescante e a combinação dos ingredientes é perfeita. Ótima opção para os dias quentes.',
    decoration: 'Squeeze de Limão para decorar',
    ingredients: [
      {
        order: 3,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Pêssego',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 2,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 4,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Cranberry',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Passe tudo para um copo Highball',
      },
      {
        order: 3,
        description: 'Adicione o squeeze de limão',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: ['tropicais'],
    instructions: [
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
    id: '652b0f2f-23a2-4795-ae40-e59e659b46dd',
    oldId: 143,
    name: 'On The Top',
    calories: 167,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O On the top é um coquetel simples e gostoso. O sabor da Sidra de maçã se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Whisky',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Angostura',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Sidra gelada (Espumante de maçã)',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Adicione o Whisky e a Angostura',
      },
      {
        order: 4,
        description: 'Mexa bem',
      },
      {
        order: 3,
        description: 'Complete com a Sidra',
      },
      {
        order: 1,
        description: 'Encha um copo Double Old-Fashioned com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '3f796c93-05a0-46d4-9042-18bfb83a1a43',
    oldId: 322,
    name: 'Oral Intruder',
    calories: 499,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Oral Intruder é um coquetel bem saboroso e refrescante. Nenhum ingrediente se destaca e juntos formam uma combinação maravilhosa.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Malibu',
      },
      {
        order: 3,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Melão',
      },
      {
        order: 5,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 2,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Ginger Ale',
      },
      {
        order: 4,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Limão (Sweet and Sour)',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Passe tudo para um copo Highball',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
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
    id: '338fd8d1-c12e-4a8f-b1ce-c6e360ced0ff',
    oldId: 418,
    name: 'Orangatang',
    calories: 49,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description: 'O Orangatang é um coquetel delicioso, ótimo para crianças.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Cranberry',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: ['semalcool'],
    instructions: [],
  },
  {
    id: 'e7af6d39-1e52-4342-93e7-1c953cf25c1b',
    oldId: 108,
    name: 'Orange Blossom Cocktail',
    calories: 152,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Orange Blossom Cocktail tem um sabor forte devido à presença marcante do Gin. Já o suco de laranja deixa o coquetel mais suave.',
    decoration: 'Rodela de Laranja para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 2,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '2ee0c794-3e7f-4666-b8ae-d54227a2bd34',
    oldId: 458,
    name: 'Orange Kamikaze',
    calories: 168,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description: 'O Orange Kamikaze é um coquetel com sabor forte.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '212e20e1-1973-48fe-9a97-aa196deb1421',
    oldId: 419,
    name: 'Orange Velvet',
    calories: 66,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Orange Velvet é um coquetel delicioso. Sua textura é cremosa devido ao Half and Half e o abacaxi dá um toque especial.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 3,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Half and Half',
      },
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Abacaxi',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: ['semalcool'],
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
    id: 'c886226c-0326-4692-b6e8-aff5ffef56a4',
    oldId: 109,
    name: 'Orangeade Parade',
    calories: 89,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Orangeade Parade é um coquetel sem álcool muito fácil de se fazer. Seu sabor é bem adocicado.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Grenadine',
      },
      {
        order: 3,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água com gás',
      },
      {
        order: 1,
        quantity: '120',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Collins com gelo',
      },
      {
        order: 2,
        description: 'Mexa bem',
      },
    ],
    categories: ['semalcool'],
    instructions: [],
  },
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
    id: 'a2d9eb11-9682-4628-9672-301232780101',
    oldId: 412,
    name: 'Papaya A La Mode',
    calories: 283,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Papaya a la Mode é rico em vitaminas A, B, C, fósforo, cálcio, ferro e potássio.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 2,
        quantity: '8',
        unitOfMeasurement: null,
        ingredientType: 'Amoras grandes',
      },
      {
        order: 5,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água',
      },
      {
        order: 1,
        quantity: '1/2',
        unitOfMeasurement: null,
        ingredientType: 'Mamão Papaya',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'pote',
        ingredientType: 'Iogurte natural desnatado (200g)',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para um copo Collins',
      },
      {
        order: 1,
        description:
          'Bata todos os ingredientes no liquidificador com uma ou duas pás de gelo até adquirir uma textura cremosa',
      },
    ],
    categories: ['smoothies'],
    instructions: [],
  },
  {
    id: '0ce07937-448e-4da6-88d4-2f948a07df97',
    oldId: 224,
    name: 'Paris Cocktail',
    calories: 193,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Paris Cocktail é um coquetel muito saboroso. Além de ser muito bonito, lembra um Martini com um leve toque do Cassis.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Seco',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Cassis',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '3e45b139-0a07-4ded-bb3a-b33574991d72',
    oldId: 420,
    name: 'Parisette',
    calories: 68,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Parisette é um coquetel bem saboroso e adocicado, ótimo para crianças.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Grenadine',
      },
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Leite',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Coloque o Grenadine em um copo Highball com gelo',
      },
      {
        order: 2,
        description: 'Complete com leite e mexa bem',
      },
    ],
    categories: ['semalcool'],
    instructions: [],
  },
  {
    id: '12d14214-d56c-4b2d-a323-744ff151bb53',
    oldId: 410,
    name: 'Peach Breeze',
    calories: 260,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Peach Breeze é rico em vitaminas A, C, betacaroteno (provitamina A), cálcio, fósforo, ferro e potássio.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Tangerina',
      },
      {
        order: 5,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 2,
        quantity: '8',
        unitOfMeasurement: null,
        ingredientType: 'Morangos',
      },
      {
        order: 1,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Pêssego sem casca',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Bata todos os ingredientes no liquidificador com uma ou duas pás de gelo até adquirir uma textura cremosa',
      },
      {
        order: 2,
        description: 'Coe para um copo Collins',
      },
    ],
    categories: ['smoothies'],
    instructions: [],
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
    id: 'a8e691cc-61f9-4767-b0d9-e8810e71f07d',
    oldId: 411,
    name: 'Peach Royale',
    calories: 278,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Peach Royale é rico em fibras, potássio, fósforo, ferro e vitaminas A e C.',
    decoration: null,
    ingredients: [
      {
        order: 5,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'pote',
        ingredientType: 'Iogurte natural desnatado (200g)',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Banana prata',
      },
      {
        order: 1,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Pêssego sem casca',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Bata todos os ingredientes no liquidificador com uma ou duas pás de gelo até adquirir uma textura cremosa',
      },
      {
        order: 2,
        description: 'Coe para um copo Collins',
      },
    ],
    categories: ['smoothies'],
    instructions: [],
  },
  {
    id: 'a086e39e-ee16-4d02-b183-d5c7ad6dfbda',
    oldId: 137,
    name: 'Pearl Cocktail',
    calories: 164,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Pearl Cocktail é um coquetel bem diferente. A combinação do Licor de Café com o Espumante é muito interessante, pois proporciona um gosto exótico e ao mesmo tempo muito suave.',
    decoration: 'Cereja para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Café',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Espumante gelado',
      },
      {
        order: 1,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy (Conhaque)',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Coloque todos os ingrediente, exceto o Espumante, com um pouco de gelo triturado em uma taça Flute',
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
    id: 'f6d173ef-aa32-4e03-a11a-11760b7786af',
    oldId: 308,
    name: 'Pearl Harbor',
    calories: 199,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Pearl Harbor é um coquetel muito saboroso. O licor de melão combina muito bem com o suco de abacaxi.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Abacaxi',
      },
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Melão',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para para uma taça de Coquetel gelada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'f2ab87c6-8743-4846-a8b2-ff99bc982389',
    oldId: 179,
    name: 'Perfect Martini',
    calories: 123,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'O Perfect Martini é um martini um pouco mais doce, pois contém mais Vermouth. O sabor do Gin é mais suave.',
    decoration: 'Twist de Limão para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '52',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 3,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Tinto',
      },
      {
        order: 2,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Seco',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Mexa todos os ingredientes em um Mixing glass com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
    ],
    categories: ['martinis'],
    instructions: [
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
    id: '76585621-ebd4-4523-8bc4-fb1367780101',
    oldId: 110,
    name: 'Perfection Cocktail',
    calories: 191,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'No Perfection Cocktail o gosto do Conhaque se destaca bastante e o Triple Sec aparece suavemente adocicando o coquetel.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 3,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Seco',
      },
      {
        order: 2,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Doce',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy (Conhaque)',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Mexa todos os ingredientes em um Mixing Glass com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: [],
    instructions: [],
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
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
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
  {
    id: 'c8a45661-e24c-4c5a-9418-295e0ac38932',
    oldId: 358,
    name: 'Pineapple Express',
    calories: 250,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Pineapple Express possui cálcio, fósforo e potássio, além de agir como antioxidante que ajuda prevenir o envelhecimento. É rico em vitaminas C, A, B1, B2, B3 e B6.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Tangerina',
      },
      {
        order: 5,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água',
      },
      {
        order: 1,
        quantity: '1/2',
        unitOfMeasurement: null,
        ingredientType: 'Manga',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: 'fatia',
        ingredientType: 'grossa de Abacaxi',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Bata todos os ingredientes no liquidificador com uma ou duas pás de gelo até adquirir uma textura cremosa',
      },
      {
        order: 2,
        description: 'Coe para um copo Collins',
      },
    ],
    categories: ['smoothies'],
    instructions: [],
  },
  {
    id: '04ccf474-5b92-46ae-8212-483975ae305a',
    oldId: 361,
    name: 'Pink Banana',
    calories: 261,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Pink Banana possui bastante cálcio, ferro e potássio. É rico em vitamina C, B1 e B2.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '1/2',
        unitOfMeasurement: null,
        ingredientType: 'Banana',
      },
      {
        order: 5,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'pote',
        ingredientType: 'Iogurte natural desnatado (200g)',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 2,
        quantity: '3',
        unitOfMeasurement: null,
        ingredientType: 'Morangos',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Bata todos os ingredientes no liquidificador com uma ou duas pás de gelo até adquirir uma textura cremosa',
      },
      {
        order: 2,
        description: 'Coe para um copo Collins',
      },
    ],
    categories: ['smoothies'],
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
  {
    id: '72e35c2a-a8ac-4c45-871c-3c6ae850951e',
    oldId: 298,
    name: 'Pink Margarita',
    calories: 193,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Pink Margarita é um coquetel forte com o gosto marcante da tequila. O mel dá uma leve adocicada.',
    decoration: '1/2 rodela de Limão e ramo de Hortelã para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Campari',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Tequila Prata',
      },
      {
        order: 4,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mel',
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
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 3,
        description: 'Decore com o limão e a hortelã',
      },
      {
        order: 2,
        description: 'Passe tudo para um copo Old-fashioned',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '77434f1d-5c0c-4300-a2da-3756add74811',
    oldId: 269,
    name: 'Preakness Cocktail',
    calories: 160,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'O Preakness Cocktail é um coquetel bem forte. O sabor do Whisky se destaca.',
    decoration: 'Twist de Limão para decorar',
    ingredients: [
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Angostura',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Bénédictine',
      },
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Doce',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Whisky',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Decore com o twist de limão',
      },
      {
        order: 2,
        description: 'Coe para um taça de Coquetel gelada',
      },
      {
        order: 1,
        description:
          'Mexa bem todos os ingredientes em um Mixing glass com gelo',
      },
    ],
    categories: [],
    instructions: [
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
        description: 'Monte o coquetel direto no copo Old-Fashioned com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '583503a4-544c-4855-946a-d82102976082',
    oldId: 152,
    name: 'Pussy Foot',
    calories: 94,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Pussy Foot é um coquetel bem ácido. O Sabor da gema de ovo é bem marcante.',
    decoration: 'Rodela de Laranja e ramo de Hortelã para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 1,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'Gema',
        ingredientType: 'ovo',
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
        order: 2,
        description: 'Passe tudo para um copo Highball',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: ['semalcool'],
    instructions: [],
  },
  {
    id: '733d96ae-9403-403b-abc9-11d69346b6d5',
    oldId: 263,
    name: 'Queen Elizabeth',
    calories: 122,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'O Queen Elizabeth é um coquetel seco. Seu sabor é levemente adocicado, por causa do Bénédictine.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Bénédictine',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Seco',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Mexa bem todos os ingredientes em um Mixing glass com gelo',
      },
      {
        order: 2,
        description: 'Coe para um taça de Coquetel gelada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '8580aea5-65c4-445a-873b-1f55fa04c175',
    oldId: 227,
    name: 'Raining Days',
    calories: 206,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Raining Days é um coquetel muito gostoso. O sabor da Vodca é bem suave e o gosto do suco de laranja se destaca, com um toque do Creme de cassis.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 3,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Cassis',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Coloque a Vodca e o suco de Limão em um copo Highball com gelo',
      },
      {
        order: 3,
        description: 'Adicione o Creme de Cassis',
      },
      {
        order: 2,
        description: 'Complete com suco de Laranja',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: '665bba1c-3ced-40c3-9e47-f9818f9c66da',
    oldId: 223,
    name: 'Red Dwarf',
    calories: 300,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Red Dwarf é um drink bem gostoso. O sabor do licor de pessêgo aparece bastante.',
    decoration: '1/2 rodela de Limão para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
      {
        order: 2,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Pêssego',
      },
      {
        order: 5,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Cassis',
      },
      {
        order: 4,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Bata todos os ingredientes em uma coqueteleira com gelo, exceto o Creme de cassis',
      },
      {
        order: 3,
        description: 'Adicione o Creme de cassis',
      },
      {
        order: 2,
        description: 'Passe tudo para um copo Highball',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'ac5e3daf-35af-4b4f-8cdd-78f9d2eb170f',
    oldId: 304,
    name: 'Red Eye',
    calories: 174,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Red Eye é um coquetel para quem gosta de suco de tomate. Sua combinação é exótica.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Tomate',
      },
      {
        order: 2,
        quantity: '360',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cerveja Lager ou Ale gelada',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Coloque o suco de tomate em uma caneca de cerveja gelada',
      },
      {
        order: 2,
        description: 'Adicione a Cerveja',
      },
    ],
    categories: [],
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
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
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
    id: 'dd18fe8a-6d7c-471f-a6c9-2c27b6933dd0',
    oldId: 384,
    name: 'Red Snapper',
    calories: 180,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Red Snapper é um coquetel gostoso. O Whisky aparece bem suave e o Amaretto adocica.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Cranberry',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Amaretto',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Whisky Canadense',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Passe tudo para um copo Old-fashioned',
      },
    ],
    categories: [],
    instructions: [],
  },

  {
    id: '7c92019d-6d40-4358-84ec-44ef8113f622',
    oldId: 246,
    name: 'Red Square',
    calories: 175,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Red Square é um shot com teor alcoólico bem elevado. Seu gosto é forte e o molho de pimenta da um toque picante especial.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Sambuca Branca',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Molho de Pimenta a gosto',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Misture todos os ingredientes em um copo de Shot',
      },
    ],
    categories: ['shot'],
    instructions: [],
  },
  {
    id: '6603f265-fc42-4060-a21a-3cb914005169',
    oldId: 352,
    name: 'Red Sunset',
    calories: 195,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Red Sunset possui cálcio, ferro e potássio. É rico em vitaminas C, A, B1 e B2.',
    decoration: null,
    ingredients: [
      {
        order: 5,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: 'fatia',
        ingredientType: 'Melancia sem caroço',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Limão',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colheres',
        ingredientType: 'Açúcar',
      },
      {
        order: 1,
        quantity: '5',
        unitOfMeasurement: null,
        ingredientType: 'Morangos',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para um copo Collins',
      },
      {
        order: 1,
        description:
          'Bata todos os ingredientes no liquidificador com uma ou duas pás de gelo até adquirir uma textura cremosa',
      },
    ],
    categories: ['smoothies'],
    instructions: [],
  },
  {
    id: '75cd4f42-74ce-46ca-af8c-f1e8ed959af5',
    oldId: 474,
    name: 'Road Runner 2',
    calories: 136,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Road Runner 2 é um coquetel gostoso. Seu sabor é bem adocicado.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Malibu',
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
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'cacd5bfe-10e9-4dfa-95cc-229ac41254de',
    oldId: 38,
    name: 'Rob Roy',
    calories: 201,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Rob Roy é um coquetel que estimula o apetite, ideal para quem gosta de Whisky. O Vermouth suaviza levemente o sabor.',
    decoration: 'Cereja para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Scotch Whisky',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Angostura',
      },
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Tinto',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Decore com a Cereja',
      },
      {
        order: 1,
        description: 'Mexa todos os ingredientes em um Mixing Glass com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
    ],
    categories: ['classicos'],
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
    id: '7f243eb7-595c-4332-82a1-d7b8f49febf3',
    oldId: 478,
    name: 'Rompope',
    calories: 345,
    alcoholicContent: 'LOW',
    difficulty: 'MEDIUM',
    description:
      'O Rompope é um coquetel magnífico. Sua textura é cremosa, seu sabor é delicioso e a combinação dos ingredientes é perfeita. A canela é importantíssima e o ovo praticamente não aparece. Vale a pena experimentar!',
    decoration: 'Canela em pó e canela em pau para decorar',
    ingredients: [
      {
        order: 3,
        quantity: '75',
        unitOfMeasurement: 'ml',
        ingredientType: 'Leite gelado',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'gema',
        ingredientType: 'ovo',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 2,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Leite Condensado',
      },
      {
        order: 5,
        quantity: '1',
        unitOfMeasurement: 'gota',
        ingredientType: 'extrato de Baunilha',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
      {
        order: 3,
        description:
          'Polvilhe a canela em pó no topo e decore com a canela em pau',
      },
      {
        order: 1,
        description:
          'Bata todos os ingredientes, exceto a canela, no liquidificador com 1 ou 2 pás de gelo até adquirir uma textura cremosa',
      },
    ],
    categories: ['frozen', 'tropicais'],
    instructions: [],
  },
  {
    id: '44b7aaba-0f49-4bf1-9579-3edce027d49d',
    oldId: 233,
    name: 'Ron A La Groselha',
    calories: 119,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Ron a la Groselha é um coquetel bem leve, com sabor marcante de groselha.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Groselha',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Água com gás',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Escuro',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Complete com Água com gás',
      },
      {
        order: 1,
        description:
          'Coloque o Rum em um copo Highball com gelo e adicione a Groselha',
      },
      {
        order: 3,
        description: 'Mexa bem',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'f9e35d73-a9f0-4a32-b07f-0952b85dfd64',
    oldId: 297,
    name: 'Rooster Tail',
    calories: 72,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'Este shot é forte, mas também bem saboroso. O suco de tomate temperado deixa um sabor muito bom depois da tequila e do suco de laranja.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '1',
        unitOfMeasurement: 'shot',
        ingredientType: 'Tequila Ouro',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'pitada',
        ingredientType: 'sal',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: 'shot',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'shot',
        ingredientType: 'Suco de Tomate com sal, pimenta e limão a gosto',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Tome os shots na sequência dos ingredientes',
      },
      {
        order: 1,
        description: 'Coloque o sal na mão para lamber ou diretamente na boca',
      },
    ],
    categories: ['shot'],
    instructions: [],
  },
  {
    id: 'd933b68c-0fdd-472e-b942-c7424cdc42ae',
    oldId: 306,
    name: 'Rosita',
    calories: 181,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Rosita é um coquetel aperitivo. O sabor do Campari se destaca.',
    decoration: 'Twist de Limão para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Campari',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Tequila Prata',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Seco',
      },
      {
        order: 4,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Doce',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Old-fashioned com gelo',
      },
      {
        order: 2,
        description: 'Decore com o twist de limão',
      },
    ],
    categories: [],
    instructions: [
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
    id: 'a2eca1ef-a075-4eff-a23c-478401ee52b9',
    oldId: 273,
    name: 'Rum Scaffa',
    calories: 174,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Rum Scaffa é um coquetel forte e adocicado. O sabor do Rum se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Angostura',
      },
      {
        order: 1,
        quantity: '37',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Bénédictine',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '458d249b-b64f-47a7-ba49-53a214d347ff',
    oldId: 309,
    name: 'Russian Bear',
    calories: 227,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Russian Bear é um coquetel delicioso. Seu sabor é bem adocicado e seus ingredientes combinam perfeitamente.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 2,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Cacau escuro',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colher de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 3,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Leite',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'd4a9608b-b1d0-42eb-aee4-a785f904532c',
    oldId: 482,
    name: 'Rusty Nail',
    calories: 184,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'Apesar do alto teor alcoólico, o Rusty Nail é bem saboroso. O Drambuie suaviza o sabor do whisky e dá um toque adocicado ao coquetel. Ótima escolha para quem gosta de whisky.',
    decoration: 'Twist de Lima para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Drambuie',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Scotch Whisky',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Decore com o twist de lima',
      },
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Old-fashioned com gelo',
      },
    ],
    categories: ['classicos'],
    instructions: [
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
    id: '68ebb47f-7573-4c6c-8b1a-3bb4dfdc469f',
    oldId: 123,
    name: 'Saiquirinha',
    calories: 192,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'A Saiquirinha é mais uma variação da Caipirinha, a diferença é que ela é feita com Saquê. O Saquê possui menor teor alcoólico e um sabor mais fraco que o da cachaça, deixando o coquetel bem mais suave.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Saquê',
      },
      {
        order: 2,
        quantity: '1/2',
        unitOfMeasurement: null,
        ingredientType: 'Limão',
      },
      {
        order: 3,
        quantity: '2',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Corte meio limão em 4 pedaços e macere dentro do copo com açúcar',
      },
      {
        order: 2,
        description: 'Complete o copo com gelo e depois adicione o Saquê',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '2f861cec-c81e-4d1d-b074-85894d479739',
    oldId: 390,
    name: 'Saketini',
    calories: 155,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'No Saketini, o sabor do Gin predomina. É um coquetel forte e bem alcoólico.',
    decoration: 'Azeitona para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '7',
        unitOfMeasurement: 'ml',
        ingredientType: 'Saquê',
      },
      {
        order: 1,
        quantity: '75',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Mexa os ingredientes em um Mixing Glass com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
      {
        order: 3,
        description: 'Decore com a Azeitona',
      },
    ],
    categories: ['martinis'],
    instructions: [],
  },
  {
    id: '391e998c-f52e-4717-b450-241f431a0d39',
    oldId: 209,
    name: 'Salt And Pepper Martini',
    calories: 147,
    alcoholicContent: 'HIGH',
    difficulty: 'HARD',
    description:
      'Este martini é muito parecido com o Vodca Martini, porém com o leve sabor de pimenta que a Vodca proporciona.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca de Pimenta',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Sal para crustar a taça',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Vermouth Seco',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description:
          'Mexa bem a Vodca e o Vermouth em um Mixing glass com gelo',
      },
      {
        order: 3,
        description: 'Coe para a taça de Coquetel crustada',
      },
      {
        order: 1,
        description: 'Cruste a taça de Coquetel com sal',
      },
    ],
    categories: ['martinis'],
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
    id: '68044020-8613-4927-b263-919c1e34c94f',
    oldId: 371,
    name: 'Scotch Cocktail',
    calories: 422,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'No Scotch Cocktail o sabor do whisky se destaca, e seu sabor é levemente adocicado.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mel',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Scotch Whisky',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Leite',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },

  {
    id: 'def8fb0d-14db-4792-8728-a40fca2adc08',
    oldId: 26,
    name: 'Screwdriver',
    calories: 224,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Screwdriver é um coquetel refrescante bem simples de ser feito. Muito saboroso, está sempre presente em festas, bares, etc. O sabor da laranja se sobressai ao da vodca, tornando-o praticamente um suco de laranja.',
    decoration: 'Rodela de laranja para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
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
        order: 1,
        description:
          'Encha um copo Highball com gelo, adicione a Vodca e complete com Suco de Laranja',
      },
    ],
    categories: ['tropicais', 'classicos'],
    instructions: [],
  },
  {
    id: 'a97f90f3-87c3-4b30-8c86-b7d350958729',
    oldId: 169,
    name: 'Sea Breeze',
    calories: 286,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Sea Breeze é um coquetel bem adocicado e muito saboroso. A combinação do Amaretto com o Curaçau é impressionante.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Abacaxi',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
      {
        order: 5,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Soda Limonada',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Curaçau Blue',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Amaretto',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Bata todos os ingredientes em uma coqueteleira com gelo, exceto a Soda',
      },
      {
        order: 3,
        description: 'Complete com Soda Limonada',
      },
      {
        order: 2,
        description: 'Passe tudo para um copo Highball',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'e15b3b6a-3395-4f40-9711-1ae511b19ab8',
    oldId: 469,
    name: 'Self-Destruct',
    calories: 225,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'No Self-Destruct o sabor da vodca predomina. Mesmo assim, o coquetel não tem sabor forte.',
    decoration: 'Meia rodela de limão para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Decore com o limão',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'af92feb9-cbc0-496c-a87a-555640dbdba6',
    oldId: 131,
    name: 'Serpentina',
    calories: 141,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Serpentina é um coquetel com sabor bem suave. Nenhum dos ingredientes se destaca, sua combinação é bem harmoniosa.',
    decoration: 'Rodelas finas de Limão para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Menta verde',
      },
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Espumante gelado',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Adicione o Creme de Menta em uma Taça Flute',
      },
      {
        order: 3,
        description: 'Decore com as rodelas de limão',
      },
      {
        order: 2,
        description: 'Complete suavemente com o Espumante',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'ab3ce465-4e4d-4f8f-9050-7716406f1473',
    oldId: 1,
    name: 'Sex On The Beach',
    calories: 228,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Sex on the Beach é um coquetel refrescante conhecido mundialmente e no Brasil é servido na maioria dos bares e restaurantes. A mistura do suco de laranja com o licor de pêssego combina perfeitamente com o gosto marcante da vodca, proporcionando um sabor suave, ideal para pessoas que preferem um coquetel mais adocicado.',
    decoration: 'Rodela de laranja e cereja para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Pêssego',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Grenadine',
      },
      {
        order: 1,
        quantity: '37',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Monte o coquetel direto no copo Highball com gelo e complete com Suco de laranja',
      },
      {
        order: 2,
        description: 'Coloque o Grenadine por último',
      },
    ],
    categories: ['tropicais', 'classicos'],
    instructions: [],
  },
  {
    id: 'fe0c2743-a87c-41bd-85a2-22b3edd3ea89',
    oldId: 2,
    name: 'Shark Attack',
    calories: 260,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'A combinação do limão com a vodca proporciona um sabor forte, porém não agressivo, e o toque de grenadine deixa o coquetel ligeiramente suave. Além de ser um estimulante do apetite, devido ao seu sabor ácido e alto teor alcoólico, não deixa de ser um drinque refrescante para quem prefere algo mais forte.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 2,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Limão (Sweet and Sour)',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Grenadine',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coloque o Grenadine por último para dar coloração',
      },
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Highball com gelo',
      },
    ],
    categories: [],
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
    id: 'd67feb63-33f8-40c0-b832-e29ae5a85b8c',
    oldId: 323,
    name: 'Shirley Temple',
    calories: 203,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Shirley Temple é um coquetel muito suave e saboroso. Seu gosto é bem adocicado.',
    decoration: 'Limão e Cereja para decorar',
    ingredients: [
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Grenadine',
      },
      {
        order: 2,
        quantity: '75',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 1,
        quantity: '150',
        unitOfMeasurement: 'ml',
        ingredientType: 'Ginger Ale',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Mexa suavemente',
      },
      {
        order: 2,
        description: 'Adicione o Grenadine por último',
      },
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Highball com gelo',
      },
    ],
    categories: ['semalcool'],
    instructions: [],
  },
  {
    id: '638b257a-d3eb-4045-b0ce-b010d1067b08',
    oldId: 287,
    name: 'Sicilian Kiss',
    calories: 103,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Sicilian Kiss é um shot extremamente doce. Ideal para ser consumido após as refeições.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Pêssego',
      },
      {
        order: 1,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Amaretto',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para um copo de Shot pequeno',
      },
    ],
    categories: ['shot'],
    instructions: [],
  },
  {
    id: '5db170d6-77a7-4b96-857b-4d09819121ed',
    oldId: 365,
    name: 'Soft And Sweet',
    calories: 258,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Soft and Sweet possui bastante cálcio. É rico em vitaminas C, B1 e B2.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'pote',
        ingredientType: 'Iogurte natural desnatado (200g)',
      },
      {
        order: 5,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 1,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Kiwi',
      },
      {
        order: 2,
        quantity: '5',
        unitOfMeasurement: null,
        ingredientType: 'Morangos',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Bata todos os ingredientes no liquidificador com uma ou duas pás de gelo até adquirir uma textura cremosa',
      },
      {
        order: 2,
        description: 'Coe para um copo Collins',
      },
    ],
    categories: ['smoothies'],
    instructions: [],
  },
  {
    id: '24cd5222-3295-469c-9c2a-ee4bd26d6be6',
    oldId: 101,
    name: 'Sombrero',
    calories: 329,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Sombrero é um coquetel digestivo ideal para ser consumido após as refeições. O sabor do café combinado com o half-and-half lembra muito cappucino.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '90',
        unitOfMeasurement: 'ml',
        ingredientType: 'Half and Half',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Café',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Mexa bem',
      },
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Old-Fashioned com gelo',
      },
    ],
    categories: [],
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
    id: '4f53bd3b-9055-4c33-a25b-a0ec9448fce3',
    oldId: 161,
    name: 'Sparkler',
    calories: 104,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Sparkler é um coquetel refrescante não muito doce. Seu sabor é excelente.',
    decoration: 'Rodela de Limão e Cereja para decorar',
    ingredients: [
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Angostura',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Soda Limonada para completar',
      },
      {
        order: 2,
        quantity: '30',
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
        description: 'Coloque a Angostura no final',
      },
    ],
    categories: ['semalcool'],
    instructions: [],
  },
  {
    id: 'c5f6ccd3-b4e9-41d5-83b2-18e59112abb8',
    oldId: 380,
    name: 'Spicy Raspberry',
    calories: 175,
    alcoholicContent: 'MEDIUM',
    difficulty: 'MEDIUM',
    description:
      'O Spicy Raspberry tem um sabor levemente apimentado e bem suave.\n\nCoquetel criado por Rodrigo Farias de Campos.\n\nCrédito da foto: Rodrigo Farias de Campos',
    decoration: null,
    ingredients: [
      {
        order: 6,
        quantity: '1',
        unitOfMeasurement: 'dash',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 5,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Simple Syrup',
      },
      {
        order: 3,
        quantity: '10',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 4,
        quantity: '4',
        unitOfMeasurement: 'gotas',
        ingredientType: 'Pimenta Tabasco',
      },
      {
        order: 1,
        quantity: '52',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 2,
        quantity: '2',
        unitOfMeasurement: 'colheres',
        ingredientType: 'sopa de Framboesa',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: [],
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
    id: '4061005e-c1a5-487f-8455-6bfc45ed5f92',
    oldId: 457,
    name: 'Spooky Juice',
    calories: 187,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Spooky Juice é um coquetel delicioso e bem refrescante. Pode parecer bobagem, mas as gotas de Curaçau e Grenadine fazem toda a diferença, elas adocicam e dão um toque especial ao drinque.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 2,
        quantity: '2',
        unitOfMeasurement: 'gotas',
        ingredientType: 'Curaçau Blue',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'gota',
        ingredientType: 'Grenadine',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Highball com gelo',
      },
      {
        order: 3,
        description: 'Mexa bem',
      },
      {
        order: 2,
        description: 'Complete com suco de Laranja',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: 'c9a0bb5d-ca05-45e3-bb34-4bd71e4c4844',
    oldId: 476,
    name: 'Spotted Bikini',
    calories: 237,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description: 'O gosto do maracujá predomina neste coquetel.',
    decoration: null,
    ingredients: [
      {
        order: 5,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Suco de 1/2 Lima',
      },
      {
        order: 4,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Leite',
      },
      {
        order: 2,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 1,
        quantity: '1/2',
        unitOfMeasurement: null,
        ingredientType: 'Maracujá',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Bata todos os ingredientes, exceto o maracujá, em uma coqueteleira com gelo',
      },
      {
        order: 3,
        description: 'Coloque o maracujá por último',
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
    id: 'a814cf82-d11b-47d2-9593-9e009a716b9d',
    oldId: 105,
    name: 'Strawberry Daiquiri',
    calories: 173,
    alcoholicContent: 'LOW',
    difficulty: 'MEDIUM',
    description:
      'O Strawberry Daiquiri é um coquetel refrescante bem suave. O sabor do morango se destaca acompanhado do Rum que formam uma combinação perfeita.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colher de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 3,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Morango (ou 5 morangos)',
      },
      {
        order: 1,
        quantity: '37',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Morango',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para um Cálice de Vinho',
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
    id: 'cab13ae0-59de-4ae9-bcd4-bb17ea28a3d9',
    oldId: 98,
    name: 'Strawberry Fizz',
    calories: 296,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Strawberry Fizz é um coquetel refrescante muito gostoso. O seu sabor é praticamente morango.',
    decoration: 'Limão para decorar',
    ingredients: [
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Limonada para completar',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Morango',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Highball com gelo',
      },
      {
        order: 2,
        description: 'Complete com a Limonada',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: 'c54eebb1-c554-4982-b030-169da6d38dad',
    oldId: 103,
    name: 'Strawberry Margarita',
    calories: 169,
    alcoholicContent: 'LOW',
    difficulty: 'MEDIUM',
    description:
      'O Strawberry Margarita é um coquetel refrescante. O sabor da tequila é suave e o gosto de morango é evidente.',
    decoration: 'Morango para decorar',
    ingredients: [
      {
        order: 3,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Morango',
      },
      {
        order: 1,
        quantity: '37',
        unitOfMeasurement: 'ml',
        ingredientType: 'Tequila Prata',
      },
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Decore com o Morango',
      },
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
    categories: ['frozen'],
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
    id: 'ddabeb56-1c57-4c4e-9243-e3086d5d9b6c',
    oldId: 215,
    name: 'Sugar-Rimmed Bacardi',
    calories: 137,
    alcoholicContent: 'HIGH',
    difficulty: 'HARD',
    description:
      'O Sugar-Rimmed Bacardi é um coquetel forte. O sabor do Absinto aparece levemente.',
    decoration: 'Meia rodela de Limão para decorar',
    ingredients: [
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Açúcar para crustar a taça',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Absinto',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Coe para a taça de Coquetel crustada',
      },
      {
        order: 2,
        description: 'Bata o Rum e o Absinto em uma coqueteleira com gelo',
      },
      {
        order: 1,
        description: 'Cruste uma taça de Coquetel com açúcar',
      },
    ],
    categories: [],
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
    id: 'fc535b7c-4df4-489f-9419-817c4b5a372c',
    oldId: 90,
    name: 'Sunburn',
    calories: 177,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Sunburn é um coquetel refrescante de sabor adocicado devido à mistura do Triple sec com o suco de Cranberry. O sabor da Tequila se destaca dando um gosto especial.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Tequila Prata',
      },
      {
        order: 3,
        quantity: '75',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Cranberry',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma Taça Fiesta gelada',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },

  {
    id: '6470be4b-4aff-46a0-943f-c776e86b2fc9',
    oldId: 356,
    name: 'Sunny Days',
    calories: 250,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Sunny Days age como antioxidante prevenindo o envelhecimento. É rico em vitaminas C, A, B1, B2, B3 e B6.',
    decoration: null,
    ingredients: [
      {
        order: 5,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Limão',
      },
      {
        order: 1,
        quantity: '3/4',
        unitOfMeasurement: null,
        ingredientType: 'Manga',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Maracujá',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Bata todos os ingredientes no liquidificador com uma ou duas pás de gelo até adquirir uma textura cremosa',
      },
      {
        order: 2,
        description: 'Coe para um copo Collins',
      },
    ],
    categories: ['smoothies'],
    instructions: [],
  },
  {
    id: '63caa2b7-d3f9-40a5-9700-ba74a4c1fba1',
    oldId: 450,
    name: 'Sunrise On The Beach',
    calories: 111,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Sunrise on the Beach é um coquetel delicioso. O Malibu e a goiaba combinam muito bem e o licor de menta dá um toque especial.\n\nCoquetel criado por Edson do Amaral Lucas da Rosa.',
    decoration: 'Fatia de goiaba e um ramo de hortelã para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Goiaba',
      },
      {
        order: 1,
        quantity: '52',
        unitOfMeasurement: 'ml',
        ingredientType: 'Malibu',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Licor de Menta verde',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Bata o Malibu e o suco de goiaba em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
      {
        order: 3,
        description: 'Adicione o Licor de menta por último',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: '20f809a9-3ed2-4b7e-8dd2-b0cb162106f2',
    oldId: 325,
    name: 'Superman',
    calories: 113,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Superman é um coquetel muito gostoso e bonito. O sabor do Goldschlager se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Grenadine',
      },
      {
        order: 1,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Goldschlager',
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
        order: 3,
        description: 'Adicione o Grenadine por último',
      },
      {
        order: 1,
        description:
          'Bata o Goldschlager e o Curaçau blue em uma coqueteleira com gelo',
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
    id: '39ddca70-08b3-46f0-abff-e21008c6aeff',
    oldId: 181,
    name: 'Sweet Martini',
    calories: 137,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'O Sweet Martini é um coquetel com sabor forte, apesar do seu nome. O gosto do Gin se destaca.',
    decoration: 'Cereja para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '52',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Tinto',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Mexa todos os ingredientes em um Mixing glass com gelo',
      },
      {
        order: 2,
        description: 'Coe para um taça de Coquetel gelada',
      },
    ],
    categories: ['martinis'],
    instructions: [],
  },
  {
    id: '3a7f865c-6739-4f88-ae31-72c6339efc8f',
    oldId: 407,
    name: 'Sweet N’Sour',
    calories: 265,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Sweet n’Sour é rico em proteínas, vitaminas A, B1, B5, C, cálcio, fósforo e ferro.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Maracujá',
      },
      {
        order: 5,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Limão',
      },
      {
        order: 1,
        quantity: '10',
        unitOfMeasurement: null,
        ingredientType: 'Framboesas grandes',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Bata todos os ingredientes no liquidificador com uma ou duas pás de gelo até adquirir uma textura cremosa',
      },
      {
        order: 2,
        description: 'Coe para um copo Collins',
      },
    ],
    categories: ['smoothies'],
    instructions: [],
  },
  {
    id: '951553ec-8f84-427f-8c3d-08fd2957d739',
    oldId: 275,
    name: 'Sweet Tight Pussy',
    calories: 124,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Sweet Tight Pussy é um shot muito saboroso. Seu sabor é bem adocicado.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Melão',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Pêssego',
      },
      {
        order: 4,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Soda Limonada',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Abacaxi',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
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
    id: 'a5a2e033-8fe4-498d-8b03-2381ed033c75',
    oldId: 340,
    name: 'Tecolada Blue',
    calories: 219,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Tecolada Blue é uma variação da Piña Colada. A diferença aqui é a Tequila que entra no lugar do Rum, e o Curaçau blue que aparece para dar cor. É um coquetel bem gostoso. O sabor da Tequila aparece bem suave.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Tequila Prata',
      },
      {
        order: 3,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Mix de Côco',
      },
      {
        order: 4,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Abacaxi',
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
    id: '64c7c2de-863d-4440-ac8c-e599a32d6f31',
    oldId: 51,
    name: 'Tequila Mockingbird',
    calories: 226,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Tequila Mockingbird é um coquetel um pouco ácido e a mistura dos ingredientes deixa o sabor unânime.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Menta verde',
      },
      {
        order: 1,
        quantity: '75',
        unitOfMeasurement: 'ml',
        ingredientType: 'Tequila Prata',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '18644184-c5d6-4d09-a186-665329f8d255',
    oldId: 138,
    name: 'Tequila Slammer',
    calories: 121,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Tequila Slammer é um shot divertido para ser tomado entre amigos. Lembra um shot de Tequila comum, porém o Espumante dá um toque especial.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Tequila Prata gelada',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Espumante gelado',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description:
          'Cubra o copo com a palma da mão, golpeie-o contra a mesa e beba rapidamente',
      },
      {
        order: 1,
        description: 'Coloque a Tequila e o Suco de Limão em um copo de shot',
      },
      {
        order: 2,
        description: 'Complete com o Espumante',
      },
    ],
    categories: ['shot'],
    instructions: [],
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
    id: '2d207d20-76ea-4d05-946b-d84db999896c',
    oldId: 114,
    name: 'Tequila Woo Woo',
    calories: 194,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Tequila Woo Woo é um coquetel de sabor adoçicado onde o gosto da Tequila se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Tequila Prata',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Pêssego',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Suco de Cranberry',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Complete com Suco de Cranberry',
      },
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Highball com gelo',
      },
      {
        order: 3,
        description: 'Mexa bem',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '2524916d-b006-4cf6-b5d4-77d00d755084',
    oldId: 213,
    name: 'The Absent',
    calories: 178,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'O The Absent é um coquetel saboroso e muito bonito. O gosto do licor de Melão se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Melão',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
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
        description:
          'Mexa bem todos os ingredientes em um Mixing glass com gelo',
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
    id: '9c57abc5-0475-45f2-9fcc-434f21fe8037',
    oldId: 130,
    name: 'The Acrobat',
    calories: 265,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O The Acrobat é um coquetel forte. O gosto do Whisky se destaca e o espumante o deixa mais suave.',
    decoration: 'Rodela de Limão para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Whisky',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Sidra gelada (Espumante de maçã)',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description:
          'Passe tudo para um copo Highball e complete com o espumante',
      },
      {
        order: 1,
        description:
          'Bata todos os ingredientes, exceto o espumante, em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '61d57843-ca81-46a3-9671-4f8df5ec3ef1',
    oldId: 336,
    name: 'The Dark Side',
    calories: 586,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O The Dark Side é um coqueté bem saboroso. O gosto do Amaretto e do Cacau se destacam.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Amaretto',
      },
      {
        order: 1,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Escuro',
      },
      {
        order: 5,
        quantity: '3',
        unitOfMeasurement: 'bolas',
        ingredientType: 'Sorvete de Creme',
      },
      {
        order: 3,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Cacau escuro',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para um copo Highball',
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
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
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
    id: '5cd0b698-3ee2-424b-b972-3344891fca47',
    oldId: 319,
    name: 'The Preacher',
    calories: 209,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'The Preacher é um coquetel gostoso. O Amaretto dá uma leve adocicada ao coquetel.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Ginger Ale',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: 'splash',
        ingredientType: 'Amaretto',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Monte o coquetel direto no copo highball com gelo',
      },
      {
        order: 2,
        description: 'Complete com Ginger Ale',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'f66b11e6-9875-427c-af3c-1374fb58fe32',
    oldId: 220,
    name: 'Tnt Cocktail',
    calories: 247,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'O TNT Cocktail faz jus ao seu nome. É um coquetel bem forte, o sabor dominante é o do Brandy e o Absinto aparece suavemente.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Brandy (Conhaque)',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Absinto',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Gotas de Angostura',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Mexa todos os ingredientes em um Mixing glass com gelo',
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
    id: '54e9493a-9f76-479b-83de-7aba1f902ffe',
    oldId: 255,
    name: 'Transparent',
    calories: 278,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Transparent é um shot bem forte e doce. O gosto do Triple sec e da Sambuca se destacam.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Sambuca Branca',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Misture todos os ingredientes em um copo de Shot',
      },
    ],
    categories: ['shot'],
    instructions: [],
  },
  {
    id: 'a4409e08-1158-4e9d-975f-fa9ab43c4501',
    oldId: 470,
    name: 'Twister',
    calories: 192,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Twister é um drinque leve, gostoso e refrescante. O sabor da Vodca praticamente não aparece.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Soda Limonada para completar',
      },
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Suco de 1/2 Limão',
      },
      {
        order: 3,
        quantity: '1/2',
        unitOfMeasurement: null,
        ingredientType: 'Limão cortado em pedaços',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Adicione a vodca e o suco de limão',
      },
      {
        order: 3,
        description: 'Complete com soda limonada e mexa bem',
      },
      {
        order: 1,
        description:
          'Coloque em um copo Highball 1/2 limão cortado em pedaços e gelo',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },

  {
    id: '1806b6d0-224d-4d21-bb54-e2d47ff46d2e',
    oldId: 405,
    name: 'Vampire Lips',
    calories: 211,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Vampire Lips é um coquetel bem alcoólico. Seu sabor é forte e o suco de tomate aparece bastante.',
    decoration: 'Rodela de limão para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Doce',
      },
      {
        order: 4,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Tomate',
      },
      {
        order: 3,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 5,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Suco de meio Limão',
      },
      {
        order: 1,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Passe tudo para um copo Highball ou Old-Fashioned',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '769eb68d-fa20-436c-a0a3-704e37f0486b',
    oldId: 142,
    name: 'Velvet Cooler',
    calories: 185,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'O Velvet Cooler é um coquetel saboroso. O suco de abacaxi pode ser percebido de leve e como o Espumante e a Cerveja são adicionados em quantidades iguais, nenhum dos sabores se destaca.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Espumante gelado',
      },
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Cerveja tipo Lager gelada',
      },
      {
        order: 1,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Abacaxi',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Coloque o suco de Abacaxi em um copo Highball gelado',
      },
      {
        order: 2,
        description: 'Complete com quantidades iguais de Cerveja e Espumante',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'a041157a-6b66-44ff-95fd-eb6aeb3f3cfb',
    oldId: 228,
    name: 'Vermouth Cassis',
    calories: 122,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description:
      'Este coquetel é bem fraco e doce. O sabor do Creme de Cassis de destaca.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Seco',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Água com gás',
      },
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Creme de Cassis',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Complete com Água com gás',
      },
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Highball com gelo',
      },
      {
        order: 3,
        description: 'Mexa bem',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '5fce42ed-855c-43c6-a552-96b423bcab68',
    oldId: 102,
    name: 'Virgin Strawberry Daiquiri',
    calories: 72,
    alcoholicContent: 'ZERO',
    difficulty: 'MEDIUM',
    description:
      'O Virgin Strawberry Daiquiri é um coquetel sem álcool refrescante. O seu sabor se resume a morango, com um toque de limão.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Simple Syrup',
      },
      {
        order: 3,
        quantity: '6-10',
        unitOfMeasurement: null,
        ingredientType: 'Morangos',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para um Cálice de Vinho',
      },
      {
        order: 1,
        description:
          'Bata todos os ingredientes no liquidificador com 1 ou 2 pás de gelo até adquirir uma textura cremosa',
      },
    ],
    categories: ['semalcool'],
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
    id: 'a06edea9-457c-4e05-a6bc-e3c27ab36837',
    oldId: 456,
    name: 'Vodca & Tonic',
    calories: 168,
    alcoholicContent: 'LOW',
    difficulty: 'EASY',
    description: 'O Vodca & Tonic é um coquetel suave e bem refrescante.',
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Água Tônica',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Coloque a vodca em um copo Highball com gelo',
      },
      {
        order: 3,
        description: 'Mexa bem',
      },
      {
        order: 2,
        description: 'Complete com água tônica',
      },
    ],
    categories: ['tropicais'],
    instructions: [],
  },
  {
    id: '86d78a89-27ea-4dd4-ac74-a6f27fc22e0f',
    oldId: 180,
    name: 'Vodca Martini',
    calories: 167,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'Esta variação do Martini é conhecida mundialmente por ser o coquetel preferido do personagem James Bond. O sabor da vodca se destaca bastante.',
    decoration: 'Azeitona para decorar (opcional)',
    ingredients: [
      {
        order: 1,
        quantity: '52',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vermouth Seco',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Mexa todos os ingredientes em um Mixing glass com gelo',
      },
    ],
    categories: ['martinis'],
    instructions: [],
  },
  {
    id: '05fc2f1f-56ae-427a-8123-425601e457a1',
    oldId: 126,
    name: 'Vodca Valentino',
    calories: 204,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'O Vodca Valentino é um coquetel com um teor alcoólico bem alto. Seu sabor é amargo e o Campari se destaca.',
    decoration: 'Twist de Laranja para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Campari',
      },
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
        ingredientType: 'Vermouth Doce',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Adicione o twist de laranja',
      },
      {
        order: 1,
        description: 'Mexa todos os ingredientes em um Mixing glass com gelo',
      },
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
    ],
    categories: [],
    instructions: [
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
    id: 'de43484e-869b-499d-aea8-e6532861b4b1',
    oldId: 120,
    name: 'Wave',
    calories: 148,
    alcoholicContent: 'LOW',
    difficulty: 'MEDIUM',
    description:
      'O Wave é um coquetel levemente refrescante onde o gosto do Campari é suavizado pelos sucos e pelo gelo.',
    decoration: 'Rodela de laranja ou morango para decorar',
    ingredients: [
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Laranja',
      },
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Campari',
      },
      {
        order: 2,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Morango com polpa',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para um copo Hurricane',
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
    id: '5283405d-d6d2-4ccb-80cd-04fc058b8de7',
    oldId: 149,
    name: 'Whiskey Sour',
    calories: 168,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Whisky Sour é um coquetel forte, porém muito apreciado. Seu sabor de Whiskey e o ácido do limão agrada muitos paladares.',
    decoration: 'Twist de laranja e cereja para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Bourbon (Whiskey)',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: 'colher de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description: 'Bata todos os ingrediente em uma coqueteleira com gelo',
      },
      {
        order: 2,
        description: 'Passe tudo para um copo On The Rocks',
      },
    ],
    categories: ['classicos'],
    instructions: [
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
    id: 'bbf93d1e-05c0-4a85-b62b-686abbeb9b0f',
    oldId: 257,
    name: 'White Lady',
    calories: 228,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O White Lady é um coquetel forte. O sabor do Gin se destaca junto com o limão.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Gin',
      },
      {
        order: 2,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
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
        description: 'Coe para uma taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'd9f0ae69-2ea5-465b-b98e-da389aea0139',
    oldId: 186,
    name: 'White Russian',
    calories: 244,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O White Russian é um coquetel cremoso. Possui um gosto de leite, com leve toque de amêndoas. O sabor faz jus a sua beleza.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Half and Half',
      },
      {
        order: 1,
        quantity: '52',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 2,
        quantity: '22',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Café',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Mexa bem',
      },
      {
        order: 2,
        description: 'Adicione o Half and Half',
      },
      {
        order: 1,
        description:
          'Coloque a Vodca e o Licor de Café em um copo Old-fashioned com gelo',
      },
    ],
    categories: [],
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
  {
    id: 'ba30723b-ba72-4d66-9081-d506886d4ff7',
    oldId: 97,
    name: 'Wild Love',
    calories: 292,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'O Wild Love é um coquetel refrescante. Seu sabor é forte e o gosto da Tequila se destaca com o licor de morango e o suco de limão.',
    decoration: 'Morango para decorar',
    ingredients: [
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
      {
        order: 3,
        quantity: '45',
        unitOfMeasurement: 'ml',
        ingredientType: 'Licor de Morango',
      },
      {
        order: 5,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Suco de Laranja para completar',
      },
      {
        order: 4,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Suco de Limão',
      },
      {
        order: 1,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Tequila Prata',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Decore com o morango',
      },
      {
        order: 1,
        description: 'Monte o coquetel direto no copo Highball com gelo',
      },
      {
        order: 2,
        description: 'Complete com o Suco de Laranja',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: '349c3371-47b7-4cab-b3be-466b17f2cd6e',
    oldId: 125,
    name: 'Windex',
    calories: 247,
    alcoholicContent: 'HIGH',
    difficulty: 'MEDIUM',
    description:
      'O Windex é um coquetel doce e ao mesmo tempo forte devido ao alto teor alcoólico. O gosto do Triple Sec se destaca bastante.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Vodca',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Curaçau Blue',
      },
      {
        order: 3,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para uma Taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Mexa todos os ingredientes em um Mixing glass com gelo.',
      },
    ],
    categories: [],
    instructions: [],
  },
  {
    id: 'ed17af44-b937-45e2-83ee-17a8f5ff4d39',
    oldId: 158,
    name: 'X Y Z',
    calories: 91,
    alcoholicContent: 'HIGH',
    difficulty: 'EASY',
    description:
      'O Xyz é um coquetel aperitivo muito elegante. Seu sabor é forte e bem ácido.',
    decoration: 'Rodela de Limão para decorar',
    ingredients: [
      {
        order: 1,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Rum Branco',
      },
      {
        order: 2,
        quantity: '15',
        unitOfMeasurement: 'ml',
        ingredientType: 'Triple Sec (Licor de laranja)',
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
        description: 'Coe para uma taça de Coquetel gelada',
      },
      {
        order: 1,
        description: 'Bata todos os ingredientes em uma coqueteleira com gelo',
      },
    ],
    categories: ['classicos'],
    instructions: [],
  },
  {
    id: '87549cfd-4373-4d20-9bcf-de84a98cdd9c',
    oldId: 354,
    name: 'Yellow Fusion',
    calories: 227,
    alcoholicContent: 'ZERO',
    difficulty: 'EASY',
    description:
      'O Yellow Fusion possui cálcio, ferro e potássio. É rico em vitaminas A e C.',
    decoration: null,
    ingredients: [
      {
        order: 5,
        quantity: '30',
        unitOfMeasurement: 'ml',
        ingredientType: 'Água',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Limão',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: 'fatia',
        ingredientType: 'grossa de Abacaxi',
      },
      {
        order: 1,
        quantity: '1',
        unitOfMeasurement: 'fatia',
        ingredientType: 'grossa de Melão',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Coe para um copo Collins',
      },
      {
        order: 1,
        description:
          'Bata todos os ingredientes no liquidificador com uma ou duas pás de gelo até adquirir uma textura cremosa',
      },
    ],
    categories: ['smoothies'],
    instructions: [],
  },

  {
    id: '8171160d-e870-4f84-b0eb-f7f82ffa7e17',
    oldId: 192,
    name: 'Abacaxi',
    calories: 282,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description: null,
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Folhas de Hortelã (opcional)',
      },
      {
        order: 3,
        quantity: '2',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Pedaços de Abacaxi',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Macere o abacaxi com açúcar em um copo Double Old-fashioned',
      },
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
      {
        order: 3,
        description: 'Adicione a Cachaça e mexa bem',
      },
    ],
    categories: ['caipirinhas'],
    instructions: [],
  },
  {
    id: '9d1fc6be-9816-47a9-80e2-bda4b168608c',
    oldId: 373,
    name: 'Abacaxi, Carambola E Picolé De Abacaxi',
    calories: 325,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description: null,
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: '2',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 5,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Abacaxi',
      },
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Pedaços de Abacaxi',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Pedaços de Carambola',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
      {
        order: 3,
        description: 'Adicione a Cachaça e mexa bem',
      },
      {
        order: 4,
        description: 'Coloque o picolé por último',
      },
      {
        order: 1,
        description:
          'Macere o abacaxi e a carambola com açúcar em um copo Double Old-fashioned',
      },
    ],
    categories: ['scaipirinhas'],
    instructions: [],
  },
  {
    id: '08b2c0a2-df15-4f74-862c-72fda8aba70c',
    oldId: 375,
    name: 'Abacaxi, Hortelã E Picolé De Tangerina',
    calories: 308,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description: null,
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
      {
        order: 4,
        quantity: '2',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Folhas de Hortelã',
      },
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Pedaços de Abacaxi',
      },
      {
        order: 5,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Tangerina',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Adicione a Cachaça e mexa bem',
      },
      {
        order: 1,
        description:
          'Macere o abacaxi e a hortelã com  açúcar em um copo Double Old-fashioned',
      },
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
      {
        order: 4,
        description: 'Coloque o picolé por último',
      },
    ],
    categories: ['scaipirinhas'],
    instructions: [],
  },
  {
    id: 'e675012d-9419-4ab8-8e57-0f04aa2cd6a5',
    oldId: 446,
    name: 'Amora, Framboesa E Picolé De Morango',
    calories: 358,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'A Cachaça pode ser substituída por qualquer outro destilado. Vodca e Saquê são ótimas opções por serem destilados com sabor mais suave.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 5,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Morango',
      },
      {
        order: 2,
        quantity: '10',
        unitOfMeasurement: null,
        ingredientType: 'Amoras',
      },
      {
        order: 3,
        quantity: '10',
        unitOfMeasurement: null,
        ingredientType: 'Framboesas',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
    ],
    preparationSteps: [
      {
        order: 4,
        description: 'Coloque o picolé por último',
      },
      {
        order: 3,
        description: 'Adicione a Cachaça e mexa bem',
      },
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
      {
        order: 1,
        description:
          'Macere as Amoras e as Framboesas com açúcar em um copo Double Old-fashioned',
      },
    ],
    categories: ['scaipirinhas'],
    instructions: [],
  },
  {
    id: 'c4abb649-cf9c-4702-8601-7f44d795690f',
    oldId: 444,
    name: 'Banana E Picolé De Côco',
    calories: 380,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'A Cachaça pode ser substituída por qualquer outro destilado. Vodca e Saquê são ótimas opções por serem destilados com sabor mais suave.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Côco',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Banana cortada em pedaços',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
      {
        order: 3,
        quantity: '2',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
    ],
    preparationSteps: [
      {
        order: 4,
        description: 'Coloque o picolé por último',
      },
      {
        order: 3,
        description: 'Adicione a Cachaça e mexa bem',
      },
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
      {
        order: 1,
        description:
          'Macere a Banana com açúcar em um copo Double Old-fashioned',
      },
    ],
    categories: ['scaipirinhas'],
    instructions: [],
  },
  {
    id: '81b75995-480d-48de-89e8-ed28521d4385',
    oldId: 448,
    name: 'Blueberry, Framboesa, Morango E Picolé De Amora',
    calories: 331,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'A Cachaça pode ser substituída por qualquer outro destilado. Vodca e Saquê são ótimas opções por serem destilados com sabor mais suave.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: '4',
        unitOfMeasurement: null,
        ingredientType: 'Morangos cortados em pedaços',
      },
      {
        order: 6,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Amora',
      },
      {
        order: 2,
        quantity: '2',
        unitOfMeasurement: 'colheres',
        ingredientType: 'Blueberry (Mirtilo)',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
      {
        order: 5,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 3,
        quantity: '6',
        unitOfMeasurement: null,
        ingredientType: 'Framboesas',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Adicione a Cachaça e mexa bem',
      },
      {
        order: 4,
        description: 'Coloque o picolé por último',
      },
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
      {
        order: 1,
        description:
          'Macere os Blueberrys, as Framboesas e os Morangos com açúcar em um copo Double Old-fashioned',
      },
    ],
    categories: ['scaipirinhas'],
    instructions: [],
  },
  {
    id: '9fdb41a2-3fe6-4fd8-a133-2831e70d3e3f',
    oldId: 449,
    name: 'Blueberry, Lichia E Picolé De Morango',
    calories: 318,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'A Cachaça pode ser substituída por qualquer outro destilado. Vodca e Saquê são ótimas opções por serem destilados com sabor mais suave.',
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
      {
        order: 3,
        quantity: '4',
        unitOfMeasurement: null,
        ingredientType: 'Lichias',
      },
      {
        order: 5,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Morango',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 2,
        quantity: '4',
        unitOfMeasurement: 'colheres',
        ingredientType: 'Blueberry (Mirtilo)',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
      {
        order: 4,
        description: 'Coloque o picolé por último',
      },
      {
        order: 3,
        description: 'Adicione a Cachaça e mexa bem',
      },
      {
        order: 1,
        description:
          'Macere os Blueberrys e as Lichias com açúcar em um copo Double Old-fashioned',
      },
    ],
    categories: ['scaipirinhas'],
    instructions: [],
  },
  {
    id: '07f395e0-b20f-4ec6-b466-a87bdf8ff970',
    oldId: 441,
    name: 'Caju, Limão Galego E Picolé De Cupuaçu',
    calories: 305,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'A Cachaça pode ser substituída por qualquer outro destilado. Vodca e Saquê são ótimas opções por serem destilados com sabor mais suave.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 3,
        quantity: '2',
        unitOfMeasurement: null,
        ingredientType: 'Limões Galego cortados em cubos',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Caju pequeno cortado em cubos',
      },
      {
        order: 5,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Cupuaçu',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
      {
        order: 1,
        description:
          'Macere o Caju e os Limões com açúcar em um copo Double Old-fashioned',
      },
      {
        order: 3,
        description: 'Adicione a Cachaça e mexa bem',
      },
      {
        order: 4,
        description: 'Coloque o picolé por último',
      },
    ],
    categories: ['scaipirinhas'],
    instructions: [],
  },
  {
    id: '417b7b1e-fd0d-49d7-abac-c1f60b2119c9',
    oldId: 188,
    name: 'Carambola',
    calories: 279,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description: null,
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '2',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Carambola cortada',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Macere a carambola com o açúcar em um copo Double Old-fashioned',
      },
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
      {
        order: 3,
        description: 'Adiciona a Cachaça e mexa bem',
      },
    ],
    categories: ['caipirinhas'],
    instructions: [],
  },
  {
    id: 'd26f94fa-ebf2-44ea-8fb4-c0866998e54c',
    oldId: 189,
    name: 'Carambola, Manga E Maracujá',
    calories: 331,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description: null,
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
      {
        order: 2,
        quantity: '1/3',
        unitOfMeasurement: null,
        ingredientType: 'Carambola cortada',
      },
      {
        order: 3,
        quantity: '1/2',
        unitOfMeasurement: null,
        ingredientType: 'polpa de Maracujá',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Alguns pedaços de Manga',
      },
      {
        order: 5,
        quantity: '2',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Macere as frutas com açúcar em um copo Double Old-fashioned',
      },
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
      {
        order: 3,
        description: 'Adiciona a Cachaça e mexa bem',
      },
    ],
    categories: ['caipirinhas'],
    instructions: [],
  },
  {
    id: 'c6a9ed4e-d894-4962-b903-485affda3f3e',
    oldId: 191,
    name: 'Goiaba E Melão',
    calories: 270,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description: null,
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Pedaços de Melão',
      },
      {
        order: 4,
        quantity: '2',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 2,
        quantity: '1/2',
        unitOfMeasurement: null,
        ingredientType: 'Goiaba',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Adicione a Cachaça e mexa bem',
      },
      {
        order: 1,
        description:
          'Macere as frutas com açúcar em um copo Double Old-fashioned',
      },
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
    ],
    categories: ['caipirinhas'],
    instructions: [],
  },
  {
    id: 'f4387080-1272-4db8-bc34-db6c7bbf170b',
    oldId: 187,
    name: 'Kiwi',
    calories: 285,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description: null,
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '2',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Kiwi (picado e sem casca)',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
      {
        order: 1,
        description: 'Macere o kiwi com açúcar em um copo Double Old-fashioned',
      },
      {
        order: 3,
        description: 'Adicione a Cachaça e mexa bem',
      },
    ],
    categories: ['caipirinhas'],
    instructions: [],
  },
  {
    id: '0060620a-ae40-4288-90d5-e63a24f80c5b',
    oldId: 190,
    name: 'Kiwi E Maracujá',
    calories: 276,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description: null,
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
      {
        order: 2,
        quantity: '1/2',
        unitOfMeasurement: null,
        ingredientType: 'Kiwi',
      },
      {
        order: 4,
        quantity: '2',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 3,
        quantity: '1/2',
        unitOfMeasurement: null,
        ingredientType: 'polpa de Maracujá',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Adicione a Cachaça e mexa bem',
      },
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
      {
        order: 1,
        description:
          'Macere as frutas com açúcar em um copo Double Old-fashioned',
      },
    ],
    categories: ['caipirinhas'],
    instructions: [],
  },
  {
    id: '626ef002-0ba7-4c34-96cf-da1397ff6b13',
    oldId: 372,
    name: 'Kiwi E Picolé De Limão',
    calories: 320,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description: null,
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Kiwi em pedaços',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Limão',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
      {
        order: 3,
        quantity: '2',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
      {
        order: 3,
        description: 'Adicione a Cachaça e mexa bem',
      },
      {
        order: 4,
        description: 'Coloque o picolé por último',
      },
      {
        order: 1,
        description: 'Macere o kiwi com açúcar em um copo Double Old-fashioned',
      },
    ],
    categories: ['scaipirinhas'],
    instructions: [],
  },
  {
    id: '6b251451-854a-408c-b5d0-5ad2247fc68a',
    oldId: 193,
    name: 'Lima',
    calories: 264,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description: null,
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
      {
        order: 3,
        quantity: '2',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Lima',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
      {
        order: 1,
        description: 'Macere a lima com açúcar em um copo Double Old-fashioned',
      },
      {
        order: 3,
        description: 'Adicione a Cachaça e mexa bem',
      },
    ],
    categories: ['caipirinhas'],
    instructions: [],
  },
  {
    id: 'bebe23e6-a664-4477-af96-ea312b56d0a8',
    oldId: 447,
    name: 'Lima Da Pérsia, Manga, Pimenta Dedo-De-Moça E Picolé De Manga',
    calories: 335,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'A Cachaça pode ser substituída por qualquer outro destilado. Vodca e Saquê são ótimas opções por serem destilados com sabor mais suave.',
    decoration: null,
    ingredients: [
      {
        order: 6,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Manga',
      },
      {
        order: 3,
        quantity: '6',
        unitOfMeasurement: 'cubos médios',
        ingredientType: 'Manga',
      },
      {
        order: 4,
        quantity: '3',
        unitOfMeasurement: 'fatias',
        ingredientType: 'Pimenta Dedo-de-moça sem sementes',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
      {
        order: 5,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 2,
        quantity: '1/2',
        unitOfMeasurement: null,
        ingredientType: 'Lima da Pérsia cortada em cubos',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Adicione a Cachaça e mexa bem',
      },
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
      {
        order: 4,
        description: 'Coloque o picolé por último',
      },
      {
        order: 1,
        description:
          'Macere a Lima, a Manga e a Pimenta com açúcar em um copo Double Old-fashioned',
      },
    ],
    categories: ['scaipirinhas'],
    instructions: [],
  },
  {
    id: '4a8ab2ea-873a-4ba8-80cf-6fb30a1dce98',
    oldId: 197,
    name: 'Limão',
    calories: 236,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description: 'Versão original da Caipirinha.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '2',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
      {
        order: 2,
        quantity: '1/2',
        unitOfMeasurement: null,
        ingredientType: 'Limão cortado em quatro partes',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Macere o limão com açúcar em um copo Double Old-Fashioned',
      },
      {
        order: 3,
        description: 'Adicione a Cachaça e mexa bem',
      },
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
    ],
    categories: ['caipirinhas'],
    instructions: [],
  },
  {
    id: '30914696-d119-401f-b0c9-9cf5f79bade0',
    oldId: 320,
    name: 'Melancia',
    calories: 211,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description: null,
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Pedaços de Gengibre (opcional)',
      },
      {
        order: 3,
        quantity: '2',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 2,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Pedaços de Melancia',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
      {
        order: 3,
        description: 'Adicione a Cachaça e mexa bem',
      },
      {
        order: 1,
        description:
          'Macere a melancia e o gengibre com açúcar em um copo Double Old-fashioned',
      },
    ],
    categories: ['caipirinhas'],
    instructions: [],
  },
  {
    id: 'a945ff3b-72d1-475b-b266-62c15882fce8',
    oldId: 442,
    name: 'Melancia, Maracujá E Picolé De Abacaxi',
    calories: 286,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'A Cachaça pode ser substituída por qualquer outro destilado. Vodca e Saquê são ótimas opções por serem destilados com sabor mais suave.',
    decoration: null,
    ingredients: [
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 3,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Maracujá',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
      {
        order: 5,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Abacaxi',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: 'fatia',
        ingredientType: 'Melancia pequena',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
      {
        order: 1,
        description:
          'Macere a Melancia e o Maracujá com açúcar em um copo Double Old-fashioned',
      },
      {
        order: 3,
        description: 'Adicione a Cachaça e mexa bem',
      },
      {
        order: 4,
        description: 'Coloque o picolé por último',
      },
    ],
    categories: ['scaipirinhas'],
    instructions: [],
  },
  {
    id: '771de322-5f7b-4cde-aa33-dfb4fbda7a28',
    oldId: 374,
    name: 'Mexerica, Lima Da Pérsia E Picolé De Maracujá',
    calories: 314,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description: null,
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '4',
        unitOfMeasurement: 'gomos',
        ingredientType: 'Mexerica',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
      {
        order: 5,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Maracujá',
      },
      {
        order: 3,
        quantity: '1/2',
        unitOfMeasurement: null,
        ingredientType: 'Lima da pérsia cortada em 4 partes',
      },
      {
        order: 4,
        quantity: '2',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
      {
        order: 4,
        description: 'Coloque o picolé por último',
      },
      {
        order: 1,
        description:
          'Macere a mexerica e a lima da pérsia com açúcar em um copo Double Old-fashioned',
      },
      {
        order: 3,
        description: 'Adicione a Cachaça e mexa bem',
      },
    ],
    categories: ['scaipirinhas'],
    instructions: [],
  },
  {
    id: '96b952f5-95f7-4822-973f-0e0c8fb4c4e4',
    oldId: 195,
    name: 'Morango',
    calories: 260,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description: null,
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
      {
        order: 3,
        quantity: '2',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 2,
        quantity: '5-6',
        unitOfMeasurement: null,
        ingredientType: 'Morangos',
      },
    ],
    preparationSteps: [
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
      {
        order: 3,
        description: 'Adicione a Cachaça e mexa bem',
      },
      {
        order: 1,
        description:
          'Macere o morango com açúcar em um copo Double Old-fashioned',
      },
    ],
    categories: ['caipirinhas'],
    instructions: [],
  },
  {
    id: '03bf33a0-f598-4421-83f3-dfa0461a14ae',
    oldId: 196,
    name: 'Morango E Melão',
    calories: 263,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description: null,
    decoration: null,
    ingredients: [
      {
        order: 2,
        quantity: '3',
        unitOfMeasurement: null,
        ingredientType: 'Morangos',
      },
      {
        order: 3,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Pedaços de Melão',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
      {
        order: 4,
        quantity: '2',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Macere as frutas com açúcar em um copo Double Old-fashioned',
      },
      {
        order: 3,
        description: 'Adicione a Cachaça e mexa bem',
      },
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
    ],
    categories: ['caipirinhas'],
    instructions: [],
  },
  {
    id: '88cd1ef1-087f-41ad-b4c4-0510422666c6',
    oldId: 198,
    name: 'Morango, Laranja E Abacaxi',
    calories: 300,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description: null,
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '1/2',
        unitOfMeasurement: null,
        ingredientType: 'Laranja',
      },
      {
        order: 5,
        quantity: '2',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 4,
        quantity: null,
        unitOfMeasurement: null,
        ingredientType: 'Pedaços de Abacaxi',
      },
      {
        order: 2,
        quantity: '2',
        unitOfMeasurement: null,
        ingredientType: 'Morangos',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
    ],
    preparationSteps: [
      {
        order: 1,
        description:
          'Macere as frutas com açúcar em um copo Double Old-fashioned',
      },
      {
        order: 3,
        description: 'Adicione a Cachaça e mexa bem',
      },
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
    ],
    categories: ['caipirinhas'],
    instructions: [],
  },
  {
    id: 'ccd3ecf4-7833-4feb-9852-2000536e2df7',
    oldId: 194,
    name: 'Uva E Nectarina',
    calories: 328,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description: null,
    decoration: null,
    ingredients: [
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
      {
        order: 4,
        quantity: '2',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 3,
        quantity: '5',
        unitOfMeasurement: null,
        ingredientType: 'Uvas',
      },
      {
        order: 2,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Nectarina',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Adicione a Cachaça e mexa bem',
      },
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
      {
        order: 1,
        description:
          'Macere as frutas com açúcar em um copo Double Old-fashioned',
      },
    ],
    categories: ['caipirinhas'],
    instructions: [],
  },
  {
    id: '6dc0e190-c352-4ca3-8ccf-f2ee819569f2',
    oldId: 443,
    name: 'Uva Itália, Lichia E Picolé De Uva',
    calories: 358,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'A Cachaça pode ser substituída por qualquer outro destilado. Vodca e Saquê são ótimas opções por serem destilados com sabor mais suave.',
    decoration: null,
    ingredients: [
      {
        order: 3,
        quantity: '4',
        unitOfMeasurement: null,
        ingredientType: 'Lichias',
      },
      {
        order: 5,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Uva',
      },
      {
        order: 2,
        quantity: '6',
        unitOfMeasurement: null,
        ingredientType: 'Uvas Itália',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
    ],
    preparationSteps: [
      {
        order: 3,
        description: 'Adicione a Cachaça e mexa bem',
      },
      {
        order: 1,
        description:
          'Macere as Uvas e as Lichias com açúcar em um copo Double Old-fashioned',
      },
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
      {
        order: 4,
        description: 'Coloque o picolé por último',
      },
    ],
    categories: ['scaipirinhas'],
    instructions: [],
  },
  {
    id: '8c62238d-66ea-4fa8-8cc6-d406cb94a4bc',
    oldId: 445,
    name: 'Uva, Maracujá, Carambola E Picolé De Jabuticaba',
    calories: 327,
    alcoholicContent: 'MEDIUM',
    difficulty: 'EASY',
    description:
      'A Cachaça pode ser substituída por qualquer outro destilado. Vodca e Saquê são ótimas opções por serem destilados com sabor mais suave.',
    decoration: null,
    ingredients: [
      {
        order: 5,
        quantity: '1',
        unitOfMeasurement: 'colheres de bar',
        ingredientType: 'Açúcar',
      },
      {
        order: 4,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'Carambola cortada em pedaços',
      },
      {
        order: 1,
        quantity: '60',
        unitOfMeasurement: 'ml',
        ingredientType: 'Cachaça',
      },
      {
        order: 6,
        quantity: '1',
        unitOfMeasurement: null,
        ingredientType: 'picolé de Jabuticaba',
      },
      {
        order: 2,
        quantity: '4',
        unitOfMeasurement: null,
        ingredientType: 'Uvas',
      },
      {
        order: 3,
        quantity: '1/2',
        unitOfMeasurement: null,
        ingredientType: 'Maracujá',
      },
    ],
    preparationSteps: [
      {
        order: 4,
        description: 'Coloque o picolé por último',
      },
      {
        order: 1,
        description:
          'Macere as Uvas, o Maracujá e a Carambola com açúcar em um copo Double Old-fashioned',
      },
      {
        order: 2,
        description: 'Encha-o de gelo',
      },
      {
        order: 3,
        description: 'Adicione a Cachaça e mexa bem',
      },
    ],
    categories: ['scaipirinhas'],
    instructions: [],
  },
];
