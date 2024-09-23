import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { ConfirmEmail } from '../ConfirmEmail';
import { Router } from 'express';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  templateUrl: './confirmation.component.html'
})
export class ConfirmationComponent implements OnInit {
  
  errors: any[] = [];
  user!: ConfirmEmail;
  token!: string;
  username!: string;
  emailConfirmed: boolean = false;
  
  constructor(
    private authService: AuthService, 
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute) { 
      // this.username = activatedRoute.snapshot.url[1].path; 
      // this.token = activatedRoute.snapshot.url[2].path; 

      this.username = this.route.snapshot.paramMap.get('username');
      this.token = this.route.snapshot.paramMap.get('token');
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