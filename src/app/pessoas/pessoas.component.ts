import { Component, OnInit } from '@angular/core';
import { pessoas } from './pessoas.module';
import { PessoasService } from './pessoas.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoasArray: pessoas[] = []

  detalhePessoa: boolean = false

  pessoas: pessoas

  AlterarPessoa(novaPessoa) {
    this.pessoasArray.forEach(pessoas => {
      if (pessoas.id == pessoas.id) {
        pessoas.name == pessoas.name
      }
    })
  }

  detalheDaPessoa(id) {
    console.log(id)
    this.detalhePessoa = true
    this.pessoasArray.forEach(novaPessoa => {
      if (novaPessoa.id == id) {
        this.pessoas == novaPessoa
      }
    })
  }

  constructor(private pessoasService: PessoasService) { }

  ngOnInit(): void {
    this.pessoasArray = this.pessoasService.getPessoas()
  }

}