// const getAgePlugin = require('get-age');

export const getAge = (birthday: string) => {
    return new Date().getFullYear() - new Date(birthday).getFullYear();
}