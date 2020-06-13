// let cardList = [{ name: 'Jax' }, { name: 'Joye' }, { name: 'Jimmy' }, { name: 'Jay' }];
// let backgroundColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];
// const PAGE = {
//   data: {
//     backgroundColors: backgroundColors,
//     defaultDatas: cardList,
//     itemWidth: 100,
//     itemHeight: 100,
//     paddingOffset: 50,
//     zIndex: 0,
//     item: null,
//     itemOffsetTop: null,
//     itemOffsetLeft: null,
//     pageX: null,
//     pageY: null,
//     isLock: true,
//   },
//   init: function () {
//     this.setDefaultData();
//     this.bind();
//   },
//   bind: function () {
//     let cardList = document.getElementById('card-list');
//     this.onEventListener(cardList, 'mousedown', 'card-item', this.handleMouseDown);
//     window.addEventListener('mousemove',this.handleMouseMove);
//     window.addEventListener('mouseup',this.handleMouseUp)
//   },
//   onEventListener: function (parentNode, action, childClassName, callback) {
//     parentNode.addEventListener(action, function (e) {
//       e.target.className.indexOf(childClassName) >= 0 && callback(e);
//     })
//   },
//   handleMouseDown: function (e) {
//     let item = e.target;
//     item.style.zIndex = ++PAGE.data.zIndex;
//     PAGE.data.itemOffsetTop = item.offsetTop;
//     PAGE.data.itemOffsetLeft = item.offsetLeft;
//     PAGE.data.pageX = e.pageX;
//     PAGE.data.pageY = e.pageY;
//     PAGE.data.item = item;
//     PAGE.data.isLock = false;
//   },
//   handleMouseMove: function (e) {
//     if (!PAGE.data.isLock) {
//       let cardList = document.getElementById('card-list');
//       let containerWidth = cardList.offsetWidth;
//       let containerHeight = cardList.offsetHeight;
//       let itemWidth = PAGE.data.itemWidth;
//       let itemHeight = PAGE.data.itemHeight;
//       let paddingOffset = PAGE.data.paddingOffset;
//       let maxWidth = containerWidth - itemWidth - paddingOffset;
//       let maxHeight = containerHeight - itemHeight - paddingOffset;
//       let translateX = e.pageX - PAGE.data.pageX + PAGE.data.itemOffsetLeft;
//       let translateY = e.pageY - PAGE.data.pageY + PAGE.data.itemOffsetTop;
//       translateX = translateX > maxWidth ? maxWidth : translateX;
//       translateY = translateY > maxHeight ? maxHeight : translateY;
//       translateX = translateX < paddingOffset ? paddingOffset : translateX;
//       translateY = translateY < paddingOffset ? paddingOffset : translateY;
//       PAGE.data.item.style.left = translateX + 'px';
//       PAGE.data.item.style.top = translateY + 'px';
//     }
//   },
//   handleMouseUp:function(){
//     PAGE.data.isLock = true
//   },
//   setDefaultData: function () {
//     PAGE.data.defaultDatas.forEach(data => PAGE.addCart(data.name));
//   },
//   addCart: function (name) {
//     let cardList = document.getElementById('card-list');
//     let containerWidth = cardList.offsetWidth;
//     let containerHeight = cardList.offsetHeight;
//     let itemWidth = PAGE.data.itemWidth;
//     let itemHeight = PAGE.data.itemHeight;
//     let paddingOffset = PAGE.data.paddingOffset;
//     let maxWidth = containerWidth - itemWidth - paddingOffset;
//     let maxHeight = containerHeight - itemHeight - paddingOffset;
//     let randomTop = PAGE.randomBetween(paddingOffset, maxHeight);
//     let randomLeft = PAGE.randomBetween(paddingOffset, maxWidth);
//     let zIndex = ++PAGE.data.zIndex;
//     let backgroundColors = PAGE.data.backgroundColors;
//     let backgroundColor = backgroundColors[zIndex % backgroundColors.length];
//     let cardItem = document.createElement('div');
//     cardItem.setAttribute('class', 'card-item');
//     cardItem.innerText = name;
//     let styleStr = `
//       z-index:${zIndex};
//       background:${backgroundColor};
//       top:${randomTop}px;
//       left:${randomLeft}px`;
//     cardItem.setAttribute('style', styleStr);
//     cardList.appendChild(cardItem);
//   },
//   randomBetween: function (min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
//   }
// }
// PAGE.init();


