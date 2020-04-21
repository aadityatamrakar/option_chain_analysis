var request = require('request');

function getOptionChain() {
  return new Promise((resolve, reject) => {
    var options = {
      method: 'GET',
      url: 'https://www.nseindia.com/api/option-chain-indices',
      qs: {
        symbol: 'NIFTY'
      },
      headers: {
        referer: 'https://www.nseindia.com/get-quotes/derivatives?symbol=NIFTY&identifier=OPTIDXNIFTY01-04-2020PE8000.00',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36',
        // 'Accept-Encoding': 'gzip, deflate, br',
        // 'Accept-Language': 'en-IN,en;q=0.9,en-GB;q=0.8,en-US;q=0.7,hi;q=0.6,mr;q=0.5',
      },
      keepAlive: true,
      json: true,
      gzip: true,
    };

    function callback(error, response, body) {
      if (error) console.log(error), reject(error);
      resolve(body);
    }

    request(options, callback);
  });
}


module.exports = getOptionChain;
