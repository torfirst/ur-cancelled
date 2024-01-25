const User = require('./User');
const Event = require('./Events');

User.hasMany(Event, {
  foreignKey: 'user_id_1',
  onDelete: 'CASCADE',
});

User.hasMany(Event, {
  foreignKey: 'user_id_2',
  onDelete: 'CASCADE',
});

Event.belongsTo(User, {
  foreignKey: 'user_id_1',
});

Event.belongsTo(User, {
  foreignKey: 'user_id_2',
});

module.exports = { User, Event };
