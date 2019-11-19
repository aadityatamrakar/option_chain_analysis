var request = require('request');

function getOptionChain() {
  return new Promise((resolve, reject) => {
    var options = {
      method: 'GET',
      url: 'https://beta.nseindia.com/api/option-chain-indices',
      qs: {
        symbol: 'NIFTY'
      },
      headers: {
        referer: 'https://beta.nseindia.com/get-quotes/derivatives?symbol=NIFTY&identifier=OPTIDXNIFTY21-11-2019PE11900.00',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36',
        authority: 'beta.nseindia.com'
      },
      keepAlive:true,
      json: true,
      gzip: true,
      proxy: "http://Selvitsswat:K9q3MrN@191.101.163.38:45785"
    };

    function callback(error, response, body) {
      if (error) console.log(error),reject(error);
      resolve(body);
    }

    request(options, callback);
  });
}


module.exports = getOptionChain;
