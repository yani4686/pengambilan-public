<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>My App</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="drawer" side="left" bordered>
      <q-list>
        <q-item-label header> Admission </q-item-label>
        <q-item clickable v-ripple to="/dashboard">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>Dashboard</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/login">
          <q-item-section avatar>
            <q-icon name="login" />
          </q-item-section>
          <q-item-section>Login</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/apply">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>Apply</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/accept">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>Accept</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/summary">
          <q-item-section avatar>
            <q-icon name="print" />
          </q-item-section>
          <q-item-section>Summary&Print</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view /> <!-- All pages load here -->
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
