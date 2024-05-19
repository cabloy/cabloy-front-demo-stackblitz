<template>
  <template></template>
</template>

<script setup lang="ts">
import { useMotherPage } from '@cabloy/front';
import { MotherPageCounter } from './mother.js';
import { RenderPageCounter } from './render.jsx';
useMotherPage(MotherPageCounter, RenderPageCounter);
</script>
