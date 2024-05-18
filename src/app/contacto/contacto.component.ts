import { Component } from '@angular/core';
import { faPhone, faEnvelope, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})

// Clase que envía el formulario de contacto
export class ContactoComponent {

  constructor(
    private fb: FormBuilder, // Inyección de dependencia de FormBuilder para crear formularios reactivos
    private toastr: ToastrService // Inyección de dependencia de ToastrService para mostrar notificaciones
  ) { }

  // Declaramos las propiedades de los iconos
  icon = faPhone;
  icon2 = faEnvelope;
  icon3 = faMapLocationDot;

  // Definición del formulario reactivo con sus campos
  form: FormGroup = this.fb.group({
    from_name: "",
    from_email: "",
    to_name: "Blusa_Admin",
    message: "",
  });

  /**
   * Función que envía el mensaje del formulario al servicio de terceros Email.js
   * @autor Francisco Molina Rubio
   */
  async send() {
    emailjs.init("_NoGZ7p3G7T-FpI3O"); // Inicializa el servicio Email.js con el ID de usuario
    let response = await emailjs.send("service_fi44vz2", "template_z8ms9mm", {
      from_name: this.form.value.from_name, // Nombre del remitente
      to_name: this.form.value.to_name, // Nombre del destinatario
      from_email: this.form.value.from_email, // Email del remitente
      message: this.form.value.message, // Mensaje del remitente
    });

    // Comprobamos que existe respuesta y mostramos mensaje de éxito
    if (response) this.toastr.success('Mensaje enviado', '');

    // Reseteamos el formulario para vaciarlo
    this.form.reset({
      from_name: "",
      from_email: "",
      message: ""
    });
  }
}