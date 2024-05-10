export interface CaseProps {
  username: string;
  application_date?: Date | null;
  application_status?: string;
  biometric_status?: string;
  biometric_date?: Date | null;
  medical_status?: string;
  medical_date?: Date | null;
  elegibility_status?: string;
  elegibility_date?: Date | null;
  background_check_status?: string;
  background_check_date?: Date | null;
  ppr_request?: string;
}
