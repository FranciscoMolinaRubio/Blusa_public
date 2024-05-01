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
    
export class ContactoComponent {

  constructor(private fb: FormBuilder,
    private toastr: ToastrService) { }

  icon = faPhone;
  icon2 = faEnvelope;
  icon3 = faMapLocationDot;

  form: FormGroup = this.fb.group({
    from_name: "",
    from_email: "",
    to_name: "Blusa_Admin",
    message: "",
  })

  async send() {
    emailjs.init("_NoGZ7p3G7T-FpI3O");
  let response= await emailjs.send("service_fi44vz2","template_z8ms9mm",{
    from_name: this.form.value.from_name,
    to_name:this.form.value.to_name,
    from_email: this.form.value.from_email,
    message: this.form.value.message,
  }); 
    
    if (response) this.toastr.success('Mensaje enviado', '');

    this.form.reset({
      from_name: "",
      from_email: "",
      message: ""
    });
  }
}

