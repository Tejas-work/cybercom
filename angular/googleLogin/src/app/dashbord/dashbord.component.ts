import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IpInfoService } from '../ip-info.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  ipForm!: FormGroup;
  ipInfo: any;

  constructor(private fb: FormBuilder, private ipInfoService: IpInfoService) { }

  ngOnInit(): void {
    this.ipForm = this.fb.group({
      ipAddress: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const ipAddress = this.ipForm.value.ipAddress;
    this.ipInfoService.getIpInfo(ipAddress).subscribe(ipInfo => {
      this.ipInfo = ipInfo;
    });
  }

}
