import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  clicked(event:any) {
    //console.log(event.target.id)
    //event.target.id.setAttribute.("style", "backgroundColor:red;");
    //return true;
    console.log(event.target.id);
    const id=event.target.id;
    const a = document.getElementById(id);
    a?.setAttribute("style","background-color:red;");

    //when left edges are clicked
    if(id==='0' || id==='10' || id==='20' || id==='30' ||id==='40' ||id==='50' ||id==='60' ||id==='70' ||id==='80' ||id==='90'){
      a?.setAttribute("style","background-color:black;");
      let v = parseInt(id)-10+1;
      //let nextId = toString(parseInt(id) - 10 + 1)
      const b = document.getElementById(v.toString())
      b?.setAttribute("style","background-color:white;");
      //console.log(b)
    }


    //when right edges are clicked
    else if(id==='9' || id==='19' || id==='29' || id==='39' ||id==='49' ||id==='59' ||id==='69' ||id==='79' ||id==='89' ||id==='99'){
      a?.setAttribute("style","background-color:black;");
      let v = parseInt(id)-11;
      //let nextId = toString(parseInt(id) - 10 + 1)
      const b = document.getElementById(v.toString())
      b?.setAttribute("style","background-color:white;");
      //console.log(b)
    }

    //when bott0m edges are clicked
    else if(id==='90' || id==='91' || id==='92' || id==='93' ||id==='94' ||id==='95' ||id==='96' ||id==='97' ||id==='98' ||id==='99'){
      a?.setAttribute("style","background-color:black;");
      let v = parseInt(id)-11;
      let w = parseInt(id)-9;
      //let nextId = toString(parseInt(id) - 10 + 1)
      const b = document.getElementById(v.toString())
      const c = document.getElementById(w.toString())
      b?.setAttribute("style","background-color:white;");
      c?.setAttribute("style","background-color:white;");
      //console.log(b)
    }

    //when others are clicked
    //if(id==='90' || id==='91' || id==='92' || id==='93' ||id==='94' ||id==='95' ||id==='96' ||id==='97' ||id==='98' ||id==='99'){
    else {
      a?.setAttribute("style","background-color:black;");
      let v = parseInt(id)-11;
      let w = parseInt(id)-9;
      //let nextId = toString(parseInt(id) - 10 + 1)
      const b = document.getElementById(v.toString())
      const c = document.getElementById(w.toString())
      b?.setAttribute("style","background-color:white;");
      c?.setAttribute("style","background-color:white;");
      //console.log(b)
    }


  }

}
