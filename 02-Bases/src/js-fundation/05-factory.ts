import { UUID } from "crypto";

interface BuildMakerPerson {
    getId: () => string;
    getAge(birthday: string): () => number;
}

interface PersonProps {
    name: string;
    birthday: string;
}

const buildMakePerson = ({ getId, getAge }: BuildMakerPerson) => {
    return ({ name, birthday }: PersonProps) => {
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