import './heading.css';

class Heading{
    create(text){
        const heading = document.createElement('h2');
        heading.innerText = text;
        heading.classList.add('main-tittle');
        document.querySelector('body').appendChild(heading)
    }
} export default Heading;