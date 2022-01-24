import { Injectable } from '@angular/core';
import RolesService from '../services/RolesService'

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor() { }

  async getAll(){
    return await RolesService.getAll()
  }
}
