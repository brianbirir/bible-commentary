<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import BibleView from './views/BibleView.vue'
</script>

<template>
  <div class="mx-auto">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" sm="12"><BibleView /></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped></style>
