<template>
  <q-page
    class="flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden"
  >
    <q-card class="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <q-card-section>
        <div class="text-2xl font-bold mb-6 text-center">Connexion</div>
      </q-card-section>

      <q-card-section>
        <q-form>
          <q-input
            v-model="email"
            label="Email"
            type="email"
            class="px-3 py-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          />
          <q-input
            v-model="password"
            label="Mot de passe"
            type="password"
            class="px-3 py-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          />

          <q-card-actions
            align="right"
            class="flex items-center justify-center space-x-2"
          >
            <q-btn
              label="Se connecter"
              type="submit"
              color="primary"
              class="py-2 px-4 bg-primary-600 text-white rounded hover:bg-primary-700"
            />
          </q-card-actions>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script></script>

<style scoped>
.q-page {
  height: 100vh; /* Utilisation de la hauteur de la vue pour centrer verticalement */
  overflow: hidden; /* Empêche le défilement */
}
</style>
