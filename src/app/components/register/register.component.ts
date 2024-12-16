import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = '';
  password: string = '';
  role: string = ''

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
  }

  register() {
    let user = new User();
    user.username = this.username;
    user.password = this.password;
    user.role = 'ROLE_ADMIN';

    this.feedbackService.registerUser(user).subscribe({
      next: () => {
        alert('Successfully registered');
      },
      error: () => {
        alert('User already exists');
      }
    });
  }

}
