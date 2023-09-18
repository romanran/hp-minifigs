import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { CheckoutForm } from '@/models/checkoutForm'
import { FetchFactory } from '@/services/middleware/FetchFactory'

const formApi = new FetchFactory('api/order/submit')

export const useCheckoutStore = defineStore('checkout', () => {
  const form = ref<CheckoutForm>()
  const submitting = ref<null | boolean>(null)
  const formValid = ref<null | boolean>(null)
  function setForm(formData: CheckoutForm) {
    form.value = formData
  }
  function submitForm() {
    submitting.value = true
    formApi.post({ body: JSON.stringify(form.value) })
    // submitting.value = false
  }
  return { form, setForm, submitForm, submitting, formValid }
})
