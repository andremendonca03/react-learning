const countLetters = word => word.length;

class Menu {
   constructor(menu) {
      this.menuElement = document.querySelector(menu);
      this.activeClass = 'active';
   }
   activate(mocka) {
      return mocka;
   }
}

const nav = new Menu(`nav`);
nav.activate('dias');