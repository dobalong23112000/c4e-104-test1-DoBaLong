// let str_input="program";

// let n= str_input.length-1;
// let a="";
// for(let i=n;i>=0;i--) {
    

    
    
//     a=a+str_input[i];
    

// }
// console.log(a);
// cau 3:
let arr=prompt("Cho nguoi dung nhap vao 1 mang: ");
let ar=arr.split(",");

for(let i=0;i<ar.length-1;i++) {
    for(let j=1;j<ar.length;j++) {
        if(ar[i]===ar[j]) {
            ar.splice(j,1);
        }
    }
    
}
console.log(ar);
//cau 4:
let Quanli=[

    {
        ten:"A",
        tuoi:"20",
        mucluong:"10tr",
        chucvu:"quan li",
    }
    
    {
        ten:"B",
        tuoi:"20",
        mucluong:"10tr",
        chucvu:"phuc vu",
    }
    
    {
        ten:"C",
        tuoi:"20",
        mucluong:"10tr",
        chucvu:"nhan vien",
    }
    
    {
        ten:"D",
        tuoi:"20",
        mucluong:"10tr",
        chucvu:"nhan vien",
    }
]
//create
let userinput=prompt("nhap yeu cau nguoi dung(c,)")

