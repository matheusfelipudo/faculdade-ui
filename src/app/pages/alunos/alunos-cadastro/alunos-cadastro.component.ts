import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Aluno } from '../../core/models/aluno.model'; // ajuste o path se necessário
import { AlunoService } from 'src/app/pages/alunos/alunos.service'; // ajuste o path se necessário

@Component({
  selector: 'app-alunos-cadastro',
  templateUrl: './alunos-cadastro.component.html',
  styleUrls: ['./alunos-cadastro.component.css']
})
export class AlunosCadastroComponent implements OnInit {
  aluno = new Aluno();

  constructor(
    private alunosService: AlunoService
  ) { }

  ngOnInit(): void {
  }

  salvar(form: NgForm) {
    console.log(form);
  }

  cadastrarAluno(form: NgForm) {
    console.log(this.aluno);

    // Exemplo de chamada à service (descomente quando o método estiver implementado)
    // this.alunosService.adicionar(this.aluno).then((res) => {
    //   console.log('Aluno cadastrado com sucesso', res);
    // });
  }
}
