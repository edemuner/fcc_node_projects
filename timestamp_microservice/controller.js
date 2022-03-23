
function timeConverter(req, res){
    const {time} = req.params
    if(time.match(/^[0-9]+$/) != null){
        res.send('only numbers')
    } else {
        res.send('not only numbers')
    }
}

module.exports = app => {

    app.get('/', (req, res) => res.send('You came to your destiny'))

    app.get('/api/:time', timeConverter)
}