<style lang="scss">

</style>
<template>
  <div>{{ data }}</div>
</template>
<script>
import loginApi from '@/api/login'
export default {
  data () {
    return {
      data: null
    }
  },
  mounted () {
    this.qryUser()
  },
  methods: {
    qryUser () {
      this.$http.request(loginApi.login).then(res => {
        this.data = res.data.data
      })
    }
  }
}
</script>
