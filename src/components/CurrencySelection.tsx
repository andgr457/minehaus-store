import { CURRENCIES } from '../constants/Currencies'

interface CurrencySelectionProps {
  selectedCurrency: string
  onCurrencyChanged: (currency: string) => void
}

export default function CurrencySelection(props: CurrencySelectionProps) {
  const {
    selectedCurrency,
    onCurrencyChanged
  } = props

  return <div className='select-wrapper'>
    <select value={selectedCurrency} onChange={(e) => {onCurrencyChanged(e.target.value)}}>
      {CURRENCIES.map(c => {
        return <option value={c.code}>
          {c.symbol} {c.code} {c.label}
        </option>
      })}
    </select>
  </div>
}