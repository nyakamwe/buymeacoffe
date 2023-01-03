
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
        <form class="donate-form" @submit.prevent="handleSubmit">
            <div>
                <input type="text" name="amount" id="amount" placeholder="Enter Amount" v-model="amount">
            </div>
            <div v-if="showPhoneField">
                <input type="text" name="phone" id="phone" placeholder="(+250) Phone Number" v-model="phonenumber">
            </div>
            <div v-show="phoneError && showPhoneField" class="error">
                    {{ phoneError }}
            </div>
            <div v-if="showBankField">
                <input type="text" name="" id="" placeholder="Bank Acc Number" v-model="accountNumber">
            </div>
            
            <button v-if="!showBankField && !showPhoneField" class="donate-btn" type="button" @click="toggleModal" :disabled="isDisabled">Donate</button>
            <button v-if="showPhoneField && !isProcessing" class="donate-btn" :disabled="isDisabled">OK</button>
            <button v-if="isProcessing" class="donate-btn" disabled>Processing...</button>
            <button v-if="showBankField" class="donate-btn" disabled>OK</button>
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
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default {
    components:{
        Modal,
    },
    data(){
        return {
            currency: 'RWF',
            amount: null,
            showModal: false,
            isDisabled: true,
            showPhoneField: false,
            showBankField: false,
            phonenumber: '',
            accountNumber: '',
            phoneError: '',
            isProcessing: false
        }
    },
    methods: {
        setAmount(amount){
            this.amount = amount
            this.isDisabled = false
        },
        toggleModal(data){
            this.showModal = !this.showModal
            if(data === 'MoMo'){
                this.showPhoneField = true
            }else if(data === 'Bank'){
                this.showBankField = true
            }
        },
        handleSubmit(){
            this.isProcessing = true
            const num = this.phonenumber.replace(/[^0-9]/g, "");
            if(!num){
                this.phoneError = 'phone number is required!'
                this.isProcessing = false
            }else if(num.length < 10){
                this.phoneError = 'phone number must be atleast 10 chars long!'
                this.isProcessing = false
            }else{
                // Use payment gateway to transfer amount from phone Number
                axios({
                    method: 'post',
                    url: 'https://opay-api.oltranz.com/opay/paymentrequest',
                    data: {
                        "telephoneNumber" : `${num}`,
                        "amount" : this.amount,
                        "organizationId" : `${process.env.VUE_APP_ORGANIZATION_ID}`,
                        "description" : "BUY ME A COFFEE",
                        "callbackUrl" : `${process.env.VUE_APP_CALLBACKURL}`,
                        "transactionId" : `${uuidv4()}`
                    }
                    })
                    .then(response => {
                        if(response.data.status === 'PENDING'){
                            alert('Check your phone and approve transfer, *182*7*1#')
                            this.isProcessing = false
                            this.phonenumber = ''
                            this.amount = null
                        }else if(response.data.status === 'DUPLICATED_TRANSACTION_ID'){
                            this.isProcessing = false
                            alert('issues on transaction Id generation\n FAILED')
                            this.phonenumber = ''
                            this.amount = null
                        }else if(response.data.status === 'ACCOUNT_NOT_FOUND'){
                            this.isProcessing = false
                            alert('Receiver has some issues!\n ACCOUNT NOT FOUND')
                            this.phonenumber = ''
                            this.amount = null
                        }else if(response.data.status === 'FAILED'){
                            this.isProcessing = false
                            alert('You have insufficient funds on your account!')
                        }
                        else{
                            alert('Thank you for buying me a coffee\n SUCCESSFULLY RECEIVED.')
                            this.phonenumber = ''
                            this.amount = null
                        }
                        
                    })
                    .catch(error => {
                        console.log(error);
                        this.isProcessing = false
                    });
            }  
        }
    },
    updated(){
        if(this.amount > 0){
            this.isDisabled = false
        } else if(!this.amount){
            this.isDisabled = true
        }
    },
    
    
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
        padding: 10px 6px;
        border: none;
        box-sizing: border-box;
        color: #555;
        border-bottom: 1px solid #000;
        font-size: 20px;
        margin: 6px auto;
    }
    .donate-btn{
        margin-top: 10px;
        padding: 8px;
        background-color: rgb(43, 43, 108);
        color: #fff;
        text-transform: uppercase;
        border-radius: 4px;
        cursor: pointer;
    }
    .donate-btn:hover{
        font-size: 14px;
    }
    .donate-btn[disabled]{
        opacity: 0.5;
        cursor: not-allowed;
    }
    .error{
        color: crimson;
        font-size: 0.8rem;
    }
</style>
