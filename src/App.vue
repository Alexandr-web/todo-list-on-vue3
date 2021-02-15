<template>
  <div class="container">
    <vTaskInput v-on:onAddTask="onAddTask" />
    <h1 class="center-align" v-if="!getTasks.length">No tasks</h1>
    <ul v-else>
      <vTaskCard 
        v-for="(task, i) of getTasks"
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
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'App',
  components: {
    vTaskCard,
    vTaskInput
  },
  setup() {
    const store = useStore();
    const getTasks = computed(() => store.getters.getTasks);
    const onDone = id => store.dispatch('doneTasks', id);
    const onRemove = id => store.dispatch('removeTasks', id);
    const onAddTask = task => store.dispatch('addTasks', task);

    return {
      onDone,
      onRemove,
      onAddTask,
      getTasks
    }
  }
}
</script>

<style>
  @import '../public/css/main.css';
</style>