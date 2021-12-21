<template>
  <div>23</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { BaseModal } from "..";
@Component({ components: { BaseModal } })
/** test component */
export default class TestA extends Vue {
  vis = true;
}
</script>
