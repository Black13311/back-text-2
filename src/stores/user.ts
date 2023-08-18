import {defineStore} from 'pinia'
import {UserModel} from '../model/UserModel' 

export const userStore = defineStore('user', {
    state: () => ({
        user: <UserModel[]>[]
    }),
    actions:{
        register(data: UserModel) {
            if (this.isEmailAlreadyExist(data.email)) {
                return false
            }
            this.user.push(data)
            return true
            
        },
        isEmailAlreadyExist(email: string):boolean {
            return this.user.filter((u: UserModel) => u.email === email).length > 0
        }
    },
    persist: {
        storage: localStorage
    }
})