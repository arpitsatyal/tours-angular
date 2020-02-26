import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable()
export class notifyService {
    constructor(public toastrService: ToastrService) {
    }

    showSuccess(msg: string) {
        this.toastrService.success(msg)
    }
    
    showInfo(msg: string) {
        this.toastrService.info(msg)
    }
    showError(e) {
        debugger
        if(e.error) {
            if(typeof(e.error) === 'object') {
               e.error.error.error ?  this.toastrService.error(e.error.error.error) : this.toastrService.error(e.error.error)
            } else if(typeof(e.error) === 'string') {
                this.toastrService.error(e.error)
            } else {
                this.toastrService.error('something went wrong!')
            }
        }
    }
}