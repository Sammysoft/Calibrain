
import axios from 'axios';

export default {
    user: {
        login: credentials =>
            axios.post('/api/auth/staff', { credentials })
                .then(res =>  res.data.user),
        register: data =>
            axios.post('/api/postUser', { data })
                .then(res => res.data.user)
    }

}