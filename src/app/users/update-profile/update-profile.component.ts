import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { notifyService } from 'src/app/services/toastr.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class  UpdateProfileComponent implements OnInit {
  toUpdate
  user = JSON.parse(localStorage.getItem('user'))
  selectedFile
  constructor(
    public usersService: UsersService,
    public activatedRoute: ActivatedRoute,
    public notify: notifyService,
    public router: Router
  ) { 
  }

  ngOnInit(): void {
    this.toUpdate = new User({})
  }
  onFileSelected(ev) {
    let file: File = ev.target.files[0]
    this.readAsBase64(file)
    .then(result => this.selectedFile = result)
    .catch(e => console.log(e))
  }

  readAsBase64(file) {
    let reader = new FileReader()
    return new Promise((res, rej) => {
      reader.addEventListener('load', () => res(reader.result))
      reader.addEventListener('error', e => rej(e))
      if(file) reader.readAsDataURL(file)
    })
  }

  updateMe() {
    let id = this.activatedRoute.snapshot.params.id
    let body
    if(!this.selectedFile) {
      body = {
        user: this.toUpdate
      }
    } else {
      body = {
        user: this.toUpdate,
        image: this.selectedFile
      }
    }
    this.usersService.updateUser(id, body)
    .subscribe((res:any) => {
      console.log(res)
      localStorage.setItem('user', JSON.stringify(res.updated))
      this.notify.showSuccess('account updated')
    }, err => this.notify.showError(err))
  }

  deleteMe(id) {
    let confirmation = confirm('are you sure?')
      if(confirmation) {
    this.usersService.deleteAccount(id).subscribe(() => {
   this.notify.showInfo('account deleted')
   localStorage.clear()
   this.router.navigate([''])
    },
    err => this.notify.showError(err))
  }
}
}
