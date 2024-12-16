import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/common/feedback';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  approvedFeedback: Feedback[] = [];
  rating: number;
  comment: string;

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.getApprovedFeedback()
  }

  submitFeedback() {
    this.feedbackService.submitFeedback(this.rating, this.comment).subscribe(() => {
      alert('Feedback submitted successfully!');
    });
  }

  getApprovedFeedback() {
    this.feedbackService.getApprovedFeedback().subscribe(
      data => {
        this.approvedFeedback = data;
      });
  }


}
