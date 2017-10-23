function countUnread() {
    const unreadsArray = document.querySelectorAll('.channel_name .badge.pull-right');
    let counter = 0;
    unreadsArray.forEach((value, index, array) => {
        const innterString = value.innerHTML;
        const parseData = parseInt(innterString, 10);
        if (!isNaN(parseData)) {
            counter += parseData;
        }
    });
    return counter;
}

module.exports = (Franz, options) => {
    Franz.loop(() =>
        Franz.setBadge(countUnread())
    );
};
