import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Pic } from '../../pic';
import { PicService } from '../../services/pic.service';

@Component({
  selector: 'app-pic-detail',
  templateUrl: './pic-detail.component.html',
  styleUrls: ['./pic-detail.component.css']
})
export class PicDetailComponent implements OnInit {
  pic: Pic;

  constructor(
    private route: ActivatedRoute,
    private picService: PicService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.detail();
  }

  goBack() {
    this.location.back();
  }

  detail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.picService.getPic(id).subscribe(
        data => this.pic = data,
        err => console.log(err),
      );
  }
}
