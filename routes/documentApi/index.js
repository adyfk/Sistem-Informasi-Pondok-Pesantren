/* eslint-disable no-path-concat */
import express from 'express'
// import models from '../../models'
// import { ReqException, checkErrorRequest } from '../../utils/exception'
import auth from '../../middleware/auth'
import { ReqException } from '../../utils/exception'
// import path from 'path'
import fs from 'fs'

const router = express.Router()

router.post('/upload', auth, async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      throw new ReqException({ status: 400, message: 'No files were uploaded.' })
    }

    const { file } = req.files
    const {
      name,
      type
    } = req.body

    if (!file.name.match(/(.pdf|.PDF)$/g)) { throw new ReqException({ status: 401, message: 'Exstensi file harus PDF' }) }

    const fileName = `${type + '-' + name.replace(/ /g, '') + '-' + new Date().getTime()}.pdf`

    file.mv(`./private/document/${fileName}`, function (err) {
      if (err) {
        console.log(err)
        throw new ReqException({ status: 500 })
      }

      res
        .status(201)
        .send({
          data: {
            fileName
          },
          message: 'Sukses upload file.'
        })
    })
  } catch (err) {
    res
      .status(err?.status || '500')
      .json({
        data: {},
        message: err?.message || 'Gagal upload file.'
      })
  }
})
router.get('/:fileName', auth, async (req, res) => {
  try {
    const splitName = req.params.fileName.split('-')
    console.log('woi read herer =', splitName)
    const customFileName = (splitName[1] + ' ' + splitName[0] + ' ' + splitName[2] + ' ' + splitName[3]).caplitalize()
    console.log('woi read herer =', customFileName)
    const locationFile = `./private/document/${req.params.fileName}`
    res
      .download(locationFile, customFileName)
  } catch (err) {
    res
      .status(err?.status || '500')
      .json({
        data: {},
        message: err?.message || 'Gagal upload file.'
      })
  }
})
router.delete('/:fileName', auth, async (req, res) => {
  const pathToFile = 'your-file.png'

  try {
    fs.unlinkSync(pathToFile)
    console.log('Successfully deleted the file.')
  } catch (err) {
    res
      .status(err?.status || '500')
      .json({
        data: {},
        message: err?.message || 'Gagal upload file.'
      })
  }
})

export default router
