var env = 3,
    conObj = {};

switch(env){
    case 1:
    /* c9.io */
    conObj = {
        host:'localhost',
        user:'ronaldohoch',
        password:'',
        database:'c9'
    }
    break;
    case 2:
    /* notebook casa */
    conObj = {
        host:'localhost',
        port:'',
        user:'',
        password:'',
        database:'c9'
    }
    break;
    case 3:
    /* desktop ez */
    conObj = {
        host:'localhost',
        port:'3306',
        user:'root',
        password:'1234',
        database:'c9'
    }
    break;
    case 4:
    /* outro user */
        conObj = {
            host:'localhost',
            port:'3306',
            user:'root',
            password:'1234',
            database:'c9'
        }
    break;
    default:
    break;
}


// var connection = mysql.createConnection();

module.exports = conObj;