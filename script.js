'use strict'

class Calculator{
    #allPic = {
        // 100: 'home.png',
        // 300: 'apartment.png',
        // 500: 'office.png'
    }
    constructor(wrap){
        this.wrapper = document.querySelector(wrap);
        this.pic = this.wrapper.querySelector('.calculator__icon img');
        this.select = this.wrapper.querySelector('select');
        this.price = 100;
        this.rows = this.wrapper.querySelector('.calculator__add');
    }

    getAllPic(){
        [...this.select.children].forEach(elem => {
            this.#allPic[elem.value] = elem.dataset.pic;
        })
    }
    replacePicture(e){
        this.price = +e.target.value;
        this.pic.setAttribute('src', `pic/${this.#allPic[this.price]}`)
        // let t = e.target.dataset.pic;
        // console.log(this.select.children.indexOf())
        // let t = [...e.target.children].filter(elem => elem.selected === true);
        // console.log(t[0].dataset.pic);
        // console.log(this.pic.getAttribute('src'));
        // this.pic.setAttribute('src', `pic/${t[0].dataset.pic}`)
    }
    addDeleteRooms(e){
        if(e.target.matches('.rooms_add')){
            let t = e.target.parentElement.cloneNode(true);
            this.rows.append(t);
        }
    }
    init(){
        console.dir(this);
        this.getAllPic();
        this.select.addEventListener('change', this.replacePicture.bind(this));
        this.rows.addEventListener('click', this.addDeleteRooms.bind(this))
    }
}