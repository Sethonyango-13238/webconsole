const button=document.getElementById('myButton');

button.addEventListener('click',function(){
    alert('Button was clicked');
});

button.addEventListener('mouseover',functiion(){
    console.log('mouse over the button!');
});


function handleLinkClick(event){
    event.preventDefault();
    alert('Link clicked: ' + event.target.textConcent);
}

const Home=document.getElementById('link1')
const About.us=document.getElementById('link2')
const services=document.getElementById('link3')
const contact=document.getElementById('link4')
const settings=document.getElementById('link5')

Home.addEventListener('click', handleinkClick);
About.us.addEventListener('click', handleinkClick);
services.addEventListener('click', handleinkClick);
contact.addEventListener('click', handleinkClick);
settings.addEventListener('click', handleinkClick);