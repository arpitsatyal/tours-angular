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
        if (e.error.error) {
            if (e.error.error.error) this.toastrService.error(e.error.error.error)
            this.toastrService.error(e.error.error)
        }
    }
}