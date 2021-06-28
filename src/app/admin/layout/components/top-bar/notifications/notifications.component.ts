import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  filteredNewNotifications: any[] = [];
  selectedNewNotificationId: number = 1;

  filteredOldNotifications: any[] = [];
  selectedOldNotificationId: number = 1;

  newNotifications: any[] = [
    {
      id: 1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie felis quis',
      icon: 'info',
      time: '1 hora',
      state: 'old',
      subMenu: 'old-icon'
    },
    {
      id: 2,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie felis quis',
      icon: 'info',
      time: '1 hora',
      state: 'new',
      subMenu: 'new-icon'
    },
    {
      id: 3,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie felis quis',
      icon: 'info',
      time: '1 hora',
      state: 'new',
      subMenu: 'new-icon'
    },
    {
      id: 4,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie felis quis',
      icon: 'info',
      time: '1 hora',
      state: 'new',
      subMenu: 'new-icon'
    },
    {
      id: 5,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie felis quis',
      icon: 'info',
      time: '1 hora',
      state: 'new',
      subMenu: 'new-icon'
    },
  ];

  oldNotifications: any[] = [
    {
      id: 1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie felis quis',
      icon: 'info',
      time: '',
      state: 'old',
      subMenu: 'old-icon'
    },
    {
      id: 2,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie felis quis',
      icon: 'info',
      time: '',
      state: 'old',
      subMenu: 'old-icon'
    },
    {
      id: 3,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie felis quis',
      icon: 'info',
      time: '',
      state: 'old',
      subMenu: 'old-icon'
    },
    {
      id: 4,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie felis quis',
      icon: 'info',
      time: '',
      state: 'old',
      subMenu: 'old-icon'
    }
  ];

  constructor() { 
    this.filteredNewNotifications = this.newNotifications;
    this.filteredOldNotifications = this.oldNotifications;
  }

  updateSelectedNewNotificationId(id: number): void {
    this.selectedNewNotificationId = id;
  }

  updateSelectedOldNotificationId(id: number): void {
    this.selectedOldNotificationId = id;
  }

  ngOnInit(): void {
  }

}
