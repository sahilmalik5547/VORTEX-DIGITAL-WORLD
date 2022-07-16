import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ContactService } from 'src/app/service/contact.service';
@Component({
  selector: 'app-contactusform',
  templateUrl: './contactusform.component.html',
  styleUrls: ['./contactusform.component.scss']
})
export class ContactusformComponent implements OnInit {
  FormData: any;

  constructor(private builder: FormBuilder, private contact: ContactService) {
  }

  onSubmit(FormData: any) {
    console.log(FormData)
    // this.contact.PostMessage(FormData)
    //   .subscribe((response: any) => {
    //     location.href = 'https://mailthis.to/confirm'
    //     console.log(response)
      // },
      //  (error: { responseText: any; }) => {
      //   console.warn(error.responseText)
      //   console.log({ error })
      // })
  }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      FullName: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      PhoneNumber: new FormControl('', [Validators.required]),
      Services: new FormControl('', [Validators.required]),
      Msg: new FormControl('', [Validators.required])
    })
  }

}
