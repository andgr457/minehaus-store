export interface ExchangeRateStorage {
  //UTC ISO date & time
  lastRefreshed: string
  // rates["AUD"]
  rates: {
    [prop: string]: number
  }
}

export interface ExchangeRateResponse {
  result: string
  conversion_rates: {
    [prop: string]: number
  }
}