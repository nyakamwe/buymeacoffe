<template>
    <div class="container">
        <div class="left-amount">
            <div class="amount" @click="setAmount(500)">
                500 {{ currency }}
            </div>
            <div class="amount" @click="setAmount(1000)">
                1,000 {{ currency }}
            </div>
            <div class="amount" @click="setAmount(2000)">
                2,000 {{ currency }}
            </div>
            <div class="amount" @click="setAmount(3000)">
                3,000 {{ currency }}
            </div>
        </div>
        <form class="donate-form">
            <div v-if="amount>0">
                <input type="text" name="" id="" :value="amount">
            </div>
            <div v-else>
                <input type="text" name="" id="" placeholder="Enter Amount">
            </div>
            <button class="donate-btn" type="button" @click="toggleModal">Donate</button>
        </form>
        <div class="right-amount">
            <div class="amount" @click="setAmount(5000)">
                5000 {{ currency }}
            </div>
            <div class="amount" @click="setAmount(10000)">
                10,000 {{ currency }}
            </div>
            <div class="amount" @click="setAmount(20000)">
                20,000 {{ currency }}
            </div>
            <div class="amount" @click="setAmount(100000)">
                100, 000 {{ currency }}
            </div>
        </div>
    </div>
    <div v-if="showModal">
            <Modal @close="toggleModal"/>
    </div>
</template>

<script>
import Modal from './DonateTypeModal.vue';
export default {
    components:{
        Modal,
    },
    data(){
        return {
            currency: 'RWF',
            amount: '0',
            showModal: false
        }
    },
    methods: {
        setAmount(amount){
            this.amount = amount
        },
        toggleModal(){
            this.showModal = !this.showModal
        }
    }
}
</script>


<style>
    .container{
        display: flex;
        justify-content: center;
    }
    .amount{
        background-color: rgb(32, 32, 92);
        padding: 10px 20px;
        margin: 20px;
        color: #fff;
        border-radius: 4px;
    }
    .amount:hover{
        cursor: pointer;
    }
    .donate-form{
        display: flex; 
        flex-direction: column;
        justify-content: center;
    }
    .donate-form input{
        height: 25px;
        width: 240px;
        border-radius: 4px;
        padding: 6px;
    }
    .donate-btn{
        margin-top: 10px;
        padding: 8px;
        background-color: rgb(43, 43, 108);
        color: #fff;
        text-transform: uppercase;
        border-radius: 4px;
    }
    .donate-btn:hover{
        cursor: pointer;
    }
</style>
