constexpress = require ('express')
const app = express()
const port = 5000

app.get("/api", (req, res) => {
    res.json(
    {
        "users" : ['Marc', 'Daniel', 'Melissa'],
    }
    )
})

app.listen(port, () => console.log('server started on port' + port))