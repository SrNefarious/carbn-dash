export type Currency = "USD" | "GBP" | "EUR" | "MXN" | "JPY" | "SGD" | "AUD" | "CAD"

export interface Transaction {
  id: string
  amount: number
  fromCurrency: Currency
  toCurrency: Currency
  status: "Completed" | "Pending" | "Retrying" | "In Progress"
  date: string
  fees: number
  exchangeRate: number
  timeTaken: string // Processing time in seconds (2s to 25s)
}

const exchangeRates: Record<string, number> = {
  USDGBP: 0.79,
  USDEUR: 0.92,
  USDMXN: 17.53,
  USDJPY: 141.76,
  USDSGD: 1.34,
  USDAUD: 1.42,
  USDCAD: 1.28,
  GBPUSD: 1.27,
  GBPEUR: 1.17,
  GBPMXN: 22.22,
  GBPJPY: 179.62,
  GBPSGD: 1.7,
  GBPAUD: 1.8,
  GBPCAD: 1.62,
  EURUSD: 1.09,
  EURGBP: 0.86,
  EURMXN: 19.06,
  EURJPY: 154.09,
  EURSGD: 1.46,
  EURAUD: 1.54,
  EURCAD: 1.39,
  // Add more exchange rates as needed
}

const generateRandomTransaction = (): Transaction => {
  const currencies: Currency[] = ["USD", "GBP", "EUR", "MXN", "JPY", "SGD", "AUD", "CAD"]
  const fromCurrency = currencies[Math.floor(Math.random() * currencies.length)]
  let toCurrency
  do {
    toCurrency = currencies[Math.floor(Math.random() * currencies.length)]
  } while (toCurrency === fromCurrency)

  const amount = Math.floor(Math.random() * 10000) + 100 // Random amount between 100 and 10100
  const fees = amount * 0.01 // 1% fee
  const exchangeRate = exchangeRates[`${fromCurrency}${toCurrency}`] || 1

  const statuses: Transaction["status"][] = [
    "Completed",
    "Completed",
    "Completed",
    "Pending",
    "Retrying",
    "In Progress",
  ]
  const status = statuses[Math.floor(Math.random() * statuses.length)]

  const date = new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString().split("T")[0]

  const timeTaken = `${Math.floor(Math.random() * 24) + 2}s` // Random time between 2s and 25s

  return {
    id: `TX${Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0")}`,
    amount,
    fromCurrency,
    toCurrency,
    status,
    date,
    fees,
    exchangeRate,
    timeTaken,
  }
}

export const transactions: Transaction[] = Array.from({ length: 50 }, generateRandomTransaction)

export const recentTransactions = transactions.slice(0, 10)

export const dailyVolumes = Array.from({ length: 7 }, () => ({
  name: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][Math.floor(Math.random() * 7)],
  volume: Math.floor(Math.random() * 50000) + 10000,
}))

