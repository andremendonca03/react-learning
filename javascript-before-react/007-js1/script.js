const menu = {
  selector: '.principal',
  active() {
    const menuElement = document.querySelector(this.selector);
    menuElement.classList.add('active');
  },
};

menu.selector;
menu.active();
menu.hasOwnProperty('class');
