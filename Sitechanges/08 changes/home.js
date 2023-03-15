//change1
let person ={
    name: 'muskan',
    age: 23,
    partime: false
};

person['age'] = 25;
showMessage(person.age);


//change2
let person ={
    name: 'muskan',
    age: 23,
    partime: false,
    showinfo: function() {
        showMessage(this.name + 'is' + this.age);
    }
};

person.showinfo();


//change3
const header = document.getElementById('message');

header.style.color = 'blue';


//change4
const button = document.getElementById('see review');

button.addEventListener('click',function() {

    const review = documenr.getElementById('review');

    if (review.classlist.conatins('d-none')) {
        review.classlist.remove('d-none');
        button.textContent = 'CLOSE REVIEW';
    }
    else {
        review.classlist.add('d-none');
        button.textcontext ='SEE REVIEW';
    }
});