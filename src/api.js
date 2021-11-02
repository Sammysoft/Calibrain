
import axios from 'axios';

export default {
    user: {
        login: credentials => axios.post('/api/auth/staff', { credentials }).then(res =>  res.data.user)
    }
}