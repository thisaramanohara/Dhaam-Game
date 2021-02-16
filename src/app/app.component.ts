import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentPlayer='';
  nextPlayer='Red';

  eating = false;
  eatingBlues = false;

  eatingFromLeft = false;
  eatingFromRight = false;
  eatingFromMiddle = false;

  clickedIds :any[]= [];
  currentElements :any[]=[];

  redActive=false;
  blueActive=true;

  xBlue=true;
  xRed=!this.xBlue;

  checkColor(event:any) {
    const i = event.target.id;
    const col=document.getElementById(i);
    const www:any=col?.getAttribute("style");

    //console.log(www);
    const n = www.includes("background-color: blueviolet");
    //console.log(n);
    //const col=i.style.backgroundColor;
    //console.log(col);
  }

  eatRed(id:string){
    if(this.blueActive) {

      //eating from leftside
      if(id==='0' || id==='10' || id==='20' || id==='30' ||id==='40' ||id==='50' ||id==='60' ||id==='70' ||id==='80' ||id==='90'){
        const col=document.getElementById((parseInt(id)-9).toString());
        const www:any=col?.getAttribute("style");
        const n = www.includes("background-color: red");

        const col1=document.getElementById((parseInt(id)-18).toString());
        const www1:any=col1?.getAttribute("style");
        const n1 = www1.includes("background-color: #d3d34f");

        return (n && n1);
      }
      //eating from rightside
      else if(id==='9' || id==='19' || id==='29' || id==='39' ||id==='49' ||id==='59' ||id==='69' ||id==='79' ||id==='89' ||id==='99'){
        const col=document.getElementById((parseInt(id)-11).toString());
        const www:any=col?.getAttribute("style");
        const n = www.includes("background-color: red");

        const col1=document.getElementById((parseInt(id)-22).toString());
        const www1:any=col1?.getAttribute("style");
        const n1 = www1.includes("background-color: #d3d34f");

        return (n && n1);
      }

    }else if(this.redActive){

      //eating from leftside
      if(id==='0' || id==='10' || id==='20' || id==='30' ||id==='40' ||id==='50' ||id==='60' ||id==='70' ||id==='80' ||id==='90'){
        const col=document.getElementById((parseInt(id)+11).toString());
        const www:any=col?.getAttribute("style");
        const n = www.includes("background-color: blue");

        const col1=document.getElementById((parseInt(id)+22).toString());
        const www1:any=col1?.getAttribute("style");
        const n1 = www1.includes("background-color: #d3d34f");

        return (n && n1);
      }
      //eating from rightside
      else if(id==='9' || id==='19' || id==='29' || id==='39' ||id==='49' ||id==='59' ||id==='69' ||id==='79' ||id==='89' ||id==='99'){
        const col=document.getElementById((parseInt(id)+9).toString());
        const www:any=col?.getAttribute("style");
        const n = www.includes("background-color: blue");

        const col1=document.getElementById((parseInt(id)+18).toString());
        const www1:any=col1?.getAttribute("style");
        const n1 = www1.includes("background-color: #d3d34f");

        return (n && n1);
      }

    }
  }

  eatRedStartedFromMiddle_forLeft(id:string){
    //can eat for leftside
    const col=document.getElementById((parseInt(id)-11).toString());
    const www:any=col?.getAttribute("style");
    const n = www.includes("background-color: red");

    const col1=document.getElementById((parseInt(id)-22).toString());
    const www1:any=col1?.getAttribute("style");
    const n1 = www1.includes("background-color: #d3d34f");

    return (n && n1);
  }

  eatBlueStartedFromMiddle_forLeft(id:string){
    //can eat for leftside
    const col=document.getElementById((parseInt(id)+9).toString());
    const www:any=col?.getAttribute("style");
    const n = www.includes("background-color: blue");

    const col1=document.getElementById((parseInt(id)+18).toString());
    const www1:any=col1?.getAttribute("style");
    const n1 = www1.includes("background-color: #d3d34f");

    return (n && n1);
  }

  eatRedStartedFromMiddle_forRight(id:string){
    //can eat for rightside
    const col2=document.getElementById((parseInt(id)-9).toString());
    const www2:any=col2?.getAttribute("style");
    const n2 = www2.includes("background-color: red");

    const col12=document.getElementById((parseInt(id)-18).toString());
    const www12:any=col12?.getAttribute("style");
    const n12 = www12.includes("background-color: #d3d34f");

    return (n2 && n12);
  }

  eatBlueStartedFromMiddle_forRight(id:string){
    //can eat for rightside
    const col2=document.getElementById((parseInt(id)+11).toString());
    const www2:any=col2?.getAttribute("style");
    const n2 = www2.includes("background-color: blue");

    const col12=document.getElementById((parseInt(id)+22).toString());
    const www12:any=col12?.getAttribute("style");
    const n12 = www12.includes("background-color: #d3d34f");

    return (n2 && n12);
  }



  goToWhite(clickedId:string,nextId:string){
    const col=document.getElementById(nextId);
    const www:any=col?.getAttribute("style");
    const n = www.includes("background-color: white");
    //console.log('n in goto white',n);
    if(n){

      const pre=document.getElementById(clickedId);
      pre?.setAttribute("style","background-color: #d3d34f;");
      const pos=document.getElementById(nextId);
      //console.log(this.blueActive)
      //console.log(this.redActive)
      if(this.blueActive){



        pos?.setAttribute("style","background-color: blue;");


        //if eating from leftside
        if(this.eating && this.eatingFromLeft){
          let fff=document.getElementById((parseInt(clickedId)-9).toString());
          //let qqq:any=fff?.getAttribute("style");
          fff?.setAttribute("style","background-color: #d3d34f;");
        }
        else if(this.eating && this.eatingFromRight){
          let fff=document.getElementById((parseInt(clickedId)-11).toString());
          //let qqq:any=fff?.getAttribute("style");
          fff?.setAttribute("style","background-color: #d3d34f;");
        }
        else if(this.eating && this.eatingFromMiddle){
          //if(parseInt(nextId)>parseInt(clickedId)-20){
          if(parseInt(nextId)<parseInt(clickedId)-20){
            let fff=document.getElementById((parseInt(clickedId)-11).toString());
          //let qqq:any=fff?.getAttribute("style");
            fff?.setAttribute("style","background-color: #d3d34f;");
          }else{
            //let fff=document.getElementById((parseInt(clickedId)-11).toString());

            //fff?.setAttribute("style","background-color: #d3d34f;");
          }
        }


        //this.currentPlayer='Blue'
        //this.nextPlayer='Red'
        this.blueActive=false;
        this.redActive=true;
        this.xBlue=false
        this.xRed=true
        //console.log(this.xRed)

      //}else if(this.redActive){
      }else{
        pos?.setAttribute("style","background-color: red;");
        //this.currentPlayer='Red'
        //this.nextPlayer='Blue'
        this.xBlue=true
        this.xRed=false
        this.blueActive=true;
        this.redActive=false;




        //if eating from leftside
        if(this.eatingBlues && this.eatingFromLeft){
          let fff=document.getElementById((parseInt(clickedId)+11).toString());
          //let qqq:any=fff?.getAttribute("style");
          fff?.setAttribute("style","background-color: #d3d34f;");
        }
        else if(this.eatingBlues && this.eatingFromRight){
          let fff=document.getElementById((parseInt(clickedId)+9).toString());
          //let qqq:any=fff?.getAttribute("style");
          fff?.setAttribute("style","background-color: #d3d34f;");
        }
        else if(this.eatingBlues && this.eatingFromMiddle){
          if(parseInt(nextId)>parseInt(clickedId)+20){
            let fff=document.getElementById((parseInt(clickedId)+11).toString());
          //let qqq:any=fff?.getAttribute("style");
            fff?.setAttribute("style","background-color: #d3d34f;");
          }else{
            //let fff=document.getElementById((parseInt(clickedId)+9).toString());

            //fff?.setAttribute("style","background-color: #d3d34f;");
          }
        }
      }



      //this.clickedIds.shift();
      //console.log('before splice');
      this.clickedIds.splice(0,2);
    }
  }

  isElementExist(selected:any){
      let b = document.getElementById(selected.toString());
      const xx:any=b?.getAttribute("style");
      //console.log(xx);
      let r = xx.includes("background-color: red");
      let bl = xx.includes("background-color: blue");
      //console.log(m)
      //selected.length=0;
      return (r || bl);

  }


  clicked(event:any) {

    console.log('xBlue ',this.xBlue)
    console.log('xRed ',this.xRed)
    console.log('nextPlayer' ,this.nextPlayer)
    console.log('cuurentPlayer ',this.currentPlayer)

    const id=event.target.id;
    const a = document.getElementById(id);
    //console.log('type = '+typeof(id));
    this.clickedIds.push(id);

    const www:any=a?.getAttribute("style");
    //console.log(www);
    //console.log(this.clickedIds);

    const black = www.includes("background-color: black");
    const yellow = www.includes("background-color: #d3d34f");

    //const blue = www.includes("background-color: blue");
    //const red = www.includes("background-color: red");

    const blue = this.xBlue;
    const red = this.xRed;


    if(black || yellow) {
      console.log('wrong place clicked')
      for(let i=0;i<100;i++){
        let b = document.getElementById(i.toString());
        const cl:any=b?.getAttribute("style");
        if(cl.includes("background-color: white")){
          b?.setAttribute("style","background-color: #d3d34f;");
        }

        //for blue
        if(cl.includes("background-color: black")){
          if(this.blueActive){
          //if(this.xBlue){
            b?.setAttribute("style","background-color: blue;");
          }else if(this.redActive){
          //}else if(this.xRed){
            b?.setAttribute("style","background-color: red;");
          }

        }


      }
      this.clickedIds.length=0;
      return
    }



    //when red is pressed in blues chance
    if(this.blueActive){
      if(www.includes("background-color: red")){
        this.clickedIds.length=0;
        return
      }
    }

    //if blue is prssed in reds chnace
    if(this.redActive){
      if(www.includes("background-color: blue")){
        this.clickedIds.length=0;
        return
      }
    }




//*************************************** */




    const n = www.includes("background-color: white");
    //console.log(n);

    if(n){
      this.goToWhite(this.clickedIds[0],this.clickedIds[1]);
      //console.log(this.clickedIds);
      for(let i=0;i<100;i++){
        let b = document.getElementById(i.toString());
        const xx:any=b?.getAttribute("style");
        //console.log(xx);
        let m = xx.includes("background-color: white");
        //console.log(m)

          if(m){
            b?.setAttribute("style","background-color: #d3d34f;");
          }

      }
      return
    }

    //console.log(this.clickedIds);
    //a?.setAttribute("style","background-color:red;");


    if(this.blueActive){

      //this.xBlue=false;
      //this.xRed=true;
      //this.nextPlayer='Red';
      //this.currentPlayer='Blue';

      //this.blueActive=true;
      //this.redActive=false;

      //when left edges are clicked
    if(id==='0' || id==='10' || id==='20' || id==='30' ||id==='40' ||id==='50' ||id==='60' ||id==='70' ||id==='80' ||id==='90'){
      a?.setAttribute("style","background-color: black;");

      let v;
      if(this.eatRed(id)){
        v = parseInt(id)-18;
        this.eating=true;
        this.eatingBlues=false;
        this.eatingFromRight=false;
        this.eatingFromLeft=true;
        this.eatingFromMiddle=false;
      }else{
        v = parseInt(id)-10+1;
      }


      //let nextId = toString(parseInt(id) - 10 + 1)
      const b = document.getElementById(v.toString())
      //this.currentElements.push(v);
      //console.log(this.currentElements)
      if(!(this.isElementExist(v))){
        b?.setAttribute("style","background-color: white;");
      }


      //console.log(b)
    }

//when right edges are clicked
    else if(id==='9' || id==='19' || id==='29' || id==='39' ||id==='49' ||id==='59' ||id==='69' ||id==='79' ||id==='89' ||id==='99'){
      a?.setAttribute("style","background-color: black;");

      let v;
      if(this.eatRed(id)){
        v = parseInt(id)-22;
        this.eating=true;
        this.eatingBlues=false;
        this.eatingFromRight=true;
        this.eatingFromLeft=false;
        this.eatingFromMiddle=false;
      }else{
        v = parseInt(id)-11;
      }


      //let nextId = toString(parseInt(id) - 10 + 1)
      const b = document.getElementById(v.toString())

      if(!(this.isElementExist(v))){
        b?.setAttribute("style","background-color: white;");
      }
      //console.log(b)
    }

    //when bott0m edges are clicked
    else if(id==='90' || id==='91' || id==='92' || id==='93' ||id==='94' ||id==='95' ||id==='96' ||id==='97' ||id==='98' ||id==='99'){
      a?.setAttribute("style","background-color: black;");

      let left= this.eatRedStartedFromMiddle_forLeft(id);
      let right=this.eatRedStartedFromMiddle_forRight(id);



      let v;
      let w;
      if(left && !right){
        this.eating=true;
        this.eatingBlues=false;
        this.eatingFromRight=false;
        this.eatingFromLeft=false;
        this.eatingFromMiddle=true;
        v = parseInt(id)-22;
        w = parseInt(id)-9;
      }else if(right && !left){
        this.eating=true;
        this.eatingBlues=false;
        this.eatingFromRight=false;
        this.eatingFromLeft=false;
        this.eatingFromMiddle=true;
        v = parseInt(id)-11;
        w = parseInt(id)-18;
      }else if(left && right){
        this.eating=true;
        this.eatingBlues=false;
        this.eatingFromRight=false;
        this.eatingFromLeft=false;
        this.eatingFromMiddle=true;
        v = parseInt(id)-22;
        w = parseInt(id)-18;
      }else{
        v = parseInt(id)-11;
        w = parseInt(id)-9;
      }


      //let nextId = toString(parseInt(id) - 10 + 1)
      this.currentElements.push(v);
      this.currentElements.push(w);
      const b = document.getElementById(v.toString())
      const c = document.getElementById(w.toString())

      if(!(this.isElementExist(v))){
      b?.setAttribute("style","background-color: white;");
    }
    if(!(this.isElementExist(w))){
      c?.setAttribute("style","background-color: white;");
    }

      this.currentElements.length=0;

      //console.log(b)
    }

    //when others are clicked
    //if(id==='90' || id==='91' || id==='92' || id==='93' ||id==='94' ||id==='95' ||id==='96' ||id==='97' ||id==='98' ||id==='99'){
    else {
      a?.setAttribute("style","background-color: black;");

      let left= this.eatRedStartedFromMiddle_forLeft(id);
      let right=this.eatRedStartedFromMiddle_forRight(id);




      let v;
      let w;
      if(left && !right){
        this.eating=true;
        this.eatingBlues=false;
        this.eatingFromRight=false;
        this.eatingFromLeft=false;
        this.eatingFromMiddle=true;
        v = parseInt(id)-22;
        w = parseInt(id)-9;
      }else if(right && !left){
        this.eating=true;
        this.eatingBlues=false;
        this.eatingFromRight=false;
        this.eatingFromLeft=false;
        this.eatingFromMiddle=true;
        v = parseInt(id)-11;
        w = parseInt(id)-18;
      }else if(left && right){
        this.eating=true;
        this.eatingBlues=false;
        this.eatingFromRight=false;
        this.eatingFromLeft=false;
        this.eatingFromMiddle=true;
        v = parseInt(id)-22;
        w = parseInt(id)-18;
      }else{
        this.eating=false;
        this.eatingBlues=false;
        v = parseInt(id)-11;
        w = parseInt(id)-9;
      }
      //let nextId = toString(parseInt(id) - 10 + 1)
      const b = document.getElementById(v.toString())
      //console.log(typeof(b))
      const c = document.getElementById(w.toString())

      this.currentElements.push(v);
      this.currentElements.push(w);

      if(!(this.isElementExist(v))){
        b?.setAttribute("style","background-color: white;");
      }
      if(!(this.isElementExist(w))){
        c?.setAttribute("style","background-color: white;");
      }
      //console.log(b)
      this.currentElements.length=0;
    }


    //this.nextPlayer='Blue'

    }

    if(this.redActive){

      //this.xBlue=true
      //this.xRed=false
      //this.nextPlayer='Blue'
      //this.currentPlayer='Red'

      //this.redActive=true;
      //this.blueActive=false;

      //when left edges are clicked
    if(id==='0' || id==='10' || id==='20' || id==='30' ||id==='40' ||id==='50' ||id==='60' ||id==='70' ||id==='80' ||id==='90'){
      a?.setAttribute("style","background-color: black;");

      let v;
      if(this.eatRed(id)){
        v = parseInt(id)+22;
        this.eatingBlues=true;
        this.eating=false;
        this.eatingFromRight=false;
        this.eatingFromLeft=true;
        this.eatingFromMiddle=false;
      }else{
        v = parseInt(id)+10+1;
      }



      //let v = parseInt(id)+10+1;
      //let nextId = toString(parseInt(id) - 10 + 1)
      const b = document.getElementById(v.toString())
      //this.currentElements.push(v);
      //console.log(this.currentElements)
      if(!(this.isElementExist(v))){
        b?.setAttribute("style","background-color: white;");
      }


      //console.log(b)
    }

//when right edges are clicked
    else if(id==='9' || id==='19' || id==='29' || id==='39' ||id==='49' ||id==='59' ||id==='69' ||id==='79' ||id==='89' ||id==='99'){
      a?.setAttribute("style","background-color: black;");

      let v;
      if(this.eatRed(id)){
        v = parseInt(id)+18;
        this.eatingBlues=true;
        this.eating=false;
        this.eatingFromRight=true;
        this.eatingFromLeft=false;
        this.eatingFromMiddle=false;
      }else{
        v = parseInt(id)+9;
      }



      //let v = parseInt(id)+9;
      //let nextId = toString(parseInt(id) - 10 + 1)
      const b = document.getElementById(v.toString())

      if(!(this.isElementExist(v))){
        b?.setAttribute("style","background-color: white;");
      }
      //console.log(b)
    }

    //when bott0m edges are clicked
    else if(id==='90' || id==='91' || id==='92' || id==='93' ||id==='94' ||id==='95' ||id==='96' ||id==='97' ||id==='98' ||id==='99'){
      a?.setAttribute("style","background-color: black;");

      let left= this.eatBlueStartedFromMiddle_forLeft(id);
      let right=this.eatBlueStartedFromMiddle_forRight(id);



      let v;
      let w;
      if(left && !right){
        this.eating=false;
        this.eatingBlues=true;
        this.eatingFromRight=false;
        this.eatingFromLeft=false;
        this.eatingFromMiddle=true;
        v = parseInt(id)+11;
        w = parseInt(id)+18;
      }else if(right && !left){
        this.eating=false;
        this.eatingBlues=true;
        this.eatingFromRight=false;
        this.eatingFromLeft=false;
        this.eatingFromMiddle=true;
        v = parseInt(id)+22;
        w = parseInt(id)+9;
      }else if(left && right){
        this.eating=false;
        this.eatingBlues=true;
        this.eating=true;
        this.eatingFromRight=false;
        this.eatingFromLeft=false;
        this.eatingFromMiddle=true;
        v = parseInt(id)+22;
        w = parseInt(id)+18;
      }else{
        this.eating=false;
        this.eatingBlues=false;
        v = parseInt(id)+11;
        w = parseInt(id)+9;
      }






      //let v = parseInt(id)+11;
      //let w = parseInt(id)+9;
      //let nextId = toString(parseInt(id) - 10 + 1)
      this.currentElements.push(v);
      this.currentElements.push(w);
      const b = document.getElementById(v.toString())
      const c = document.getElementById(w.toString())

      if(!(this.isElementExist(v))){
      b?.setAttribute("style","background-color: white;");
    }
    if(!(this.isElementExist(w))){
      c?.setAttribute("style","background-color: white;");
    }

    this.currentElements.length=0;
      //console.log(b)
    }

    //when others are clicked
    //if(id==='90' || id==='91' || id==='92' || id==='93' ||id==='94' ||id==='95' ||id==='96' ||id==='97' ||id==='98' ||id==='99'){
    else {
      a?.setAttribute("style","background-color: black;");

      let left= this.eatBlueStartedFromMiddle_forLeft(id);
      let right=this.eatBlueStartedFromMiddle_forRight(id);



      let v;
      let w;
      if(left && !right){
        this.eating=false;
        this.eatingBlues=true;
        this.eatingFromRight=false;
        this.eatingFromLeft=false;
        this.eatingFromMiddle=true;
        v = parseInt(id)+11;
        w = parseInt(id)+18;
      }else if(right && !left){
        this.eating=false;
        this.eatingBlues=true;
        this.eatingFromRight=false;
        this.eatingFromLeft=false;
        this.eatingFromMiddle=true;
        v = parseInt(id)+22;
        w = parseInt(id)+9;
      }else if(left && right){
        this.eating=false;
        this.eatingBlues=true;
        this.eating=true;
        this.eatingFromRight=false;
        this.eatingFromLeft=false;
        this.eatingFromMiddle=true;
        v = parseInt(id)+22;
        w = parseInt(id)+18;
      }else{
        this.eating=false;
        this.eatingBlues=false;
        v = parseInt(id)+11;
        w = parseInt(id)+9;
      }

      //let v = parseInt(id)+11;
      //let w = parseInt(id)+9;
      //let nextId = toString(parseInt(id) - 10 + 1)
      const b = document.getElementById(v.toString())
      //console.log(typeof(b))
      const c = document.getElementById(w.toString())

      this.currentElements.push(v);
      this.currentElements.push(w);

      if(!(this.isElementExist(v))){
        b?.setAttribute("style","background-color: white;");
      }
      if(!(this.isElementExist(w))){
        c?.setAttribute("style","background-color: white;");
      }
      //console.log(b)
      this.currentElements.length=0;
    }

    //this.nextPlayer='Red'

    }





  }

}
