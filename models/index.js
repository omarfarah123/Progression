const User = require('./User');
const Course = require('./Course');
const Lecture = require('./Lecture');
const Document = require('./Document')
const Brick = require('./Brick');

User.hasMany(Course, {
  foreignKey: 'user_id',
});

Course.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Brick, {
  forgienKey: 'user_id',
  onDelete: 'CASCADE'
})

Brick.belongsTo(User, {
  forgienKey: 'user_id'
})

User.hasMany(Lecture, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
User.hasMany(Document, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})
Course.hasMany(Lecture, {
    foreignKey: 'course_id',
    onDelete: 'CASCADE'
  });
Course.hasMany(Document, {
  foreignKey: 'course_id',
  onDelete: 'CASCADE'
})
Lecture.belongsTo(User, {
    foreignKey: 'user_id'
});
Lecture.belongsTo(Course, {
    foreignKey: 'course_id'
});
Document.belongsTo(User, {
  forgienKey: 'user_id',
  onDelete: 'CASCADE'
});
Document.belongsTo(Course, {
  forgienKey: 'course_id',
  onDelete: 'CASCADE'
});
module.exports = { User, Course, Lecture, Document, Brick };