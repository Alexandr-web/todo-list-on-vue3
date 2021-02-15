<template>
  <div class="container">
    <vTaskInput v-on:onAddTask="onAddTask" />
    <h1 class="center-align" v-if="!tasks.length">No tasks</h1>
    <ul v-else>
      <vTaskCard 
        v-for="(task, i) of tasks"
        v-bind:key="i"
        v-bind:task="task"
        v-on:onRemove="onRemove"
        v-on:onDone="onDone"
      />
    </ul>
  </div>
</template>

<script>
import vTaskCard from './components/vTaskCard';
import vTaskInput from './components/vTaskInput';
import { ref } from 'vue';

export default {
  name: 'App',
  components: {
    vTaskCard,
    vTaskInput
  },
  setup() {
    let tasks = ref([]);

    const onDone = id => {
      tasks.value.find(item => item.id === id).status = !tasks.value.find(item => item.id === id).status;
    }
    const onRemove = id => {
      tasks.value = tasks.value.filter(item => item.id !== id);
    }
    const onAddTask = task => {
      tasks.value.push(task);
    }

    return {
      tasks,
      onDone,
      onRemove,
      onAddTask
    }
  }
}
</script>

<style>
  @import '../public/css/main.css';
</style>