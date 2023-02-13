import fs from 'fs';
import yaml from 'js-yaml';

const regularUsersJson = JSON.parse(
    fs.readFileSync('data/regular_users.json', 'utf8')
);
const regularUsersYaml = yaml.load(
    fs.readFileSync('data/regular_users.yaml', 'utf8')
);
const adminUsersJson = JSON.parse(
    fs.readFileSync('data/admin_users.json', 'utf8')
);
const adminUsersYaml = yaml.load(
    fs.readFileSync('data/admin_users.yaml', 'utf8')
);

export { regularUsersJson, regularUsersYaml, adminUsersJson, adminUsersYaml };
