<template>
  <v-form @change="onFormChange">
    <v-container>
      <v-row v-for="row in form">
        <v-col v-for="col in row">
          <v-text-field v-model="col.model.value" :label="col.label" :type="col.type" required></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
import type { CheckoutForm } from '@/models/checkoutForm'
import { VForm } from 'vuetify/components/VForm'
import { VTextField } from 'vuetify/components/VTextField'
import { useForm, type FieldType } from './composables/form'
import { useCheckoutStore } from '@/stores/checkout'

const { form } = useForm()
const store = useCheckoutStore()

function mapForm(accumulator: Partial<CheckoutForm>, field: FieldType) {
  accumulator[field.key as keyof CheckoutForm] = field.model.value
  return accumulator
}

function onFormChange() {
  const formArray = form.flat()
  const formObject = formArray.reduce(mapForm, {}) as CheckoutForm
  store.setForm(formObject)
}
</script>

<style lang="scss"></style>
