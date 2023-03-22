function refreshBox(id) {
    document.getElementById(id).style.color = getRandomColor();
}

function clearBox(id) {
    document.getElementById(id).value = "";
}

function getRandomColor() {
    let hex_nums = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex_nums[Math.floor(Math.random() * 16)];
    }
    return color;
}
