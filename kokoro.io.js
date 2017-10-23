function checkUnread() {
    const unreadsArray = document.querySelectorAll('.channel_name .badge.pull-right');

    let counter = 0;
    unreadsArray.forEach((value, index, array) => {
        const innterString = value.innerHTML;
        const parseData = parseInt(innterString, 10);
        if(!isNaN(parseData)) {
            counter += parseData;
        }
    });
    updateBadge(counter);
}

function updateBadge(e) {
    e >= 1 ? document.title = "(" + e + ") " + originalTitle : 
    document.title = originalTitle
}
var originalTitle = document.title;
setInterval(checkUnread, 5000);