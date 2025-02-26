<template>
  <div
    @mouseleave="hideSubmenu"
    @mouseover="showSubmenu = true"
    class="menu-wrapper"
  >
    <q-item clickable v-ripple @click="toggleSubmenu">
      <q-item-section>
        <q-item-label>{{ label }}</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-icon :name="showSubmenu ? 'arrow_drop_up' : 'arrow_drop_down'" />
      </q-item-section>
    </q-item>

    <!-- Submenu appears dynamically positioned next to the parent item -->
    <div v-if="showSubmenu" class="submenu-card">
      <q-card class="program-card" style="min-width: 280px">
        <q-card-section>
          <q-list>
            <q-item v-for="item in items" :key="item" clickable>
              <q-item-section>
                <q-item-label>{{ item }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String, // The label of the parent menu item
    items: Array, // The submenu items
  },
  data() {
    return {
      showSubmenu: false,
    };
  },
  methods: {
    hideSubmenu() {
      this.showSubmenu = false;
    },
    toggleSubmenu() {
      this.showSubmenu = !this.showSubmenu;
    },
  },
};
</script>

<style scoped>
.menu-wrapper {
  position: relative;
}

.submenu-card {
  position: fixed; /* Changed from absolute to fixed */
  top: 150px; /* Adjust to align the submenu with its parent item */
  left: 300px; /* Adjust based on the drawer width */
  z-index: 10;
}

.program-card {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  background-color: #343331;
  color: white;
}
</style>
