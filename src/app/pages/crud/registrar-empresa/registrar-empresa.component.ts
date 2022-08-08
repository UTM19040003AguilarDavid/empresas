import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpresaModel } from 'src/app/models/Empresa.model';
import { EmpresaService } from 'src/app/services/empresa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-empresa',
  templateUrl: './registrar-empresa.component.html',
  styleUrls: ['./registrar-empresa.component.css']
})

export class RegistrarEmpresaComponent implements OnInit {

  empresa: EmpresaModel = new EmpresaModel();
  @Output() emitirRegistro: EventEmitter<any> = new EventEmitter();
  constructor(private readonly empresaService: EmpresaService) { }

  ngOnInit(): void {
  }

  registrarEmpresa(forma: NgForm)
  {
    this.empresaService.postEmpresa(this.empresa)
    .then((response: any) => {
      Swal.fire
      ({
        icon: "success",
        text: "Se registró la empresa exitosamente"
      });
      forma.reset();
      this.emitirRegistro.emit();
    })
    .catch((error: any) => {
      Swal.fire
      ({
        icon: "error",
        text: "Ha habido un error al registrar la empresa"
      });
    });
  }

  limpiarForma(forma: NgForm)
  {
    forma.reset();
  }

}

