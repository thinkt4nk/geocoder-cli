var geocoder = require('geocoder')
var leet = require('l33teral')

var address = Array.prototype.slice.call(process.argv, 2).join(' ')

geocoder.geocode(address, function(err, data) {
    if (err)
        throw err
    var l = leet(data)
    try {
        var lat = l.tap('results.0.geometry.location.lat')
        var lng = l.tap('results.0.geometry.location.lng')
        var address = l.tap('results.0.formatted_address')
    }
    catch (e) {
        throw 'Could not find address'
    }
    console.log(lat + ' ' + lng + ' "' + address + '"')
})
