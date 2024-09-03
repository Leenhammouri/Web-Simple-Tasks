const Review = {
    reviews: [],
    reviewNo: 1,

    addNewReview: function (pName, pMajor, pImage, pReview) {
        const newReview = {
            personName: pName,
            personMajor: pMajor,
            personImage: pImage,
            personReview: pReview
        };

        this.reviews.push(newReview);
    },

    printAllReviews: function () {
        this.reviews.forEach(element => {
            console.log(element);
        });
    },

    nextReview: function () {
        const pname = document.getElementById('person-name');
        const pimg = document.getElementById('person-img');
        const pmajor = document.getElementById('person-major');
        const preview = document.getElementById('person-review');

        if (this.reviewNo < this.reviews.length) {
            pname.innerText = this.reviews[this.reviewNo].personName;
            pmajor.innerText = this.reviews[this.reviewNo].personMajor;
            preview.innerText = this.reviews[this.reviewNo].personReview;
            pimg.src = this.reviews[this.reviewNo].personImage;
            this.reviewNo++;

        }
        else {
            this.reviewNo = 0;
        }

    }
    ,
    prevReview: function () {
        const pname = document.getElementById('person-name');
        const pimg = document.getElementById('person-img');
        const pmajor = document.getElementById('person-major');
        const preview = document.getElementById('person-review');

        if (this.reviewNo >= 0) {
            pname.innerText = this.reviews[this.reviewNo].personName;
            pmajor.innerText = this.reviews[this.reviewNo].personMajor;
            preview.innerText = this.reviews[this.reviewNo].personReview;
            pimg.src = this.reviews[this.reviewNo].personImage;
            this.reviewNo--;
        }
        else
            this.reviewNo = this.reviews.length - 1;


    },
    randomReview: function () {
        const pname = document.getElementById('person-name');
        const pimg = document.getElementById('person-img');
        const pmajor = document.getElementById('person-major');
        const preview = document.getElementById('person-review');

        let r = Math.floor(Math.random() * 4);
        pname.innerText = this.reviews[r].personName;
        pmajor.innerText = this.reviews[r].personMajor;
        preview.innerText = this.reviews[r].personReview;
        pimg.src = this.reviews[r].personImage;

        this.reviewNo = r;
    }

};

Review.addNewReview('Susan Smith', 'WEB DEVELOPER', './img/person-1.jpeg', "I'm baby meggings twee health goth + 1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry");
Review.addNewReview('Anna Johnson', 'WEB DESIGNER', './img/person-2.jpeg', "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.");
Review.addNewReview('Peter Jones', 'INTERN', './img/person-4.jpeg', "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.");
Review.addNewReview('Bill Anderson', 'THE BOSS', './img/person-3.jpeg', "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.");

Review.printAllReviews();

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const surpriseBtn = document.getElementById("Surprise");


nextBtn.addEventListener('click', () => {
    Review.nextReview();
})

prevBtn.addEventListener('click', () => {
    Review.prevReview();
})


surpriseBtn.addEventListener('click', () => {
    Review.randomReview();
})
