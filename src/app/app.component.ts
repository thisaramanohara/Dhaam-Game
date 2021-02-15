import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  clickedIds :any[]= [];
  currentElements :any[]=[];

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

  goToWhite(clickedId:string,nextId:string){
    const col=document.getElementById(nextId);
    const www:any=col?.getAttribute("style");
    const n = www.includes("background-color: white");
    //console.log('n in goto white',n);
    if(n){
      const pre=document.getElementById(clickedId);
      pre?.setAttribute("style","background-color: #d3d34f;");
      const pos=document.getElementById(nextId);
      pos?.setAttribute("style","background-color: blue;");
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



    //console.log(this.currentElements);
    //console.log('hello')
    //console.log(event.target.id)
    //event.target.id.setAttribute.("style", "backgroundColor:red;");
    //return true;
    //console.log(event.target.id);
    const id=event.target.id;
    const a = document.getElementById(id);
    //console.log('type = '+typeof(id));
    this.clickedIds.push(id);

    const www:any=a?.getAttribute("style");
    //console.log(www);
    //console.log(this.clickedIds);

    const black = www.includes("background-color: black");
    const yellow = www.includes("background-color: #d3d34f");

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
          b?.setAttribute("style","background-color: blue;");
        }


      }
      this.clickedIds.length=0;
      return
    }


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

    //when left edges are clicked
    if(id==='0' || id==='10' || id==='20' || id==='30' ||id==='40' ||id==='50' ||id==='60' ||id==='70' ||id==='80' ||id==='90'){
      a?.setAttribute("style","background-color: black;");
      let v = parseInt(id)-10+1;
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
      let v = parseInt(id)-11;
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
      let v = parseInt(id)-11;
      let w = parseInt(id)-9;
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


      //console.log(b)
    }

    //when others are clicked
    //if(id==='90' || id==='91' || id==='92' || id==='93' ||id==='94' ||id==='95' ||id==='96' ||id==='97' ||id==='98' ||id==='99'){
    else {
      a?.setAttribute("style","background-color: black;");
      let v = parseInt(id)-11;
      let w = parseInt(id)-9;
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
    }


  }

}
