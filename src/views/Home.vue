<template>
   <div class="min-h-screen bg-gray-100">
   <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
    <SideBar />
   </div>
   <div class="md:pl-64 flex flex-col flex-1">
    <main class="flex-1">
      <div class="py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div v-if="!GeneratedInfo" class="bg-white p-4 overflow-hidden shadow rounded-lg">
            <div class="text-center">
              <CloudUploadIcon class="mx-auto h-12 w-12 text-gray-400" aria-hidden="true" />
              <h3 class="mt-2 text-sm font-medium text-gray-900">No information can be displayed yet.</h3>
              <p class="mt-1 text-sm text-gray-500">Get started by uploading an XML file with your employees data.</p>
              <div class="mt-6">
                <label for="file-upload" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer">
                  <span>Upload a file</span>
                  <input @change="uploadFile" id="file-upload" name="file-upload" type="file" class="sr-only" accept="text/xml" />
                </label>
              </div>
            </div>
          </div>
          <dl v-else class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
              <dt class="text-sm font-medium text-gray-500 truncate">
                Name 1
              </dt>
              <dd class="mt-1 text-3xl font-semibold text-gray-900">
                Stat 1
              </dd>
            </div>
            <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
              <dt class="text-sm font-medium text-gray-500 truncate">
                Name 1
              </dt>
              <dd class="mt-1 text-3xl font-semibold text-gray-900">
                Stat 1
              </dd>
            </div>
            <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
              <dt class="text-sm font-medium text-gray-500 truncate">
                Name 1
              </dt>
              <dd class="mt-1 text-3xl font-semibold text-gray-900">
                Stat 1
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <Modal
        :show="isModalVisible"
        @close="closeModal"
      />
    </main>
   </div>
  </div> 
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import Modal from '@/components/Modal.vue'
import { CloudUploadIcon } from '@heroicons/vue/solid'
import { MultipartHTTP } from '../http-common.js'

export default {
  name: 'Home',
  components: {
    SideBar,
    CloudUploadIcon,
    Modal,
  },
  data() {
    return {
      GeneratedInfo: false,
      isModalVisible: false,
    }
  },
  methods: {
    async uploadFile(e) {
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('file', file)
      // Show motal while uploading
      this.isModalVisible = true
      // Upload file
      const response = await MultipartHTTP.post('/uploads', formData)
      // Hide modal
      this.isModalVisible = false
      // Check if upload was successful
      if (response.status === 200) {
        // Show generated info
        console.log('hey')
      } else {
        // Show error

      }
      // MultipartHTTP.post('/upload', formData, {
      //   onUploadProgress: (progressEvent) => {
      //     const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
      //     this.$store.commit('setUploadProgress', percentCompleted)
      //   }
      // })
      //   .then((response) => {
      //     this.$store.commit('setUploadProgress', 100)
      //     this.$store.commit('setGeneratedInfo', response.data)
      //     this.isModalVisible = false
      //   })
      //   .catch((error) => {
      //     this.$store.commit('setUploadProgress', 0)
      //     this.isModalVisible = false
      //     console.log(error)
      //   })
      // MultipartHTTP.post('uploads', formData)
      //   .then(response => {
      //     this.isModalVisible = false
      //   })
      //   .catch(error => {
      //     console.log(error)
      //   })
    },
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  created () {
  }
}
</script>

<style>

</style>