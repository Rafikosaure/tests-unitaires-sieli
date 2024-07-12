const { experiment } = require('./experiment.js')

test('log an answer that say tests are successful', () => {
    expect(experiment()).toBe("Les tests fonctionnent, tout est correct !")
})