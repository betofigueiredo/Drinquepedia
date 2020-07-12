const { objectType } = require('@nexus/schema');

const Drinque = objectType({
	name: 'Drinque',
	definition(t) {
		t.model.id();
		t.model.nome();
		t.model.imagem();
		t.model.categorias();
		t.model.ingredientes();
		// t.model.preparo()
		t.model.calorias();
		t.model.teorAlcoolico();
		t.model.dificuldade();
		t.model.sobre();
		t.model.dicas();
	},
});

module.exports = Drinque;
