<template lang="">
  <div>
    <div class="about">
      <h1>{{ reference }}</h1>
      <div class="book-section pa-5">
        <div v-for="(verse, index) in verses" class="content">
          <v-card class="my-2">
            <v-card-title>
              <div class="references">
                <v-chip> Verse: {{ verse.verse }} </v-chip>
              </div>
            </v-card-title>
            <v-card-text>{{ verse.text }}</v-card-text>
            <v-card-actions>
              <v-icon
                @click="questionDialog = true"
                :icon="mdiNote"
                color="green-darken-2"
                size="large"
              ></v-icon>
              <v-icon
                @click="commentaryDialog = true"
                :icon="mdiHelp"
                color="red-darken-2"
                size="large"
              ></v-icon>
            </v-card-actions>
          </v-card>
        </div>
      </div>

      <v-dialog v-model="questionDialog" activator="parent" width="auto">
        <v-card>
          <v-card-text> What does it mean to be sanctified? </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="questionDialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="commentaryDialog" activator="parent" width="auto">
        <v-card>
          <v-card-text> Believers are kept for Christ </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="commentaryDialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script lang="ts">
import { mdiNote, mdiHelp } from '@mdi/js'
import BibleHttpService from '../services/api/bible'
export default {
  data() {
    return {
      verses: [],
      reference: '',
      mdiNote,
      mdiHelp,
      questionDialog: false,
      commentaryDialog: false
    }
  },
  mounted() {
    this.getBibleVerses()
  },
  methods: {
    async getBibleVerses() {
      const result = await BibleHttpService.getVerses('jude 1:1-25')
      const response = result?.data
      this.verses = response.verses
      this.reference = response.reference
      console.log(result)
    }
  }
}
</script>
<style scoped>
.book-section {
  height: 300px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
