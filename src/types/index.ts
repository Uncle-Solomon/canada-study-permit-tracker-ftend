export interface CaseProps {
  username: string;
  application_date: Date;
  application_status?: string;
  biometric_status?: string;
  biometric_date: Date;
  medical_status?: string;
  medical_date: Date;
  elegibility_status?: string;
  elegibility_date: Date;
  background_check_status?: string;
  background_check_date: Date;
  ppr_request?: string;
}
