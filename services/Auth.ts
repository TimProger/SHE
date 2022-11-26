import {$api} from "../http/api";
import {IConfirmPhoneRes} from "../types/Auth.types";

class AuthService {
    
    async confirm_phone(phone: number) {
        $api
            .post<IConfirmPhoneRes>('/profile/confirm_phone', {
                phone
            })
            .then((res)=>{
                return res
            })
            .catch((e)=>{
                return e
            })
    }

    async confirm_code(phone: number, code: number) {
        return await $api
                        .post('/profile/confirm_code', {
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
}

export default new AuthService()