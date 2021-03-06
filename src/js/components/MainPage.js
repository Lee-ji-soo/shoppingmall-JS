function MainPage() {
    const $topImg = document.querySelector('#top-img');
    const $shoppingCartImg = document.createElement('img');

    this.turn = 'right';
    this.x = 0;
    this.vx = 5;

    this.stageWidth = document.body.clientWidth;

    this.render = () => {
        if ($topImg && $shoppingCartImg) {
            $topImg.appendChild($shoppingCartImg);
            $shoppingCartImg.classList.add('shoppingCart');
        }

        this.turn = 'right' ? 'right' : 'left'
        $shoppingCartImg.setAttribute('src',
            `../../../images/illustration/shoppingcart-${this.turn}.png`)
    };

    this.resize = () => {
        this.stageWidth = document.body.clientWidth;
    };

    this.animate = () => {
        this.x += this.vx
        if (this.x > this.stageWidth - 150) {
            this.vx *= -1
            this.turn = 'left'
        } else if (this.x < 0) {
            this.vx *= -1
            this.turn = 'right'
        }

        $shoppingCartImg.setAttribute('src',
            `../../../images/illustration/shoppingcart-${this.turn}.png`)

        $shoppingCartImg.style.left = `${this.x}px`
        requestAnimationFrame(this.animate);
    };

    window.requestAnimationFrame(this.animate.bind(this));
    window.addEventListener('resize', this.resize);
    this.render();
}

export default MainPage
