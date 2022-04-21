import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newsItems = [
    {
      src: '../../assets/images/news-1.webp',
      text: 'Госдума приняла в 1 чтении законопроект о введении QR-кодов в общественных местах'
    },
    {
      src: '../../assets/images/news-2.webp',
      text: 'Bloomberg: новые санкции ЕС и США против России могут повлиять на оборонные компании'
    },
    {
      src: '../../assets/images/news-3.webp',
      text: 'Сокуров извинился перед членами СПЧ за свой спор с Путиным'
    },
    {
      src: '../../assets/images/news-1.webp',
      text: 'НАТО заявило о готовности к диалогу с Россией при условии деэскалации с Украиной'
    },
    {
      src: '../../assets/images/news-2.webp',
      text: 'РВСН планирует выпустить около 10 континентальных ракет'
    }
  ]

}
