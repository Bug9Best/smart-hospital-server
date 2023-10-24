export class Users {
  userId: string;
  citizenId: string;
  password: string;

  createdAt: Date;
  updatedAt: Date;

  PatientRecord?: PatientRecord;
}

export class PatientRecord {
  userId: string;
  prefix: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  address: string;
  hnNumber: string;

  createdAt: Date;
  updatedAt: Date;
}
