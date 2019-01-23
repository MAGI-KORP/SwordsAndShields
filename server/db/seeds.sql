use swords_and_shields_db;

delete from characters;

INSERT INTO characters (name, attack, defense, hp, wins, losses, taunt)
VALUES
(
    "Xena, Warrior Princess",
    10,
    4,
    50,
    15,
    3,
    "I'll fight ya!"
),
(
    "Hercules of the Legendary Journeys",
    15,
    2,
    30,
    17,
    10,
    "Lightning Bolt!"
),
(
    "Beowulf",
    10,
    4,
    50,
    15,
    8,
    "For the Geets!"
),
(
    "Batman",
    15,
    2,
    30,
    18,
    2,
    "To the Bat Cave!"
),
(
    "The Joker",
    10,
    4,
    50,
    10,
    16,
    null
)
