import {AfterViewInit, Component, TemplateRef, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { setUsers, addUsers, deleteUsers, editUsers } from '../state/users.actions';
import { setRoles } from '../state/roles.actions';
import { User } from '../state/users.state';
import { UserService } from "../user.service";
import { RoleService } from "../role.service";
import UsersService from '../../services/UsersService'

export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  roleName: string;
  active: boolean;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements AfterViewInit {

  displayedColumns: string[] = ['fullName', 'email', 'roleName', 'active', 'actions'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild('callAPIDialog')
  callAPIDialog!: TemplateRef<any>;

  constructor(public UserService: UserService, public RoleService: RoleService, private dialog: MatDialog, private formBuilder: FormBuilder, private store: Store<{users: { users:Array<any> }, roles: { roles:Array<any> } }>) {
    
    // Create 100 users
    const users = [
      { id: 1, firstName: 'John', lastName: 'Doe', email: 'johndoe@gmail.com', rol: 'Administrator', active: false },
      { id: 2, firstName: 'Alejandro', lastName: 'Test', email: 'alejandrotest@gmail.com', rol: 'Workstation', active: true},
    ]

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    console.log(this.dialog, this.loginForm, this.userEdit)
    this.userEdit && this.loginForm.patchValue({
      ...this.userEdit
    })
    let dialogRef = this.dialog.open(this.callAPIDialog,{maxWidth: '600px'});
    dialogRef.afterClosed().subscribe(() => {
      this.userEdit = null;
      this.loginForm.reset();
      this.loginForm.patchValue({
        firstName: '',
        lastName: '',
        email: '',
        roleId: 0,
        active: false,
      })
    })
  }

  loginForm!: FormGroup;

  roles: any;

  roleSelected: any;

  users: any;

  async ngOnInit(): Promise<void>{
    const roles = await this.RoleService.getAll()
    await this.store.dispatch(setRoles({roles: roles.data.response}))
    const users = await this.UserService.getAll()
    await this.store.dispatch(setUsers({users: users.data.response}))
    console.log(roles)
    console.log(users)

    this.loginForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      roleId: new FormControl(0, [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      active: new FormControl(false, [])
    });

    this.store.select('users').subscribe((data) => {
      this.users = data.users
      this.dataSource = new MatTableDataSource(data.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data)
    })

    this.store.select('roles').subscribe((data) => {
      this.roles = data.roles
      console.log(data)
    })
  }

  userEdit!: any

  async submit() {
    // console.log('entro', this.loginForm)
    if (!this.loginForm.valid) {
      return;
    }
    // console.log(this.loginForm.value);
    var userSend = this.loginForm.value
    userSend.id = this.userEdit ? this.userEdit.id : 0

    try {
      if(this.userEdit){
        const res = await UsersService.putUsers(userSend)
        const user = res.data.response
        this.store.dispatch(editUsers({user}))
      }else{
        const res = await UsersService.postUsers(userSend)
        const user = res.data.response
        this.store.dispatch(addUsers({user}))
      }
    } catch (error) {
      console.log(error)
    }
    
  }

  async deleteUser(params:any){
    try {
      await UsersService.deleteUsers(params)
      this.store.dispatch(deleteUsers({userId: params.id}))
    } catch (error) {
      console.log(error)
    }
  }

  getErrorMessage(error: any) {
    if(error){
      return error.hasOwnProperty('required') ? 'You must enter a value' : error.hasOwnProperty('email') ? 'Not a valid email' : '';
    }
    return ''
  }

  getIconActive(active:boolean){
    return active ? 'done' : 'clear'
  }

  getColorActive(active:boolean){
    return active ? 'green' : 'red'
  }

}

// function createNewUser(id: number): UserData {
//   const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))]
//   };
// }