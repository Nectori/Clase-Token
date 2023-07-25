import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  @Output() cerrar = new EventEmitter<void>();

  cerrarVentanaEmergente() {
    this.cerrar.emit();
  }
}
