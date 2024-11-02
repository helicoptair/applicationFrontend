import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { ConfirmEmail } from './ConfirmEmail';

@Component({
  selector: 'app-email-confirmation',
  standalone: true,
  templateUrl: './emailConfirmation.component.html'
})
export class EmailConfirmationComponent implements OnInit {
  
  errors: any[] = [];
  user!: ConfirmEmail;
  token!: string;
  username!: string;
  emailConfirmed: boolean = false;
  
  constructor(
    private authService: AuthService, 
    private activatedRoute: ActivatedRoute) { 
      this.username = activatedRoute.snapshot.url[1].path; 
      this.token = activatedRoute.snapshot.url[2].path; 
    }
    
    ngOnInit() {
      this.confirmEmail();
    }
    
    confirmEmail() {
      this.authService.confirmEmail(this.username, this.token).subscribe(
        success => { 
          this.processarSucesso(success); 
        },
        error => {
          this.processarFalha(error);
        },
      );
    }
      
    processarSucesso(response: any) {
      this.emailConfirmed = true;
      this.errors = [];
    }
    
    processarFalha(fail: any) {
      console.log("Error!!");
    }   
      
}    