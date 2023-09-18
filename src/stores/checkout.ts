import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { CheckoutForm } from '@/models/checkoutForm'
import { FetchFactory } from '@/services/middleware/FetchFactory'
import router from '@/router'
import { ROUTINGS } from '@/router/routings'

const formApi = new FetchFactory('https://jsonplaceholder.typicode.com/posts')

export const useCheckoutStore = defineStore('checkout', () => {
  const form = ref<CheckoutForm>()
  const submitting = ref<null | boolean>(null)
  const formValid = ref<null | boolean>(null)
  function setForm(formData: CheckoutForm) {
    form.value = formData
  }
  async function submitForm(parts: string[]) {
    const payload = {
      form: form.value,
      parts
    }
    submitting.value = true
    await formApi.post({ body: JSON.stringify(payload) })
    submitting.value = false
    router.push({ name: ROUTINGS.LANDING })
  }
  return { form, setForm, submitForm, submitting, formValid }
})
