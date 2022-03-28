
function timeConverter(req, res){
    const {time} = req.params
    // unix pattern has only numbers
    if(time.match(/^[0-9]+$/) != null){
        try{
            const date = new Date(Number(time))
            res.status(200).json({
                unix:date.getTime(),
                utc:date.toUTCString()
            })
        } catch(error) {
            res.status(400).json({error:"Invalid Date"})
        }
    } else {
        try{
            const date = new Date(time)
            res.status(200).json({
                unix:date.getTime(),
                utc:date.toUTCString()
            })
        } catch {
            res.status(400).json({error:"Invalid Date"})
        }
    }
}

module.exports = app => {

    app.get('/', (req, res) => res.send('You came to your destiny').end())

    app.get('/api/:time', timeConverter)
}