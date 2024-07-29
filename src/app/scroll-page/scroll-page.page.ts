import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-scroll-page',
  templateUrl: './scroll-page.page.html',
  styleUrls: ['./scroll-page.page.scss'],
  standalone: true,
  imports: [IonLabel, IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NgFor]
})
export class ScrollPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