let cardList = [{ age: 14 }, { age: 20 }, { age: 50 }, { age: 5 }];
let backgroundColors = ['#000', '#888', '#ff7', '#f5f'];
let PAGE = {
  data: {
    backgroundColors: backgroundColors,
    defaultDatas: cardList,
    zIndex: 0,
    isLock: true,
    pageY: null,
    pageX: null,
    item: null,
    itemOffsetLeft: null,
    itemOffsetTop: null,
    itemHeight: 100,
    itemWidth: 100,
    paddingOffset: 50,
  },
  init: function () {
    this.setDefaultData();
    this.bind();
  },
  bind: function () {
    let cardList = document.getElementById('card-list');
    this.onEventListener(cardList, 'mousedown', 'card-item', this.handleMouseDown);
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp)
  },
  onEventListener(parentNode, action, childClassName, callback) {
    parentNode.addEventListener(action, function (e) {
      e.target.className.indexOf(childClassName) >= 0 && callback(e);
    })
  },
  handleMouseDown: function (e) {
    let item = e.target;
    item.style.zIndex = ++PAGE.data.zIndex;
    PAGE.data.itemOffsetTop = item.offsetTop;
    PAGE.data.itemOffsetLeft = item.offsetLeft;
    PAGE.data.pageX = e.pageX;
    PAGE.data.pageY = e.pageY;
    PAGE.data.item = item;
    PAGE.data.isLock = false;
  },
  handleMouseMove: function (e) {
    if (!PAGE.data.isLock) {
      let cardList = document.getElementById('card-list');
      let containerWidth = cardList.offsetWidth;
      let containerHeight = cardList.offsetHeight;
      let itemWidth = PAGE.data.itemWidth;
      let itemHeight = PAGE.data.itemHeight;
      let paddingOffset = PAGE.data.paddingOffset;
      let maxWidth = containerWidth - itemWidth - paddingOffset;
      let maxHeight = containerHeight - itemHeight - paddingOffset;
      let translateX = e.pageX - PAGE.data.pageX + PAGE.data.itemOffsetLeft;
      let translateY = e.pageY - PAGE.data.pageY + PAGE.data.itemOffsetTop;
      translateX = translateX > maxWidth ? maxWidth : translateX;
      translateY = translateY > maxHeight ? maxHeight : translateY;
      translateX = translateX < paddingOffset ? paddingOffset : translateX;
      translateY = translateY < paddingOffset ? paddingOffset : translateY;
      PAGE.data.item.style.left = translateX + 'px';
      PAGE.data.item.style.top = translateY + 'px';
    }
  },
  handleMouseUp:function(){
    PAGE.data.isLock = true;
  },
  setDefaultData: function () {
    PAGE.data.defaultDatas.forEach(data => PAGE.addCard(data.age))
  },
  addCard: function (name) {
    let cardList = document.getElementById('card-list');
    let containerWidth = cardList.offsetWidth;
    let containerHeight = cardList.offsetHeight;
    let itemWidth = PAGE.data.itemWidth;
    let itemHeight = PAGE.data.itemHeight;
    let paddingOffset = PAGE.data.paddingOffset;
    let maxWidth = containerWidth - itemWidth - paddingOffset;
    let maxHeight = containerHeight - itemHeight - paddingOffset;
    let randomTop = PAGE.randomBetween(paddingOffset, maxHeight);
    let randomLeft = PAGE.randomBetween(paddingOffset, maxWidth);
    let zIndex = ++PAGE.data.zIndex;
    let backgroundColors = PAGE.data.backgroundColors;
    let backgroundColor = backgroundColors[zIndex % backgroundColors.length];
    let cardItem = document.createElement('div');
    cardItem.setAttribute('class', 'card-item');
    cardItem.innerText = name;
    let styleStr = `
      z-index:${zIndex};
      background:${backgroundColor};
      top:${randomTop}px;
      left:${randomLeft}px;`;
    cardItem.setAttribute('style', styleStr);
    cardList.appendChild(cardItem);
  },
  randomBetween: function (min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
}
PAGE.init()