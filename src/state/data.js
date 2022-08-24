export const prices = {
  //key: '',
  ekskovatorpogr: 0,
  samosval: 0,
  bulldozer: 0,

  // set setKey(value) {
  //   this.key = value;
  // },

  // set setValue(value) {
  //   this[this.key] = value
  // },

  set setEkskovatorpogrPreis(value) {
    this.ekskovatorpogr = value;
  },
  set setSamosvalPreis(value) {
    this.samosval = value;
  },
  set setBulldozerPreis(value) {
    this.bulldozer = value;
  },
};

export const currentKeyName = {
  
  currentKeyName: '',
  
  set setCurrentKeyName(value) {
    this.currentKeyName = value;
  },
};


//hardcoded data-----------------------------------------------------------------------------------------

export const sectionName = {
  ekskovatorpogr: 'Экскаватор- погрузчик',
  samosval: 'Самосвал',
  frontal: 'Фронтальный погрузчик',
  bulldozer: 'Бульдозер'
}

export const srcPath = {
  ekskovatorpogr: '../../assets/img/ekskovatorpogr.png',
  samosval: '../../assets/img/samosval.jpg',
  frontal: '../../assets/img/frontal.jpg',
  bulldozer: '../../assets/img/bulldozer.png',
  
}

export const description = {

  ekskovatorpogr: 'В нашем парке погрузчики JCB, New Holland, Caterpillar.Экскаватор-погрузчик является одной из самых популярных и универсальных спецмашин, ведь он пригоден для рытья и засыпки траншей, погрузки материалов, очистке дорог от снега, челюстным захватом погрузчика можно грузить брёвна.',

  samosval: 'Самосвал- самый популярный заказ у клиентов. К вашим услугам модельный ряд пригодный к любым видам транспортировок: Камаз 13 тонн, Камаз 20 тонн . HOWO, Dong Fang, FAW 30 тонн. Основным пердназнначением самосвала является перемещение инертных грузов- от полужитких, до сыпучих, навальных. Кузов самосвала оборудован саморазружающимся механизмом и незаменим при перевозке земли и камня, руды и песка, щебня, гравия и угля, асфальта, различных бетонных смесей, зерна, картофеля и другой сельскохозяйственной продукции и строительных материалов.',

  frontal: 'У нас представлены погрузчики LG 936 — ковш 2 м³ , LG 953 — ковш 3 м³. Для рытья, транспортировки, формирования грунта. Эта машина также пригодна для буксировки другого оборудования на небольшие расстояния и незаменима для карьерных работ.',

  bulldozer: 'В парке представлены модели Т-130, T-170, Б-12 , ТМ-10 всего тонажностью от 14 до 23 тонн.Такая тяжёлая техника как бульдозер может быть незаменима для копания, перемещения грунта, планировки территорий. Тоннажность следует выбрать от характера и объёма предстоящих работ- поставьте задачу, наш менеджер предложит вам варианты!',
  
}


export const backgroundColorsForChart = ['#fcf80d', '#ff5500', '#5bed00','#05f7d7',
'#05aff7', '#0045c4', '#c300ff', '#ff0000', '#8f8c03', '#f5a37a', '#ffffff', '#008200'];