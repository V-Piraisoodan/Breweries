
async function name1(){
    
    try{
        
        const hack1 = await fetch("https://api.openbrewerydb.org/breweries")
        console.log(hack1)
        if(!hack1.ok){
            throw new Error("url error");
        }
        const json = await hack1.json();
        console.log(json)
        for(var i =0;i<json.length;i++){
            console.log(json[i].name)
            var a=document.createElement('div');
            a.innerHTML=json[i].name;
            document.getElementById("div1").appendChild(a);

            var b=document.createElement('div');
            b.innerHTML=json[i].brewery_type;
            document.getElementById("div2").appendChild(b);

            var state=document.createElement('div');
            var country = document.createElement('div');
            state.innerHTML=json[i].state;
            document.getElementById("div3").appendChild(state);
            
            var d=document.createElement('div');
            if(!json[i].website_url){
                d.innerHTML='no url'
                document.getElementById("div4").appendChild(d);
        
            }
            else{
            d.innerHTML=json[i].website_url;
            document.getElementById("div4").appendChild(d);
            }

            var e=document.createElement('div');
            if(!json[i].phone){
                e.innerHTML="no ph number"
                document.getElementById("div5").appendChild(e);
            }
            else{
            e.innerHTML=json[i].phone;
            document.getElementById("div5").appendChild(e);
            }


        }
    }
    catch(error){
        console.error(error);
    }
}
name1();

