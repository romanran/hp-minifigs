export enum CheckoutFormKeys {
  NAME = 'name',
  SURNAME = 'surname',
  PHONE = 'phone_number',
  EMAIL = 'email',
  BIRTH_DATE = 'birth_date',
  ADRESS = 'adress',
  CITY = 'city',
  STATE = 'state',
  ZIP = 'zip_code'
}

export type CheckoutForm = {
  [CheckoutFormKeys.NAME]: string
  [CheckoutFormKeys.SURNAME]: string
  [CheckoutFormKeys.PHONE]: string
  [CheckoutFormKeys.EMAIL]: string
  [CheckoutFormKeys.BIRTH_DATE]: string
  [CheckoutFormKeys.ADRESS]: string
  [CheckoutFormKeys.CITY]: string
  [CheckoutFormKeys.STATE]: string
  [CheckoutFormKeys.ZIP]: string
}
