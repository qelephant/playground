<template>
    <div class="container">
       <div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" v-model="user.email" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" v-model="user.password" id="exampleInputPassword1">
            </div>
            <button type="submit" @click="login" class="btn btn-primary">Submit</button>
            </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

    export default {
        data: () => ({
            user: {
                email: "",
                password: ""
            }
        }),
        methods: {
            ...mapActions(['loginUser']),
            login() { this.loginUser(this.user)},
    
        },
        // mounted() {
        //     //console.log(this.$store.state.currentUser.user);
        // },
    }
</script>
