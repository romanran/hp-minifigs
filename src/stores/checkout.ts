import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { CheckoutForm } from '@/models/checkoutForm'

export const useCheckoutStore = defineStore('checkout', () => {
  const form = ref<CheckoutForm>()
  const submitting = ref<null | boolean>(null)
  function setForm(formData: CheckoutForm) {
    form.value = formData
  }
  function submitForm() {
    submitting.value = true
    // submitting.value = false
  }
  return { form, setForm, submitForm, submitting }
})
