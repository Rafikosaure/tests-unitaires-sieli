const { groupBy } = require('./groupBy.js')

const furnitures = [
    { article: "matelas", type: "literie"},
    { article: "bureau", type: "meuble"},
    { article: "sommier", type: "literie"},
    { article: "armoire", type: "meuble"}
]

test('order the items by type', () => {
    expect(groupBy(furnitures)).toStrictEqual(
        {
            literie: [
              { article: 'matelas', type: 'literie' },
              { article: 'sommier', type: 'literie' }
            ],
            meuble: [
              { article: 'bureau', type: 'meuble' },
              { article: 'armoire', type: 'meuble' }
            ]
        }
    )
})