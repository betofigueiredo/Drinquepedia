const { objectType } = require('@nexus/schema');

const Ingrediente = objectType({
    name: 'Ingrediente',
    definition(t) {
        t.model.id();
        t.model.ordem();
        t.model.quantidade();
        t.int('quantidadeOz', (o) => o.quantidade / 30);
        t.model.medida();
        t.model.drinqueId();
        t.model.tipoIngredienteid();
        t.model.tipoIngrediente();
    },
});

const TipoIngrediente = objectType({
    name: 'TipoIngrediente',
    definition(t) {
        t.model.id();
        t.model.nome();
    },
});

module.exports = {
    Ingrediente,
    TipoIngrediente,
};
