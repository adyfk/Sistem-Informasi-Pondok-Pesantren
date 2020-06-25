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
      throw new ReqException({ status: 400, message: 'Tidak ada dokumen yang diupload' })
    }

    const { file } = req.files
    const {
      name
    } = req.body

    if (!file.name.match(/(.pdf|.PDF)$/g)) { throw new ReqException({ status: 401, message: 'Exstensi dokumen harus PDF' }) }

    const fileName = `${'student_document-' + name.replace(/ /g, '') + '-' + new Date().getTime()}.pdf`

    file.mv(`./private/files/${fileName}`, function (err) {
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
          message: 'Berhasil mengunggah dokumen!'
        })
    })
  } catch (err) {
    res
      .status(err?.status || '500')
      .json({
        data: {},
        message: err?.message || 'Gagal mengunggah dokumen!'
      })
  }
})
router.get('/:fileName', auth, async (req, res) => {
  try {
    const locationFile = `./private/files/${req.params.fileName}`
    res
      .download(locationFile)
  } catch (err) {
    res
      .status(err?.status || '500')
      .json({
        data: {},
        message: err?.message || 'Gagal mengambil dokumen!'
      })
  }
})
router.delete('/:fileName', auth, async (req, res) => {
  const pathToFile = 'your-file.png'

  try {
    fs.unlinkSync(pathToFile)
    console.log('Berhasil menghapus dokumen!')
  } catch (err) {
    res
      .status(err?.status || '500')
      .json({
        data: {},
        message: err?.message || 'Gagal menghapus dokumen!'
      })
  }
})

export default router
