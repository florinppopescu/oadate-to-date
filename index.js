/**
 * Created by florinppopescu on 17/03/2017.
 */

module.exports = function(OADate){
    try {
        if(isNaN(OADate)) throw 'Parameter is not a number!';

        let date = new Date();

        return date.setTime((OADate - 25569) * 24 * 3600 * 1000);
    } catch (err) {
        console.log(err)
    }
}
