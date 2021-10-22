let obj = {
    data() {
        return {
            message:"Hello vue.js!"
        }
    },
    template:
    `
    <div>
        <h2>{{header}}</h2>
    </div>
    `
}

new Vue({
    el:"#app",
    components: {
        "l-component":obj
    }
})

















// Vue.component('item-card', {
//   props: ['itemList'],
//   template:
//   `
//   <div class="carCard">
//   <div id="car" class="mt-20 carCards flex flex-wrap justify-center">
//           <div v-for="(item,i) in itemList" :key="i" :id="i" class="carCards2 mt-5 mr-4 rounded border-2 border-gray-300 flex flex-wrap size">
//               <img class="pl-3 pt-3 img" v-bind:src="item.img">
//               <div class="flex flex-wrap data">
//                   <h5 class="pl-2 text-xl">{{item.name}}</h5>
//                   <p class="category pb-2 pl-2">Category:{{item.category}}</p>
//                   <p class="pb-3 pl-2">Price: {{item.price}}</p>
//                   <p class="pl-2">Date: {{item.data}}</p>
//               </div>
//           </div>
//       </div>
//   </div>
// `,
// //     methods: {
// //         sort() {
// //             let sort = document.getElementById("selectSort").value;
// //             for (let i=0; i<this.itemList.length; i++) {
// //                 let priceNum = Number(this.itemList[i].price.substr(1,100).split(",").join(""));
// //                     if(sort == "low") {
// //                         console.log(priceNum);
// //                 //    priceNum.sort(function(a,b) {
// //                 //    console.log(a);
// //                 //    });
// //                 }
// //             }
// //                 //   console.log(document.getElementById("selectSort"));
// //         },
// //         select: function() {
// //             //　選択一覧
// //             let hashmap = {}

// //             for (let i=0; i<this.itemList.length; i++) {
// //                 if(hashmap[this.itemList[i].category] == undefined) hashmap[this.itemList[i].category]=1;
// //             }
// //             let keys = Object.keys(hashmap);

// //             for (let i=0; i<keys.length; i++) {
// //                 let op = document.createElement("option");
// //                 op.innerHTML = keys[i];
// //                 op.value = keys[i];
// //                 op.id = keys[i];
// //                 document.getElementById("sel").append(op)
// //             }

// //             let select = document.getElementById("sel");
// //             select.addEventListener("click",function(){
// //                 // console.log(document.getElementById("car"));
// //               let element = document.querySelectorAll("div div div");

// //               let tesla = [element[3],element[5],element[7],element[9]]
// //               let honda = [element[15],element[17]]
// //               let benz = [element[21],element[23],element[25]]
// //               let lexus = [element[27],element[29]]
// //               let lam = [element[31],element[33]]
// //               let bmw = [element[37],element[39]]

