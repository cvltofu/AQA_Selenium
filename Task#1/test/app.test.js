import { expect } from 'chai';
import {
    regularUsersJson,
    adminUsersJson,
    regularUsersYaml,
    adminUsersYaml,
} from '../app.js';

function validateData(data, typeOfData) {
    describe('JSON or YAML data of users', () => {
        before(() => {
            console.log(typeOfData);
        });

        it('data should contains array of users', () => {
            for (const key in data) {
                expect(data[key]).to.be.an('object');
                // .that.have.any.keys('id', 'name', 'address');
            }
        });

        it('users must have id, name and may have adress', () => {
            for (const key in data) {
                expect(data[key]).to.have.any.keys('id', 'name', 'address');

                if (
                    data[key].hasOwnProperty('address') &&
                    Object.keys(data[key].address).length !== 0
                ) {
                    expect(data[key].address).to.have.any.keys(
                        'city',
                        'street',
                        'building'
                    );
                }
            }
        });
    });
}

function validateJsonYaml(dataJson, dataYaml) {
    describe('Comparison of JSON and YAML', () => {
        it('all users listed in JSON are included in YAML', () => {
            const validation = [];

            for (const keyJson in dataJson) {
                for (const keyYaml in dataYaml) {
                    if (dataJson[keyJson].id === dataYaml[keyYaml].id) {
                        validation[keyJson] = true;
                        continue;
                    }
                }

                expect(validation[keyJson]).to.be.true;
            }
        });
    });
}

validateData(regularUsersJson, 'json');

validateData(adminUsersJson, 'json');

validateData(regularUsersYaml, 'yaml');

validateData(adminUsersYaml, 'yaml');

validateJsonYaml(adminUsersJson, adminUsersYaml);