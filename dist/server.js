const http = require('http')
const fs = require('fs')
const httpPort = 80

http.createServer((req, res) => {

    if (req.url.startsWith('/css') || req.url.startsWith('/js') || req.url.startsWith('/img') || req.url.startsWith('/assets')) {
        fs.readFile(`.` + req.url, (err, data) => {
            res.end(data);
        })
        return;
    }
    fs.readFile('index.html', 'utf-8', (err, content) => {
        if (err) {
            console.log('We cannot open "index.html" file.')
        }

        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        res.end(content)
    })
}).listen(httpPort, () => {
    console.log('Server listening on: http://localhost:%s', httpPort)
})