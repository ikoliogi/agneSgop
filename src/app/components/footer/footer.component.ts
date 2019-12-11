import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  constructor(
    public ss: SharedService
  ) { }

  ngOnInit() {
  }

}

// sto footer.html gia na exw access sta variables tou service, pleon einai (service).(var)
// to ss einai public epeidh xrhsimopoieitai sthn html