// //               for (let i=0; i<element.length; i++)  {
// //                   if(select.value == "以下を選択") {
// //                     tesla[i].style.display="block";
// //                     tesla[3].style.display="block";
// //                     element[11].style.display="block";
// //                     element[13].style.display="block";
// //                     honda[i].style.display="block";
// //                     element[19].style.display="block";
// //                     benz[i].style.display="block";
// //                     benz[2].style.display="block";
// //                     lexus[i].style.display="block";
// //                     lam[i].style.display="block";
// //                     element[35].style.display="block";
// //                     bmw[i].style.display="block";
// //                   }
// //                   if(select.value == "Tesla") {
// //                       tesla[i].style.display="block";
// //                       tesla[3].style.display="block";
// //                       element[11].style.display="none";
// //                       element[13].style.display="none";
// //                       honda[i].style.display="none";
// //                       element[19].style.display="none";
// //                       benz[i].style.display="none";
// //                       benz[2].style.display="none";
// //                       lexus[i].style.display="none";
// //                       lam[i].style.display="none";
// //                       element[35].style.display="none";
// //                       bmw[i].style.display="none";
// //                   }
// //                   if(select.value == "Porsche") {
// //                     tesla[i].style.display="none";
// //                     element[9].style.display="none";
// //                     element[11].style.display="block";
// //                     element[13].style.display="none";
// //                     honda[i].style.display="none";
// //                     element[19].style.display="none";
// //                     benz[i].style.display="none";
// //                     benz[2].style.display="none";
// //                     lexus[i].style.display="none";
// //                     lam[i].style.display="none";
// //                     element[35].style.display="none";
// //                     bmw[i].style.display="none";
// //                   }
// //                   if(select.value == "Toyota") {
// //                     tesla[i].style.display="none";
// //                     element[9].style.display="none";
// //                     element[11].style.display="none";
// //                     element[13].style.display="block";
// //                     honda[i].style.display="none";
// //                     element[19].style.display="none";
// //                     benz[i].style.display="none";
// //                     benz[2].style.display="none";
// //                     lexus[i].style.display="none";
// //                     lam[i].style.display="none";
// //                     element[35].style.display="none";
// //                     bmw[i].style.display="none";
// //                   }
// //                   if(select.value == "Honda") {
// //                     tesla[i].style.display="none";
// //                     element[9].style.display="none";
// //                     element[11].style.display="none";
// //                     element[13].style.display="none";
// //                     honda[i].style.display="block";
// //                     element[19].style.display="none";
// //                     benz[i].style.display="none";
// //                     benz[2].style.display="none";
// //                     lexus[i].style.display="none";
// //                     lam[i].style.display="none";
// //                     element[35].style.display="none";
// //                     bmw[i].style.display="none";
// //                   }
// //                   if(select.value == "Mazda") {
// //                     tesla[i].style.display="none";
// //                     element[9].style.display="none";
// //                     element[11].style.display="none";
// //                     element[13].style.display="none";
// //                     honda[i].style.display="none";
// //                     element[19].style.display="block";
// //                     benz[i].style.display="none";
// //                     benz[2].style.display="none";
// //                     lexus[i].style.display="none";
// //                     lam[i].style.display="none";
// //                     element[35].style.display="none";
// //                     bmw[i].style.display="none";
// //                   }
// //                   if(select.value == "Mercedes-Benz") {
// //                     tesla[i].style.display="none";
// //                     element[9].style.display="none";
// //                     element[11].style.display="none";
// //                     element[13].style.display="none";
// //                     honda[i].style.display="none";
// //                     element[19].style.display="none";
// //                     benz[i].style.display="block";
// //                     benz[2].style.display="block";
// //                     lexus[i].style.display="none";
// //                     lam[i].style.display="none";
// //                     element[35].style.display="none";
// //                     bmw[i].style.display="none";
// //                   }
// //                   if(select.value == "Lexus") {
// //                     tesla[i].style.display="none";
// //                     element[9].style.display="none";
// //                     element[11].style.display="none";
// //                     element[13].style.display="none";
// //                     honda[i].style.display="none";
// //                     element[19].style.display="none";
// //                     benz[i].style.display="none";
// //                     benz[2].style.display="none";
// //                     lexus[i].style.display="block";
// //                     lam[i].style.display="none";
// //                     element[35].style.display="none";
// //                     bmw[i].style.display="none";
// //                   }
// //                   if(select.value == "Lamborghini") {
// //                     tesla[i].style.display="none";
// //                     element[9].style.display="none";
// //                     element[11].style.display="none";
// //                     element[13].style.display="none";
// //                     honda[i].style.display="none";
// //                     element[19].style.display="none";
// //                     benz[i].style.display="none";
// //                     benz[2].style.display="none";
// //                     lexus[i].style.display="none";
// //                     lam[i].style.display="block";
// //                     element[35].style.display="none";
// //                     bmw[i].style.display="none";
// //                   }
// //                   if(select.value == "Audi") {
// //                     tesla[i].style.display="none";
// //                     element[9].style.display="none";
// //                     element[11].style.display="none";
// //                     element[13].style.display="none";
// //                     honda[i].style.display="none";
// //                     element[19].style.display="none";
// //                     benz[i].style.display="none";
// //                     benz[2].style.display="none";
// //                     lexus[i].style.display="none";
// //                     lam[i].style.display="none";
// //                     element[35].style.display="block";
// //                     bmw[i].style.display="none";
// //                   }
// //                   if(select.value == "BMW") {
// //                     tesla[i].style.display="none";
// //                     element[9].style.display="none";
// //                     element[11].style.display="none";
// //                     element[13].style.display="none";
// //                     honda[i].style.display="none";
// //                     element[19].style.display="none";
// //                     benz[i].style.display="none";
// //                     benz[2].style.display="none";
// //                     lexus[i].style.display="none";
// //                     lam[i].style.display="none";
// //                     element[35].style.display="none";
// //                     bmw[i].style.display="block";
// //                   }
// //               }
// //             })
// //       }
// //   }
// })

