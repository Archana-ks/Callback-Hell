count= document.querySelector('[for="countdown"]')
// display1=document.querySelector('[for="display"]')
c=10;
setTimeout(()=>{
    count.innerText= c;
    console.log(c);
    // console.log(display1.innerText);
        setTimeout(()=>{
         count.innerText=c-1;
         console.log(c);
            setTimeout(()=>{
               count.innerText=c-2;
               console.log(c);
                setTimeout(()=>{
                    count.innerText=c-3;
                     console.log(c);
                     setTimeout(()=>{
                        count.innerText=c-4;
                        console.log(c);
                        setTimeout(()=>{
                            count.innerText=c-5;
                            console.log(c);
                            setTimeout(()=>{
                                count.innerText=c-6;
                                console.log(c);
                                setTimeout(()=>{
                                    count.innerText=c-7;
                                    console.log(c);
                                    setTimeout(()=>{
                                        count.innerText=c-8;
                                        console.log(c);
                                        setTimeout(()=>{
                                            count.innerText=c-9;
                                            console.log(c);
                                         },2000)
                                    },2000)
                                },2000)
                            },2000)
                        },2000)
                     },2000)
                },2000)
             },2000)
        },2000)
})
