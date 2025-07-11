<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-lg shadow-2" style="width: 350px">
      <q-card-section>
        <div class="text-h6 text-center">Login</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="handleLogin">
          <q-input 
            v-model="email"
            label="Email" type="email"
            outlined
            dense
            required
          />
          <q-input
            v-model="password"
            label="Password"
            type="password"
            outlined dense
            required
            class="q-mt-md"
          />

          <q-btn
            type="submit"
            color="primary"
            label="Login"
            class="full-width q-mt-md"
            :loading="loading"
          />
        </q-form>
      </q-card-section>

      <q-card-section class="text-center">
        <q-btn
          flat
          label="Register"
          to="/register"
          color="primary"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      loading: false
    };
  },
  methods: {
    async handleLogin() {
      this.loading = true;
      try {
        const response = await this.$api.post('/auth/login', {
          email: this.email,
          password: this.password
        });

        localStorage.setItem('token', response.data.access_token);

        this.$store.dispatch('login', {
          user: response.data.user,
          token: response.data.access_token
        });

        this.$router.push('/');
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>