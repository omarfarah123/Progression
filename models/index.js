const User = require('./User');
const Course = require('./Course');
const Lecture = require('./Lecture');

User.hasMany(Course, {
  foreignKey: 'user_id',
});

Course.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Lecture, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Course.hasMany(Lecture, {
    foreignKey: 'course_id',
    onDelete: 'CASCADE'
  });

Lecture.belongsTo(User, {
    foreignKey: 'user_id'
  });

  Lecture.belongsTo(Course, {
    foreignKey: 'course_id'
  });
module.exports = { User, Course, Lecture };