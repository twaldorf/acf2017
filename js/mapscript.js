var map = document.querySelector(".map")

var programs = document.querySelectorAll(".program-label")

var placeholder = document.getElementById('map-placeholder')

var programlocations = [
    [75,50],
    [42,80],
    [30,85],
    [24,87],
    [24,84],
    [76,76],
    [70,53],
    [40,30],
    [87,80],
    [24,92],
    [28,68],
    [42,4],
    [48,84]
];

for (let i = 0; i < programs.length; i++) {
    programs[i].style.display = 'none';
}

var plabels = document.querySelectorAll(".program-node")

for (let i = 0; i < programlocations.length; i++) {
    plabels[i].style.top = programlocations[i][0] + '%';
    plabels[i].style.left = programlocations[i][1] + '%';
}

//array of booleans that tracks selection with mutual exclusivity (messily)
var selections = [];
var previousSelectionIndex = 0;

var winWidth = window.innerWidth;

//set the width and height of the node bounding box to match the 
document.getElementById('map-bounding-box').style.width = document.getElementById('map').offsetWidth;
document.getElementById('map-bounding-box').style.height = document.getElementById('map').offsetHeight;

for (let i = 0; i< plabels.length; i++) {
    plabels[i].addEventListener('mouseenter', function(event) {
        console.log("mouseover");
        plabels[i].className += ' node-expand'
        plabels[i].className += ' program-node-selected'
        if (selections[i]) {
            plabels[i].classList.remove('node-expand');
            plabels[i].classList.remove('program-node-selected');
        }
    })
    plabels[i].addEventListener('mousedown', function(event) {
        clearSelections();
        select(i);
        placeholderHeight = programs[i].offsetHeight;
        console.log("Selected node: " + i)
    })
    plabels[i].addEventListener('mouseleave', function(event) {
        if (selections[i]) {
            plabels[i].classList.add('node-expand');
            plabels[i].classList.add('program-node-selected');
            // return;
        } else {
            plabels[i].classList.remove('node-expand');
            plabels[i].classList.remove('program-node-selected');
        }
    })
    plabels[i].addEventListener('mouseover', function(event) {
        if (selections[i]) {
            plabels[i].classList.add('node-expand');
            plabels[i].classList.add('program-node-selected');
            plabels[i].classList.add('long-transition');
            programs[i].classList.add('long-transition');
        } else {
            plabels[i].classList.remove('node-expand');
            plabels[i].classList.remove('program-node-selected');
        }
    })
}

function clearSelections() {
    for (let n = 0; n < selections.length; n++) {
        selections[n] = false;
        plabels[n].classList.remove('node-expand');
        plabels[n].classList.remove('program-node-selected');
        programs[n].style.display = 'none';
    }
}

function getMapSize() {
    let width = document.getElementById('map').offsetWidth;
    let height = document.getElementById('map').offsetHeight;
    return [width,height];
}

function select(n) {
    selections[n] = true;
    plabels[n].className += ' node-expand'
    plabels[n].className += ' program-node-selected'
    programs[n].style.display = 'block';
    placeholder.style.display = 'none';
}