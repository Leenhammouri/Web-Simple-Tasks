const history = document.querySelector('.history');
const vision = document.querySelector('.vision');
const goals = document.querySelector('.goals');

const title = document.querySelector('.tab-title');
const paragraph = document.querySelector('.tab-paragraph');

const list = document.querySelector('.list');

function changeTab(tabName) {

    history.classList.remove('active');
    vision.classList.remove('active');
    goals.classList.remove('active');
    list.innerHTML = ' ';

    if (tabName === 'history') {

        title.innerText = 'History';
        paragraph.innerText = "I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop - up XOXO lomo kombucha glossier bicycle rights.Umami kinfolk salvia jean shorts offal venmo.Knausgaard tilde try-hard, woke fixie banjo man bun.Small batch tumeric mustache tbh wayfarers 8 - bit shaman chartreuse tacos.Viral direct trade hoodie ugh chambray, craft beer pork  belly flannel tacos single - origin coffee art party migas plaid pop - up."
        history.classList.add('active');

    } else if (tabName === 'vision') {

        title.innerText = 'Vision';
        paragraph.innerText = "Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal."
        vision.classList.add('active');

        const ul = document.createElement('ul');
        const li1 = document.createElement('li');
        const li2 = document.createElement('li');
        const li3 = document.createElement('li');
        li1.innerText = 'list item 1';
        ul.appendChild(li1);
        li2.innerText = 'list item 2'
        ul.appendChild(li2);
        li3.innerText = 'list item 3'
        ul.appendChild(li3);

        list.appendChild(ul);

    } else if (tabName === 'goals') {

        title.innerText = 'Goals';
        paragraph.innerText = "Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones."
        goals.classList.add('active');

    }
}


history.addEventListener('click', () => { changeTab('history') });
vision.addEventListener('click', () => { changeTab('vision') });
goals.addEventListener('click', () => { changeTab('goals') });

