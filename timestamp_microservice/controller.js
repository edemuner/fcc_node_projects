
function timeConverter(req, res){
    const {time} = req.params
    // unix pattern has only numbers
    if(time.match(/^[0-9]+$/) != null){
        const date = new Date(Number(time))
        res.send(date)
    } else {
        const date = new Date(time)
        res.send(date)
    }
}

module.exports = app => {

    app.get('/', (req, res) => res.send('You came to your destiny'))

    app.get('/api/:time', timeConverter)
}