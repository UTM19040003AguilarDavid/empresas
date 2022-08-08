import { Component, OnInit } from '@angular/core';
import { EmpresaModel } from 'src/app/models/Empresa.model';
import { EmpresaService } from 'src/app/services/empresa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  empresas: EmpresaModel[] = [];
  idEmpresa: string = '';

  constructor(private empresaService: EmpresaService) {}

  ngOnInit(): void {
    this.obtenerEmpresa();
  }

  obtenerEmpresa() {
    this.empresaService.getEmpresas()
      .then((response: any) => {
        this.empresas = response.cont.empresa;
        console.log(this.empresas);
      })
      .catch((error: any) => {
        Swal.fire({
          icon: 'error',
          text: error.error.msg,
        });
      });
  }

  counter(i: number) {
    return new Array(i);
  }

  isShown: boolean = false;

  toggleShow(idEmpresa: any) {
    this.idEmpresa = idEmpresa;
    this.isShown = true;
  }

  restableceRegistro() {
    this.isShown = false;
    this.obtenerEmpresa();
  }

  eliminar(empresa: EmpresaModel) {
    Swal.fire({
      icon: 'question',
      title: `¿Estas seguro que deseas eliminar a ${empresa.strNombre} ${empresa.strRazonSocial} ${empresa.strRFC} ${empresa.strDireccion} ${empresa.strUrlLogo} ${empresa.strPais}?`,
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Si, estoy seguro',
      denyButtonText: `Don't save`,
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.empresaService.deleteEmpresas(empresa._id)
          .then((response: any) => {
            Swal.fire({
              icon: 'success',
              text: 'Se elimino la empresa exitosamente',
            });
            this.obtenerEmpresa();
          })
          .catch((error: any) => {
            Swal.fire({
              icon: 'error',
              text: 'Ha habido un error al eliminar la empresa',
            });
          });
      }
    });
  }
}


