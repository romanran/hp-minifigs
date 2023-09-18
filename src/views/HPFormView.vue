<template>
  <v-item-group class="mb-4">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="text-uppercase text-h3">Shipping details</h1>
          <HPCheckoutForm></HPCheckoutForm>
        </v-col>
        <v-col>
          <HPSummary></HPSummary>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script setup lang="ts">
import HPCheckoutForm from '@/components/HPCheckoutForm/HPCheckoutForm.vue'
import HPSummary from '@/components/HPCheckoutForm/HPSummary.vue'
</script>

<style scoped></style>
