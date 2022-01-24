import { Injectable } from '@angular/core';
import UsersService from '../services/UsersService'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getAll() {
    return UsersService.getAll()
  }

  postUser(params:any) {
    return UsersService.postUsers(params)
  }

  updateUser(params:any) {
    return UsersService.putUsers(params)
  }

  deleteUser(params:any) {
    return UsersService.deleteUsers(params)
  }
}
