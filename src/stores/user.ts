import { defineStore } from 'pinia';
import { UserModel } from '../model/UserModel';

export const userStore = defineStore('user', {
  state: () => ({
    users: <UserModel[]>[], // table users
    user: <UserModel>{},
    otp: {
      email: '',
      code: ''
    }
  }),
  actions: {
    register(data: UserModel) {
      try {
        // check email exits
        if (this.isEmailAlreadyExist(data.email)) {
          throw new Error('Email already exits')
        }

        // insert register user into table users
        this.users.push({
          ...data,
          status: 'REGISTERED'
        })

        // generate otp for registered email lto verify
        this.otp.email = data.email
        this.otp.code = Math.floor(1000 + Math.random() * 9000).toString()

        return this.otp
      } catch (err) {
        throw err
      }
    },
    isEmailAlreadyExist(email: string): boolean {
      return this.users.filter((u: UserModel) => u.email === email).length > 0
    },
    login(email: string, password: string) {
      const u = this.users.filter((u: UserModel) => u.email === email && u.password === password) //[] {}

      if (u.length <= 0) {
        return 1 // incorrect
      }

      if (u[0].status !== 'ACTIVE') return 2

      this.user = u[0]
      return 0 // success
    },
    forgotPassword(email: string) {
      try {
        // find email in user table
        const u = this.users.filter((x: UserModel) => x.email === email)
        if (u.length <= 0) {
          throw new Error('Email is not registered')
        }

        // generate otp for registered email lto verify
        this.otp.email = email
        this.otp.code = Math.floor(1000 + Math.random() * 9000).toString()

        return this.otp
      } catch (err) {
        throw err
      }
    },
    getNewOtp(email: string) {
      this.otp.email = email
      this.otp.code = Math.floor(1000 + Math.random() * 9000).toString()

      return this.otp
    },
    ChangePassword(email: string, newPassword: string) {
      try {
        // Find the user with the given email
        const userIndex = this.users.findIndex((u: UserModel) => u.email === email)

        if (userIndex === -1) {
          throw new Error('User not found')
        }

        // Update the user's password in the users array
        this.users[userIndex].password = newPassword

        return true // Password changed successfully
      } catch (err) {
        throw err
      }
    },

  },
  persist: {
    storage: localStorage
  }
})