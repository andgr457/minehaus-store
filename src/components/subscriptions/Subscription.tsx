import { CURRENCIES } from '../../constants/Currencies'
import type { ExchangeRateStorage } from '../../interfaces/ExchangeRates'
import './Subscription.css'

interface SubscriptionProps {
  rateCache: ExchangeRateStorage
  selectedCurrency: string
  title: string
  costUSD: number
  description: React.ReactNode
  includes: React.ReactNode
}

export default function Subscription(props: SubscriptionProps){
  const {
    rateCache,
    selectedCurrency,
    title,
    costUSD,
    description,
    includes
  } = props
  const countryCurrentRate = rateCache.rates[selectedCurrency]
  const currencyData = CURRENCIES.find(c => c.code === selectedCurrency)
  const converted = countryCurrentRate * costUSD
  const rounded = parseFloat(converted.toFixed(2));

  return <div className='subscription'>
    <div className='header-1'>
      {title}
    </div>
    <div className='header-2'>
      <span className='wine'>{currencyData?.symbol} {rounded}</span> * {currencyData?.code} / month
    </div>
    <div className='subscription-description'>
      {description}
    </div>
    <div className='minehaus-hr gold' />
    <div className='subscription-includes'>
      <div className='header-3'>
        Includes
      </div>
      {includes}
    </div>
  </div>
}