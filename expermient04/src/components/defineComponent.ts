import { defineComponent } from 'vue';
import { useStore } from 'pinia';
import axios from 'axios';

export default defineComponent({
    setup() {
        const store = useStore();
        let username = '';
        let password = '';

        const handleSubmit = async () => {
            try {
                const res = await axios.post('/login', { username, password });
                sessionStorage.setItem('token', res.headers.authorization);
                sessionStorage.setItem('role', res.headers.role);
                store.setUser(res.data);
                // 登录成功后的操作
            } catch (error) {
                // 登录失败后的操作
            }
        };

        return {
            username,
            password,
            handleSubmit
        };
    }
});