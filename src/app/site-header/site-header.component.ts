import { Component, OnInit, ViewEncapsulation, PLATFORM_ID, Inject, Injectable } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import * as $ from 'jquery';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SiteHeaderComponent implements OnInit {
  selection: String = 'home';
  menuOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    $(window).on('scroll touchmove', function(){
      if($(window).scrollTop() >= 1){
        $(".header").addClass("scrolled");
      }else{
        $(".header").removeClass("scrolled");
      }
    });
  }

  select(item) {
    console.log(this.selection, item);
    this.selection = item;
    /*this.variables.setPage(item);*/
    this.menuOpen = false;
    /*
    this.variables.setMenuOpen(false);
        console.log('selected !!!', this.selection);
    */
  }

}
