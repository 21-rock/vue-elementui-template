<template>
    <div>
        <el-button @click="showH">Button</el-button>
        <el-dialog :visible.sync="visible" title="Hello world">
            <p>Try Element</p>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "Demo",
        data () {
            return {
                visible: false
            }
        },
        methods: {
            showH () {
                this.visible = !this.visible
            }
        }
    }
</script>

<style scoped>

</style>