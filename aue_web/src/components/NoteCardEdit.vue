<template>
  <q-dialog v-model="isOpen">
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ note.id ? 'Edit Note' : 'New Note' }}</div>
        <q-input
          v-model="title"
          label="Note Title"
          autofocus
          clearable
        />
        <q-input
          v-model="description"
          label="Note Description"
          autofocus
          clearable
        />
        <q-date 
          v-model="date"
          label="Select a Date"
        />
      </q-card-section>

      <q-card-actions>
        <q-btn 
          label="Cancel" 
          @click="closeDialog" 
          color="negative"
        />
        <q-btn
          label="Save"
          @click="saveNote"
          color="primary"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    modelValue: Boolean,
    note: Object,
  },
  emits: ['update:modelValue', 'save-note'],
  data() {
    return {
      title: this.note ? this.note.title : '',
      description: this.note ? this.note.title : '',
      checked: this.note ? this.note.checked : false,
      date: this.note ? this.note.date: '',
    };
  },
  watch: {
    note: {
      handler(newVal) {
        this.title = newVal ? newVal.title : '';
        this.description = newVal ? newVal.description : '';
        this.date = newVal ? newVal.date : '';
      },
      immediate: true,
    },
  },
  computed: {
    isOpen: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
  methods: {
    closeDialog() {
      this.isOpen = false;
    },
    saveNote() {
      if (!this.title.trim()) return;
      

      this.$emit('save-note', {
        id: this.note ? this.note.id : null,
        title: this.title,
        description: this.description,
        checked: this.checked,
        date: this.date,
      });
      console.log('note at actual dialog save', this.note)
      this.closeDialog();
    },
  },
};
</script>