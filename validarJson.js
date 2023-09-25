const fs = require('fs');
const { Validator } = require('jsonschema');

const validator = new Validator();
const jsonData = JSON.parse(fs.readFileSync('banda.json', 'utf8'));
const schemaData = JSON.parse(fs.readFileSync('banda.schema.json', 'utf8'));

const validationResult = validator.validate(jsonData, schemaData);

if (validationResult.errors.length === 0) {
    console.log('El JSON es válido según el esquema.');
} else {
    console.error('El JSON no cumple con el esquema. Errores:');
    console.error(validationResult.errors);
}