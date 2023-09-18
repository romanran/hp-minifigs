import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { CheckoutForm } from '@/models/checkoutForm'

export const useCheckoutStore = defineStore('checkout', () => {
  const form = ref<CheckoutForm>()
  function setForm(formData: CheckoutForm) {
    form.value = formData
  }
  return { form, setForm }
})
