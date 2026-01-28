window.addEventListener('message', function(event) {
    const data = event.data;

    if (data.action === "showUI") {
        document.getElementById('app').style.display = data.visible ? 'block' : 'none';
    }

    if (data.action === "updateCategory") {
        const catList = document.getElementById('category-list');
        catList.innerHTML = '';
        data.categories.forEach((cat, i) => {
            const el = document.createElement('div');
            el.className = `cat-item ${i === data.index - 1 ? 'active' : ''}`;
            el.innerText = cat;
            catList.appendChild(el);
        });
        document.getElementById('category-name').innerText = data.categories[data.index - 1];
    }

    if (data.action === "updateElements") {
        const btnList = document.getElementById('button-list');
        btnList.innerHTML = '';
        data.elements.forEach((item, i) => {
            const el = document.createElement('div');
            el.className = `menu-item ${i === data.hovered - 1 ? 'active' : ''}`;
            el.innerHTML = `<span>${item.label}</span> <span>${item.rightLabel || ''}</span>`;
            btnList.appendChild(el);
        });
        document.getElementById('item-count').innerText = `${data.hovered} / ${data.elements.length}`;
    }
});