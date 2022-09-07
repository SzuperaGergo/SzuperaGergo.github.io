
let currentphoto = 0;
let data = [
    {
        name: 'images/Dolomites.jpg',
        origin: 'Italy',
        title: 'Dolomites',
        text: 'The Dolomites include 18 peaks that are part of the northern Italian alps. Lake Braies, is often called the Pearl among Dolomite Lakes. In the summer, its jewel-toned waters come from reflections of the scenery that surrounds it.',
    },
    {
        name: 'images/Fiji.jpg',
        origin: 'Japan',
        title: 'Fiji',
        text: 'Mount Fuji is ingrained into Japan culture and imagery. Literature from as far back as the 8th century includes references to the active volcano whose last eruption was in the early 1700s.',
    },
    {
        name: 'images/Kirkjufell.jpg',
        origin: 'Iceland',
        title: 'Kirkjufell',
        text: 'Known as the most photographed mountain in all of Iceland, Kirkjufell has a unique location on the Snæfellsnes Peninsula. The peak seems to rise out of the ocean, and the waterfalls that precede it only add to its majestic look.',
    },
    {
        name: 'images/Matterhorn.jpg',
        origin: 'Switzerland',
        title: 'Matterhorn',
        text: 'Standing at 4572 meters on the border between Switzerland and Italy, the Matterhorn is perhaps the most recognized peak in the Alps. The Gornergrat Bahn runs between the town of Zermatt and the mountain itself. ',
    },
    {
        name: 'images/Muchaicang.jpg',
        origin: 'Vietnam',
        title: 'Muchaicang',
        text: 'Mu Cang Chai is home to terraced rice fields that are a shade of green so deep, you will feel like you have stepped into a painting. The rice fields are still harvested today.',
    },
    {
        name: 'images/Reinefjorden.jpg',
        origin: 'Norway',
        title: 'Reinefjorden',
        text: 'Reine may be remote and cold — it is on the Lofoten Archipelago, which sits within the Arctic Circle — but it is breathtaking. The Reinefjorden make for a scenic backdrop, and rorbuer, former cottages used by fishermen that have been converted into tourist accommodations.',
    },
    {
        name: 'images/Vinicuna.jpg',
        origin: 'Peru',
        title: 'Vinicuna',
        text: 'Also known as the Rainbow Mountain, Vinicunca translates to "seven-colored mountain" in the local language spoken in the Cusco region of Peru.',
    },
]




function loadphoto (photoNumber) {
    $('img#front').attr("src", data[photoNumber].name)
    $('h1#picture-title').text(`${data[photoNumber].title}`)
    $('p#picture-text').text(`${data[photoNumber].text}`)
    $('h2#origin').text(`${data[photoNumber].origin}`)
    $('.selected').removeClass('selected');
    $(`#${photoNumber}`).addClass('selected');
    currentphoto = photoNumber;
};

 function loadinThumbnails(item, index) {
    $('.indexPictures').append(`<div class="try" id=${index}></div>`)
    $(`div#${index}`).append(`<img class="thumbnails" onclick="loadphoto(${index})" src=${item.name} alt=""></img>`)
    $(`div#${index}`).append(`<p class="title">${item.title}</p>`)
};

data.forEach(loadinThumbnails)
loadphoto(currentphoto)

$('.arrow.right').click(() => {
    currentphoto++;
    if (currentphoto >= data.length) {
        currentphoto = 0;
    }
    loadphoto(currentphoto);
})

$('.arrow.left').click(() => {
    currentphoto--;
    if (currentphoto <= -1) {
        currentphoto = (data.length-1);
    }
    loadphoto(currentphoto)
})

$('.title').hide()
$('.try img').hover(function() {
	$(this).next('.title').slideDown(100);
}, function() {
	$(this).next('.title').slideUp(100);
});