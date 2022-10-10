CREATE DATABASE crudexample;

USE crudexample;

CREATE TABLE pokemons(
    id_pokemon INT(6) NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    type VARCHAR(40) NOT NULL,
    gen VARCHAR(40) NOT NULL,
    primary key(id_pokemon)
);

INSERT INTO pokemons (id_pokemon, name, type, gen) VALUES ('1', 'Pikachu', 'Electric', '1');

