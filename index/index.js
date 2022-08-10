// 导航条每项添加蓝线效果
var items = document.querySelectorAll('.item_line')
for (let item of items) {
    item.addEventListener('mouseover', function () {
        for (let i = 0; i < items.length; i++) {//先移除所有的
            items[i].classList.remove('item_animation');
        }
        this.classList.add('item_animation');
    })

    item.addEventListener('mouseout', function () {
        this.classList.remove('item_animation');
    })
}

// 导航条搜索框聚焦效果
var searchbarWrap=document.querySelector('.searchbar_wrap')
searchbarWrap.addEventListener('mouseover', function(e) {
    searchbarWrap.style.borderColor = '#515151';
})
searchbarWrap.addEventListener('mouseout', function(e) {
    searchbarWrap.style.borderColor = '#C2C8D1';
})
