const express = requrie('express')
const config = requrie('config')
const app = express()
const mongoose = requrie('mongoose')
const PORT = config.get('port') || 5000


async function start() {
  try {
    mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser = true,
      useUnifiedTopology = true,
      useCreateIndex = true
    })
    app.listen(PORT, () => console.log("has been started port ${PORT}..."))
  } catch (e) {
    console.log("server error", e.message)
    process.exit(code: 1)
  }
}

start()


