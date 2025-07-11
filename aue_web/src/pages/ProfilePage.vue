<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-lg shadow-2" style=" width: 80%">
      <q-card-section>
        <!-- Title and Edit Button -->
        <div class="row items-center">
          <div class="text-h6 flex-grow text-center">Profile</div>
          <q-btn
            icon="edit"
            color="primary"
            flat
            @click="toggleEditMode"
            v-if="!isEditMode"
            class="q-ml-auto"
          />
        </div>
      </q-card-section>

      <q-card-section>
        <!-- Profile Information -->
        <div v-if="user">
          <q-input
            filled
            v-model="user.name"
            label="Name"
            :readonly="!isEditMode"
            class="q-mb-md"
          />

          <q-input
            filled
            v-model="user.email"
            label="Email"
            type="email"
            :readonly="!isEditMode"
            class="q-mb-md"
          />

          <q-input
            filled
            v-model="user.avaliacao"
            label="Rating"
            :readOnly="true"
            :disable="true"
            class="q-mb-md"
            :value="user.avaliacao || 'N/A'"
          />
        </div>

        <div>
          <q-input
            filled
            v-model="password"
            label="New Password"
            type="password"
            :readonly="!isEditMode"
            class="q-mb-md"
            :disabled="loading"
          />
        </div>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn
          label="Save"
          color="primary"
          @click="saveProfile"
          :loading="loading"
          :disabled="loading || !isEditMode"
          class="full-width"
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      loading: false,
      isEditMode: false,
    };
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    toggleEditMode() {
      this.isEditMode = !this.isEditMode;
    },
    async saveProfile() {
      this.loading = true;

      try {
        const updatedUser = {
          id: this.user.id,
          name: this.user.name,
          email: this.user.email,
          avaliacao: this.user.avaliacao,
          password: this.password || undefined,
        };
        await this.$api.put(`/usuarios/profile/${this.user.id}`, updatedUser);

        this.$store.commit('setUser', updatedUser);

        this.$router.push('/');
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
  async mounted() {
    if (!this.user) {
      this.$router.push('/login');
    };
    try {
      const response = await this.$api.get(`/usuarios/profile/${this.user.id}`);
      this.$store.commit('setUser', response.data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
    },
};
</script>

<style scoped>
.q-page {
  background-color: #f9f9f9;
}

.q-card {
  background-color: #ffffff;
}

.q-input input {
  font-size: 14px;
}

</style>
