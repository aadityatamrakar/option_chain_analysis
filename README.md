# Option Chain Analysis

I wanted to quickly understand the market scenerio, so for I have developed this option chain analysis page. This page fetch data from official NSE website and analyse the option chain then displays the result. 

You can also select expiry date, the data will be filtered and shown for that expiry only.

## Data Accuracy

The data is being fetched in realtime when a user visits the webpage via server. The data is accurate and unmodified version of NSE option chain. 

## Option Analysis

I have mentioned below the conditions, I have implemented in analysis of call options on the webpage. 

Here, I am checking the price change and OI change and figuring out what is happening in the market. 

| Price Change | OI Change | Option Analysis | TREND |
|--|--|--|--|
| Positive | Positive | Long Liquidation | BULLISH |
| Positive | Negative | Short Buildup | BULLISH |
| Negative | Positive | Short Covering | BEARISH |
| Negative | Negative | Long Buildup | BEARISH |

Below table can give action plan for particular trend.

| TREND | CALL Option | PUT Option |
|--|--|--|
| BULLISH | BUY | SELL |
| BEARISH | SELL | BUY |


## Page Screenshot

![alt text](https://raw.githubusercontent.com/aadityatamrakar/option_chain_analysis/master/screencapture-niftychain-herokuapp-2019-11-18-21_44_16.png)