// var app = new Vue({
//   el: '#app',
//   data: function() {
//       return {
//           productList: [
//               {img:"https://media.istockphoto.com/photos/electric-sports-car-the-tesla-model-3-picture-id1277254968?k=6&m=1277254968&s=612x612&w=0&h=4j3WhZQD95BJyqOnML2sDatX9SFQomJclLyd5bbV3FU=", name:'Model 3',category:'Tesla',price:"$48,490",data:"2020-09-04"},
//               {img:"https://media.istockphoto.com/photos/tesla-model-x-travelling-on-the-freeway-in-silicon-valley-picture-id1191552504?k=6&m=1191552504&s=612x612&w=0&h=NWHap01jKkYzC5BT-9gaKYr8phGeO1ZUYHnGPLQ5RUM=" , name:'Model X',category:'Tesla',price:"$89,990",data:"2017-08-08"},
//               {img:"https://media.istockphoto.com/photos/tesla-model-s-on-the-highway-picture-id582261244?k=6&m=582261244&s=612x612&w=0&h=LwYAD7oI6Xy9gsRM7OZ10Nsq-ehGsSmLcbPwQEmZBpg=", name:'Model S',category:'Tesla',price:"$82,990",data:"2019-04-01"},
//               {img:"https://media.istockphoto.com/photos/tesla-model-y-in-austin-texas-at-360-bridge-picture-id1272025387?k=6&m=1272025387&s=612x612&w=0&h=o_W18f-pFNdHsSpdaNejXSS7G8XnWfayhinzZVWhQU8=", name:'Model Y',category:'Tesla',price:"$48,190",data:"2020-02-02"},
//               {img:"https://media.istockphoto.com/photos/porsche-cayenne-picture-id1138819485?k=6&m=1138819485&s=612x612&w=0&h=uSPCZUofVb5ComBHUpH5qZ5QB7B1WWcKFxNzm53W2ME=", name:'Cayenne',category:'Porsche',price:"$67,500",data:"2017-12-20"},
//               {img:"https://media.istockphoto.com/photos/toyota-camry-in-motion-picture-id905266220?k=6&m=905266220&s=612x612&w=0&h=8iRQyhjJYVn_ppC6x3LTLGzG0P67NyCvuQqxvO40ryI=", name:'Camry',category:'Toyota',price:"$24,425",data:"2015-06-29"},
//               {img:"https://media.istockphoto.com/photos/honda-accord-in-the-city-picture-id649004692?k=6&m=649004692&s=612x612&w=0&h=7WnRBZcLQ6-Y2FrKKVxya3nwJ6U-CLeZUuk-D5RVlu8=", name:'Accord',category:'Honda',price:"$24,800",data:"2018-10-02"},
//               {img:"https://media.istockphoto.com/photos/new-honda-civic-front-picture-id458119929?k=6&m=458119929&s=612x612&w=0&h=h8uh7Bqgw2l1Hhg2TmX05VSBnp2cxrjpTBtvPYpKiD4=", name:'Civic',category:'Honda',price:"$20,650",data:"2015-04-14"},
//               {img:"https://media.istockphoto.com/photos/new-2018-mazda-cx5-red-cx5-suv-car-japanese-car-moving-vehicle-picture-id1069236296?k=6&m=1069236296&s=612x612&w=0&h=CO2YJA51esFD2an-sKkhusVifvwTwhBXR3ebxD6h3Fg=", name:'CX-5',category:'Mazda',price:"$26,940",data:"2012-11-03"},
//               {img:"https://media.istockphoto.com/photos/mercedesbenz-gle-43-4matic-coupe-picture-id894961460?k=6&m=894961460&s=612x612&w=0&h=aKbMi31eXuJOSVEKlesIzsJlLM6QhUe0k_5V-FJvH0M=", name:'GLE Coupe',category:'Mercedes-Benz',price:"$76,500",data:"2020-02-05"},
//               {img:"https://media.istockphoto.com/photos/mercedes-benz-cla-picture-id472122163?k=6&m=472122163&s=612x612&w=0&h=IIRhsoWfMXXy6b_aTMtSA2dgSTPK4pSD-_M5vh8OY6M=", name:'CLA',category:'Mercedes-Benz',price:"$37,850",data:"2019-06-09"},
//               {img:"https://media.istockphoto.com/photos/mercedesbenz-gla-2020-test-drive-day-picture-id1297389811?k=6&m=1297389811&s=612x612&w=0&h=NOPBUppwL9aFKKoha3phbhpHUw6hYSdsW5NlFejp4RU=", name:'GLA 250',category:'Mercedes-Benz',price:"$37,280",data:"2017-05-02"},
//               {img:"https://media.istockphoto.com/photos/lexus-nx-200t-car-picture-id480681192?k=6&m=480681192&s=612x612&w=0&h=Ne9_r4aioLH_jpiK41fHpTr-ADdKsHcFMOOPXT9DGp8=", name:'RX 350',category:'Lexus',price:"$45,175",data:"2015-01-01"},
//               {img:"https://media.istockphoto.com/photos/hybrid-suv-lexus-nx-on-the-road-picture-id657915058?k=6&m=657915058&s=612x612&w=0&h=DGCgfv-pBE75oOUktrX_WpGSadnEmRcm5iPfa49BOQw=", name:'NX 300',category:'Lexus',price:"$37,510",data:"2018-09-12"},
//               {img:"https://media.istockphoto.com/photos/lamborghini-urus-picture-id1184360237?k=6&m=1184360237&s=612x612&w=0&h=cDC3bjJCG9fZC8VpJnuoK73du-hKLnij-14eKHxuLyA=", name:'Urus',category:'Lamborghini',price:"$218,000",data:"2021-08-16"},
//               {img:"https://media.istockphoto.com/photos/lamborghini-aventador-lp-7504-superveloce-picture-id1083962000?k=6&m=1083962000&s=612x612&w=0&h=VBYRfp0408ZHqDTdJ69pIJP7z_zhj2T7z8OB-28adSU=", name:'Aventador',category:'Lamborghini',price:"$393,695",data:"2020-09-11"},
//               {img:"https://media.istockphoto.com/photos/audi-a3-sportback-on-a-street-picture-id1255388367?k=6&m=1255388367&s=612x612&w=0&h=nh2TLu9W-68-3_PgN1-0qkXYaw4mfFZviKY1sY_fjJ8=", name:'A3',category:'Audi',price:"$33,500",data:"2019-05-08"},
//               {img:"https://media.istockphoto.com/photos/-picture-id1206921084?k=6&m=1206921084&s=612x612&w=0&h=o8ETeAQHAuzOerMorNWxPnDpyhSyrxiy6vvIQ8TLd4Y=", name:'X3',category:'BMW',price:"$43,000",data:"2018-03-11"},
//               {img:"https://media.istockphoto.com/photos/coupe-competition-picture-id1187329409?k=6&m=1187329409&s=612x612&w=0&h=qDHLX8yA8WVGmEwFU8k56z72uobZfcGkHH14zzpLPc4=", name:'2 Series',category:'BMW',price:"$37,500",data:"2019-01-15"},
//           ],
//           items: ["Tesla","Porsche","Toyota","Honda","Mazda","Mercedes-Benz","Lexus","Lamborghini","Audi","BMW"],
//           selectCate:"1"
//       }
//   },
//   computed: {
//       aa: function() {
//           // console.log(this.productList);
//          return this.productList;
//       }
//   }
//   // computed: {
//   //     sel() {
//   //         let hashmap = {};
//   //         for (let i=0; i<this.productList.length; i++) {
//   //             if (hashmap[this.productList[i].category] == undefined) hashmap[this.productList[i].category] = 1;
//   //         }
//   //         let keys = Object.keys(hashmap);

//   //         for (let i=0; i<keys.length; i++) {
//   //             console.log(keys[i]);
//   //             // return keys[i];
//   //         }

//   //         // for(let i=0; i<keys.length; i++) {
//   //         //     let op = document.createElement("option");
//   //         //     op.innerHTML = keys[i]
//   //         //     console.log(op);

//   //         //     // console.log(op);
//   //         //     // document.getElementById("cateSel").append(op);
//   //         //     // document.getElementById("cateSel").innerHTML = keys[i];
//   //         //    return keys[i]
//   //         // }
//   //     }
//   // }
// });





























