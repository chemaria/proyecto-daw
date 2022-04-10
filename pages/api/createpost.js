import multer from 'multer'

export const config = {
  api: { bodyParser: false },
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img/post')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})
const upload = multer({
  storage,
  limits: { fileSize: 1000000 },
})

const sendPostData = async ({ description, tittle, visible, img }) => {
  const response = await fetch(process.env.URLAPI + '/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      description,
      tittle,
      visible,
      img,
    }),
  })
  return response
}
export default function handler(req, res) {
  upload.single('imageBlomali')(req, {}, (err) => {
    if (err) {
      res.status(500).send('fail')
    } else {
      const parseImgUrl = req.file.destination.slice(6)
      const response = sendPostData({
        description: req.body.description,
        tittle: req.body.tittle,
        visible: req.body.visible,
        img: process.env.URLAPP + parseImgUrl + '/' + req.file.originalname,
      })
      if (response.status === 200) res.status(201).send('OK')
    }
  })
}
