<template>
  <div>
    <form class="row valign-wrapper" action="" v-on:submit.prevent="addTask">
      <input class="col" type="text" placeholder="Task name" v-model="taskName">
      <button class="col s2 btn waves-effect waves-light teal accent-3 right">Add</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup(props, context) {
    const taskName = ref('');
    const addTask = () => {
      const task = {
        title: taskName.value,
        id: Math.random() * Math.random() + (Math.random() * 2),
        status: false
      }
      
      context.emit('onAddTask', task);

      taskName.value = '';
    }

    return {
      taskName,
      addTask
    }
  }
}
</script>