import { defineStore } from 'pinia'
import axios from 'axios'
export const usePostStore = defineStore('data', {
    state: () => ({
      data: null
    }),
    actions: {
      fetchData() {
        return axios.get('https://jsonplaceholder.typicode.com/posts') // return the Promise from axios.get()
          .then(response => {
            this.data = response.data
          })
          .catch(error => {
            console.error(error)
          })
      }
    }
  })
  