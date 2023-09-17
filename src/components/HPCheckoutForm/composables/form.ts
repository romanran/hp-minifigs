import { CheckoutFormKeys } from '@/models/checkoutForm'
import { ref } from 'vue'

function createField(key: string, label: string, rules: Array<() => boolean>, type: string) {
  return {
    key,
    label,
    model: ref(''),
    type,
    rules
  }
}
export type FieldType = ReturnType<typeof createField>

export function useForm() {
  const form = [
    [createField(CheckoutFormKeys.NAME, 'Name', [], 'text'), createField(CheckoutFormKeys.SURNAME, 'Surname', [], 'text')],
    [createField(CheckoutFormKeys.PHONE, 'Phone Number', [], 'text')],
    [createField(CheckoutFormKeys.EMAIL, 'Email', [], 'text')],
    [createField(CheckoutFormKeys.PHONE, 'Phone Number', [], 'text')],
    [createField(CheckoutFormKeys.BIRTH_DATE, 'Date of birth', [], 'date')],
    [createField(CheckoutFormKeys.ADRESS, 'Adress', [], 'text')],
    [createField(CheckoutFormKeys.CITY, 'City', [], 'text')],
    [createField(CheckoutFormKeys.STATE, 'State', [], 'text'), createField(CheckoutFormKeys.ZIP, 'Zip Code', [], 'text')]
  ]
  return { form }
}
