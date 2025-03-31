document.querySelector('.item-title-container').addEventListener('wheel', function(event) {
    event.preventDefault();
    
    // スクロール量を計算
    const delta = event.deltaY;
    
    // 現在のスクロール位置に加算
    this.scrollTop += delta;
});
