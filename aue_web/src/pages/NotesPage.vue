<template>
  <q-page class="q-pa-md">
    <div v-if="notes.length > 0">
      <NoteCard 
        v-for="(note) in notes" 
        :key="note.id" 
        :note="note"
        @update-status="updateNoteStatus"
        @edit-note="openEditNoteDialog"
        @delete-note="deleteNote"
      />
    </div>

    <q-btn
      label="New Note"
      color="primary"
      @click="openEditNoteDialog"
      class="full-width"
    />

    <NoteCardEdit 
      v-model="isEditNoteDialogOpen"
      :note="selectedNote"
      @save-note="saveNote"
    />
  </q-page>
</template>

<script>
import NoteCard from 'src/components/NoteCard.vue';
import NoteCardEdit from 'src/components/NoteCardEdit.vue';

export default {
  components:{
    NoteCard,
    NoteCardEdit,
  },
  data() {
    return {
      selectedDate: new Date().toISOString().slice(0, 10),
      notes: [],
      isEditNoteDialogOpen: false,
      selectedNote: null,
    };
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
  mounted () {
    if (!this.user) {
      this.$router.push('/login');
    };
    this.fetchNotes();
  },
  methods: {
    async fetchNotes() {
      try {
        const response = await this.$api.get(`/notas/user/${this.user.id}`);
        this.notes = response.data;
        console.log('notes at fetch: ',response.data);
      } catch (error) {
        console.error('Error fetching', error);
      }
    },
    updateNoteStatus(noteId) {
      const note = this.notes.find(n => n.id === noteId);
      if (note) {
        note.checked = !note.checked;
        this.$api.put(`/notas/${note.id}`, { ...note });
      }
    },
    openEditNoteDialog(note) {
      if (note && note.id) {
        this.selectedNote = { ...note };
      } else {
        this.selectedNote = { title: '', description: '', checked: false};
      }
      console.log('notes at openEditDialog: ',this.selectedNote);
      this.isEditNoteDialogOpen = true;
    },
    closeEditNoteDialog() {
      this.isNewNoteDialogOpen = false;
    },
    async saveNote(note) {
      try {
        console.log('notes at saveeeee: ',note);
        if (note.id) {
          await this.$api.put(`/notas/${note.id}`, note);
        } else {
          await this.$api.post('/notas', { ...note, userId: this.user.id });
        }
        this.fetchNotes();
        this.isEditNoteDialogOpen = false;
      } catch (error) {
        console.error('Error saving note:', error);
      }
    },
    async deleteNote(note) {
      try {
        await this.$api.delete(`/notas/${note.id}`);
        this.fetchNotes(); 
      } catch (error) {
        console.error('Error deleting note:', error);
      }
    }
  },
};
</script>

<style scoped>
.q-page {
  background-color: #f9f9f9;
}

.q-card {
  transition: background-color 0.3s ease;
}

.bg-grey-3 {
  background-color: #e0e0e0 !important;
}

.q-btn.full-width {
  width: 100%;
}
</style>
