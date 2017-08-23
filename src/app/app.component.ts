import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  tela: any ='';
  ope: string='';
  a: number = 0;
  b: number;

      constructor() {
          this.tela = '';
      }
      calc(num: number, operador: string)
      {
        if(num != null)
        {
          this.tela = this.tela + num;
          if(this.ope != ''){
          this.b=this.tela;
          }
        }else{
              this.ope = operador;
              if(this.a == 0)
              {
                this.a = this.tela;
                this.tela = '';
              }
          }
      }
      clear(){
        this.tela = "";
      }
      finish(){

        switch(this.ope){
                          case '+': 
                          this.tela = Number(this.a) + Number(this.b);
                          this.a = 0;
                          this.b = 0;
                          this.ope = '';
                          break;

                          case '-':
                          this.tela = Number(this.a) - Number(this.b);
                          this.a = 0;
                          this.b = 0;
                          this.ope = '';
                          break;

                          case '*':
                          this.tela = Number(this.a) * Number(this.b);
                          this.a = 0;
                          this.b = 0;
                          this.ope = '';
                          break;

                          case '/':
                          this.tela = Number(this.a) / Number(this.b);
                          this.a = 0;
                          this.b = 0;
                          this.ope = '';
                          break;
        }
      } 
      sqrt(){
        this.tela = Math.sqrt(this.tela);
      }
      p(){
        this.tela = Number(this.tela**2);
      }
      ngOnInit(): void {
      }
}