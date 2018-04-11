## Blackdown Data

As much information that we can ream from the markets is harvested here and pre-chewed for charts and front-end display.

## Installation & Usage

First clone the repository and install packages

```
git clone git@github.com:tomtom87/blackdown-data.git
cd blackdown-data
npm install
```

Now you can start data aquisition with `node init.js` read the code for more information

## Configuration file

Look inside `config/default.json` which is the default configuration for the application. Most options are self explanatory and commented, if you have any requirement for new options please create a issue.


*The following exchange orderbooks are available:*
- Bitfinex
- Poloniex
- GDAX

*The following data sources are being used:*
- coinmarketcap (via API)
- investing.com (via embedded widgets and API)
- twitter.com (via API)
- klout.com (via API)
- bloomberg.com


## Future of the project

We are in active development on this project and hope to add more to it in the coming months, stay tuned for more.

*The exchange bellow are planned for implementation in the next versions:*
- Binance
- OkEx
- bitFlyer
- Upbit
- Huobi
- Bithumb
- bittrex
- BTCC
- Kraken
- Gemini
