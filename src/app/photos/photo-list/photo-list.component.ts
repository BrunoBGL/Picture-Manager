import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit{
  
  photos: Photo[] = [];
  filter: string ='';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';
  
  constructor(
    private photoService: PhotoService,
    private activateRoute: ActivatedRoute
    ){}
    
  ngOnInit(): void{
    this.userName = this.activateRoute.snapshot.params.userName;
    this.photos = this.activateRoute.snapshot.data.photos;
  }

  load(){
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.filter = '';
        this.photos = this.photos.concat(photos);
        if(!photos.length) this.hasMore = false;
      });

  }
  
}
