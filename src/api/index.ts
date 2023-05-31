// APIs
const currencies = ['bitcoin', 'ethereum', 'litecoin', 'tezos', 'cardano', 'dogecoin']
const currencyList = currencies.join('%2C%20')
const COIN_GECKO_API = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${currencyList}&page=1&sparkline=false`

export { COIN_GECKO_API }
