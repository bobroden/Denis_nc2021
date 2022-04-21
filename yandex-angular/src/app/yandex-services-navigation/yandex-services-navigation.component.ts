import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yandex-services-navigation',
  templateUrl: './yandex-services-navigation.component.html'
})
export class YandexServicesNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navigationItems = [
    {
      imageSrc: '../../assets/icons/services.svg',
      name: 'Маркет'
    },
    {
      imageSrc: '../../assets/icons/video.svg',
      name: 'Видео'
    },
    {
      imageSrc: '../../assets/icons/images.svg',
      name: 'Картинки'
    },
    {
      imageSrc: '../../assets/icons/news.svg',
      name: 'Новости'
    },
    {
      imageSrc: '../../assets/icons/autoru.svg',
      name: 'Карты'
    },
    {
      imageSrc: '../../assets/icons/translate.svg',
      name: 'Переводчик'
    },
    {
      imageSrc: '../../assets/icons/music.svg',
      name: 'Музыка'
    },
    {
      imageSrc: '../../assets/icons/tv.svg',
      name: 'Программа'
    },
    {
      imageSrc: '../../assets/icons/autoru.svg',
      name: 'Авто.ру'
    }
  ]

}
