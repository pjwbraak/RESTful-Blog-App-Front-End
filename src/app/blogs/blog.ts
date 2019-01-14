export interface IBlog {
    title:  string;
    image:  string;
    body:   string;
    created: string;
    author: {
        id: string,
        username: string
    };
    comments: number [
    ];
}

// not needed for this app, but nice to know how to do:

// export class Product implements IProduct {

//     constructor(public productId: number,
//                 public productName: string,
//                 public productCode: string,
//                 public releaseDate: string,
//                 public price: number,
//                 public description: string,
//                 public starRating: number,
//                 public imageUrl: string) {

//                 }
//     calculateDiscount(percent: number): number {
//         return this.price - (this.price * percent / 100);
//     }

// }
