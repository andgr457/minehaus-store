import { CURRENCIES } from '../../constants/Currencies'
import type { ExchangeRateStorage } from '../../interfaces/ExchangeRates'

interface SubscriptionProps {
  rateCache: ExchangeRateStorage
  selectedCurrency: string
}

export default function SubscriptionPatron(props: SubscriptionProps){
  const {
    rateCache,
    selectedCurrency
  } = props
  const countryCurrentRate = rateCache.rates[selectedCurrency]

  const currencyData = CURRENCIES.find(c => c.code === selectedCurrency)
  const costUSD = 2
  const converted = countryCurrentRate * costUSD
  const rounded = parseFloat(converted.toFixed(2));
  return <div className='subscription'>
    <div className='header-1'>
      Patron
    </div>
    <div className='header-2'>
      {currencyData?.symbol} {rounded} * {currencyData?.code} / month
    </div>
  </div>
}