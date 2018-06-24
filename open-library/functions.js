var request = require('request');


functions = {

    search: function(req, res) {
        var bookisbn = req.body.query;
        // var encsearch = encodeURIComponent(searchquery);

        // var bearerheader = 'Bearer ' + config.bearertoken;

        // request.get('https://api.twitter.com/1.1/search/tweets.json?q=' +
        //     encsearch + '&result_type=recent', { headers: { Authorization: bearerheader } },
        //     function(error, body, response) {
        //         if (error) {
        //             console.log(error);
        //         } else {
        //             res.json({
        //                 success: true,
        //                 data: JSON.parse(body.body)
        //             });
        //         }
        //     });

        request.get('https://openlibrary.org/api/books?bibkeys=ISBN:' +
            bookisbn + '&jscmd=details&format=json',
            function(error, body, response) {
                if (error) {
                    console.log(error);
                } else {
                    //var s = body.toJSON().body.split("=")[1];
                    //s = s.split(";")[0];
                    res.json({
                        success: true,
                        data: JSON.parse(response)
                    })
                }
            })
    }
}

module.exports = functions;