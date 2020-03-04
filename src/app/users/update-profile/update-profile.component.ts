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
  selectedFile: File = null
  imagePath
  constructor(
    public usersService: UsersService,
    public activatedRoute: ActivatedRoute,
    public notify: notifyService,
    public router: Router
  ) { 
    this.imagePath = environment.imageUrl + '/users'
  }

  ngOnInit(): void {
    this.toUpdate = new User({})
  }
  onFileSelected(e) {
    this.selectedFile = <File> e.target.files[0]
  }
  updateMe() {
    let id = this.activatedRoute.snapshot.params.id
    this.usersService.updateUser(id, this.toUpdate, this.selectedFile)
    .subscribe((res:any) => {
      localStorage.setItem('user', JSON.stringify(res.updated))
      this.toUpdate.profilePic = res.updated.profilePic
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
