import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpresaModel } from 'src/app/models/Empresa.model';
import { EmpresaService } from 'src/app/services/empresa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-empresa',
  templateUrl: './actualizar-empresa.component.html',
  styleUrls: ['./actualizar-empresa.component.css']
})
export class ActualizarEmpresaComponent implements OnInit {

  @Input() idEmpresa: string = "";
  empresa: EmpresaModel = new EmpresaModel();
  @Output() emitirActualizacion: EventEmitter<any> = new EventEmitter();

  constructor(private readonly empresaService: EmpresaService) { }

  ngOnInit(): void {
    console.log(this.idEmpresa);
    this.empresaService.getEmpresa(this.idEmpresa)
    .then((response: any) => {
      this.empresa = response.cont.empresa;
    })
    .catch(() => {});
  }

  actualizarEmpresa(forma: NgForm){
    this.empresaService.putEmpresas(this.empresa, this.idEmpresa)
    .then((response: any) => {
      Swal.fire
      ({
        icon: "success",
        text: "Se actualizó el usuario exitosamente"
      });
      this.emitirActualizacion.emit();
    })
    .catch((error: any) => {
      Swal.fire
      ({
        icon: "error",
        text: "Ha habido un error al actualizar el usuario"
      });
    });
  }

  limpiarForma(forma: NgForm)
  {
    forma.reset();
  }

}
