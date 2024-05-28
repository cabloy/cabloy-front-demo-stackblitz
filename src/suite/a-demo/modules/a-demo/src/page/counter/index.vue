<template>
  <template></template>
</template>

<script setup lang="ts">
import { useControllerPage } from '@cabloy/front';
import { ControllerPageCounter } from './controller.js';
import { RenderPageCounter } from './render.jsx';
useControllerPage(ControllerPageCounter, RenderPageCounter);
</script>
