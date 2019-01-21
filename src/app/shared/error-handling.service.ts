import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ErrorHandlingService {

    noImage = 'https://cdn.shopify.com/s/files/1/1380/9193/t/3/assets/no-image.svg?2375582141201571545';

    srcErrorHandler(event) {
        event.target.src = this.noImage;
    }
}
