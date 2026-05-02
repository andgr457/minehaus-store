export type SubscriptionType = 'Patron' |
'Benefactor' |
'Producer' |
'One-Time'

export const SubscriptionTypes = {
  Patron: 'Patron' as SubscriptionType,
  Benefactor: 'Benefactor' as SubscriptionType,
  Producer: 'Producer' as SubscriptionType,
  OneTime: 'One-Time' as SubscriptionType,
}

export interface Subscription {
  type: SubscriptionType
  redirectUrl: string
  costUSD: number
}