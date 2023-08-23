import { defineStore } from 'pinia'
import { UserModel } from '../model/UserModel'

export const userStore = defineStore("user", {
    state: () => ({
      users: <UserModel[]>[],
      user: <UserModel>{},
      otp: {
        email:'',
        code:''
      }
    }),
    actions: {

      register(data: UserModel) {
       try{
        if (this.isEmailAlreadyExist(data.email)) {
          throw new Error ("email already exits")
        }
  
        this.users.push({
          ...data,
          status: "REGISTERED",
        }),
        
           
      
        //otp
        this.otp.email = data.email
        this.otp.code = Math.floor(1000 + Math.random() * 9000).toString()
       }catch (err){
        throw err
       }
  
  
      },
      isEmailAlreadyExist(email: string): boolean {
        return this.users.filter((u: UserModel) => u.email === email).length > 0;
      },
  
      //Login
      login(email: string, password: string) {
        const u = this.users.filter(
          (u: UserModel) => u.email === email && u.password === password
        );
        if (u.length <= 0) {
          return 1; //incorret
        }
        if (u[0].status !== "ACTIVE") return 2;
  
        this.user = u[0];
  
        return 0; //success
      },
      //Login
    
  
  
    },
    persist: {
      storage: localStorage,
    }
});