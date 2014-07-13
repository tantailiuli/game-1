module.exports = {
  default: {
    money: 0.00,
    moneyArt: 0.00,
    hp: 30,
    capacity: 30,
    strength: 3,
    dexterity: 3,
    intuition: 3,
    health: 3,
    swords: 0,
    axes: 0,
    knives: 0,
    clubs: 0,
    shields: 0,
    numberOfAbilities: 0,
    numberOfParameters: 0,
    strikeCount: 1,
    blockCount: 2
  },
  features: [
    'strength', 'dexterity', 'intuition', 'health',
    'swords', 'axes', 'knives', 'clubs', 'shields',

    'protectionHead', 'protectionBreast', 'protectionBelly',
    'protectionGroin', 'protectionLegs',

    'damageMin','damageMax',
    'accuracy', 'dodge', 'devastate', 'durability',
    'blockBreak', 'armorBreak',
    'hp',
    'capacity',

    'strikeCount',
    'blockCount'
  ]
};
