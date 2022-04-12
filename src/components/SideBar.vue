<template>
  <div class="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
    <div class="flex items-center flex-shrink-0 px-4">
      <img class="h-8 w-auto" src="../assets/logo.svg" alt="Dunkin" />
    </div>
    <div class="mt-5 flex-grow flex flex-col">
      <nav class="flex-1 px-2 bg-white space-y-1" aria-label="Sidebar">
        <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-100 text-purple-600' : 'text-gray-600 hover:bg-gray-50 hover:text-purple-600', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
          <component :is="item.icon" :class="[item.current ? 'text-purple-600' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
          <span class="flex-1">
            {{ item.name }}
          </span>
          <span v-if="item.count" :class="[item.current ? 'bg-white' : 'bg-gray-100 group-hover:bg-gray-200', 'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full']">
            {{ item.count }}
          </span>
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
import { HomeIcon } from '@heroicons/vue/outline'

const navigation = [
  { name: 'Home', icon: HomeIcon, href: '#', current: true }
]

export default {
  setup() {
    return {
      navigation,
    }
  },
}
</script>