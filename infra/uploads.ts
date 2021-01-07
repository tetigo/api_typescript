import multer from 'multer'

const getUUID = () => {
    const today = new Date()
    return  '' + 
            today.getFullYear() + 
            today.getMonth() + 
            today.getDate() + 
            today.getHours() + 
            today.getMinutes() + 
            today.getSeconds()

}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        console.log(req.body.text)
        const arq = file.originalname.split('.')
        const name = arq[0]
        const ext = arq[1]
        cb(null, `${name}-${getUUID()}.${ext}`)
    }
})

const uploads = multer({ storage: storage })

export default uploads;


