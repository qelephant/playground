import Axios from "axios";

const state = {
    user: {}
};
const getters = {};
const actions = {
    getUser({commit}){
        axios.get("/api/user/current")
        .then(response=>{
            commit('setUser', response.data)
        })
    },
    loginUser( {}, user) {
        axios
        .post("/api/user/login", {
            email: user.email,
            password: user.password 
        })
        .then(response => {
            //console.log(response.data);
            if(response.data.access_token) {
                //save token
                localStorage.setItem(
                    'blog_token',
                    response.data.access_token
                )
            }

            window.location.replace('/home');
        })
    }
};
const mutations = {
    setUser (state, data) {
        state.user = data;
    }
};

export default {
    namespaces: true,
    state,
    getters,
    actions,
    mutations
}
