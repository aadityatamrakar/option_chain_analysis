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

function getOptionChain(instrument) {
  return new Promise((resolve, reject) => {
    execute(`curl 'https://www.nseindia.com/api/option-chain-indices?symbol=${instrument}' \
    -H 'authority: www.nseindia.com' \
    -H 'cache-control: max-age=0' \
    -H 'dnt: 1' \
    -H 'upgrade-insecure-requests: 1' \
    -H 'user-agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1' \
    -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' \
    -H 'sec-fetch-site: none' \
    -H 'sec-fetch-mode: navigate' \
    -H 'sec-fetch-user: ?1' \
    -H 'sec-fetch-dest: document' \
    -H 'accept-language: en-IN,en;q=0.9,en-GB;q=0.8,en-US;q=0.7,hi;q=0.6,mr;q=0.5' \
    --compressed`, function (resp) {
      let isValidData = isJson(resp);
      if (isValidData) {
        resolve(isValidData);
      } else {
        resolve();
      }
    });

  });
}

module.exports = getOptionChain;
