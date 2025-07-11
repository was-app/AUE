<template>
  <q-card class="q-mb-md" :class="{ 'bg-grey-3': note.checked }">
    <q-card-section>
      <div class="row items-center">
        <q-checkbox
          :model-value="note.checked"
          :label="note.title"
          @update:model-value="toggleCheck"
        />
        <q-btn 
          icon="edit" 
          flat 
          dense 
          @click="editNote"
          class="q-ml-auto"
        />
        <q-btn
          icon="delete"
          color="negative"
          flat
          @click="deleteNote"
        />
      </div>
      <div v-if="note.description" class="q-mt-sm">
        <q-item-label caption>{{ note.description }}</q-item-label>
      </div>
      <div v-if="note.date" class="q-mt-sm">
        <q-item-label caption>{{ formattedDate(note.date) }}</q-item-label>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleCheck() {
      this.$emit('update-status',this.note.id);
    },
    editNote() {
      console.log('note at noteCard',this.note)
      this.$emit('edit-note', this.note);
    },
    deleteNote() {
      this.$emit('delete-note', this.note)
    }

  },
};
</script>

<style scoped>
.bg-grey-3 {
  background-color: #e0e0e0 !important;
}
</style>