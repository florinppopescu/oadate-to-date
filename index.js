/**
 * Converts an OADate (double data type) returning a Date() object.
 *
 * More info on OADate :
 * https://msdn.microsoft.com/en-us/library/system.datetime.tooadate(v=vs.110).aspx
 *
 */

module.exports = function(OADate){
    try {
        if(isNaN(OADate)) throw 'Parameter is not a number!';

        let date = new Date();
        date.setTime((OADate - 25569) * 24 * 3600 * 1000);

        return date;
    } catch (err) {
        console.log(err)
    }
}
