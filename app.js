// const express = require("express")
// const app = express()

// app.use(express.static("dist"))

// app.listen(3000, () => console.log("Listening on port 3000.")) 

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
	if (req.method === 'GET') {
		res.writeHead(200)
		res.write(fs.readFileSync('dist/index.html'))
		res.end()
	}
})

server.listen(3000)
console.log(`Server running at port 3000.`)