const Cource = require('../models/cources');
const addCources = async (id, cources) => {
    await cources.map(cour => {
        (async () => {
           const cource = await Cource.findOneAndUpdate({ courceName: cour }, { $push: { student: id } });
        })()
    })
}

module.exports = addCources;