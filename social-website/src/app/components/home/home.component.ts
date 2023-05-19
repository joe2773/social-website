import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/model/Post';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public post$!: Observable<Post>;
  constructor(private postService : PostService) {}
  ngOnInit(): void {
    this.post$ = this.postService.getPost(1);
  }

}
  