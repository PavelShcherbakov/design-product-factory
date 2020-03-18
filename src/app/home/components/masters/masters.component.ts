import { Component, OnInit } from '@angular/core';
import { Master } from 'src/app/shared/models/home/master';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.scss']
})
export class MastersComponent implements OnInit {

  public masters: Master[] = [];

  constructor() { }

  ngOnInit() {
    this.initMasters();
  }

  private initMasters() {
    const m0 = new Master();
    m0.avatar = 'assets/img/home/masters/avatars/master0.svg';
    m0.name = 'Shervin Mashayekh';
    m0.position = 'Additive Product Manager';
    this.masters.push(m0);

    const m1 = new Master();
    m1.avatar = 'assets/img/home/masters/avatars/master1.svg';
    m1.name = 'Kianoosh Keyghobadi';
    m1.position = 'Product Manager at Digikala';
    this.masters.push(m1);

    const m2 = new Master();
    m2.avatar = 'assets/img/home/masters/avatars/master2.svg';
    m2.name = 'Hossein Vahdani';
    m2.position = 'Content marketing specialist';
    this.masters.push(m2);

    const m3 = new Master();
    m3.avatar = 'assets/img/home/masters/avatars/master3.svg';
    m3.name = 'Ali Babaei';
    m3.position = 'Product design consultant';
    this.masters.push(m3);

    const m4 = new Master();
    m4.avatar = 'assets/img/home/masters/avatars/master4.svg';
    m4.name = 'Kiarash Amalivand';
    m4.position = 'Head of product at Ap';
    this.masters.push(m4);

    const m5 = new Master();
    m5.avatar = 'assets/img/home/masters/avatars/master5.svg';
    m5.name = 'Hesam Keramati';
    m5.position = 'Product designer at Bazaar';
    this.masters.push(m5);

    const m6 = new Master();
    m6.avatar = 'assets/img/home/masters/avatars/master6.svg';
    m6.name = 'Hassan Hemati';
    m6.position = 'Product designer at Alibaba';
    this.masters.push(m6);

    const m7 = new Master();
    m7.avatar = 'assets/img/home/masters/avatars/master7.svg';
    m7.name = 'Sheragim Moradi';
    m7.position = 'Marketing manager';
    this.masters.push(m7);

    const m8 = new Master();
    m8.avatar = 'assets/img/home/masters/avatars/master8.svg';
    m8.name = 'Hadi Ebnodin';
    m8.position = 'Service designer';
    this.masters.push(m8);

    const m9 = new Master();
    m9.avatar = 'assets/img/home/masters/avatars/master9.svg';
    m9.name = 'Moslem Ebrahimi';
    m9.position = 'Typeface designer';
    this.masters.push(m9);
  }
}
