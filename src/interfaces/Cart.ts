export type PaymentMethod = 'paypal' | 'stripe'

export const PaymentMethods = {
  PayPal: 'paypal' as PaymentMethod,
  Stripe: 'stripe' as PaymentMethod
}

export interface Cart {
  paymentMethod: PaymentMethod
  username: string
}
