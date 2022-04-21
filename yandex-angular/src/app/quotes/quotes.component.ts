import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html'
})
export class QuotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  quotesItems = [
    {
      name: 'USD ЦБ',
      date: '25 декабря',
      imgSrc: '../../assets/images/graf-1.png',
      price: '73,19 ₽',
      differentPrice: ''
    },
    {
      name: 'EUR ЦБ',
      date: '25 декабря',
      imgSrc: '../../assets/images/graf-2.png',
      price: '82,93 ₽',
      differentPrice: ''
    },
    {
      name: 'USD MOEX',
      date: '24 декабря',
      imgSrc: '../../assets/images/graf-3.png',
      price: '73,65 ₽',
      differentPrice: '+0,33'
    },
    {
      name: 'EUR MOEX',
      date: '24 декабря',
      imgSrc: '../../assets/images/graf-4.png',
      price: '83,27 ₽',
      differentPrice: '+0,17'
    },
    {
      name: 'Нефть',
      date: '24 декабря',
      imgSrc: '../../assets/images/graf-5.png',
      price: '75,75 $',
      differentPrice: '-1.55%'
    }
  ]

}
