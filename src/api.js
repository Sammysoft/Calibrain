
import axios from 'axios';

export default {
    user: {
        login: credentials =>
            axios.post('/api/auth/staff', { credentials })
                .then(res =>  res.data.user),
        register: user =>
            axios.post('/api/postUser', { user })
                .then(res => res.data.user),
        registerstaff: user =>
            axios.post('/api/addStaff', { user })
                .then(res => res.data.user)
    }

}