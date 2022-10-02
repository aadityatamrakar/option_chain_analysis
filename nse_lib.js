const {
  exec,
  spawn
} = require('child_process');

function execute(command, callback) {
  exec(command, {
    maxBuffer: 1024 * 1000 * 10
  }, function (error, stdout, stderr) {
    callback(stdout);
  });
};

function isJson(text) {
  try {
    return JSON.parse(text);
  } catch (err) {
    return false;
  }
}

function loadCookies() {
  return new Promise((resolve, reject) => {
    execute(`curl 'https://www.nseindia.com/' \
    -H 'authority: www.nseindia.com' \
    -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' \
    -H 'accept-encoding: gzip, deflate, br' \
    -H 'accept-language: en-IN,en;q=0.9,en-GB;q=0.8,en-US;q=0.7,hi;q=0.6,mr;q=0.5' \
    -H 'cache-control: no-cache' \
    -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \
    --compressed --silent --output /dev/null --cookie-jar cookie.txt`, function (resp) {
      // console.log(resp);
      resolve();
    });
  });
}

function getOptionChain(instrument) {
  return new Promise((resolve, reject) => {
    execute(`curl 'https://www.nseindia.com/api/option-chain-indices?symbol=${instrument}' \
      -H 'authority: www.nseindia.com' \
      -H 'dnt: 1' \
      -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' \
      -H 'accept-encoding: gzip, deflate, br' \
      -H 'accept-language: en-IN,en;q=0.9,en-GB;q=0.8,en-US;q=0.7,hi;q=0.6,mr;q=0.5' \
      -H 'cache-control: no-cache' \
      -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36' \
      --compressed --cookie cookie.txt --cookie-jar cookie.txt`, function (resp) {
      // console.log(resp);
      let isValidData = isJson(resp);
      if (isValidData) {
        resolve(isValidData);
      } else {
        resolve();
      }
    });

  });
}

module.exports = {getOptionChain, loadCookies};
