// let obj={
//     name:"vaibhav",
//     sirname:"nASSA",

//     info:{
//         from:"mohali",
//         state:"punjab",
//         microinfo:{
//             vill:"jhnjeri",
//             code:160056
//         }
//     }
// }

// console.log(obj.name)
// console.log(obj.sirname)
// console.log(obj.info.from)
// console.log(obj.info.state)
// console.log(obj.info.microinfo)
// console.log(obj.info.microinfo.vill)
// console.log(obj.info.microinfo.code)



let obj2={
    name:"vaibhav",
    sirname:"nassa",
    printname:function(){
        // console.log("inner")
        console.log(this.name+this.sirname)
    },

    add:function(){

        console.log("i m add function")
    },

    subobj:{
        name:"vaibahv2",
        sirname:"nassa2",

        printname:function(){
            console.log(this.name,this.sirname)
        }
    }



}

obj2.printname()
obj2.add()

obj2.subobj.printname()