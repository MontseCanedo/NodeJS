
//console.log(process.env);

const {USERDOMAIN, HOMEPATH, npm_lifecycle_script} = process.env;

// console.table({USERDOMAIN, HOMEPATH, npm_lifecycle_script});

const characters = ['Flash', 'Superman', 'Green Lantern', 'Batman'];
const [ , , ,batman] = characters;
console.log(batman);
