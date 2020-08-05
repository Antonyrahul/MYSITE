import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles
  isloaded = false;
  constructor(private productservice :ProductService) {
    this.productservice.getnews().subscribe((data)=>{
      console.log(data.data.articles)
      this.articles = data.data.articles
      this.isloaded = true;
      //this.prod = data.data
  })
   }

  ngOnInit(): void {
  }

}
