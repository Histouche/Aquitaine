import {Component, Inject, OnInit, PLATFORM_ID, ViewEncapsulation} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnnonceInterface} from '../interfaces/annonce-interface';
import { Data, DataService } from '../services/data.service';
import { SearchPipe } from '../pipes/search-pipe.pipe';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-list-annonce',
  templateUrl: './list-annonce.component.html',
  styleUrls: ['./list-annonce.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListAnnonceComponent implements OnInit {


  public datas;
  /* search filter */
  public search: any = '';
  /* */
  thumbLabel = true;
  value = 0;
  groups = [
    {value: 'chambre-simple', viewValue: 'Chambre simple'},
    {value: 'chambre-double', viewValue: 'Chambre double'},
    {value: 'chambre-familiale', viewValue: 'Chambres familiale'},
    {value: 'chambre-multiples', viewValue: 'Chambres multiples'}
  ];
  annonceList: any[] = [];
  annonces: any[] = []


  constructor(@Inject(PLATFORM_ID) private platformId: Object, private _dataService: DataService) {
  }

  ngOnInit() {
    this._dataService.getJSON().subscribe(data => {
      console.log(data);
      this.datas = data;
    });
    if (isPlatformBrowser(this.platformId)) {
      $('.affiner-recherche').on('click', function () {
          $('.filtres').addClass('open');
      });
      $('.close-filtres').on('click', function () {
        $('.filtres').removeClass('open');
      });
      $('.sidebar').removeClass('active');
    }
    this.annonceList = [
      {
        'titleAnnonce': 'Pullman Bordeaux Lac',
        'imgMiniature': 'https://imgio.trivago.com/itemimages/12/33/12330_v9_isq@2x.jpeg',
        'prix': 70,
        'prixAP': 60,
        'note': 8,
        'etoiles': '',
        'ville': 'Bordeaux',
        'chambreSimple' : 'oui',
        'chambreDouble': 'oui',
        'chambreFamiliale': 'non',
        'nbAvis' : 8,
        'etoile' : 3
      },
      {
        'titleAnnonce': 'Bordeaux Centre',
        'imgMiniature': 'https://imgio.trivago.com/itemimages/12/33/12330_v9_isq@2x.jpeg',
        'note': 6,
        'etoiles': '',
        'ville': 'Bordeaux',
        'prix': 65,
        'prixAP': 50,
        'chambreSimple' : 'oui',
        'chambreDouble': 'oui',
        'chambreFamiliale': 'non',
        'nbAvis' : 15,
        'etoile' : 4
      },
      {
        'titleAnnonce': 'Jardins du marais',
        'imgMiniature': 'https://imgio.trivago.com/itemimages/12/33/12330_v9_isq@2x.jpeg',
        'note': 7,
        'etoiles': '',
        'ville': 'Bordeaux',
        'prix': 45,
        'prixAP': 40,
        'chambreSimple' : 'oui',
        'chambreDouble': 'non',
        'chambreFamiliale': 'non',
        'nbAvis' : 26,
        'etoile' : 3
      }
    ];
    this.annonces = [{"hotel":{"ville":{"id":1,"nom":"Bordeaux","cp":33300,"__initializer__":null,"__cloner__":null,"__isInitialized__":true},"id":1,"nom":"H\u00f4tel Vatel Bordeaux","adresse":"4 cours de M\u00e9doc","nbchambre":12,"tel":"0556110111","anneconstruction":{"timezone":{"name":"UTC","transitions":[{"ts":-9223372036854775808,"time":"-292277022657-01-27T08:29:52+0000","offset":0,"isdst":false,"abbr":"UTC"}],"location":{"country_code":"??","latitude":0,"longitude":0,"comments":""}},"offset":0,"timestamp":832118400},"nbetoile":4,"emailcontact":"reception.bordeaux@hotelvatel.fr","__initializer__":null,"__cloner__":null,"__isInitialized__":true},"id":1,"nom":"Chambre Double ou lits jumeaux - Sup\u00e9rieure","nbmcarre":70,"nbpiece":2,"nbsdb":1,"nbchambre":1,"nbpersonne":2,"nblitsolo":0,"nblitdouble":1,"animal":false,"douche":true,"baignoire":false,"tv":true,"wifi":true,"telephone":true,"image1":"573f7fc798440fc3ab0f07258cbbd5aa.jpeg","image2":"5faa403e28455dfb8135cbaf163b92c9.jpeg","image3":"8eda22711dd5c5d18d76e46a7586baff.jpeg","image4":"","image5":"","prix":249,"datepublication":{"timezone":{"name":"UTC","transitions":[{"ts":-9223372036854775808,"time":"-292277022657-01-27T08:29:52+0000","offset":0,"isdst":false,"abbr":"UTC"}],"location":{"country_code":"??","latitude":0,"longitude":0,"comments":""}},"offset":0,"timestamp":1528321534},"reservationChambre":null},{"hotel":{"ville":{"id":1,"nom":"Bordeaux","cp":33300,"__initializer__":null,"__cloner__":null,"__isInitialized__":true},"id":2,"nom":"Hotel Stars Bordeaux Gare","adresse":"34 Rue De Tauzia","nbchambre":12,"tel":"0157324964","anneconstruction":{"timezone":{"name":"UTC","transitions":[{"ts":-9223372036854775808,"time":"-292277022657-01-27T08:29:52+0000","offset":0,"isdst":false,"abbr":"UTC"}],"location":{"country_code":"??","latitude":0,"longitude":0,"comments":""}},"offset":0,"timestamp":464313600},"nbetoile":2,"emailcontact":"contact@hotelstar.com","__initializer__":null,"__cloner__":null,"__isInitialized__":true},"id":2,"nom":"Double Standard - Chambre Seulement","nbmcarre":25,"nbpiece":2,"nbsdb":1,"nbchambre":1,"nbpersonne":2,"nblitsolo":0,"nblitdouble":1,"animal":false,"douche":true,"baignoire":false,"tv":true,"wifi":true,"telephone":true,"image1":"da9571b1cbe6d0533639f8533e26cd07.jpeg","image2":"","image3":"","image4":"","image5":"","prix":52,"datepublication":{"timezone":{"name":"UTC","transitions":[{"ts":-9223372036854775808,"time":"-292277022657-01-27T08:29:52+0000","offset":0,"isdst":false,"abbr":"UTC"}],"location":{"country_code":"??","latitude":0,"longitude":0,"comments":""}},"offset":0,"timestamp":1528321996},"reservationChambre":null},{"hotel":{"ville":{"id":1,"nom":"Bordeaux","cp":33300,"__initializer__":null,"__cloner__":null,"__isInitialized__":true},"id":3,"nom":"ibis Styles Bordeaux Meriadeck","adresse":"54 Rue Joseph Abria","nbchambre":34,"tel":"01 57 32 38 78","anneconstruction":{"timezone":{"name":"UTC","transitions":[{"ts":-9223372036854775808,"time":"-292277022657-01-27T08:29:52+0000","offset":0,"isdst":false,"abbr":"UTC"}],"location":{"country_code":"??","latitude":0,"longitude":0,"comments":""}},"offset":0,"timestamp":320803200},"nbetoile":3,"emailcontact":"contact@ibishotel.fr","__initializer__":null,"__cloner__":null,"__isInitialized__":true},"id":3,"nom":"Chambre Standard","nbmcarre":15,"nbpiece":1,"nbsdb":1,"nbchambre":1,"nbpersonne":3,"nblitsolo":2,"nblitdouble":0,"animal":false,"douche":true,"baignoire":false,"tv":true,"wifi":true,"telephone":true,"image1":"213eac9de19a1d1f4c2c5f1955e9344d.jpeg","image2":"faf87b97c2eee77603ee276b4ea138b2.jpeg","image3":"","image4":"","image5":"","prix":156,"datepublication":{"timezone":{"name":"UTC","transitions":[{"ts":-9223372036854775808,"time":"-292277022657-01-27T08:29:52+0000","offset":0,"isdst":false,"abbr":"UTC"}],"location":{"country_code":"??","latitude":0,"longitude":0,"comments":""}},"offset":0,"timestamp":1528322771},"reservationChambre":null},{"hotel":{"ville":{"id":1,"nom":"Bordeaux","cp":33300,"__initializer__":null,"__cloner__":null,"__isInitialized__":true},"id":4,"nom":"Le Boutique Hotel Bordeaux","adresse":"1 rue des Lillas","nbchambre":8,"tel":"0345635786","anneconstruction":{"timezone":{"name":"UTC","transitions":[{"ts":-9223372036854775808,"time":"-292277022657-01-27T08:29:52+0000","offset":0,"isdst":false,"abbr":"UTC"}],"location":{"country_code":"??","latitude":0,"longitude":0,"comments":""}},"offset":0,"timestamp":99964800},"nbetoile":5,"emailcontact":"contact@leboutique.com","__initializer__":null,"__cloner__":null,"__isInitialized__":true},"id":4,"nom":"Junior Suite","nbmcarre":85,"nbpiece":4,"nbsdb":2,"nbchambre":2,"nbpersonne":5,"nblitsolo":1,"nblitdouble":2,"animal":false,"douche":true,"baignoire":true,"tv":true,"wifi":true,"telephone":true,"image1":"57f4897a8dba835d392d4bbc2dcb79b5.jpeg","image2":"eeebf3edda4220c6d2d4c024f0a3a506.jpeg","image3":"802ac6e71e50a45b228081bb68b8b2e4.jpeg","image4":"","image5":"","prix":495,"datepublication":{"timezone":{"name":"UTC","transitions":[{"ts":-9223372036854775808,"time":"-292277022657-01-27T08:29:52+0000","offset":0,"isdst":false,"abbr":"UTC"}],"location":{"country_code":"??","latitude":0,"longitude":0,"comments":""}},"offset":0,"timestamp":1528322988},"reservationChambre":null},{"hotel":{"ville":{"id":2,"nom":"Pau","cp":64000,"__initializer__":null,"__cloner__":null,"__isInitialized__":true},"id":5,"nom":"Best Western Continental","adresse":"2 Rue Du Marechal Foch","nbchambre":12,"tel":"0156347894","anneconstruction":{"timezone":{"name":"UTC","transitions":[{"ts":-9223372036854775808,"time":"-292277022657-01-27T08:29:52+0000","offset":0,"isdst":false,"abbr":"UTC"}],"location":{"country_code":"??","latitude":0,"longitude":0,"comments":""}},"offset":0,"timestamp":-1113523200},"nbetoile":3,"emailcontact":"contact@bestwestern.fr","__initializer__":null,"__cloner__":null,"__isInitialized__":true},"id":5,"nom":"Chambre Classique, 2 lits une place","nbmcarre":20,"nbpiece":2,"nbsdb":1,"nbchambre":1,"nbpersonne":2,"nblitsolo":2,"nblitdouble":0,"animal":true,"douche":true,"baignoire":false,"tv":true,"wifi":true,"telephone":true,"image1":"d53edd581eddb8ffe516db12e4dc3efb.jpeg","image2":"9212f1eba9f733b5856df1f7cd0cc49c.jpeg","image3":"","image4":"","image5":"","prix":70,"datepublication":{"timezone":{"name":"UTC","transitions":[{"ts":-9223372036854775808,"time":"-292277022657-01-27T08:29:52+0000","offset":0,"isdst":false,"abbr":"UTC"}],"location":{"country_code":"??","latitude":0,"longitude":0,"comments":""}},"offset":0,"timestamp":1528323391},"reservationChambre":null},{"hotel":{"ville":{"id":2,"nom":"Pau","cp":64000,"__initializer__":null,"__cloner__":null,"__isInitialized__":true},"id":6,"nom":"H\u00f4tel Parc Beaumont Pau - MGallery by Sofitel","adresse":"1 Avenue Edouard VII","nbchambre":54,"tel":"0476567845","anneconstruction":{"timezone":{"name":"UTC","transitions":[{"ts":-9223372036854775808,"time":"-292277022657-01-27T08:29:52+0000","offset":0,"isdst":false,"abbr":"UTC"}],"location":{"country_code":"??","latitude":0,"longitude":0,"comments":""}},"offset":0,"timestamp":880329600},"nbetoile":4,"emailcontact":"contact@sofitel.com","__initializer__":null,"__cloner__":null,"__isInitialized__":true},"id":6,"nom":"Suite deluxe","nbmcarre":45,"nbpiece":3,"nbsdb":1,"nbchambre":1,"nbpersonne":2,"nblitsolo":0,"nblitdouble":1,"animal":false,"douche":true,"baignoire":true,"tv":true,"wifi":true,"telephone":true,"image1":"5c0f35e444a8c57267ef46eb285b749d.jpeg","image2":"8093906f322444905e5417f3354a935c.jpeg","image3":"65cd1d010dd87c2f0c4245dab3e4a296.jpeg","image4":"c8ba9d6728c577e27212debc27818973.jpeg","image5":"","prix":383,"datepublication":{"timezone":{"name":"UTC","transitions":[{"ts":-9223372036854775808,"time":"-292277022657-01-27T08:29:52+0000","offset":0,"isdst":false,"abbr":"UTC"}],"location":{"country_code":"??","latitude":0,"longitude":0,"comments":""}},"offset":0,"timestamp":1528323997},"reservationChambre":null},{"hotel":{"ville":{"id":3,"nom":"M\u00e9rignac","cp":33700,"__initializer__":null,"__cloner__":null,"__isInitialized__":true},"id":7,"nom":"Campanile Bordeaux Ouest M\u00e9rignac A\u00e9roport","adresse":"71 Av John Fitzgerald Kennedy Chemin de Magret Merignac Gironde","nbchambre":10,"tel":"0126735696","anneconstruction":{"timezone":{"name":"UTC","transitions":[{"ts":-9223372036854775808,"time":"-292277022657-01-27T08:29:52+0000","offset":0,"isdst":false,"abbr":"UTC"}],"location":{"country_code":"??","latitude":0,"longitude":0,"comments":""}},"offset":0,"timestamp":888624000},"nbetoile":3,"emailcontact":"contact@campanile.com","__initializer__":null,"__cloner__":null,"__isInitialized__":true},"id":7,"nom":"Chambre Double (Next Generation)","nbmcarre":18,"nbpiece":2,"nbsdb":1,"nbchambre":1,"nbpersonne":2,"nblitsolo":0,"nblitdouble":1,"animal":false,"douche":true,"baignoire":false,"tv":true,"wifi":true,"telephone":false,"image1":"757e6b16d609bc7faca8e4f5e068fb86.jpeg","image2":"832afb2ab7367c9f0aa195cc7fc3fd44.jpeg","image3":"","image4":"","image5":"","prix":82,"datepublication":{"timezone":{"name":"UTC","transitions":[{"ts":-9223372036854775808,"time":"-292277022657-01-27T08:29:52+0000","offset":0,"isdst":false,"abbr":"UTC"}],"location":{"country_code":"??","latitude":0,"longitude":0,"comments":""}},"offset":0,"timestamp":1528324331},"reservationChambre":null}]
    ;
  }
  objectKeys(obj) {
    return Object.keys(obj);
  }


}
