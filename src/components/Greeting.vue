<template>
  <div>
    {{ greeting }}
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Greeting',

  data() {
    return {
      greeting: 'Vue and TDD',
    }
  },
})
</script>
