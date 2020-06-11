import models from '../../models'

export function getStudentByUserId ({ userId }) {
  return models.students.findOne({
    where: {
      userId
    },
    include: ['StudentDocument']
  })
}
