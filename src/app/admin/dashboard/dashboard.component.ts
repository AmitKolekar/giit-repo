import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-dashboard',
 imports :[CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
    chartData = [
      { label: 'Label 1', value: 80, color: '#5EB344' },
      { label: 'Label 2', value: 50, color: '#FCB72A' },
      { label: 'Label 3', value: 100, color: '#F8821A' },
      { label: 'Label 4', value: 15, color: '#E0393E' },
      { label: 'Label 5', value: 45, color: '#963D97' },
      { label: 'Label 6', value: 90, color: '#069CDB' },
    ];

    billingData: any;

    constructor() {
      // Paste your JSON data here
      this.billingData = {
        account_id: "123456789012",
        billing_period: "2025-03",
        total_charges_usd: 1000.00,
        services: [
          {
            service_name: "Amazon EC2",
            usage: {
              instance_hours: 720,
              instance_type: "t3.medium",
              region: "us-east-1"
            },
            charges_usd: 250.00
          },
          {
            service_name: "Amazon S3",
            usage: {
              storage_gb: 500,
              requests: 100000,
              region: "us-east-1"
            },
            charges_usd: 80.00
          },
          {
            service_name: "Amazon RDS",
            usage: {
              db_instance_hours: 720,
              db_instance_class: "db.t3.medium",
              region: "us-east-1"
            },
            charges_usd: 180.00
          },
          {
            service_name: "AWS CloudFormation",
            usage: {
              stacks_deployed: 10
            },
            charges_usd: 20.00
          },
          {
            service_name: "Amazon CloudFront",
            usage: {
              data_transfer_out_gb: 1000,
              requests: 200000
            },
            charges_usd: 90.00
          },
          {
            service_name: "Amazon EBS Snapshots",
            usage: {
              snapshot_storage_gb: 200
            },
            charges_usd: 40.00
          },
          {
            service_name: "AWS Lambda",
            usage: {
              invocations: 500000,
              compute_duration_gb_seconds: 1000000
            },
            charges_usd: 35.00
          },
          {
            service_name: "Amazon VPC",
            usage: {
              nat_gateway_hours: 300,
              data_processed_gb: 50
            },
            charges_usd: 60.00
          },
          {
            service_name: "Amazon CloudWatch",
            usage: {
              metrics: 100,
              logs_gb: 30
            },
            charges_usd: 40.00
          },
          {
            service_name: "AWS Key Management Service (KMS)",
            usage: {
              keys: 5,
              requests: 10000
            },
            charges_usd: 25.00
          },
          {
            service_name: "Amazon SNS",
            usage: {
              notifications: 100000
            },
            charges_usd: 10.00
          },
          {
            service_name: "Amazon API Gateway",
            usage: {
              api_calls: 300000
            },
            charges_usd: 20.00
          },
          {
            service_name: "AWS Support (Basic)",
            charges_usd: 150.00
          },
          
        ]
      };
    }
  
    objectKeys(obj: any): string[] {
      return obj ? Object.keys(obj) : [];
    }
  }
  
  


