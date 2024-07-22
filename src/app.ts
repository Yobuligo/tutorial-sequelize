import { db } from "./db/db";
import { Car } from "./model/Car";
import { Certificate } from "./model/Certificate";
import { DriverLicense } from "./model/DriverLicense";
import { Person } from "./model/Person";

async function test() {
  await Person.sync();
  await DriverLicense.sync();
  //   await db.sync({alter: true});
  const driverLicense = await DriverLicense.create({
    classes: "A, B, C",
  } as any);
  //   const certificate = await Certificate.create({ title: "Sequelize" } as any);
  const person = await Person.create({
    firstname: "Stacey",
    lastname: "Starfish",
  } as any);
//   person.setDriverLicense(driverLicense);
  //   person.addCertificate(certificate);
  //   Person.create({
  //     firstname: "Stacey",
  //     lastname: "Starfish",
  //   } as any);
}

test();
