const  readdirSync =    require('fs');
const  basename, join = require('path');

const models = [];

const fileNames = readdirSync(__dirname).filter(
  (file) =>
    file.indexOf('.') !== 0 &&
    file !== basename(__filename) &&
    file.slice(-3) === '.js'
);

fileNames.forEach((file) => {
  const model = require(join(__dirname, file));

  models.push(model.default);
});

console.info(`Successfully imported models: ${fileNames.join(', ')}`);

module.exports =  models;
