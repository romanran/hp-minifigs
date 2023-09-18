import { CheckoutFormKeys } from '@/models/checkoutForm'

function isValidEmail(email: string) {
  const regx = new RegExp(
    "^((([a-z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\\.([a-z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\\d|-|\\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\\d|-|\\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\\.?$"
  )
  return typeof email === 'string' && regx.test(email.toLowerCase()) && email.length < 256 && email.length > 2
}
function isValidPhone(phoneNumber: string) {
  return typeof phoneNumber === 'string' && new RegExp(/^[+\d]\d{8,12}$/).test(phoneNumber)
}
const onlyLetters = /^[\p{L}\s-]+$/u

export const rules = {
  [CheckoutFormKeys.NAME]: [
    async (value: string) => {
      value = value.trim()
      return onlyLetters.test(value) || 'Name should contain only letters'
    }
  ],
  [CheckoutFormKeys.SURNAME]: [
    async (value: string) => {
      value = value.trim()
      return onlyLetters.test(value) || 'Surname should contain only letters'
    }
  ],
  [CheckoutFormKeys.PHONE]: [
    async (value: string) => {
      return isValidPhone(value) || 'Invalid phone number'
    }
  ],
  [CheckoutFormKeys.EMAIL]: [
    async (value: string) => {
      return isValidEmail(value) || 'Invalid e-mail'
    }
  ],
  [CheckoutFormKeys.BIRTH_DATE]: [
    async (value: string) => {
      value = value.trim()
      return /^(19|20)[0-9]{2}([ -]?)(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/.test(value) || 'Invalid date'
    }
  ],
  [CheckoutFormKeys.ADDRESS]: [],
  [CheckoutFormKeys.CITY]: [
    async (value: string) => {
      value = value.trim()
      return onlyLetters.test(value) || 'City should contain only letters'
    }
  ],
  [CheckoutFormKeys.STATE]: [
    async (value: string) => {
      value = value.trim()
      return onlyLetters.test(value) || 'State should contain only letters'
    }
  ],
  [CheckoutFormKeys.ZIP]: []
}
