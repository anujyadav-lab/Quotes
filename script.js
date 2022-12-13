generate = ()=>{
    var quotes ={
        "-einstein":'"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it is beauty."',
        "-Anuj Yadav":' " Give your all,give best,give 100% and win 100% get day by day stronger and be a good person."'

    }
    var authors = Object.keys(quotes);
    // console.log(authors);
     var author = authors[Math.floor(Math.random()* authors.length)];
     var quote = quotes[author];
     document.getElementById("quote").innerHTML = quote;
     document.getElementById("author").innerHTML = author;
}







