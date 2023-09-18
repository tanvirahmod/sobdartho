const knex = require("./knex");

// Functions for English to Bengali -----------------------------------------------
function createWord(word) {
    return knex("eng2bn").insert(word);
}

function getAllWords() {
    return knex("eng2bn").select("*");
}

function getOne(input) {
    return knex("en2bn").where("word", input).first();
}

function deleteWord(id) {
    return knex("eng2bn").where("id", id).del();
}

function updateWord(id,word) {
    return knex("eng2bn").where("id", id).update(word);
}




// Functions for Bengali to Bengali -------------------------------------------
function getAllB2B() {
    return knex("bn2bn").select("*");
}

function getOneB2B(input) {
    return knex("bn2bn").where("word", input).first();
    // return knex("bn2bn").where("bn_word", 'like', `%${input}%`).select("*");
}


// function getOneB2BContains(input) {
//     // return knex("bn2bn").where("bn_word", input).first();
//     return knex("bn2bn").where("bn_word", 'like', `%${input}%`).select("*");
// }



// Functions for Bengali to English -------------------------------------------
function getAllB2E() {
    return knex("bn2en").select("*");
}

function getOneB2E(input) {
    return knex("bn2en").where("word", input).first();
    // return knex("bn2bn").where("bn_word", 'like', `%${input}%`).select("*");
}

module.exports = {
    // for english to bengali
    createWord,
    getAllWords,
    getOne,
    deleteWord,
    updateWord,
    // for bengali to bengali
    getAllB2B,
    getOneB2B,
    // getOneB2BContains
    // Bengali to English
    getAllB2E,
    getOneB2E
}