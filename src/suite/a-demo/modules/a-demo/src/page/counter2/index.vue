<template>
  <template></template>
</template>

<script setup lang="ts">
import { useMotherPage } from '@cabloy/front';
import { MotherPageCounter2 } from './mother.js';
import { RenderPageCounter2 } from './render.jsx';
useMotherPage(MotherPageCounter2, RenderPageCounter2);
</script>
