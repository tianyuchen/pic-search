import { Component, OnInit } from '@angular/core';

import { Pic } from '../pic';
import { PicService } from '../pic.service';

@Component({
  selector: 'app-pic-search',
  templateUrl: './pic-search.component.html',
  styleUrls: ['./pic-search.component.css']
})
export class PicSearchComponent implements OnInit {
  pics: Pic[];

  constructor(private picService: PicService) {}

  search(term: string): void {
    this.picService.getPics(term).subscribe(
      data => this.pics = data.hits,
      err => console.log(err)
    );
  }

  ngOnInit(): void {
  }

}
