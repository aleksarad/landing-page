/**
 * Global Variables
 */

const sectionName = document.querySelectorAll('section[data-nav]');
const sections = document.querySelectorAll('section');
const navBar = document.querySelector('#navbar__list');
let navItems = [];

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//creates an array using section names
function navNames(arr){
    for(let i=0;i<sectionName.length;i++){
        arr.push(sectionName[i].dataset.nav);
    }
};

navNames(navItems);

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

//build nav 

function buildNav(arr) {
    arr.forEach(function(item){
        let li = document.createElement('li');
        let text = document.createTextNode(item);
        let a = document.createElement('a');
        let sectionId = '#' + item.toLowerCase().replace(/ /g,'');
        li.appendChild(a);
        a.appendChild(text);
        a.setAttribute('href', sectionId);
        a.setAttribute('class', 'links');
        navBar.appendChild(li);
    });
}

buildNav(navItems);

//add active class when section is near top of viewport

const links = document.querySelectorAll('.links');


function changeState() {
    let index = sections.length;
  
    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
    
    links.forEach((link) => link.classList.remove('active'));
    links[index].classList.add('active');
    sections.forEach((section) => section.classList.remove('active-section'));
    sections[index].classList.add('active-section');
};

//changes class on scroll

window.addEventListener('scroll', changeState);

//smooth scroll to anchor

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
//prevents default click event of jumping to section
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});