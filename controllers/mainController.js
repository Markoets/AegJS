exports.getMainPage =  (request, response)=>{
    Wish.fetchWishes(wishes =>{
        console.log(wishes);



        let today = date.getDate();
        response.render('index', {dateToRender: today, myWishes: wishes});
    })


}
