<template>
  <div id="app">
    <BaseModal />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseModal from "@/components/base-modal/base-modal.vue";

@Component({ components: { BaseModal } })
/** root component */
export default class App extends Vue {}
</script>
