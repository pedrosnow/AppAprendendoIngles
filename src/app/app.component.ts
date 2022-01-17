import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppAprendendoIngles';

  public jogoEmAndamento: boolean = true
  public tipoEncerramento: String

  public encerrarJogo(tipo: String) {

    this.jogoEmAndamento = false

    this.tipoEncerramento = tipo

  }

  public reiniciarJogo() {

    this.jogoEmAndamento = true
    this.tipoEncerramento = undefined
  }

}
