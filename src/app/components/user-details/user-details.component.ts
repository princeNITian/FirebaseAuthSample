import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/auth/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }
  // logout
  logout() {
    this.authService.logout();
  }
}
