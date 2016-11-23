var moment = require("moment");

var calendar = {
    natural: "",
    unix: "",
};
    
    
module.exports = function check (date) {
    
    if (moment(date).isValid() & moment(date, "X", true).isValid() || moment(date, "x", true).isValid() || moment(date, "MMMM D YYYY").isValid()) {
        calendar.natural = moment(date).format("MMMM D[,] YYYY");
        calendar.unix = moment(date).format("X");
    }
    
    else {   // else (moment(date).isValid() === false)
        calendar.natural = null;
        calendar.unix = null;
    }
    
    return calendar;
};

