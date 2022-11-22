import {$api} from "../http/api";

class AuthService {
    
    async confirm_phone(locale: string, phone: number) {
        $api
            .post('/profile/confirm_phone', {
                phone
            })
            .then((res)=>{
                
                return res
            })
            .catch((e)=>{
                return e
            })
    }

    async confirm_code(locale: string, phone: number, code: number) {
        return await $api
                        .post('/api/profile/confirm_code', {
                            phone,
                            code
                        })
                        .then((res)=>{
                            return res
                        })
                        .catch((e)=>{
                            return e
                        })
    }

    async create_user(locale: string,
                      phone: number,
                      password: string,
                      email: string,
                      code: number) {
        return await $api
                        .post('/api/profile/create_user', {
                            phone,
                            password,
                            email, 
                            code
                        })
                        .then((res)=>{
                            return res
                        })
                        .catch((e)=>{
                            return e
                        })
    }
}

export default new AuthService()