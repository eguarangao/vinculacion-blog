import {Component, OnInit} from '@angular/core';
import {SidebarService} from  '../../services/sidebar.service'
@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css']
})
export class SiderbarComponent implements OnInit{
  menuItems: any[];
  constructor(private sidebarService: SidebarService) {
    this.menuItems = sidebarService.menu;
  }
  ngOnInit(): void {
  }

}
