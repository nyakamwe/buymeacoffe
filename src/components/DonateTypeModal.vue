<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal">
            Choose Donate Type
            <div v-for="dtype in donateType">
                <div class="donate-type">{{ dtype }}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            donateType: ['MoMo', 'Bank']
        }
    },
    methods: {
        closeModal(){
            // emmitting custom event to close modal in parent component
            this.$emit('close')
        }
    }

}
</script>

<style>
    .modal{
        width: 400px;
        padding: 20px;
        background: #fff;
        margin: 100px auto;
        border-radius: 10px;
    }
    .backdrop{
        top: 0;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }
    .donate-type{
        background: #eee;
        margin: 10px auto;
        padding: 20px;
    }
    .donate-type:hover{
        cursor: pointer;
        background: #c4c4c4;
    }
</style>
