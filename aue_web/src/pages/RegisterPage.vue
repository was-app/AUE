<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-lg shadow-2" style="width: 350px">
      <q-card-section>
        <div class="text-h6 text-center">Register</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="handleRegister">
          <q-input v-model="username" label="Username" outlined dense required />
          <q-input v-model="email" label="Email" type="email" outlined dense required class="q-mt-md" />
          <q-input v-model="password" label="Password" type="password" outlined dense required class="q-mt-md" />
          <q-input v-model="confirmPassword" label="Confirm Password" type="password" outlined dense required class="q-mt-md" />

          <q-btn type="submit" color="primary" label="Register" class="full-width q-mt-md" :loading="loading" />
        </q-form>
      </q-card-section>

      <q-card-section class="text-center">
        <q-btn flat label="Already have an account? Login" to="/login" color="primary" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      loading: false
    }
  },
  methods: {
    async handleRegister() {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match')
        return
      }

      this.loading = true
      try {
        await this.$api.post('/auth/register', {
          name: this.username,
          email: this.email,
          password: this.password
        })

        this.$router.push('/login')
      } catch (error) {
        console.error(error)
        alert('Registration failed. Please try again.')
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
