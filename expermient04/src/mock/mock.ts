import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

// 在这里添加你的mock配置
mock.onPost('/login').reply(config => {
    const { username, password } = JSON.parse(config.data);
    if (username === 'admin' && password === '123456') {
        return [
            200,
            {
                code: 200,
                message: '登录成功',
                data: {
                    token: '123456',
                    role: 'admin'
                }
            },
            {
                'Authorization': 'Bearer 123456',
                'Role': 'admin'
            }
        ];
    } else {
        return [401, { code: 401, message: '用户名或密码错误' }];
    }
});

export default mock;