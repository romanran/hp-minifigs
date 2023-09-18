import { CheckoutFormKeys } from '@/models/checkoutForm'
import { ref } from 'vue'
import { rules } from './rules'

function createField(key: CheckoutFormKeys, label: string, type: string) {
  return {
    key,
    label,
    model: ref(''),
    rules: rules[key],
    type
  }
}
export type FieldType = ReturnType<typeof createField>

export function useForm() {
  const form = [
    [createField(CheckoutFormKeys.NAME, 'Name', 'text'), createField(CheckoutFormKeys.SURNAME, 'Surname', 'text')],
    [createField(CheckoutFormKeys.PHONE, 'Phone Number', 'number')],
    [createField(CheckoutFormKeys.EMAIL, 'Email', 'text')],
    [createField(CheckoutFormKeys.BIRTH_DATE, 'Date of birth', 'date')],
    [createField(CheckoutFormKeys.ADDRESS, 'Address', 'text')],
    [createField(CheckoutFormKeys.CITY, 'City', 'text')],
    [createField(CheckoutFormKeys.STATE, 'State', 'text'), createField(CheckoutFormKeys.ZIP, 'Zip Code', 'text')]
  ]
  return { form }
}
