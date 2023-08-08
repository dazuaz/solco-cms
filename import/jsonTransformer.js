const fs = require('fs')
const ndjson = require('ndjson')
const {Buffer} = require('buffer')
const {
  promises: {readFile},
} = require('fs')

async function readFileAsync(file) {
  const data = await readFile(file)
  return data
}

async function transformJSON(inputPath, outputPath) {
  const inputStream = fs.createReadStream(inputPath, 'utf8')
  const outputStream = fs.createWriteStream(outputPath, 'utf8')

  const transformStream = ndjson.parse({strict: false}).on('data', (obj) => {
    console.log('Transforming object:', obj)
    const transformedObj = {
      _type: 'projects',
      date: obj.date,
      thumbnail: {_type: 'image', _sanityAsset: `image@file://${obj.thumbnail}`},
      location: obj.location,
      title: obj.title,
      description: obj.description,
      galleryImages: obj.galleryImages.map((image) => ({
        _type: 'image',
        _sanityAsset: `image@file://${image}`,
      })),
      featured: obj.featured,
    }

    outputStream.write(JSON.stringify(transformedObj) + '\n')
  })

  inputStream.pipe(transformStream).pipe(outputStream)
}

const inputFilePath = process.argv[2]
const outputFilePath = 'output.ndjson'

if (inputFilePath) {
  // transformJSON(inputFilePath, outputFilePath)
  readFileAsync(inputFilePath).then((data) => {
    const buffer = Buffer.from(data)
    const json = JSON.stringify(buffer.toJSON())
    console.log(json)
  })
} else {
  console.error('Please provide an input file path.')
}
