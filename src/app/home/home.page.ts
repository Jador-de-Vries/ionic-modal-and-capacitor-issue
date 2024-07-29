import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GoogleMap } from '@capacitor/google-maps';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonModal } from '@ionic/angular/standalone'
import { TestModalComponent } from '../test-modal/test-modal.component';
import { ModalController} from '@ionic/angular/standalone'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, RouterLink, IonFab, IonFabButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ModalController]
})
export class HomePage implements AfterViewInit {
  
  api = "API_KEY"
  @ViewChild('map')
  mapRef!: ElementRef<HTMLElement>
  map!: GoogleMap

  constructor(private modal: ModalController) {}
  
  async ngAfterViewInit() {

    this.map = await GoogleMap.create({
      id: 'map',
      element: this.mapRef.nativeElement,
      apiKey: this.api,
      config: {
        center: {
          // The initial position to be rendered by the map
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
      }
    })
  }

  async showModal() {
    const modal = await this.modal.create({
      component: TestModalComponent,
      breakpoints: [0, 0.3],
      initialBreakpoint: 0.3,
      cssClass: 'small-modal'
    })
    await modal.present();
  }
}
