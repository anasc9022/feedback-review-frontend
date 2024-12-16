import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/common/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  ngOnInit(): void {
  }

  username: string = '';
  password: string = '';
  loggedIn: boolean = false;
  allFeedback: Feedback[] = [];

  constructor(private feedbackService: FeedbackService) { }

  getAllFeedback() {
    this.feedbackService.getAllFeedback(this.username, this.password).subscribe({
      next: (response) => {
        this.allFeedback = response;
        this.loggedIn = true;
      },
      error: () => {
        alert('Invalid Username or Password');
      }
    });
  }

  approveFeedback(id: number) {
    this.feedbackService
      .approveFeedback(id, this.username, this.password)
      .subscribe(() => {
        alert('Feedback approved!');
        this.getAllFeedback();
      });
  }

  deleteFeedback(id: number) {
    this.feedbackService.deleteFeedback(id, this.username, this.password)
      .subscribe(() => {
        alert('Feedback deleted!');
        this.getAllFeedback();
      });
  }

}
