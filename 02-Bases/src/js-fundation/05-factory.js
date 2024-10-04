
const buildMakePerson = ({ getId, getAge }) => {
    return ({ name, birthday }) => {
        return {
            id: getId(),
            name, //puede ser también name: name
            birthday,
            age: getAge(birthday)
        }
    }
}

module.exports = {
    buildMakePerson,
}