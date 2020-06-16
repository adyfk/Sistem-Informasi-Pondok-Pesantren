import models from '../../models'

export function getStudentByUserId ({ userId }) {
  return models.Student.findOne({
    attributes: ['name'],
    where: {
      userId
    },
    include: [{
      model: models.StudentDocuments,
      attributes: ['photo']
    }]
  })
}
export function getBoardByUserId ({ userId }) {
  return models.Board.findOne({
    attributes: ['name'],
    where: {
      userId
    },
    include: [{
      model: models.BoardDocument,
      attributes: ['photo']
    }]
  })
}
