
function timeConverter(req, res){
    const {time} = req.params
    // unix pattern has only numbers
    if(time.match(/^[0-9]+$/) != null){
            const date = new Date(Number(time))
            generateDateOutput(date, res)
    } else {
            const date = new Date(time)
            generateDateOutput(date, res)
    }
}

function generateDateOutput(date, res){
    if (isNaN(date)){
        res.status(400).json({error:"Invalid Date"})
    } else {
        res.status(200).json({
            unix:date.getTime(),
            utc:date.toUTCString()
        })
    }
}

module.exports = app => {

    app.get('/', (req, res) => res.send('You came to your destiny').end())

    app.get('/api', (req, res) => {
        const date = new Date()
        generateDateOutput(date, res)
    })

    app.get('/api/:time', timeConverter)
}