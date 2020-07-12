const { objectType } = require('@nexus/schema');

const Categoria = objectType({
	name: 'Categoria',
	definition(t) {
		t.model.id();
		t.model.nome();
	},
});

module.exports = Categoria;
